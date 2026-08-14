/* ==========================================================================
   FINANCE CAREER BIBLE (ACCA) — MASTERCLASS SCRIPT ENGINE
   Full-Text Search, In-Iframe Keyword Auto-Scroll & Highlighting, Quiz Engine,
   Formula Vault, Accordion Toggles, and State Persistence.
   ========================================================================== */

const CHAPTERS = [
  { num: 2, filename: "Finance_Career_Bible_Chapter2.html", title: "Chapter 2: Accounting From Zero", pillar: "financial", cat: "Financial Accounting", time: "20 min" },
  { num: 3, filename: "Finance_Career_Bible_Chapter3.html", title: "Chapter 3: Financial Statements", pillar: "financial", cat: "Financial Accounting", time: "22 min" },
  { num: 4, filename: "Finance_Career_Bible_Chapter4.html", title: "Chapter 4: IFRS Fundamentals", pillar: "financial", cat: "Financial Reporting", time: "18 min" },
  { num: 7, filename: "Finance_Career_Bible_Chapter7.html", title: "Chapter 7: Revenue Recognition", pillar: "financial", cat: "Financial Reporting", time: "16 min" },
  { num: 8, filename: "Finance_Career_Bible_Chapter8.html", title: "Chapter 8: Property, Plant & Equipment", pillar: "financial", cat: "Financial Reporting", time: "25 min" },
  { num: 9, filename: "Finance_Career_Bible_Chapter9.html", title: "Chapter 9: Inventory Accounting", pillar: "financial", cat: "Financial Reporting", time: "16 min" },
  { num: 10, filename: "Finance_Career_Bible_Chapter10.html", title: "Chapter 10: Financial Instruments Basics", pillar: "financial", cat: "Financial Reporting", time: "18 min" },
  { num: 11, filename: "Finance_Career_Bible_Chapter11.html", title: "Chapter 11: Consolidation Basics", pillar: "financial", cat: "Financial Reporting", time: "20 min" },
  { num: 12, filename: "Finance_Career_Bible_Chapter12.html", title: "Chapter 12: Interpretation of Financial Statements", pillar: "financial", cat: "Financial Analysis", time: "24 min" },
  { num: 30, filename: "Finance_Career_Bible_Chapter30.html", title: "Chapter 30: SBR Complex Topics", pillar: "financial", cat: "Strategic Business Reporting", time: "18 min" },

  { num: 23, filename: "Finance_Career_Bible_Chapter23.html", title: "Chapter 23: Corporate & Business Law", pillar: "tax-audit", cat: "Corporate Law (LW)", time: "24 min" },
  { num: 28, filename: "Finance_Career_Bible_Chapter28.html", title: "Chapter 28: Advanced Taxation", pillar: "tax-audit", cat: "Taxation (ATX)", time: "22 min" },
  { num: 29, filename: "Finance_Career_Bible_Chapter29.html", title: "Chapter 29: Advanced Audit & Assurance", pillar: "tax-audit", cat: "Audit & Assurance (AAA)", time: "18 min" },
  { num: 34, filename: "Finance_Career_Bible_Chapter34.html", title: "Chapter 34: Audit Fundamentals", pillar: "tax-audit", cat: "Audit & Assurance (AA)", time: "30 min" },
  { num: 35, filename: "Finance_Career_Bible_Chapter35.html", title: "Chapter 35: Internal Controls", pillar: "tax-audit", cat: "Audit & Assurance", time: "28 min" },
  { num: 37, filename: "Finance_Career_Bible_Chapter37.html", title: "Chapter 37: Taxation Fundamentals", pillar: "tax-audit", cat: "Taxation (TX)", time: "26 min" },

  { num: 5, filename: "Finance_Career_Bible_Chapter5.html", title: "Chapter 5: Cost Accounting Fundamentals", pillar: "finance-strategy", cat: "Management Accounting", time: "18 min" },
  { num: 6, filename: "Finance_Career_Bible_Chapter6.html", title: "Chapter 6: Management Accounting", pillar: "finance-strategy", cat: "Management Accounting", time: "20 min" },
  { num: 18, filename: "Finance_Career_Bible_Chapter18.html", title: "Chapter 18: Financial Analysis", pillar: "finance-strategy", cat: "Financial Analysis", time: "30 min" },
  { num: 19, filename: "Finance_Career_Bible_Chapter19.html", title: "Chapter 19: Ratio Analysis", pillar: "finance-strategy", cat: "Financial Analysis", time: "25 min" },
  { num: 20, filename: "Finance_Career_Bible_Chapter20.html", title: "Chapter 20: Budgeting & Forecasting (FP&A)", pillar: "finance-strategy", cat: "FP&A", time: "30 min" },
  { num: 21, filename: "Finance_Career_Bible_Chapter21.html", title: "Chapter 21: Financial Modelling", pillar: "finance-strategy", cat: "Financial Modelling", time: "30 min" },
  { num: 22, filename: "Finance_Career_Bible_Chapter22.html", title: "Chapter 22: Corporate Finance", pillar: "finance-strategy", cat: "Corporate Finance", time: "30 min" },
  { num: 24, filename: "Finance_Career_Bible_Chapter24.html", title: "Chapter 24: Advanced Management Accounting Tools", pillar: "finance-strategy", cat: "Performance Management", time: "20 min" },
  { num: 25, filename: "Finance_Career_Bible_Chapter25.html", title: "Chapter 25: Advanced Working Capital & Treasury", pillar: "finance-strategy", cat: "Treasury", time: "18 min" },
  { num: 26, filename: "Finance_Career_Bible_Chapter26.html", title: "Chapter 26: Advanced Financial Management", pillar: "finance-strategy", cat: "Financial Management (AFM)", time: "18 min" },
  { num: 27, filename: "Finance_Career_Bible_Chapter27.html", title: "Chapter 27: Advanced Performance Management", pillar: "finance-strategy", cat: "Performance Management (APM)", time: "18 min" },
  { num: 31, filename: "Finance_Career_Bible_Chapter31.html", title: "Chapter 31: SBL Strategic Frameworks", pillar: "finance-strategy", cat: "Strategic Business Leader", time: "20 min" },
  { num: 32, filename: "Finance_Career_Bible_Chapter32.html", title: "Chapter 32: Organisational Behaviour & HR", pillar: "finance-strategy", cat: "Strategy & People", time: "22 min" },
  { num: 33, filename: "Finance_Career_Bible_Chapter33.html", title: "Chapter 33: Valuation Basics", pillar: "finance-strategy", cat: "Valuation", time: "35 min" },
  { num: 36, filename: "Finance_Career_Bible_Chapter36.html", title: "Chapter 36: Risk Management", pillar: "finance-strategy", cat: "Risk Management", time: "26 min" },
  { num: 38, filename: "Finance_Career_Bible_Chapter38.html", title: "Chapter 38: Corporate Governance", pillar: "finance-strategy", cat: "Governance", time: "24 min" },

  { num: 39, filename: "Finance_Career_Bible_Chapter39.html", title: "Chapter 39: Excel Mastery", pillar: "skills-career", cat: "Excel Skills", time: "28 min" },
  { num: 40, filename: "Finance_Career_Bible_Chapter40.html", title: "Chapter 40: Power BI", pillar: "skills-career", cat: "Data Analytics", time: "24 min" },
  { num: 41, filename: "Finance_Career_Bible_Chapter41.html", title: "Chapter 41: Data Analytics", pillar: "skills-career", cat: "Data Analytics", time: "26 min" },
  { num: 42, filename: "Finance_Career_Bible_Chapter42.html", title: "Chapter 42: AI & Automation in Finance", pillar: "skills-career", cat: "AI & Tech", time: "25 min" },
  { num: 43, filename: "Finance_Career_Bible_Chapter43.html", title: "Chapter 43: Big 4 Career Guide", pillar: "skills-career", cat: "Big 4 Guide", time: "25 min" },
  { num: 44, filename: "Finance_Career_Bible_Chapter44.html", title: "Chapter 44: Communication & Leadership", pillar: "skills-career", cat: "Leadership", time: "25 min" },
  { num: 45, filename: "Finance_Career_Bible_Chapter45.html", title: "Chapter 45: Resume, Interviews & Networking", pillar: "skills-career", cat: "Big 4 Interviews", time: "25 min" },
  { num: 46, filename: "Finance_Career_Bible_Chapter46.html", title: "Chapter 46: ESG & Sustainability", pillar: "skills-career", cat: "ESG", time: "24 min" },
  { num: 47, filename: "Finance_Career_Bible_Chapter47.html", title: "Chapter 47: Future of Finance (2030–2050)", pillar: "skills-career", cat: "Future Trends", time: "20 min" },
  { num: 48, filename: "Finance_Career_Bible_Chapter48.html", title: "Chapter 48: Lifelong Learning Roadmap", pillar: "skills-career", cat: "Career Growth", time: "16 min" },

  { num: 1, filename: "Finance_Career_Bible_Chapter1.html", title: "Chapter 1: Finance Industry Overview", pillar: "exam-tools", cat: "Overview", time: "15 min" },
  { num: 13, filename: "Finance_Career_Bible_Chapter13.html", title: "Chapter 13: ACCA Qualification Structure", pillar: "exam-tools", cat: "Exam Guidance", time: "15 min" },
  { num: 14, filename: "Finance_Career_Bible_Chapter14.html", title: "Chapter 14: Skills Level Papers", pillar: "exam-tools", cat: "Exam Guidance", time: "15 min" },
  { num: 15, filename: "Finance_Career_Bible_Chapter15.html", title: "Chapter 15: Strategic Professional Papers", pillar: "exam-tools", cat: "Exam Guidance", time: "16 min" },
  { num: 16, filename: "Finance_Career_Bible_Chapter16.html", title: "Chapter 16: Ethics & Professional Skills", pillar: "exam-tools", cat: "Exam Guidance", time: "16 min" },
  { num: 17, filename: "Finance_Career_Bible_Chapter17.html", title: "Chapter 17: ACCA Exam Strategy", pillar: "exam-tools", cat: "Exam Strategy", time: "15 min" },
  { num: 49, filename: "Finance_Career_Bible_Chapter49.html", title: "Chapter 49: Master Formula Cheat-Sheet", pillar: "exam-tools", cat: "Formula Bank", time: "40 min" },
  { num: 50, filename: "Finance_Career_Bible_Chapter50.html", title: "Chapter 50: Practice Questions Bank", pillar: "exam-tools", cat: "Question Bank", time: "30 min" },
  { num: 999, filename: "Finance_Career_Bible_Appendices.html", title: "Appendices: Reference Data & Tables", pillar: "exam-tools", cat: "Reference", time: "20 min" }
];

/* FORMULAS (formulas_data.js) and QUIZ (quiz_data.js) are generated from
   Chapters 49 and 50 by tools/extract_data.py and loaded ahead of this file. */

let completedSet = new Set(JSON.parse(localStorage.getItem('acc_done_v6') || '[]'));
let currentChIdx = 0;
let quizIdx = 0;
let quizScore = 0;
let quizAnswered = 0;
let currentSearchTerm = '';

let formulaPaper = 'ALL';   // active Formula Vault paper filter
let formulaQuery = '';      // active Formula Vault search text
let quizPaper = 'ALL';      // active Practice paper filter
let quizPool = [];          // QUIZ entries matching quizPaper

function init() {
  renderPillars();
  renderTOC();
  renderFormulaChips();
  renderFormulas();
  renderQuizChips();
  setQuizPaper('ALL');
  initBookParallax();
  initRoadmap();

  document.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      openGlobalSearchModal();
    }
    if (e.key === 'Escape') {
      closeGlobalSearchModal();
    }
  });

  const iframe = document.getElementById('readerFrame');
  iframe.onload = () => {
    if (currentSearchTerm && iframe.contentDocument) {
      highlightTextInIframe(iframe.contentDocument, currentSearchTerm);
    }
  };
}

function togglePillarSection(secId, headerEl) {
  const el = document.getElementById(secId);
  if (!el) return;
  el.classList.toggle('collapsed');
  if (headerEl) headerEl.setAttribute('aria-expanded', String(!el.classList.contains('collapsed')));
}

function switchTab(tabId, btn) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

  document.getElementById('tab-' + tabId).classList.add('active');
  if (btn) btn.classList.add('active');

  // Collapse the mobile menu after a jump.
  const nav = document.getElementById('navLinks');
  if (nav) nav.classList.remove('open');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMenu() {
  const nav = document.getElementById('navLinks');
  if (nav) nav.classList.toggle('open');
}

function renderPillars() {
  const pillars = ['financial', 'tax-audit', 'finance-strategy', 'skills-career', 'exam-tools'];

  pillars.forEach(p => {
    const grid = document.getElementById('grid-' + p);
    if (!grid) return;
    grid.innerHTML = '';

    const list = CHAPTERS.filter(c => c.pillar === p);

    list.forEach(c => {
      const card = document.createElement('div');
      card.className = `chapter-card ${completedSet.has(c.filename) ? 'completed' : ''}`;
      card.onclick = () => openChapterFile(c.filename);

      card.innerHTML = `
        <div class="card-top">
          <span class="ch-badge">${c.num === 999 ? 'APP' : 'CH ' + (c.num < 10 ? '0' + c.num : c.num)}</span>
          <span class="ch-time">⏱️ ${c.time}</span>
        </div>
        <h3 class="ch-title">${c.title}</h3>
        <div class="card-bottom">
          <span class="ch-cat">${c.cat}</span>
          <span class="read-link">Read →</span>
        </div>
      `;

      grid.appendChild(card);
    });
  });
}

/* ── FORMULA VAULT ── */
function renderFormulaChips() {
  const box = document.getElementById('formulaChips');
  if (!box) return;

  const papers = ['ALL', ...Array.from(new Set(FORMULAS.map(f => f.paper))).sort()];
  box.innerHTML = '';

  papers.forEach(p => {
    const chip = document.createElement('button');
    chip.className = 'chip' + (p === formulaPaper ? ' active' : '');
    chip.textContent = p === 'ALL' ? `ALL (${FORMULAS.length})` : p;
    chip.onclick = () => {
      formulaPaper = p;
      renderFormulaChips();
      renderFormulas(formulaQuery);
    };
    box.appendChild(chip);
  });
}

function renderFormulas(query = '') {
  const grid = document.getElementById('formulaGrid');
  if (!grid) return;

  formulaQuery = query;
  const q = query.trim().toLowerCase();
  grid.innerHTML = '';

  const matches = FORMULAS.filter(f => {
    if (formulaPaper !== 'ALL' && f.paper !== formulaPaper) return false;
    if (!q) return true;
    return f.title.toLowerCase().includes(q)
        || f.paper.toLowerCase().includes(q)
        || f.eq.toLowerCase().includes(q)
        || (f.section || '').toLowerCase().includes(q);
  });

  const counter = document.getElementById('formulaCount');
  if (counter) {
    counter.textContent = `${matches.length} formula${matches.length === 1 ? '' : 's'}`
      + (formulaPaper === 'ALL' ? '' : ` · ${formulaPaper}`);
  }

  if (!matches.length) {
    grid.innerHTML = '<div class="empty-state">No formulas match that search.</div>';
    return;
  }

  matches.forEach(f => {
    const card = document.createElement('div');
    card.className = 'formula-card';
    card.innerHTML = `
      <span class="formula-paper">${escapeHtml(f.paper)}</span>
      <h3 class="formula-name">${escapeHtml(f.title)}</h3>
      <div class="formula-eq">${escapeHtml(f.eq)}</div>
      ${f.section ? `<div class="formula-section">${escapeHtml(f.section)}</div>` : ''}
      <button class="btn-copy" type="button">📋 Copy</button>
    `;

    // Bind the handler rather than inlining the equation into an onclick
    // attribute — a great many of these contain apostrophes and quotes.
    const btn = card.querySelector('.btn-copy');
    btn.addEventListener('click', () => copyFormula(f.eq, btn));

    grid.appendChild(card);
  });
}

function copyFormula(text, btn) {
  copyText(text);
  const original = btn.textContent;
  btn.textContent = '✓ Copied';
  btn.classList.add('copied');
  setTimeout(() => {
    btn.textContent = original;
    btn.classList.remove('copied');
  }, 1400);
}

/* ── PRACTICE QUIZ ── */
function renderQuizChips() {
  const box = document.getElementById('quizChips');
  if (!box) return;

  const codes = ['ALL', ...Array.from(new Set(QUIZ.map(q => q.code || 'ACCA')))];
  box.innerHTML = '';

  codes.forEach(code => {
    const n = code === 'ALL' ? QUIZ.length : QUIZ.filter(q => (q.code || 'ACCA') === code).length;
    const chip = document.createElement('button');
    chip.className = 'chip' + (code === quizPaper ? ' active' : '');
    chip.textContent = `${code} (${n})`;
    chip.onclick = () => setQuizPaper(code);
    box.appendChild(chip);
  });
}

function setQuizPaper(code) {
  quizPaper = code;
  quizPool = code === 'ALL' ? QUIZ.slice() : QUIZ.filter(q => (q.code || 'ACCA') === code);
  quizIdx = 0;
  quizScore = 0;
  quizAnswered = 0;
  renderQuizChips();
  loadQuiz();
}

function loadQuiz() {
  if (!document.getElementById('quizBadge')) return;
  if (!quizPool.length) quizPool = QUIZ.slice();

  const q = quizPool[quizIdx];
  if (!q) return;

  document.getElementById('quizBadge').innerText = q.paper;
  document.getElementById('quizQuestion').innerText = q.q;
  updateQuizScore();

  const progress = document.getElementById('quizProgress');
  if (progress) progress.innerText = `Question ${quizIdx + 1} of ${quizPool.length}`;

  const optsBox = document.getElementById('quizOptions');
  optsBox.innerHTML = '';
  document.getElementById('quizExplanation').style.display = 'none';

  q.opts.forEach((optText, i) => {
    const btn = document.createElement('button');
    btn.className = 'opt-btn';
    btn.innerText = optText;
    btn.onclick = () => answerQuiz(i, q.ans, q.exp, btn);
    optsBox.appendChild(btn);
  });
}

function answerQuiz(selected, correct, exp, btnEl) {
  const btns = document.querySelectorAll('.opt-btn');
  btns.forEach(b => b.style.pointerEvents = 'none');

  quizAnswered++;
  if (selected === correct) {
    btnEl.classList.add('correct');
    quizScore++;
  } else {
    btnEl.classList.add('incorrect');
    if (btns[correct]) btns[correct].classList.add('correct');
  }

  updateQuizScore();
  const expBox = document.getElementById('quizExplanation');
  expBox.innerText = exp;
  expBox.style.display = 'block';
}

function updateQuizScore() {
  // Score against questions actually attempted, not the whole bank.
  const el = document.getElementById('quizScore');
  if (el) el.innerText = `Score: ${quizScore} / ${quizAnswered}`;
}

function nextQuiz() {
  if (!quizPool.length) return;
  quizIdx = (quizIdx + 1) % quizPool.length;
  loadQuiz();
}

function renderTOC() {
  const box = document.getElementById('tocBox');
  if (!box) return;
  box.innerHTML = '';

  CHAPTERS.forEach((c, idx) => {
    const item = document.createElement('div');
    item.className = `toc-item ${idx === currentChIdx ? 'active' : ''}`;
    item.onclick = () => openChapterIdx(idx);
    item.innerText = `Ch ${c.num}: ${c.title.replace(/Chapter \d+: /, '')}`;
    box.appendChild(item);
  });
}

function openChapterIdx(idx, searchTerm = '') {
  currentChIdx = idx;
  currentSearchTerm = searchTerm;
  const c = CHAPTERS[idx];

  document.getElementById('readerTitle').innerText = c.title;
  document.getElementById('readerFrame').src = c.filename;
  document.getElementById('readerModal').classList.add('open');

  completedSet.add(c.filename);
  localStorage.setItem('acc_done_v6', JSON.stringify([...completedSet]));
  localStorage.setItem('acc_last_v6', c.filename);
  renderPillars();
  renderTOC();
}

function openChapterFile(fn, searchTerm = '') {
  const idx = CHAPTERS.findIndex(c => c.filename === fn);
  if (idx !== -1) openChapterIdx(idx, searchTerm);
}

function resumeReading() {
  const last = localStorage.getItem('acc_last_v6') || CHAPTERS[0].filename;
  openChapterFile(last);
}

function navChapter(dir) {
  const n = currentChIdx + dir;
  if (n >= 0 && n < CHAPTERS.length) openChapterIdx(n);
}

function closeReader() {
  document.getElementById('readerModal').classList.remove('open');
  document.getElementById('readerFrame').src = 'about:blank';
  currentSearchTerm = '';
}

function toggleToc() {
  const box = document.getElementById('tocBox');
  box.style.display = box.style.display === 'none' ? 'flex' : 'none';
}

/* ── IN-IFRAME KEYWORD HIGHLIGHTING & AUTO-SCROLL ── */
function highlightTextInIframe(doc, query) {
  if (!doc || !query) return;

  if (!doc.getElementById('search-pulse-style')) {
    const styleEl = doc.createElement('style');
    styleEl.id = 'search-pulse-style';
    styleEl.textContent = `
      .search-keyword-pulse {
        background: #ffd93d !important;
        color: #0a0a0f !important;
        font-weight: 800 !important;
        padding: 2px 6px !important;
        border-radius: 4px !important;
        box-shadow: 0 0 25px rgba(255, 217, 61, .8) !important;
        animation: pulseFade 4s ease-in-out forwards !important;
        display: inline-block !important;
      }
      @keyframes pulseFade {
        0%   { background: #ffd93d; box-shadow: 0 0 25px rgba(255, 217, 61, .8); }
        50%  { background: #00d4aa; box-shadow: 0 0 20px rgba(0, 212, 170, .7); }
        100% { background: rgba(0, 212, 170, .25); color: inherit; box-shadow: none; }
      }
    `;
    doc.head.appendChild(styleEl);
  }

  const walker = doc.createTreeWalker(doc.body, NodeFilter.SHOW_TEXT, null, false);
  let node;
  const regex = new RegExp(`(${escapeRegExp(query)})`, 'gi');
  let firstMatchSpan = null;
  const nodesToReplace = [];

  while (node = walker.nextNode()) {
    if (node.parentElement && ['SCRIPT', 'STYLE', 'MARK'].includes(node.parentElement.tagName)) continue;
    if (regex.test(node.nodeValue)) {
      nodesToReplace.push(node);
    }
  }

  nodesToReplace.forEach(textNode => {
    const span = doc.createElement('span');
    span.innerHTML = textNode.nodeValue.replace(regex, `<mark class="search-keyword-pulse">$1</mark>`);
    textNode.parentElement.replaceChild(span, textNode);
    if (!firstMatchSpan) {
      firstMatchSpan = span.querySelector('.search-keyword-pulse');
    }
  });

  if (firstMatchSpan) {
    setTimeout(() => {
      firstMatchSpan.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 200);
  }
}

/* ── FULL-TEXT GLOBAL SEARCH ENGINE ── */
function openGlobalSearchModal() {
  document.getElementById('globalSearchOverlay').classList.add('active');
  document.getElementById('fullTextSearchInput').focus();
}

function closeGlobalSearchModal() {
  document.getElementById('globalSearchOverlay').classList.remove('active');
}

function handleFullTextSearch(query) {
  const resultsContainer = document.getElementById('fullTextSearchResults');
  resultsContainer.innerHTML = '';

  const q = query.trim().toLowerCase();
  if (!q || q.length < 2) {
    resultsContainer.innerHTML = `<div class="search-placeholder">Type at least 2 characters to search text across all 51 chapters...</div>`;
    return;
  }

  if (typeof FULL_TEXT_INDEX === 'undefined') {
    resultsContainer.innerHTML = `<div class="search-placeholder">Search index loading...</div>`;
    return;
  }

  const matches = [];
  const regex = new RegExp(`(${escapeRegExp(q)})`, 'gi');

  for (let item of FULL_TEXT_INDEX) {
    if (item.text.toLowerCase().includes(q) || item.title.toLowerCase().includes(q)) {
      matches.push(item);
      if (matches.length >= 25) break;
    }
  }

  if (matches.length === 0) {
    resultsContainer.innerHTML = `<div class="search-placeholder">No text matches found for "${query}". Try another term.</div>`;
    return;
  }

  matches.forEach(m => {
    const card = document.createElement('div');
    card.className = 'search-match-card';
    card.onclick = () => {
      closeGlobalSearchModal();
      openChapterFile(m.filename, query);
    };

    const highlightedSnippet = m.text.replace(regex, '<mark class="search-highlight">$1</mark>');

    card.innerHTML = `
      <div class="search-match-ch">${m.filename.replace("Finance_Career_Bible_", "").replace(".html", "")}</div>
      <div class="search-match-title">${m.title}</div>
      <div class="search-match-snippet">...${highlightedSnippet}...</div>
    `;

    resultsContainer.appendChild(card);
  });
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function copyText(txt) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(txt).catch(() => fallbackCopy(txt));
  } else {
    fallbackCopy(txt);
  }
}

/* clipboard API needs a secure context; file:// opens without one. */
function fallbackCopy(txt) {
  const ta = document.createElement('textarea');
  ta.value = txt;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand('copy'); } catch (e) { /* nothing else to try */ }
  document.body.removeChild(ta);
}

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function launchAnimatedReader(filename) {
  const file = filename || localStorage.getItem('last_read_chapter') || 'Finance_Career_Bible_Chapter2.html';
  const btn = document.getElementById('btnBookRead');
  if (btn) {
    btn.style.transform = 'scale(0.96)';
    btn.style.background = '#10b981';
    btn.style.color = '#080a0f';
    setTimeout(() => {
      btn.style.transform = '';
      btn.style.background = '';
      btn.style.color = '';
      openChapterFile(file);
    }, 250);
  } else {
    openChapterFile(file);
  }
}

function resumeReading() {
  launchAnimatedReader();
}

function toggle3DBook() {
  const book = document.getElementById('book');
  if (!book) return;
  book.classList.toggle('open');
}

/* ── HERO BOOK: MOUSE PARALLAX ──
   Written as CSS custom properties so the tilt composes with the idle float
   animation instead of overwriting its transform. */
function initBookParallax() {
  const scene = document.getElementById('bookScene');
  const book = document.getElementById('book');
  if (!scene || !book || prefersReducedMotion) return;
  if (window.matchMedia('(hover: none)').matches) return;

  scene.addEventListener('pointermove', e => {
    const r = scene.getBoundingClientRect();
    const dx = (e.clientX - r.left) / r.width - .5;
    const dy = (e.clientY - r.top) / r.height - .5;
    book.style.setProperty('--tilt-y', `${dx * 18}deg`);
    book.style.setProperty('--tilt-x', `${-dy * 12}deg`);
  });

  scene.addEventListener('pointerleave', () => {
    book.style.setProperty('--tilt-y', '0deg');
    book.style.setProperty('--tilt-x', '0deg');
  });
}

/* ── ROADMAP: SCROLL-DRIVEN PATH DRAW ──
   The roadmap lives inside a tab that is display:none until selected, and an
   IntersectionObserver never fires for a display:none subtree. So we also watch
   the tab's class list and replay the draw whenever it becomes active. */
function initRoadmap() {
  const wrap = document.getElementById('roadmapWrap');
  const path = document.getElementById('roadmapPath');
  const tab = document.getElementById('tab-roadmap-tab');
  if (!wrap || !path || !tab) return;

  const nodes = wrap.querySelectorAll('.road-node');
  const steps = wrap.querySelectorAll('.road-step');
  const len = path.getTotalLength();

  path.style.strokeDasharray = len;

  const light = () => {
    nodes.forEach(n => n.classList.add('lit'));
    steps.forEach(s => s.classList.add('lit'));
  };

  if (prefersReducedMotion) {
    path.style.strokeDashoffset = 0;
    light();
    return;
  }

  let timers = [];

  const reset = () => {
    timers.forEach(clearTimeout);
    timers = [];
    path.style.transition = 'none';
    path.style.strokeDashoffset = len;
    nodes.forEach(n => n.classList.remove('lit'));
    steps.forEach(s => s.classList.remove('lit'));
    void path.getBoundingClientRect();   // flush, so the reset actually paints
  };

  const play = () => {
    reset();
    path.style.transition = 'stroke-dashoffset 2.4s cubic-bezier(.22,.61,.36,1)';
    path.style.strokeDashoffset = 0;

    // Ignite each milestone as the line reaches it.
    nodes.forEach((node, i) => {
      timers.push(setTimeout(() => {
        node.classList.add('lit');
        if (steps[i]) steps[i].classList.add('lit');
      }, 180 + i * (2400 / nodes.length)));
    });
  };

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) play(); });
  }, { threshold: .35 });

  io.observe(wrap);

  // Replay on every visit to the tab.
  new MutationObserver(() => {
    if (tab.classList.contains('active')) {
      io.unobserve(wrap);
      io.observe(wrap);
    }
  }).observe(tab, { attributes: true, attributeFilter: ['class'] });
}

window.onload = init;
