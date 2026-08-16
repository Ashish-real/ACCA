/* ==========================================================================
   FINANCE CAREER BIBLE (ACCA) — COMPREHENSIVE 1-PAGE PDF CHEAT SHEET ENGINE
   Ultra-dense vector 1-page PDF revision sheets with clean human-readable formulas,
   fraction breakdowns, exam traps & decision rules.
   Zero text-overlapping and zero kerning-overflow (Standard Clean ASCII Glyphs).
   ========================================================================== */

const PdfCheatSheetEngine = {
  getJsPDF() {
    if (typeof window !== 'undefined' && window.jspdf && window.jspdf.jsPDF) {
      return window.jspdf.jsPDF;
    }
    return null;
  },

  // Helper to draw clean non-overlapping cards
  renderCard(doc, x, y, colW, title, bullets, tag = "") {
    const padX = 3.5;
    const innerW = colW - (padX * 2);
    const lineHeight = 3.3;

    // Split every bullet into its wrapped visual lines (Pure ASCII)
    const lineList = [];
    bullets.forEach(b => {
      // Clean any potential rogue unicode characters to avoid jsPDF kerning corruption
      const cleanText = b
        .replace(/→/g, '->')
        .replace(/←/g, '<-')
        .replace(/↔/g, '<->')
        .replace(/≥/g, '>=')
        .replace(/≤/g, '<=')
        .replace(/—/g, '-')
        .replace(/•/g, '-');

      const splitLines = doc.splitTextToSize(cleanText, innerW);
      splitLines.forEach(sl => lineList.push(sl));
    });

    const cardHeight = 7.5 + (lineList.length * lineHeight) + 2.5;

    // Draw Card Background
    doc.setFillColor(248, 250, 252);
    doc.setDrawColor(218, 224, 233);
    doc.roundedRect(x, y, colW, cardHeight, 1.5, 1.5, 'FD');

    // Draw Title & Tag
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.2);
    doc.setTextColor(79, 70, 229);
    doc.text(title, x + padX, y + 4.8);

    if (tag) {
      doc.setFontSize(6.8);
      doc.setTextColor(100, 116, 139);
      doc.text(tag, x + colW - padX, y + 4.8, { align: 'right' });
    }

    // Draw Content line by line with guaranteed spacing
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.0);
    doc.setTextColor(30, 41, 59);

    let currentY = y + 8.8;
    lineList.forEach(lineText => {
      doc.text(lineText, x + padX, currentY);
      currentY += lineHeight;
    });

    return cardHeight + 2.5; // return height + margin to easily set next card Y
  },

  // 1. Financial Reporting (FR / SBR) Comprehensive Sheet
  generateFRPDF() {
    const jsPDF = this.getJsPDF();
    if (!jsPDF) {
      alert("PDF library is still loading. Please try again in a few seconds.");
      return;
    }

    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

    // Header Banner
    doc.setFillColor(15, 23, 42);
    doc.rect(0, 0, 210, 22, 'F');

    doc.setFont("helvetica", "bold");
    doc.setFontSize(13.5);
    doc.setTextColor(255, 255, 255);
    doc.text("ACCA Financial Reporting (FR / SBR) - Master 1-Page Cheat Sheet", 10, 9);

    doc.setFontSize(8.0);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(148, 163, 184);
    doc.text("Finance Career Bible | Core Standards, Recognition Criteria, Exam Traps & Big 4 Workpapers", 10, 16);

    const col1X = 10;
    const col2X = 108;
    const colW = 92;

    // COLUMN 1: Assets, Inventory, Leases & Impairment
    let y1 = 25;
    y1 += this.renderCard(doc, col1X, y1, colW, "IAS 16: Property, Plant & Equipment", [
      "- Initial: Purchase Cost + Delivery + Installation + Site Dismantling PV.",
      "- Subsequent: Cost Model vs Revaluation Model (gains go to OCI).",
      "- Depreciation: Over useful life. Land is never depreciated.",
      "- Exam Trap: Day-to-day repairs & staff training are ALWAYS expensed."
    ], "PPE & Assets");

    y1 += this.renderCard(doc, col1X, y1, colW, "IAS 2: Inventory Valuation", [
      "- Valuation Rule: Lower of Cost and Net Realisable Value (NRV).",
      "- Allowed Methods: FIFO and AVCO (Weighted Average Cost).",
      "- Strictly Prohibited: LIFO is forbidden under all IFRS standards.",
      "- NRV Formula: Expected Selling Price - Completion Costs - Selling Fees."
    ], "Inventories");

    y1 += this.renderCard(doc, col1X, y1, colW, "IAS 38: Intangible Assets & R&D", [
      "- Research Costs: Always expensed directly to P&L as incurred.",
      "- Development: Capitalise ONLY if ALL 6 PIRATE criteria are met:",
      "  Probable flow, Intention, Resources, Ability, Tech feasible, Expenses reliable.",
      "- Goodwill: Never amortised; tested annually for impairment under IAS 36."
    ], "Intangibles");

    y1 += this.renderCard(doc, col1X, y1, colW, "IFRS 16: Leases (Lessee Accounting)", [
      "- Balance Sheet Day 1: Recognise Right-of-Use (ROU) Asset & Lease Liability.",
      "- Lease Liability = Present Value of all future lease payments.",
      "- ROU Asset = Initial Liability + Prepayments + Direct Initial Costs + Dismantle PV.",
      "- P&L Impact: Straight-line depreciation on ROU + Interest on Lease Liability."
    ], "Leases");

    y1 += this.renderCard(doc, col1X, y1, colW, "IAS 36: Impairment of Assets & CGUs", [
      "- Impairment Trigger: Carrying Amount > Recoverable Amount.",
      "- Recoverable Amount = Higher of [Fair Value Less Disposal] and [Value in Use].",
      "- CGU Loss Allocation Order: (1) Specifically damaged assets, (2) Goodwill in full, (3) Other non-current assets pro-rata across values."
    ], "Impairment");

    y1 += this.renderCard(doc, col1X, y1, colW, "IAS 37: Provisions & Contingencies", [
      "- Provision (B/S Liability): Present obligation + Probable outflow (>50%) + Reliable estimate.",
      "- Contingent Liability (Disclose in Notes): Possible obligation (10% to 50%).",
      "- Contingent Asset: Disclose if probable (>50%); capitalise if virtually certain (>95%)."
    ], "Liabilities");

    // COLUMN 2: Revenue, Instruments, Tax & Consolidation
    let y2 = 25;
    y2 += this.renderCard(doc, col2X, y2, colW, "IFRS 15: Revenue (5-Step Model)", [
      "- Step 1: Identify contract with customer (commercial substance).",
      "- Step 2: Identify separate performance obligations (distinct goods).",
      "- Step 3: Determine transaction price (exclude uncertain variable fees).",
      "- Step 4: Allocate transaction price based on standalone selling prices.",
      "- Step 5: Recognise revenue as/when performance obligations are satisfied (over time vs point in time)."
    ], "Revenue");

    y2 += this.renderCard(doc, col2X, y2, colW, "IFRS 9: Financial Instruments & ECL", [
      "- Financial Assets: Amortised Cost (SPPI test), FVOCI, or FVTPL.",
      "- Financial Liabilities: Amortised Cost using Effective Interest Rate (EIR).",
      "- ECL 3-Stage Model: Stage 1 (12-month expected loss), Stage 2 (Lifetime loss for credit risk rise), Stage 3 (Credit-impaired objective default)."
    ], "Instruments");

    y2 += this.renderCard(doc, col2X, y2, colW, "IAS 12: Income Taxes & Deferred Tax", [
      "- Balance Sheet Method: Asset Carrying Value vs Asset Tax Base.",
      "- Taxable Difference (Asset Carrying Value > Tax Base) -> Deferred Tax Liability.",
      "- Deductible Difference (Asset Carrying Value < Tax Base) -> Deferred Tax Asset.",
      "- Tax Rate: Use enacted or substantively enacted future settlement rate."
    ], "Taxation");

    y2 += this.renderCard(doc, col2X, y2, colW, "IFRS 3 & 10: Consolidation & Goodwill", [
      "- Goodwill = Consideration Paid + NCI at acquisition - Fair Value Net Assets.",
      "- NCI Choice: Fair Value (Full Goodwill) OR Proportionate Share of Net Assets.",
      "- Unrealised Profit (PUP): Deduct from inventory on consolidated Balance Sheet.",
      "  * Parent sells to Sub: Charge Group Retained Earnings.",
      "  * Sub sells to Parent: Charge Sub Retained Earnings (affects NCI share).",
      "- Intercompany Balances: Eliminate 100% of internal receivables/payables."
    ], "Consolidation");

    y2 += this.renderCard(doc, col2X, y2, colW, "IAS 1 & Conceptual Framework", [
      "- Fundamental Traits: Relevance (predictive value) & Faithful Representation.",
      "- Enhancing Traits: Comparability, Verifiability, Timeliness, Understandability.",
      "- Core Accounting Principles: Going concern & Accruals concept.",
      "- Current vs Non-Current Split: Realised or settled within 12 months."
    ], "Framework");

    // Footer
    doc.setFillColor(15, 23, 42);
    doc.rect(0, 288, 210, 9, 'F');
    doc.setFontSize(7.2);
    doc.setTextColor(203, 213, 225);
    doc.text("Finance Career Bible | Authored by Ashish | Free Open-Source ACCA Master Revision | Page 1 of 1", 10, 294);

    doc.save("ACCA_FR_Revision_MasterSheet.pdf");
  },

  // 2. Financial Management (FM / AFM) Comprehensive Formula Sheet
  generateFMPDF() {
    const jsPDF = this.getJsPDF();
    if (!jsPDF) {
      alert("PDF library is still loading. Please try again in a few seconds.");
      return;
    }

    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

    // Header Banner
    doc.setFillColor(15, 23, 42);
    doc.rect(0, 0, 210, 22, 'F');

    doc.setFont("helvetica", "bold");
    doc.setFontSize(13.5);
    doc.setTextColor(255, 255, 255);
    doc.text("ACCA Financial Management (FM / AFM) - Master 1-Page Formula Sheet", 10, 9);

    doc.setFontSize(8.0);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(148, 163, 184);
    doc.text("Finance Career Bible | Cost of Capital, CAPM, Valuation, Hedging & Treasury Models", 10, 16);

    const col1X = 10;
    const col2X = 108;
    const colW = 92;

    // COLUMN 1: Cost of Capital & Capital Structure
    let y1 = 25;
    y1 += this.renderCard(doc, col1X, y1, colW, "Cost of Capital & WACC Formula", [
      "- WACC = [ Cost of Equity * (Equity / Total Capital) ] + [ Post-Tax Cost of Debt * (Debt / Total Capital) ]",
      "- Market Value Rule: MUST use Market Values (E = Shares * Price, D = Debt Market Value).",
      "- CAPM Cost of Equity: Ke = Risk Free Rate + Equity Beta * (Market Return - Risk Free Rate)",
      "- Dividend Growth Model: Ke = (Next Dividend / Current Share Price) + Growth Rate",
      "- Historical Dividend Growth: g = (Current Dividend / Earliest Dividend)^(1 / Years) - 1",
      "- Gordon's Growth Model: g = Retention Rate (b) * Return on Capital (r)"
    ], "WACC & Ke");

    y1 += this.renderCard(doc, col1X, y1, colW, "Beta Ungearing & Regearing (Asset Beta)", [
      "- Asset Beta Ungearing: Asset Beta = Equity Beta * [ Equity / (Equity + Debt * (1 - Tax)) ]",
      "  (Strips out financial debt risk to isolate pure business risk).",
      "- Equity Beta Regearing: Equity Beta = Asset Beta * [ (Equity + Debt * (1 - Tax)) / Equity ]",
      "  (Re-gears business risk to match company's specific target debt ratio).",
      "- Pure-Play Method: Take competitor Equity Beta -> Ungear to Asset Beta -> Regear to own Equity Beta."
    ], "CAPM Risk");

    y1 += this.renderCard(doc, col1X, y1, colW, "Cost of Debt (Kd) & Convertible Bonds", [
      "- Irredeemable Debt: Post-Tax Kd = [ Annual Interest * (1 - Tax Rate) ] / Market Price",
      "- Redeemable Debt: Kd = Internal Rate of Return (IRR) of cash flows:",
      "  [-Market Price at Year 0, +Annual Post-Tax Interest, +Redemption Value at Year n].",
      "- Convertible Debt: Conversion Value = Conversion Ratio * Future Share Price.",
      "- Redemption Cash Flow: Higher of Par Redemption Value or Conversion Value."
    ], "Debt & Yields");

    y1 += this.renderCard(doc, col1X, y1, colW, "Adjusted Present Value (APV) - 3 Steps", [
      "- Step 1: Base-Case NPV = Discount all project cash flows at All-Equity Cost (Ke_ungeared).",
      "- Step 2: Financing Effects = Present Value of Debt Tax Shields [Debt * Tax Rate * Kd] - Issue Costs.",
      "- Step 3: Total APV = Base-Case All-Equity NPV + PV of Tax Shields - Issue Costs.",
      "- When to use: When capital structure changes significantly over project life."
    ], "APV Model");

    y1 += this.renderCard(doc, col1X, y1, colW, "Modigliani-Miller (MM) Capital Structure", [
      "- Without Tax (1958): WACC is constant. Debt mix does not change total firm value.",
      "- With Tax (1963): WACC decreases as debt increases due to tax shield (100% debt optimal).",
      "- Trade-Off Theory: Balances tax shield benefits against bankruptcy distress costs.",
      "- Pecking Order: Retained Earnings (1st) -> Debt (2nd) -> New Equity Issue (Last)."
    ], "Capital Structure");

    // COLUMN 2: Valuation, Hedging & Working Capital
    let y2 = 25;
    y2 += this.renderCard(doc, col2X, y2, colW, "Business Valuation Models", [
      "- DCF Enterprise Value: EV = Sum of PV(FCF 1 to n) + [ Terminal Value / (1 + WACC)^n ]",
      "- Terminal Value (Perpetuity): TV = [ Final FCF * (1 + Growth Rate) ] / (WACC - Growth Rate)",
      "- Free Cash Flow to Firm: FCFF = Operating Profit*(1 - Tax) + Depreciation - Capex - Change in Working Capital.",
      "- Equity Value Formula: Equity Value = Enterprise Value - Net Debt (Total Debt - Cash).",
      "- Valuation Multiples: P/E (Equity Value), EV/EBITDA (Total Enterprise Value)."
    ], "Valuation");

    y2 += this.renderCard(doc, col2X, y2, colW, "Foreign Exchange Hedging (Forex)", [
      "- Forward Contract: Lock in future exchange rate today (binding legal obligation).",
      "- Money Market Hedge (4 Steps):",
      "  * Receipt (Foreign Inflow): Borrow Foreign Currency -> Convert at Spot -> Deposit Home Currency.",
      "  * Payment (Foreign Outflow): Borrow Home Currency -> Convert at Spot -> Deposit Foreign Currency.",
      "- Currency Futures: Standardised exchange-traded contracts with daily margin calls.",
      "- Currency Options: Right (not obligation) to convert at strike price (pays upfront premium)."
    ], "Forex Hedging");

    y2 += this.renderCard(doc, col2X, y2, colW, "Interest Rate Risk Management (AFM)", [
      "- Forward Rate Agreement (FRA): FRA 3v9 locks a 6-month borrowing rate starting in 3 months.",
      "- Interest Rate Futures: Futures Price = 100 - Interest Rate. Buy if rates fall, sell if rates rise.",
      "- Interest Rate Collars: Buy Cap (ceiling protection) + Sell Floor (reduces net premium cost).",
      "- Interest Rate Swaps: Exchange Fixed rate for Floating rate (e.g. SOFR) between counterparties."
    ], "Interest Rates");

    y2 += this.renderCard(doc, col2X, y2, colW, "Working Capital & Cash Management", [
      "- Cash Conversion Cycle: CCC = Inventory Days + Receivable Days - Payable Days.",
      "- Economic Order Quantity: EOQ = Square Root of [ (2 * Order Cost * Demand) / Holding Cost ].",
      "- Miller-Orr Cash Model (Volatile Cash):",
      "  * Cash Spread = 3 * [ (3/4 * Transaction Cost * Variance) / Daily Interest Rate ]^(1/3).",
      "  * Target Return Point = Lower Limit + (Spread / 3); Upper Limit = Lower Limit + Spread."
    ], "Treasury");

    // Footer
    doc.setFillColor(15, 23, 42);
    doc.rect(0, 288, 210, 9, 'F');
    doc.setFontSize(7.2);
    doc.setTextColor(203, 213, 225);
    doc.text("Finance Career Bible | Authored by Ashish | Free Open-Source ACCA Master Revision | Page 1 of 1", 10, 294);

    doc.save("ACCA_FM_Formula_MasterSheet.pdf");
  },

  // 3. Investment Appraisal Comprehensive Decision Rules Sheet
  generateInvestmentPDF() {
    const jsPDF = this.getJsPDF();
    if (!jsPDF) {
      alert("PDF library is still loading. Please try again in a few seconds.");
      return;
    }

    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

    // Header Banner
    doc.setFillColor(15, 23, 42);
    doc.rect(0, 0, 210, 22, 'F');

    doc.setFont("helvetica", "bold");
    doc.setFontSize(13.5);
    doc.setTextColor(255, 255, 255);
    doc.text("ACCA Investment Appraisal - Master 1-Page Decision Rules Sheet", 10, 9);

    doc.setFontSize(8.0);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(148, 163, 184);
    doc.text("Finance Career Bible | Capital Budgeting, NPV, Inflation, Tax Allowances, IRR & Real Options", 10, 16);

    const col1X = 10;
    const col2X = 108;
    const colW = 92;

    // COLUMN 1: NPV, Tax, Working Capital & Inflation
    let y1 = 25;
    y1 += this.renderCard(doc, col1X, y1, colW, "Net Present Value (NPV) - Gold Standard", [
      "- Formula: NPV = Sum of Present Value of Cash Inflows - Initial Capital Outlay.",
      "- Decision Rule: Accept project if NPV > 0. Choose highest NPV for mutually exclusive projects.",
      "- Why Superior: Directly measures absolute dollar shareholder wealth created.",
      "- Relevant Cash Flows: Incremental, future, cash-only.",
      "- STRICTLY EXCLUDE: Sunk costs, historical research, general overhead allocations.",
      "- INCLUDE: Opportunity costs (e.g. forgone warehouse rent), lost sales on existing product lines."
    ], "NPV Method");

    y1 += this.renderCard(doc, col1X, y1, colW, "Taxation & Capital Allowances (TAD)", [
      "- Corporation Tax: Tax paid on operating profits (often lagged by 1 year in exams).",
      "- Tax-Allowable Depreciation (TAD): Non-cash deduction that generates cash TAX SAVINGS.",
      "  Tax Savings = TAD * Tax Rate (e.g., $100,000 TAD * 25% tax = $25,000 cash saving).",
      "- Balancing Allowance (Disposal): Tax Base > Scrap Proceeds -> Extra tax relief saving.",
      "- Balancing Charge (Disposal): Scrap Proceeds > Tax Base -> Extra tax payment on capital gain."
    ], "Tax Relief");

    y1 += this.renderCard(doc, col1X, y1, colW, "Working Capital & Timing in Models", [
      "- Year 0: Initial cash OUTFLOW for raw materials and buffer inventory.",
      "- Years 1 to n: Incremental OUTFLOW if working capital expands, INFLOW if it contracts.",
      "- Project Termination: 100% of cumulative working capital is RECOVERED as cash inflow.",
      "- Exam Rule: Never apply tax depreciation or tax relief to working capital items."
    ], "Working Capital");

    y1 += this.renderCard(doc, col1X, y1, colW, "Inflation Treatment & Fisher Equation", [
      "- Nominal Cash Flows (includes specific inflation) -> Discount at Nominal WACC Rate.",
      "- Real Cash Flows (excludes inflation) -> Discount at Real WACC Rate.",
      "- Fisher Equation: (1 + Nominal Rate) = (1 + Real Rate) * (1 + General Inflation Rate).",
      "- Exam Trap: If line items inflate at different rates, inflate each item to NOMINAL cash flows and discount at NOMINAL WACC."
    ], "Inflation");

    // COLUMN 2: IRR, MIRR, Rationing & Real Options
    let y2 = 25;
    y2 += this.renderCard(doc, col2X, y2, colW, "Internal Rate of Return (IRR)", [
      "- Definition: The exact discount rate where project NPV = 0.",
      "- Interpolation Formula: IRR = Lower Rate + [ NPV_Lower / (NPV_Lower - NPV_Higher) ] * (Higher Rate - Lower Rate)",
      "- Decision Rule: Accept project if IRR > Cost of Capital (WACC).",
      "- NPV vs IRR Conflict: Always choose NPV. IRR assumes reinvestment at the IRR rate (unrealistic); NPV correctly assumes reinvestment at WACC."
    ], "IRR Model");

    y2 += this.renderCard(doc, col2X, y2, colW, "Modified IRR (MIRR)", [
      "- Overcomes IRR's multiple rates and unrealistic reinvestment rate flaws.",
      "- Formula: MIRR = [ PV of Cash Returns / PV of Investment Outlay ]^(1 / Years) * (1 + Reinvestment Rate) - 1",
      "- Assumes intermediate cash flows are reinvested at company's true cost of capital (WACC).",
      "- Gives consistent rankings with NPV for mutually exclusive projects of same scale."
    ], "MIRR");

    y2 += this.renderCard(doc, col2X, y2, colW, "Capital Rationing (Single Period)", [
      "- Divisible Projects (Fractions of projects allowed):",
      "  * Profitability Index (PI) = Present Value of Future Cash Inflows / Initial Outlay.",
      "  * Rank projects by highest PI down until capital budget is exhausted.",
      "- Indivisible Projects (All-or-nothing projects):",
      "  * Test trial combinations within budget to find combination with highest total NPV.",
      "- Multi-Period Rationing: Formulate and solve using Linear Programming."
    ], "Rationing");

    y2 += this.renderCard(doc, col2X, y2, colW, "Real Options in Advanced Appraisal (AFM)", [
      "- Traditional NPV ignores managerial flexibility during project execution.",
      "- Option to Expand: Call option on future growth phases if initial pilot succeeds.",
      "- Option to Abandon: Put option to exit and sell assets if demand drops below forecast.",
      "- Option to Delay: Call option on waiting for market uncertainty to resolve.",
      "- Strategic NPV = Standard Static NPV + Real Option Value."
    ], "Real Options");

    // Footer
    doc.setFillColor(15, 23, 42);
    doc.rect(0, 288, 210, 9, 'F');
    doc.setFontSize(7.2);
    doc.setTextColor(203, 213, 225);
    doc.text("Finance Career Bible | Authored by Ashish | Free Open-Source ACCA Master Revision | Page 1 of 1", 10, 294);

    doc.save("ACCA_Investment_Appraisal_MasterSheet.pdf");
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PdfCheatSheetEngine };
}
