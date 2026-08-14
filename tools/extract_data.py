#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Extract the real Formula Vault and Practice Quiz data out of the chapter pages.

Chapter 49 holds ~284 formula rows; Chapter 50 holds 44 MCQs. Both were already
authored as clean, regular markup, so the portal's front page should read from
them rather than carrying a hand-written stub of half a dozen entries.

Regenerates formulas_data.js and quiz_data.js. Safe to re-run.

    python tools/extract_data.py
"""

import html
import io
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CH49 = os.path.join(ROOT, "Finance_Career_Bible_Chapter49.html")
CH50 = os.path.join(ROOT, "Finance_Career_Bible_Chapter50.html")

# Chapter number -> ACCA paper code, per the pillar breakdown in README.md.
# Drives the paper filter chips in the Formula Vault.
CH_TO_PAPER = {
    1: "Overview", 2: "FA / FR", 3: "FA / FR", 4: "FR", 5: "MA", 6: "MA",
    7: "FR", 8: "FR", 9: "FR", 10: "FR / SBR", 11: "FR / SBR", 12: "FR",
    13: "ACCA", 14: "ACCA", 15: "ACCA", 16: "ACCA", 17: "ACCA",
    18: "FM", 19: "FM", 20: "FM", 21: "FM", 22: "FM", 23: "LW",
    24: "PM", 25: "FM / AFM", 26: "AFM", 27: "APM", 28: "ATX", 29: "AAA",
    30: "SBR", 31: "SBL", 32: "SBL / APM", 33: "AFM", 34: "AA", 35: "AA",
    36: "Risk", 37: "TX", 38: "SBL", 39: "EXCEL", 40: "POWER BI",
    41: "DATA", 42: "AI & TECH", 43: "CAREER", 44: "LEADERSHIP",
    45: "CAREER", 46: "ESG", 47: "TRENDS", 48: "CAREER",
    49: "REVISION", 50: "REVISION",
}

TAG_RE = re.compile(r"<[^>]+>")


def read(path):
    """Always decode as UTF-8 - these files carry em-dashes, minus signs and rupee signs."""
    with io.open(path, encoding="utf-8") as fh:
        return fh.read()


def clean(fragment):
    """Strip inner markup and unescape entities, collapsing whitespace."""
    text = fragment.replace("<br>", " ").replace("<br/>", " ").replace("<br />", " ")
    text = TAG_RE.sub("", text)
    text = html.unescape(text)
    return re.sub(r"\s+", " ", text).strip()


# ---------------------------------------------------------------- formulas


def extract_formulas():
    """Walk Chapter 49 in document order, attributing each row to the header above it."""
    src = read(CH49)

    token = re.compile(
        r'<div class="formula-header">(?P<header>.*?)</div>'
        r'|<div class="formula-row">\s*'
        r'<div class="formula-name">(?P<name>.*?)</div>\s*'
        r'<div class="formula-eq">(?P<eq>.*?)</div>',
        re.S,
    )

    out, section, paper = [], "General", "ACCA"
    seen = set()

    for m in token.finditer(src):
        if m.group("header") is not None:
            section = clean(m.group("header"))
            ch = re.match(r"Ch(\d+)", section)
            paper = CH_TO_PAPER.get(int(ch.group(1)), "ACCA") if ch else "ACCA"
            continue

        title, eq = clean(m.group("name")), clean(m.group("eq"))
        if not title or not eq:
            continue

        # Ch49 repeats a few reference blocks verbatim; keep the first occurrence.
        key = (title.lower(), eq.lower())
        if key in seen:
            continue
        seen.add(key)

        out.append({"paper": paper, "title": title, "eq": eq, "section": section})

    return out


# -------------------------------------------------------------------- quiz


def extract_quiz():
    """Pull the 44 MCQs from Chapter 50's tables, keyed to the paper heading above each."""
    src = read(CH50)

    # Section titles name the paper ("FM (Financial Management) - Applied Skills").
    headings = [
        (m.start(), clean(m.group(1)))
        for m in re.finditer(r'class="section-title">(.*?)</', src, re.S)
    ]

    row_re = re.compile(r"<tr><td>(.*?)</td><td>(.*?)</td><td>(.*?)</td></tr>", re.S)
    out = []

    for m in row_re.finditer(src):
        raw_q, raw_opts, raw_exp = m.group(1), m.group(2), m.group(3)

        # The checkmark is what marks the right answer; rows without one aren't MCQs.
        if "✅" not in raw_opts:
            continue

        parts = re.split(r"<br\s*/?>", raw_opts)
        opts, ans = [], None
        for i, part in enumerate(parts):
            if "✅" in part:
                ans = i
            # Strip the checkmark - loadQuiz() renders these verbatim, so leaving
            # it in would hand the user the answer.
            opts.append(clean(part.replace("✅", "")))

        opts = [o for o in opts if o]
        if ans is None or not opts:
            continue

        # Explanation cell opens with "<strong>B</strong> - ..."; drop the letter.
        exp = clean(raw_exp)
        exp = re.sub(r"^[A-D]\s*[—–-]\s*", "", exp)

        paper = "ACCA"
        for pos, title in headings:
            if pos < m.start():
                paper = title
            else:
                break

        # "FM (Financial Management) - Applied Skills" -> "FM", for the filter chips.
        code = re.match(r"([A-Z]{2,3})\b", paper)

        out.append({
            "paper": paper,
            "code": code.group(1) if code else "ACCA",
            "q": clean(raw_q),
            "opts": opts,
            "ans": ans,
            "exp": exp,
        })

    return out


# ------------------------------------------------------------------- write


def write_js(path, const_name, rows, banner):
    """Emit as JSON so quotes/apostrophes inside the content can't break the file."""
    body = json.dumps(rows, ensure_ascii=False, indent=2)
    with io.open(path, "w", encoding="utf-8", newline="\n") as fh:
        fh.write("/* %s\n   Generated by tools/extract_data.py - do not edit by hand. */\n" % banner)
        fh.write("const %s = %s;\n" % (const_name, body))


def main():
    formulas = extract_formulas()
    quiz = extract_quiz()

    # Fail loudly rather than silently shipping a half-empty vault.
    assert len(formulas) > 250, "expected 250+ formulas, got %d" % len(formulas)
    assert len(quiz) == 44, "expected 44 MCQs, got %d" % len(quiz)

    for q in quiz:
        assert isinstance(q["ans"], int) and 0 <= q["ans"] < len(q["opts"]), \
            "bad answer index in: %s" % q["q"][:60]
        assert q["q"] and q["exp"], "empty question or explanation: %r" % q
        for o in q["opts"]:
            assert "✅" not in o, "checkmark leaked into option: %r" % o

    for f in formulas:
        assert f["title"] and f["eq"], "empty formula: %r" % f

    write_js(
        os.path.join(ROOT, "formulas_data.js"), "FORMULAS", formulas,
        "Master Formula Vault - extracted from Chapter 49.",
    )
    write_js(
        os.path.join(ROOT, "quiz_data.js"), "QUIZ", quiz,
        "Practice Question Bank - extracted from Chapter 50.",
    )

    papers = sorted({f["paper"] for f in formulas})
    print("formulas : %d  across %d papers" % (len(formulas), len(papers)))
    print("           %s" % ", ".join(papers))
    print("quiz     : %d  across %d papers" % (len(quiz), len({q["paper"] for q in quiz})))
    return 0


if __name__ == "__main__":
    sys.exit(main())
