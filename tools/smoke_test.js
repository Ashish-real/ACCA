/* Headless smoke test for the portal shell.
 *
 * Runs script.js against a minimal DOM shim built from index.html, so the render
 * paths (chapter cards, formula cards, quiz) are actually executed rather than
 * just eyeballed. No external dependencies - plain node.
 *
 *     node tools/smoke_test.js
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

let failures = 0;
const ok = (cond, label, detail) => {
  console.log(`${cond ? '  PASS' : '  FAIL'}  ${label}${detail ? '  -> ' + detail : ''}`);
  if (!cond) failures++;
};

/* ---- minimal DOM ---- */

const registry = new Map();          // id -> element
const byClass = new Map();           // class -> Set(elements)

function track(el) {
  el.classList._names.forEach(c => {
    if (!byClass.has(c)) byClass.set(c, new Set());
    byClass.get(c).add(el);
  });
}

function makeEl(tag = 'div') {
  const el = {
    tagName: tag.toUpperCase(),
    children: [],
    style: {},
    dataset: {},
    _html: '',
    _text: '',
    attrs: {},
  };

  const names = new Set();
  el.classList = {
    _names: names,
    add: (...c) => { c.forEach(x => names.add(x)); track(el); },
    remove: (...c) => c.forEach(x => names.delete(x)),
    toggle: c => (names.has(c) ? names.delete(c) : names.add(c)),
    contains: c => names.has(c),
  };

  Object.defineProperty(el, 'className', {
    get: () => [...names].join(' '),
    set: v => { names.clear(); String(v).split(/\s+/).filter(Boolean).forEach(c => names.add(c)); track(el); },
  });
  Object.defineProperty(el, 'innerHTML', {
    get: () => el._html,
    set: v => { el._html = String(v); if (v === '') el.children = []; },
  });
  Object.defineProperty(el, 'innerText', { get: () => el._text, set: v => { el._text = String(v); } });
  Object.defineProperty(el, 'textContent', { get: () => el._text, set: v => { el._text = String(v); } });

  el.appendChild = c => { el.children.push(c); return c; };
  el.removeChild = c => { el.children = el.children.filter(x => x !== c); };
  el.setAttribute = (k, v) => { el.attrs[k] = v; };
  el.getAttribute = k => el.attrs[k];
  el.addEventListener = () => {};
  el.querySelector = () => makeEl();
  el.querySelectorAll = () => [];
  el.getBoundingClientRect = () => ({ top: 0, left: 0, width: 800, height: 400 });
  el.scrollIntoView = () => {};
  el.focus = () => {};
  el.select = () => {};
  return el;
}

// Seed one element per id="..." found in the real index.html.
for (const m of html.matchAll(/id="([^"]+)"/g)) {
  const el = makeEl();
  el.id = m[1];
  registry.set(m[1], el);
}
// Mirror the markup's starting classes for the bits script.js toggles.
for (const m of html.matchAll(/<section class="pillar-section collapsed" id="([^"]+)"/g)) {
  registry.get(m[1]).classList.add('pillar-section', 'collapsed');
}
registry.get('tab-pillars').classList.add('tab-content', 'active');
['tab-roadmap-tab', 'tab-formulas', 'tab-quiz', 'tab-about']
  .forEach(id => registry.get(id).classList.add('tab-content'));

// SVG path needs a length for the roadmap draw.
const roadPath = registry.get('roadmapPath');
roadPath.getTotalLength = () => 800;

const document = {
  getElementById: id => registry.get(id) || null,
  createElement: makeEl,
  querySelectorAll: sel => [...(byClass.get(sel.replace(/^\./, '')) || [])],
  querySelector: sel => [...(byClass.get(sel.replace(/^\./, '')) || [])][0] || null,
  addEventListener: () => {},
  body: makeEl('body'),
  head: makeEl('head'),
  createTreeWalker: () => ({ nextNode: () => null }),
};

const store = {};
const sandbox = {
  document,
  console,
  setTimeout: (fn) => { fn(); return 0; },   // run timers inline
  clearTimeout: () => {},
  localStorage: {
    getItem: k => (k in store ? store[k] : null),
    setItem: (k, v) => { store[k] = String(v); },
  },
  navigator: { clipboard: { writeText: () => Promise.resolve() } },
  window: {
    matchMedia: () => ({ matches: false }),
    scrollTo: () => {},
  },
  MutationObserver: class { observe() {} },
  IntersectionObserver: class {
    constructor(cb) { this.cb = cb; }
    observe(el) { this.cb([{ isIntersecting: true, target: el }]); }
    unobserve() {}
  },
  NodeFilter: { SHOW_TEXT: 4 },
  alert: () => {},
};
sandbox.window.document = document;
sandbox.globalThis = sandbox;
vm.createContext(sandbox);

/* ---- run ---- */

console.log('\nLOADING');
for (const f of ['formulas_data.js', 'quiz_data.js', 'script.js']) {
  try {
    vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), sandbox, { filename: f });
    ok(true, `loaded ${f}`);
  } catch (e) {
    ok(false, `loaded ${f}`, e.message);
  }
}

// Top-level `const` in a vm context lives in the lexical scope, not on the
// sandbox object, so reach the data by evaluating an expression instead.
const evalIn = expr => vm.runInContext(expr, sandbox);
const FORMULAS = evalIn('FORMULAS');
const QUIZ = evalIn('QUIZ');

console.log('\nDATA');
ok(FORMULAS.length > 250, 'FORMULAS populated', `${FORMULAS.length} entries`);
ok(QUIZ.length === 44, 'QUIZ populated', `${QUIZ.length} entries`);
ok(evalIn('CHAPTERS').length === 51, 'CHAPTERS covers every chapter file', `${evalIn('CHAPTERS').length} entries`);
ok(!QUIZ.some(q => q.opts.some(o => o.includes('✅'))), 'no answer checkmark leaked into options');
ok(QUIZ.every(q => Number.isInteger(q.ans) && q.ans >= 0 && q.ans < q.opts.length), 'every answer index in range');

console.log('\nINIT (window.onload)');
try {
  evalIn('window.onload')();
  ok(true, 'init() ran without throwing');
} catch (e) {
  ok(false, 'init() ran without throwing', e.message + '\n' + e.stack.split('\n')[1]);
}

console.log('\nRENDER');
const counts = {
  'grid-financial': 10, 'grid-tax-audit': 6, 'grid-finance-strategy': 16,
  'grid-skills-career': 10, 'grid-exam-tools': 9,
};
for (const [id, want] of Object.entries(counts)) {
  const got = registry.get(id).children.length;
  ok(got === want, `${id} rendered ${want} cards`, got === want ? '' : `got ${got}`);
}
ok(registry.get('formulaGrid').children.length === FORMULAS.length,
   'formulaGrid rendered every formula', `${registry.get('formulaGrid').children.length}`);
ok(registry.get('formulaChips').children.length > 5, 'formula paper chips rendered',
   `${registry.get('formulaChips').children.length} chips`);
ok(registry.get('quizChips').children.length === 16, 'quiz paper chips rendered (ALL + 15 papers)',
   `${registry.get('quizChips').children.length} chips`);
ok(registry.get('quizOptions').children.length === 4, 'quiz rendered 4 options');
ok(registry.get('quizQuestion').innerText.length > 10, 'quiz question populated');
ok(registry.get('tocBox').children.length === 51, 'reader TOC rendered every chapter');

console.log('\nINTERACTION');
evalIn('switchTab')('formulas');
ok(registry.get('tab-formulas').classList.contains('active') &&
   !registry.get('tab-pillars').classList.contains('active'), 'switchTab swaps active tab');

evalIn('togglePillarSection')('section-financial');
ok(!registry.get('section-financial').classList.contains('collapsed'), 'accordion opens');
evalIn('togglePillarSection')('section-financial');
ok(registry.get('section-financial').classList.contains('collapsed'), 'accordion closes');

evalIn('renderFormulas')('WACC');
const hits = registry.get('formulaGrid').children.length;
ok(hits > 0 && hits < FORMULAS.length, 'formula search narrows results', `${hits} hits for "WACC"`);
evalIn('renderFormulas')('');

evalIn('setQuizPaper')('FM');
ok(evalIn('quizPool').length === QUIZ.filter(q => q.code === 'FM').length,
   'quiz paper filter narrows pool', `${evalIn('quizPool').length} FM questions`);
evalIn('setQuizPaper')('ALL');

// Answer the first question correctly, then check the score line.
const first = evalIn('quizPool')[0];
evalIn('answerQuiz')(first.ans, first.ans, first.exp, makeEl('button'));
ok(registry.get('quizScore').innerText === 'Score: 1 / 1', 'correct answer scores',
   registry.get('quizScore').innerText);

evalIn('nextQuiz')();
ok(registry.get('quizProgress').innerText.startsWith('Question 2'), 'nextQuiz advances',
   registry.get('quizProgress').innerText);

// The bug this rebuild fixes: equations containing apostrophes.
const risky = FORMULAS.filter(f => f.eq.includes("'") || f.eq.includes('"'));
let copyThrew = null;
try { evalIn('copyFormula')(risky[0].eq, makeEl('button')); } catch (e) { copyThrew = e.message; }
ok(copyThrew === null, `copy works on quote-bearing equations (${risky.length} such)`, copyThrew || '');

console.log('\nREADER');
evalIn('openChapterFile')('Finance_Career_Bible_Chapter21.html');
ok(registry.get('readerFrame').src === 'Finance_Career_Bible_Chapter21.html', 'chapter opens in reader');
ok(registry.get('readerModal').classList.contains('open'), 'reader modal opens');
ok(store['acc_last_v6'] === 'Finance_Career_Bible_Chapter21.html', 'last-read persisted');
evalIn('navChapter')(1);
ok(registry.get('readerTitle').innerText.includes('Chapter 22'), 'next chapter navigates',
   registry.get('readerTitle').innerText);
evalIn('closeReader')();
ok(!registry.get('readerModal').classList.contains('open'), 'reader closes');

evalIn('resumeReading')();
ok(registry.get('readerFrame').src.includes('Chapter'), 'resumeReading restores a chapter');

console.log(`\n${failures === 0 ? 'ALL CHECKS PASSED' : failures + ' CHECK(S) FAILED'}\n`);
process.exit(failures === 0 ? 0 : 1);
