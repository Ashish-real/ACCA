/* ==========================================================================
   FINANCE CAREER BIBLE (ACCA) — MASTERCLASS SCRIPT ENGINE
   Full-Text Search, In-Iframe Keyword Auto-Scroll & Highlighting, Quiz Engine,
   Formula Vault, Accordion Toggles, and State Persistence.
   ========================================================================== */

const CHAPTERS = [
  { num: 1, filename: "Finance_Career_Bible_Chapter1.html", title: "Chapter 1: Finance Industry Overview", pillar: "financial", cat: "Industry Overview", time: "15 min" },
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
  initBookCTA();
  selectRoadmapStage(0);

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
    if (iframe.contentDocument) {
      bindIframeScrollTracker(iframe.contentDocument);
      if (currentSearchTerm) {
        highlightTextInIframe(iframe.contentDocument, currentSearchTerm);
      }
    }
  };
}

function togglePillarSection(secId, headerEl) {
  const el = document.getElementById(secId);
  if (!el) return;
  el.classList.toggle('collapsed');
  if (headerEl) headerEl.setAttribute('aria-expanded', String(!el.classList.contains('collapsed')));
}

function toggleFaq(faqItem) {
  if (!faqItem) return;
  faqItem.classList.toggle('open');
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

/* ── CURRICULUM PILLAR QUICK-BAR FILTER ── */
function filterCurriculumPillar(secId, btn) {
  document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const allSections = document.querySelectorAll('.pillar-section');
  if (secId === 'all') {
    allSections.forEach(s => {
      s.style.display = 'block';
    });
  } else {
    allSections.forEach(s => {
      if (s.id === secId) {
        s.style.display = 'block';
        s.classList.remove('collapsed');
        const header = s.querySelector('.pillar-header');
        if (header) header.setAttribute('aria-expanded', 'true');
        s.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        s.style.display = 'none';
      }
    });
  }
}

/* ── DEDICATED ROADMAP CHAPTER CATALOG ── */
const ROADMAP_DATA = [
  {
    stage: "STAGE 01",
    badge: "FOUNDATIONS & ORIENTATION",
    title: "Commerce & Career Direction Modules",
    desc: "Understanding the global finance ecosystem, evaluating ACCA vs CA/CFA/CMA career trajectories, and building double-entry ledger foundations.",
    chapterNums: [1, 2, 3]
  },
  {
    stage: "STAGE 02",
    badge: "APPLIED KNOWLEDGE CORE",
    title: "ACCA Applied Knowledge & B.Com Core",
    desc: "Mastering core financial accounting, IFRS reporting standards (IAS 16, IFRS 15, inventory, PPE), business technology, and graduation-aligned subjects.",
    chapterNums: [4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
  },
  {
    stage: "STAGE 03",
    badge: "SKILLS & FINANCIAL MODELLING",
    title: "Applied Skills & Practical Financial Modelling",
    desc: "Tackling FR, PM, TX, AA, FM while building dynamic 3-statement models, DCF valuation, Power BI analytics, and FP&A forecasting.",
    chapterNums: [5, 6, 18, 19, 20, 21, 22, 24, 25, 26, 27, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42]
  },
  {
    stage: "STAGE 04",
    badge: "STRATEGIC PROFESSIONAL",
    title: "Strategic Leader & 36M Practical Experience",
    desc: "Advanced corporate reporting (SBR), strategic business leadership (SBL), advanced taxation, audit assurance, and completing the 36-month PER requirement.",
    chapterNums: [23, 28, 29, 30, 31, 32, 43, 44, 45]
  },
  {
    stage: "STAGE 05",
    badge: "BIG 4 & TECHNICAL SEAT",
    title: "Big 4 Advisory & Technical Interview Mastery",
    desc: "Cracking technical partner rounds in Audit, M&A Advisory, Tax Strategy, and Valuation at PwC, Deloitte, EY, and KPMG with complete formula cheat-sheets.",
    chapterNums: [43, 44, 45, 46, 47, 48, 49, 50, 999]
  }
];

let currentRoadmapStage = 0;

function selectRoadmapStage(idx, btn) {
  currentRoadmapStage = idx;
  const stage = ROADMAP_DATA[idx] || ROADMAP_DATA[0];

  const badgeEl = document.getElementById('catalogStageBadge');
  const titleEl = document.getElementById('catalogStageTitle');
  const descEl = document.getElementById('catalogStageDesc');
  const descMobileEl = document.getElementById('catalogStageDescMobile');
  const selectEl = document.getElementById('mobileStageSelect');
  const gridEl = document.getElementById('roadmapCatalogGrid');

  if (badgeEl) badgeEl.innerText = `${stage.stage} · ${stage.badge}`;
  if (titleEl) titleEl.innerText = stage.title;
  if (descEl) descEl.innerText = stage.desc;
  if (descMobileEl) descMobileEl.innerText = stage.desc;
  if (selectEl) selectEl.value = String(idx);

  document.querySelectorAll('.stage-select-btn').forEach((b, i) => {
    b.classList.toggle('active', i === idx);
  });

  if (!gridEl) return;
  gridEl.innerHTML = '';

  const matched = CHAPTERS.filter(c => stage.chapterNums.includes(c.num));
  matched.sort((a, b) => a.num - b.num);

  matched.forEach(c => {
    const card = document.createElement('div');
    const isDone = completedSet.has(c.filename);
    card.className = `roadmap-ch-card ${isDone ? 'completed' : ''}`;
    card.onclick = () => openChapterFile(c.filename);

    const badgeLabel = c.num === 999 ? 'APP' : 'CH ' + (c.num < 10 ? '0' + c.num : c.num);

    card.innerHTML = `
      <div class="rm-card-top">
        <span class="rm-ch-tag">${badgeLabel}</span>
        <span class="rm-ch-time"><svg class="time-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> ${c.time}</span>
      </div>
      <h4 class="rm-ch-title">${c.title}</h4>
      <div class="rm-card-footer">
        <span class="rm-ch-cat">${c.cat}</span>
        <span class="rm-read-link">Read Chapter →</span>
      </div>
    `;

    gridEl.appendChild(card);
  });

  const catalogSec = document.getElementById('roadmapCatalogSection');
  if (catalogSec && !btn) {
    catalogSec.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

function highlightRoadmapChapters(nums, targetPillar) {
  switchTab('pillars');
  const sec = document.getElementById('sec-' + targetPillar);
  if (sec && sec.classList.contains('collapsed')) {
    togglePillarSection('sec-' + targetPillar);
  }

  setTimeout(() => {
    const firstCard = document.querySelector(`.chapter-card[data-ch-num="${nums[0]}"]`);
    if (firstCard) {
      firstCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else if (sec) {
      sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    document.querySelectorAll('.chapter-card').forEach(card => {
      card.classList.remove('roadmap-pulse-glow');
      const cardNum = parseInt(card.getAttribute('data-ch-num'), 10);
      if (nums.includes(cardNum)) {
        card.classList.add('roadmap-pulse-glow');
      }
    });

    setTimeout(() => {
      document.querySelectorAll('.chapter-card.roadmap-pulse-glow').forEach(c => {
        c.classList.remove('roadmap-pulse-glow');
      });
    }, 3500);
  }, 150);
}

function renderPillars() {
  const pillars = ['financial', 'tax-audit', 'finance-strategy', 'skills-career', 'exam-tools'];

  pillars.forEach(p => {
    const grid = document.getElementById('grid-' + p);
    if (!grid) return;
    grid.innerHTML = '';

    const list = CHAPTERS.filter(c => c.pillar === p);
    list.sort((a, b) => a.num - b.num);

    list.forEach(c => {
      const card = document.createElement('div');
      card.className = `chapter-card ${completedSet.has(c.filename) ? 'completed' : ''}`;
      card.setAttribute('data-ch-num', String(c.num));
      card.id = `ch-card-${c.num}`;
      card.onclick = () => openChapterFile(c.filename);

      const badgeText = c.num === 999 ? 'APPENDICES' : 'CH ' + (c.num < 10 ? '0' + c.num : c.num);

      card.innerHTML = `
        <div class="card-top">
          <span class="ch-badge">${badgeText}</span>
          <span class="ch-time"><svg class="time-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> ${c.time}</span>
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

  const sorted = [...CHAPTERS].sort((a, b) => a.num - b.num);

  sorted.forEach(c => {
    const originalIdx = CHAPTERS.findIndex(item => item.filename === c.filename);
    const item = document.createElement('div');
    item.className = `toc-item ${originalIdx === currentChIdx ? 'active' : ''}`;
    item.onclick = () => openChapterIdx(originalIdx);
    const label = c.num === 999 ? 'Appendices' : `Ch ${c.num}`;
    item.innerText = `${label}: ${c.title.replace(/^(Chapter \d+: |Appendices: )/, '')}`;
    box.appendChild(item);
  });
}

let activeReadTimer = null;
let activeReadSeconds = 0;
let progressMap = JSON.parse(localStorage.getItem('acc_progress_v6') || '{}');
const REQUIRED_READ_SECONDS = 300; // 5 minutes dwell time
let activeScrollPercent = 0;
let currentReadingFilename = '';

function startReadingTracker(filename) {
  clearInterval(activeReadTimer);
  currentReadingFilename = filename;

  // Restore saved progress if existing
  const saved = progressMap[filename] || { seconds: 0, scroll: 0 };
  activeReadSeconds = saved.seconds || 0;
  activeScrollPercent = saved.scroll || 0;

  const timerBadge = document.getElementById('readTimerBadge');
  const scrollBadge = document.getElementById('readScrollBadge');
  const statusBadge = document.getElementById('readStatusBadge');

  const mins = String(Math.floor(activeReadSeconds / 60)).padStart(2, '0');
  const secs = String(activeReadSeconds % 60).padStart(2, '0');

  if (timerBadge) timerBadge.innerText = `${mins}:${secs} / 05:00`;
  if (scrollBadge) scrollBadge.innerText = `${activeScrollPercent}%`;

  const alreadyDone = completedSet.has(filename) || (activeReadSeconds >= REQUIRED_READ_SECONDS && activeScrollPercent >= 85);
  if (statusBadge) {
    statusBadge.className = `tracker-badge ${alreadyDone ? 'completed' : 'in-progress'}`;
    statusBadge.innerText = alreadyDone ? 'Completed' : 'Reading';
  }

  activeReadTimer = setInterval(() => {
    activeReadSeconds++;
    const m = String(Math.floor(activeReadSeconds / 60)).padStart(2, '0');
    const s = String(activeReadSeconds % 60).padStart(2, '0');
    if (timerBadge) {
      timerBadge.innerText = `${m}:${s} / 05:00`;
    }

    // Persist active progress to localStorage
    progressMap[currentReadingFilename] = {
      seconds: activeReadSeconds,
      scroll: activeScrollPercent
    };
    localStorage.setItem('acc_progress_v6', JSON.stringify(progressMap));

    checkCompletionCriteria();
  }, 1000);
}

function checkCompletionCriteria() {
  if (!currentReadingFilename || completedSet.has(currentReadingFilename)) return;

  // Criteria: 5 min dwell time (300s) AND at least 85% scrolled through chapter
  if (activeReadSeconds >= REQUIRED_READ_SECONDS && activeScrollPercent >= 85) {
    completedSet.add(currentReadingFilename);
    localStorage.setItem('acc_done_v6', JSON.stringify([...completedSet]));

    const statusBadge = document.getElementById('readStatusBadge');
    if (statusBadge) {
      statusBadge.className = 'tracker-badge completed';
      statusBadge.innerText = 'Completed!';
    }
    renderPillars();
    renderTOC();
    if (typeof selectRoadmapStage === 'function') selectRoadmapStage(currentRoadmapStage);
  }
}

function bindIframeScrollTracker(doc) {
  if (!doc) return;
  const win = doc.defaultView || window;

  const handleScroll = () => {
    const el = doc.documentElement;
    const max = el.scrollHeight - el.clientHeight;
    if (max > 0) {
      activeScrollPercent = Math.min(100, Math.round((el.scrollTop / max) * 100));
    } else {
      activeScrollPercent = 100;
    }

    const scrollBadge = document.getElementById('readScrollBadge');
    if (scrollBadge) {
      scrollBadge.innerText = `${activeScrollPercent}%`;
    }

    if (currentReadingFilename) {
      progressMap[currentReadingFilename] = {
        seconds: activeReadSeconds,
        scroll: activeScrollPercent
      };
      localStorage.setItem('acc_progress_v6', JSON.stringify(progressMap));
    }

    checkCompletionCriteria();
  };

  win.addEventListener('scroll', handleScroll, { passive: true });
  doc.addEventListener('scroll', handleScroll, { passive: true });
}

function openChapterIdx(idx, searchTerm = '') {
  currentChIdx = idx;
  currentSearchTerm = searchTerm;
  const c = CHAPTERS[idx];

  const fullTitle = c.title;
  const mobileTag = c.num === 999 ? 'APP' : 'CH ' + (c.num < 10 ? '0' + c.num : c.num);

  const titleEl = document.getElementById('readerTitle');
  const titleMobileEl = document.getElementById('readerTitleMobile');

  if (titleEl) {
    titleEl.innerText = fullTitle;
    titleEl.title = fullTitle;
  }
  if (titleMobileEl) {
    titleMobileEl.innerText = mobileTag;
    titleMobileEl.title = fullTitle;
  }

  document.getElementById('readerFrame').src = c.filename;
  document.getElementById('readerModal').classList.add('open');

  localStorage.setItem('acc_last_v6', c.filename);
  startReadingTracker(c.filename);
}

function openChapterFile(fn, searchTerm = '') {
  if (!fn) fn = CHAPTERS[0].filename;
  const normalized = fn.endsWith('.html') ? fn : fn + '.html';
  let idx = CHAPTERS.findIndex(c => c.filename === normalized || c.filename === fn);
  if (idx === -1) {
    idx = CHAPTERS.findIndex(c => c.filename.toLowerCase().includes(fn.toLowerCase().replace('.html', '')));
  }
  if (idx !== -1) {
    openChapterIdx(idx, searchTerm);
  } else {
    openChapterIdx(0, searchTerm);
  }
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
  clearInterval(activeReadTimer);
  document.getElementById('readerModal').classList.remove('open');
  document.getElementById('readerFrame').src = 'about:blank';
  currentSearchTerm = '';
  currentReadingFilename = '';
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

function initBookCTA() {
  document.querySelectorAll('.toc-row').forEach(row => {
    const handleRow = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const ch = row.getAttribute('data-ch') || 'Finance_Career_Bible_Chapter2.html';
      launchAnimatedReader(ch);
    };
    row.onclick = handleRow;
    row.onpointerdown = handleRow;
  });
}

function launchAnimatedReader(filename) {
  const file = filename || localStorage.getItem('acc_last_v6') || localStorage.getItem('last_read_chapter') || 'Finance_Career_Bible_Chapter2.html';
  const btn = document.getElementById('btnBookRead');
  if (btn) {
    btn.style.transform = 'scale(0.96) translateZ(10px)';
    btn.style.background = '#10b981';
    btn.style.color = '#080a0f';
    setTimeout(() => {
      btn.style.transform = 'translateZ(10px)';
      btn.style.background = '';
      btn.style.color = '';
      openChapterFile(file);
    }, 120);
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
    // Freeze 3D tilt coordinates when hovering over pages or when open so mouse clicks land rock-solid
    if (book.classList.contains('open') || e.target.closest('.page') || e.target.closest('.btn-read-inside') || e.target.closest('.toc-row')) {
      book.style.setProperty('--tilt-y', '0deg');
      book.style.setProperty('--tilt-x', '0deg');
      return;
    }
    const r = scene.getBoundingClientRect();
    const dx = (e.clientX - r.left) / r.width - .5;
    const dy = (e.clientY - r.top) / r.height - .5;
    book.style.setProperty('--tilt-y', `${dx * 12}deg`);
    book.style.setProperty('--tilt-x', `${-dy * 8}deg`);
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
