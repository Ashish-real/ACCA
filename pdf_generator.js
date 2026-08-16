/* ==========================================================================
   FINANCE CAREER BIBLE (ACCA) — COMPREHENSIVE 1-PAGE PDF CHEAT SHEET ENGINE
   Ultra-dense vector 1-page PDF revision sheets with formulas, exam traps & decision rules.
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
      "- Initial: Cost + delivery + install + site dismantling PV.",
      "- Subsequent: Cost Model vs Revaluation (gain to OCI).",
      "- Depreciation: Over useful life. Land is never depreciated.",
      "- Exam Trap: Maintenance & staff training are ALWAYS expensed."
    ], "PPE & Assets");

    y1 += this.renderCard(doc, col1X, y1, colW, "IAS 2: Inventory Valuation", [
      "- Lower of Cost and Net Realisable Value (NRV).",
      "- Allowed: FIFO and AVCO (Weighted Average).",
      "- Prohibited: LIFO is strictly forbidden under IFRS.",
      "- NRV = Expected Selling Price - Completion Costs - Selling Fees."
    ], "Inventories");

    y1 += this.renderCard(doc, col1X, y1, colW, "IAS 38: Intangible Assets & R&D", [
      "- Research: Always expensed to P&L as incurred.",
      "- Development: Capitalise ONLY if ALL 6 PIRATE criteria are met:",
      "  Probable flow, Intention, Resources, Ability, Tech feasible, Expenses reliable.",
      "- Goodwill: Never amortised; tested annually for impairment."
    ], "Intangibles");

    y1 += this.renderCard(doc, col1X, y1, colW, "IFRS 16: Leases (Lessee Accounting)", [
      "- Day 1: Recognise Right-of-Use (ROU) Asset & Lease Liability.",
      "- Lease Liability = PV of future payments at incremental borrowing rate.",
      "- ROU Asset = Initial liability + prepayments + direct costs + dismantle PV.",
      "- P&L Impact: Straight-line depreciation on ROU + Interest on liability."
    ], "Leases");

    y1 += this.renderCard(doc, col1X, y1, colW, "IAS 36: Impairment of Assets & CGUs", [
      "- Impairment when Carrying Amount > Recoverable Amount.",
      "- Recoverable Amount = Higher of [FV Less Disposal] and [Value in Use].",
      "- CGU Loss Allocation Order: (1) Specifically damaged assets, (2) Goodwill in full, (3) Other non-current assets pro-rata."
    ], "Impairment");

    y1 += this.renderCard(doc, col1X, y1, colW, "IAS 37: Provisions & Contingencies", [
      "- Provision (B/S Liability): Present obligation + Probable outflow (>50%) + Reliable estimate.",
      "- Contingent Liability (Notes): Possible obligation (10%-50%).",
      "- Contingent Asset: Disclose if probable (>50%); recognise if virtually certain (>95%)."
    ], "Liabilities");

    // COLUMN 2: Revenue, Instruments, Tax & Consolidation
    let y2 = 25;
    y2 += this.renderCard(doc, col2X, y2, colW, "IFRS 15: Revenue (5-Step Model)", [
      "- Step 1: Identify contract with customer.",
      "- Step 2: Identify separate performance obligations.",
      "- Step 3: Determine transaction price (variable consideration constrained).",
      "- Step 4: Allocate price based on standalone selling prices.",
      "- Step 5: Recognise revenue as/when performance obligations are satisfied (over time vs point in time)."
    ], "Revenue");

    y2 += this.renderCard(doc, col2X, y2, colW, "IFRS 9: Financial Instruments & ECL", [
      "- Assets: Amortised Cost (SPPI test), FVOCI, or FVTPL.",
      "- Liabilities: Amortised Cost using Effective Interest Rate (EIR).",
      "- ECL 3-Stage Model: Stage 1 (12-mo ECL), Stage 2 (Lifetime ECL for credit deterioration), Stage 3 (Credit-impaired objective default)."
    ], "Instruments");

    y2 += this.renderCard(doc, col2X, y2, colW, "IAS 12: Income Taxes & Deferred Tax", [
      "- Balance Sheet Liability Method: Carrying Value vs Tax Base.",
      "- Taxable Temporary Difference (Asset CV > Tax Base) -> DTL.",
      "- Deductible Temporary Difference (Asset CV < Tax Base) -> DTA.",
      "- Tax Rate: Use enacted/substantively enacted future settlement rate."
    ], "Taxation");

    y2 += this.renderCard(doc, col2X, y2, colW, "IFRS 3 & 10: Consolidation & Goodwill", [
      "- Goodwill = Consideration + NCI at acq - Fair Value Net Assets.",
      "- NCI: Fair Value (Full Goodwill) OR Proportionate Net Assets.",
      "- Unrealised Profit (PUP): Deduct from inventory on B/S.",
      "  * Parent sells: Charge Group Retained Earnings.",
      "  * Sub sells: Charge Sub Retained Earnings (affects NCI).",
      "- Intercompany: Eliminate 100% of internal receivables/payables."
    ], "Consolidation");

    y2 += this.renderCard(doc, col2X, y2, colW, "IAS 1 & Conceptual Framework", [
      "- Fundamental: Relevance (predictive/confirmatory) & Faithful Rep.",
      "- Enhancing: Comparability, Verifiability, Timeliness, Understandability.",
      "- Core Assumptions: Going concern & Accruals concept.",
      "- Current vs Non-Current: Realised/settled within 12 months."
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
    y1 += this.renderCard(doc, col1X, y1, colW, "Weighted Average Cost of Capital (WACC)", [
      "- Formula: WACC = Ke * [E/(E+D)] + Kd*(1-T) * [D/(E+D)]",
      "- Weights: MUST use Market Values (E = Shares * Price, D = Debt MV).",
      "- Cost of Equity (CAPM): Ke = Rf + Beta_e * (Rm - Rf)  [Rm - Rf = ERP]",
      "- Dividend Growth Model: Ke = (D1 / P0) + g   where D1 = D0 * (1 + g)",
      "- Growth: g = (D_now / D_past)^(1/n) - 1   or   g = b * r  (Gordon's)"
    ], "WACC & Ke");

    y1 += this.renderCard(doc, col1X, y1, colW, "Beta Ungearing & Regearing (Asset Beta)", [
      "- Ungearing (Strips Debt Risk): Ba = Be * [E / (E + D * (1 - T))]",
      "- Regearing (Target Debt Risk): Be = Ba * [(E + D * (1 - T)) / E]",
      "- Pure Play Method: Competitor Be -> Ungear to Ba -> Regear to own Be.",
      "- Note: If debt beta (Bd) given: Ba = Be*(E/V) + Bd*(D*(1-T)/V)."
    ], "CAPM Risk");

    y1 += this.renderCard(doc, col1X, y1, colW, "Cost of Debt (Kd) & Convertible Bonds", [
      "- Irredeemable Debt: Kd = i * (1 - T) / P0",
      "- Redeemable Debt: Kd = IRR of Cash flows [-MV, +Interest*(1-T), +Redemption]",
      "- Convertible Debt: Conversion Value = Ratio * Future Share Price.",
      "- Redemption Cash Flow: Higher of Par Redemption or Conversion Value."
    ], "Debt & Yields");

    y1 += this.renderCard(doc, col1X, y1, colW, "Adjusted Present Value (APV) - 3 Steps", [
      "- Step 1: Base Case NPV = Discount all cash flows at ungeared cost (Ke_u).",
      "- Step 2: Financing Effects = PV of Tax Shields [D * T * Kd] - Issue Costs.",
      "- Step 3: APV = Base Case NPV + PV of Tax Shields - Issue Costs.",
      "- Best when: Capital structure changes significantly over project life."
    ], "APV Model");

    y1 += this.renderCard(doc, col1X, y1, colW, "Modigliani-Miller (MM) Capital Structure", [
      "- Without Tax (1958): WACC is constant. Debt mix does not change value.",
      "- With Tax (1963): WACC decreases as debt increases due to tax shield.",
      "- Trade-Off Theory: Balances tax shield against bankruptcy distress.",
      "- Pecking Order: Retained Earnings -> Debt -> Equity Issue (Last)."
    ], "Capital Structure");

    // COLUMN 2: Valuation, Hedging & Working Capital
    let y2 = 25;
    y2 += this.renderCard(doc, col2X, y2, colW, "Business Valuation Models", [
      "- DCF Enterprise Value: EV = Sum PV(FCF_1..n) + [FCF_n*(1+g)/(WACC-g)] / (1+WACC)^n",
      "- Free Cash Flow to Firm: FCFF = EBIT*(1-T) + Depr - Capex - Change in NWC.",
      "- Equity Value = Enterprise Value - Net Debt (Debt - Cash).",
      "- Multiples: P/E (Equity Value), EV/EBITDA (Enterprise Value).",
      "- Asset-Based: Net Realisable Value of assets minus liabilities."
    ], "Valuation");

    y2 += this.renderCard(doc, col2X, y2, colW, "Foreign Exchange Hedging (Forex)", [
      "- Forward Contract: Lock in future exchange rate today (binding).",
      "- Money Market Hedge (4 Steps):",
      "  * Receipt (Foreign Inflow): Borrow Foreign -> Spot -> Deposit Home.",
      "  * Payment (Foreign Outflow): Borrow Home -> Spot -> Deposit Foreign.",
      "- Currency Futures: Standardised exchange contracts with daily margins.",
      "- Currency Options: Right, not obligation, to convert at strike (pays premium)."
    ], "Forex Hedging");

    y2 += this.renderCard(doc, col2X, y2, colW, "Interest Rate Risk Management (AFM)", [
      "- Forward Rate Agreement (FRA): FRA 3v9 locks 6m rate starting in 3m.",
      "- Interest Rate Futures: Price = 100 - Rate. Buy if rates fall, sell if rates rise.",
      "- Interest Rate Collars: Buy Cap (ceiling) + Sell Floor (reduces net cost).",
      "- Interest Rate Swaps: Exchange Fixed rate for Floating (SOFR)."
    ], "Interest Rates");

    y2 += this.renderCard(doc, col2X, y2, colW, "Working Capital & Cash Models", [
      "- Cash Conversion Cycle: CCC = Inventory Days + Receivable Days - Payable Days.",
      "- Economic Order Quantity: EOQ = Sqrt[ (2 * Order Cost * Demand) / Holding Cost ].",
      "- Miller-Orr Model: Spread = 3 * [ (3/4 * Cost * Variance) / Rate ]^(1/3).",
      "  Return Point = Lower Limit + (Spread / 3); Upper = Lower + Spread."
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
      "- Formula: NPV = Sum of PV(Cash Inflows) - Initial Capital Outlay.",
      "- Decision Rule: Accept if NPV > 0. Choose highest NPV for mutually exclusive.",
      "- Why Superior: Directly measures absolute dollar wealth added to shareholders.",
      "- Relevant Cash Flows: Incremental, future, cash-only.",
      "- STRICTLY EXCLUDE: Sunk costs, historical research, general overhead allocations.",
      "- INCLUDE: Opportunity costs (e.g. forgone factory rent), lost sales on existing lines."
    ], "NPV Method");

    y1 += this.renderCard(doc, col1X, y1, colW, "Taxation & Capital Allowances (TAD)", [
      "- Corporation Tax: Tax on operating flows (often lagged 1 yr in exams).",
      "- Tax-Allowable Depreciation (TAD): Creates cash TAX SAVINGS.",
      "  Tax Relief = TAD * Tax Rate (e.g., $100k TAD * 25% tax = $25k cash inflow).",
      "- Balancing Allowance (Disposal): Tax Base > Scrap Proceeds -> Extra tax saving.",
      "- Balancing Charge (Disposal): Scrap Proceeds > Tax Base -> Tax payment on gain."
    ], "Tax Relief");

    y1 += this.renderCard(doc, col1X, y1, colW, "Working Capital & Timing in Models", [
      "- Year 0: Initial cash OUTFLOW for raw materials & buffer inventory.",
      "- Years 1..n: Incremental OUTFLOW if NWC expands, INFLOW if it contracts.",
      "- Project End: 100% of cumulative working capital is RECOVERED as inflow.",
      "- Exam Rule: Never apply tax depreciation or tax relief to working capital."
    ], "Working Capital");

    y1 += this.renderCard(doc, col1X, y1, colW, "Inflation Treatment & Fisher Equation", [
      "- Nominal Cash Flows (includes inflation) -> Discount at Nominal WACC.",
      "- Real Cash Flows (excludes inflation) -> Discount at Real WACC.",
      "- Fisher Equation: (1 + Nominal Rate) = (1 + Real Rate) * (1 + Inflation).",
      "- Exam Trap: If costs inflate at different rates, inflate each item to NOMINAL cash flows and discount at NOMINAL rate."
    ], "Inflation");

    // COLUMN 2: IRR, MIRR, Rationing & Real Options
    let y2 = 25;
    y2 += this.renderCard(doc, col2X, y2, colW, "Internal Rate of Return (IRR)", [
      "- Definition: Exact discount rate where project NPV = 0.",
      "- Interpolation Formula: IRR = A + [ NPV_a / (NPV_a - NPV_b) ] * (B - A)",
      "  (A = lower rate yielding NPV_a, B = higher rate yielding NPV_b).",
      "- Decision: Accept if IRR > Cost of Capital (WACC).",
      "- NPV vs IRR Conflict: Always choose NPV. IRR assumes reinvestment at IRR rate (unrealistic); NPV correctly assumes reinvestment at WACC."
    ], "IRR Model");

    y2 += this.renderCard(doc, col2X, y2, colW, "Modified IRR (MIRR)", [
      "- Overcomes IRR's multiple rates and reinvestment rate flaws.",
      "- Formula: MIRR = [ PV(Returns) / PV(Investment) ]^(1/n) * (1 + Reinvest Rate) - 1",
      "- Assumes intermediate cash flows reinvest at company's true WACC.",
      "- Consistent with NPV ranking for mutually exclusive projects of same scale."
    ], "MIRR");

    y2 += this.renderCard(doc, col2X, y2, colW, "Capital Rationing (Single Period)", [
      "- Divisible Projects (Fractions allowed):",
      "  * Profitability Index: PI = PV of Future Cash Inflows / Initial Outlay.",
      "  * Rank projects by highest PI down until capital budget is exhausted.",
      "- Indivisible Projects (All-or-nothing):",
      "  * Test combinations within budget to find combination with highest total NPV.",
      "- Multi-Period Rationing: Solve using Linear Programming."
    ], "Rationing");

    y2 += this.renderCard(doc, col2X, y2, colW, "Real Options in Advanced Appraisal (AFM)", [
      "- Traditional NPV ignores managerial flexibility during project life.",
      "- Option to Expand: Call option on future growth if pilot succeeds.",
      "- Option to Abandon: Put option to exit and sell assets if demand drops.",
      "- Option to Delay: Call option on waiting for uncertainty to resolve.",
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
