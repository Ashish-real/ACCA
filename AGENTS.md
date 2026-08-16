# Finance Career Bible (ACCA) — Repository Master Guide & Architecture

## Repository Overview & Context
- **Repository Location**: `D:\Trinno\ACCA` (Remote: `https://github.com/Ashish-real/ACCA.git`)
- **Current Git Commit**: `M60` (`2a78e2a`)
- **Next Commit Prefix**: `M61`
- **Author & Creator**: **Ashish** (Conceived, authored, and constructed over months of dedicated technical drafting)
- **Course Mission**: Complete 50-Chapter ACCA Masterclass Portal covering foundational accounting, financial reporting, IFRS, taxation, audit, corporate finance, FP&A forecasting, DCF valuation, and Big 4 career preparation.
- **Tech Stack**: Vanilla HTML5, Modern CSS (Glassmorphism, CSS Custom Properties, Dark Mode Palette), Vanilla ES6 JavaScript. Zero heavy frameworks or build tool dependencies.

---

## Commit Series Prefix Rule (MANDATORY)
- **Rule**: Every git commit MUST strictly use the continuous auto-detected series prefix format: `M<number>: <description>` (e.g., `M53`, `M54`, `M55`, `M56`).
- Always check `git log -n 5 --oneline` before committing to find the highest number and increment by +1.

---

## Core Components & File Structure
1. **`index.html`**:
   - Master portal containing Hero, ACCA Guidance Callout, 6 Core Domains grid, Author Spotlight (Ashish), 5 Pillars Library, Resource Directory Grid, FAQ accordion, Tab Navigator, and Reader Modal (`#readerFrame`).
   - Tabs: `#tab-pillars` (Chapters), `#tab-roadmap-tab` (Roadmap), `#tab-formulas` (Formula Vault), `#tab-quiz` (Practice Bank), `#tab-about` (About & Directory).
   - Cache-busting query parameter (`?v=M56`) on all JS/CSS imports.

2. **`ACCA_Syllabus_Mapping.html`**:
   - 4-Stage Interactive Visual Syllabus Timeline mapping all 13 ACCA papers across Knowledge, Applied Skills, Strategic Professional Essentials, and Options.

3. **`finance_dictionary_data.js`**:
   - Master Finance & IFRS Dictionary containing 100+ hyper-specific independent definitions, real-world deal examples, paper tags, and chapter links.
   - Every sub-concept (e.g. `FIFO`, `NRV`, `AVCO`, `Right-of-Use Asset`, `Lease Liability`, `Asset Beta`, `Equity Beta`, `Substantive Procedures`) has its own distinct entry to prevent cross-concept collision.

4. **`script.js`**:
   - Full-text search modal & engine (`search_index.js`).
   - Interactive Floating Terminology & IFRS Tooltip Engine (`injectDictionaryTooltips(doc)` with glassmorphism cards and screen bounding clamping).
   - LocalStorage offline reading progress & dwell timer tracking (`acc_progress_v6`, `acc_done_v6`).
   - Formula Vault filter & search (`formulas_data.js`).
   - MCQ Practice Question Bank (`quiz_data.js`).
   - In-iframe auto-scroll, responsive table wrapper, and keyboard chapter switching (`ArrowLeft` / `ArrowRight`).

5. **`style.css`**:
   - Global design system: `:root` color tokens (`--bg: #0a0a0f`, `--surface: #121620`, `--accent: #6c63ff`, `--accent2: #00d4aa`, `--accent4: #ffd93d`, `--accent5: #ff4d6d`).
   - Glassmorphism overlays, floating dictionary cards (`.dict-floating-card`), interactive dashed terminology underline (`.dict-term`).
