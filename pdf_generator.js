/* ==========================================================================
   FINANCE CAREER BIBLE (ACCA) — COMPREHENSIVE 1-PAGE PDF CHEAT SHEET ENGINE
   Ultra-dense vector 1-page PDF revision sheets with formulas, exam traps & decision rules.
   ========================================================================== */

const PdfCheatSheetEngine = {
  getJsPDF() {
    if (typeof window !== 'undefined' && window.jspdf && window.jspdf.jsPDF) {
      return window.jspdf.jsPDF;
    }
    return null;
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
    doc.rect(0, 0, 210, 24, 'F');

    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(255, 255, 255);
    doc.text("ACCA Financial Reporting (FR / SBR) — Master 1-Page Cheat Sheet", 12, 10);

    doc.setFontSize(8.5);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(148, 163, 184);
    doc.text("Finance Career Bible · Core Standards, Recognition Criteria, Exam Traps & Big 4 Workpaper Rules", 12, 17);

    // Grid layout: 2 Columns
    const col1X = 10;
    const col2X = 108;
    const colW = 92;

    const drawSection = (x, y, h, title, lines, tag = "") => {
      doc.setFillColor(248, 250, 252);
      doc.setDrawColor(203, 213, 225);
      doc.roundedRect(x, y, colW, h, 1.5, 1.5, 'FD');

      doc.setFont("helvetica", "bold");
      doc.setFontSize(8.5);
      doc.setTextColor(79, 70, 229);
      doc.text(title, x + 3, y + 4.5);

      if (tag) {
        doc.setFontSize(7);
        doc.setTextColor(100, 116, 139);
        doc.text(tag, x + colW - 3, y + 4.5, { align: 'right' });
      }

      doc.setFont("helvetica", "normal");
      doc.setFontSize(7.2);
      doc.setTextColor(30, 41, 59);

      let textY = y + 8.5;
      lines.forEach(line => {
        doc.text(line, x + 3, textY, { maxWidth: colW - 6 });
        textY += 3.6;
      });
    };

    // COLUMN 1: Assets & Recognition
    let y1 = 28;
    drawSection(col1X, y1, 28, "IAS 16: Property, Plant & Equipment", [
      "• Initial: Cost + delivery + installation + dismantling obligation (PV).",
      "• Subsequent: Cost Model vs Revaluation Model (surplus to OCI).",
      "• Depreciation: Depreciate over useful life. Land never depreciated.",
      "• Exam Trap: Routine maintenance & training must ALWAYS be expensed."
    ], "PPE & Assets");

    y1 += 31;
    drawSection(col1X, y1, 26, "IAS 2: Inventory Valuation", [
      "• Lower of Cost and Net Realisable Value (NRV).",
      "• Cost formulas allowed: FIFO and AVCO (Weighted Average).",
      "• Strictly Prohibited: LIFO is strictly forbidden under IFRS.",
      "• NRV = Estimated selling price - estimated costs of completion - selling fees."
    ], "Inventories");

    y1 += 29;
    drawSection(col1X, y1, 28, "IAS 38: Intangible Assets & R&D", [
      "• Research costs: Must ALWAYS be expensed to P&L immediately.",
      "• Development: Capitalise ONLY if ALL 6 PIRATE criteria are met:",
      "  Probable flow, Intention, Resources, Ability, Technical feasibility, Expenses reliable.",
      "• Goodwill: Not amortised; tested annually for impairment under IAS 36."
    ], "Intangibles");

    y1 += 31;
    drawSection(col1X, y1, 30, "IFRS 16: Leases (Lessee Accounting)", [
      "• Single on-balance sheet model: Recognize ROU Asset & Lease Liability on Day 1.",
      "• Lease Liability = PV of future lease payments discounted at incremental rate.",
      "• ROU Asset = Initial liability + prepayments + direct initial costs + dismantling PV.",
      "• P&L Impact: Depreciation on ROU Asset (straight-line) + Interest on Liability."
    ], "Leases");

    y1 += 33;
    drawSection(col1X, y1, 32, "IAS 36: Impairment of Assets & CGUs", [
      "• Carrying Amount > Recoverable Amount = Impairment loss charged to P&L.",
      "• Recoverable Amount = Higher of [FV Less Costs of Disposal] and [Value in Use].",
      "• CGU Impairment Order: (1) Specifically damaged assets, (2) Goodwill in full,",
      "  (3) Remaining non-current assets pro-rata across carrying values."
    ], "Impairment");

    y1 += 35;
    drawSection(col1X, y1, 34, "IAS 37: Provisions, Contingent Liabilities & Assets", [
      "• Provision (Recognise on B/S): Present obligation + Probable outflow (>50%) + Reliable estimate.",
      "• Contingent Liability (Disclose in notes): Possible obligation (10%-50%) or estimate unreliable.",
      "• Remote (<10%): No recognition, no disclosure required.",
      "• Contingent Asset: Virtually certain (>95%) = Asset; Probable (>50%) = Disclose in notes."
    ], "Liabilities");

    // COLUMN 2: Revenue, Financial Instruments, Tax & Consolidation
    let y2 = 28;
    drawSection(col2X, y2, 38, "IFRS 15: Revenue from Contracts (5-Step Model)", [
      "• Step 1: Identify contract with customer (commercial substance, rights defined).",
      "• Step 2: Identify separate performance obligations (distinct goods/services).",
      "• Step 3: Determine transaction price (variable consideration constrained).",
      "• Step 4: Allocate transaction price based on stand-alone selling prices.",
      "• Step 5: Recognise revenue when/as performance obligation is satisfied:",
      "  - Over time (customer consumes benefits as provided, e.g. construction/consulting).",
      "  - Point in time (control transfers at delivery/shipment)."
    ], "Revenue");

    y2 += 41;
    drawSection(col2X, y2, 35, "IFRS 9: Financial Instruments & ECL Model", [
      "• Financial Assets: Amortised Cost (solely P&I + hold to collect), FVOCI, or FVTPL.",
      "• Financial Liabilities: Amortised cost using Effective Interest Rate (EIR) or FVTPL.",
      "• Expected Credit Loss (ECL) 3-Stage Model:",
      "  - Stage 1: 12-month ECL (no significant credit deterioration).",
      "  - Stage 2: Lifetime ECL (significant increase in credit risk).",
      "  - Stage 3: Lifetime ECL + credit impaired (objective default occurred)."
    ], "Instruments");

    y2 += 38;
    drawSection(col2X, y2, 28, "IAS 12: Income Taxes & Deferred Tax", [
      "• Balance Sheet Liability Method: Carrying Amount of Asset/Liability vs Tax Base.",
      "• Taxable Temporary Difference (Carrying Asset > Tax Base) → Deferred Tax Liability (DTL).",
      "• Deductible Temporary Difference (Carrying Asset < Tax Base) → Deferred Tax Asset (DTA).",
      "• Tax Rate: Use enacted or substantively enacted tax rate for expected settlement."
    ], "Taxation");

    y2 += 31;
    drawSection(col2X, y2, 38, "IFRS 3 & 10: Consolidation & Business Combinations", [
      "• Goodwill = Consideration Transferred + NCI at acquisition - Net Identifiable Assets (FV).",
      "• NCI Measurement: Fair Value (full goodwill) OR Proportionate share of Net Assets.",
      "• Unrealised Profit (PUP): Deduct from inventory on B/S and adjust selling entity profit.",
      "  - Parent sells to Sub: Deduct PUP from Group Retained Earnings.",
      "  - Sub sells to Parent: Deduct PUP from Sub Retained Earnings (affects NCI).",
      "• Intercompany Balances: Eliminate 100% of intercompany receivables and payables."
    ], "Consolidation");

    y2 += 41;
    drawSection(col2X, y2, 30, "IAS 1 & Conceptual Framework (Qualitative Traits)", [
      "• Fundamental: Relevance (confirmatory & predictive value) and Faithful Representation.",
      "• Enhancing: Comparability, Verifiability, Timeliness, Understandability.",
      "• Going Concern & Accruals: Core underlying assumptions of financial statements.",
      "• Current vs Non-Current split: Obligation/asset settled within 12 months."
    ], "Framework");

    // Footer
    doc.setFillColor(15, 23, 42);
    doc.rect(0, 287, 210, 10, 'F');
    doc.setFontSize(7.5);
    doc.setTextColor(203, 213, 225);
    doc.text("Finance Career Bible · Authored by Ashish · Free Open-Source ACCA Educational Resource · Page 1 of 1", 12, 293);

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
    doc.rect(0, 0, 210, 24, 'F');

    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(255, 255, 255);
    doc.text("ACCA Financial Management (FM / AFM) — Master 1-Page Formula Sheet", 12, 10);

    doc.setFontSize(8.5);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(148, 163, 184);
    doc.text("Finance Career Bible · Cost of Capital, CAPM, Valuation, Hedging & Working Capital Models", 12, 17);

    const col1X = 10;
    const col2X = 108;
    const colW = 92;

    const drawSection = (x, y, h, title, lines, tag = "") => {
      doc.setFillColor(248, 250, 252);
      doc.setDrawColor(203, 213, 225);
      doc.roundedRect(x, y, colW, h, 1.5, 1.5, 'FD');

      doc.setFont("helvetica", "bold");
      doc.setFontSize(8.5);
      doc.setTextColor(79, 70, 229);
      doc.text(title, x + 3, y + 4.5);

      if (tag) {
        doc.setFontSize(7);
        doc.setTextColor(100, 116, 139);
        doc.text(tag, x + colW - 3, y + 4.5, { align: 'right' });
      }

      doc.setFont("helvetica", "normal");
      doc.setFontSize(7.2);
      doc.setTextColor(30, 41, 59);

      let textY = y + 8.5;
      lines.forEach(line => {
        doc.text(line, x + 3, textY, { maxWidth: colW - 6 });
        textY += 3.6;
      });
    };

    // COLUMN 1: Cost of Capital & Capital Structure
    let y1 = 28;
    drawSection(col1X, y1, 35, "Weighted Average Cost of Capital (WACC)", [
      "• Formula: WACC = Ke * [E/(E+D)] + Kd*(1-T) * [D/(E+D)]",
      "• Weights: MUST use Market Values (E = Shares * Price, D = Bonds * Market Price).",
      "• Cost of Equity (CAPM): Ke = Rf + Beta_e * (Rm - Rf)  [where Rm - Rf = ERP]",
      "• Dividend Growth Model: Ke = (D1 / P0) + g   where D1 = D0 * (1 + g)",
      "• Historical Growth: g = (D_now / D_past)^(1/n) - 1   or   g = b * r  (Gordon's)"
    ], "WACC & Ke");

    y1 += 38;
    drawSection(col1X, y1, 34, "Beta Ungearing & Regearing (Asset Beta)", [
      "• Ungearing (Strips Debt Risk): Ba = Be * [E / (E + D * (1 - T))]",
      "• Regearing (Applies Target Debt Risk): Be = Ba * [(E + D * (1 - T)) / E]",
      "• Pure Play Method: Take competitor's Be → Ungear to Ba → Regear to own Be.",
      "• Exam Trap: If debt beta (Bd) is given, Ba = Be*(E/V) + Bd*(D*(1-T)/V)."
    ], "CAPM Risk");

    y1 += 37;
    drawSection(col1X, y1, 32, "Cost of Debt (Kd) & Convertible Bonds", [
      "• Irredeemable Debt: Kd = i * (1 - T) / P0",
      "• Redeemable Debt: Kd = IRR of Cash flows [-Market Price, +Interest*(1-T), +Redemption]",
      "• Convertible Debt: Conversion Value = Conversion Ratio * Future Share Price.",
      "• Redemption Cash Flow: Higher of Par Redemption Value or Conversion Value."
    ], "Debt & Yields");

    y1 += 35;
    drawSection(col1X, y1, 34, "Adjusted Present Value (APV) — 3 Steps", [
      "• Step 1: Base Case NPV = Discount all project cash flows at ungeared cost (Ke_u).",
      "• Step 2: Financing Side Effects = PV of Tax Shields [D * T * Kd] - Issue Costs.",
      "• Step 3: APV = Base Case NPV + PV of Tax Shields - Issue Costs.",
      "• Best when: Capital structure changes significantly over project life."
    ], "APV Model");

    y1 += 37;
    drawSection(col1X, y1, 32, "Modigliani-Miller (MM) Propositions", [
      "• Without Tax (1958): WACC is constant. Gearing does not affect firm value.",
      "• With Tax (1963): WACC decreases as debt increases due to tax shield. 100% debt optimal.",
      "• Trade-Off Theory: Optimal debt balances tax shield benefits against financial distress costs.",
      "• Pecking Order: Retained Earnings (1st) → Debt (2nd) → New Equity (Last)."
    ], "Capital Structure");

    // COLUMN 2: Valuation, Hedging & Working Capital
    let y2 = 28;
    drawSection(col2X, y2, 38, "Business Valuation Models", [
      "• DCF Enterprise Value: EV = Sum of PV(FCF_1..n) + [FCF_n*(1+g) / (WACC-g)] / (1+WACC)^n",
      "• Free Cash Flow to Firm (FCFF): EBIT*(1-T) + Depr - Capex - Change in NWC.",
      "• Equity Value = Enterprise Value - Net Debt (Debt - Cash).",
      "• Multiples: Price/Earnings (Equity), EV/EBITDA (Enterprise Value).",
      "• Asset-Based: Net Realisable Value of assets - liabilities (liquidation floor)."
    ], "Valuation");

    y2 += 41;
    drawSection(col2X, y2, 38, "Foreign Exchange Risk Management (Hedging)", [
      "• Forward Contract: Lock in future exchange rate today. Binding obligation.",
      "• Money Market Hedge (4 Steps):",
      "  - Receipt (Future Foreign Inflow): Borrow Foreign → Convert Spot → Deposit Home.",
      "  - Payment (Future Foreign Outflow): Borrow Home → Convert Spot → Deposit Foreign.",
      "• Currency Futures: Exchange-traded, standardised contracts. Margin required.",
      "• Currency Options: Right, not obligation, to buy/sell at strike. Pays premium."
    ], "Forex Hedging");

    y2 += 41;
    drawSection(col2X, y2, 35, "Interest Rate Risk Management (AFM)", [
      "• Forward Rate Agreement (FRA): FRA 3v9 locks 6-month borrowing rate starting in 3 months.",
      "• Interest Rate Futures: Price = 100 - Interest Rate. Buy if rates fall, sell if rates rise.",
      "• Interest Rate Collars: Buy Cap (protects ceiling) + Sell Floor (reduces net premium).",
      "• Interest Rate Swaps: Exchange Fixed rate for Floating (LIBOR/SOFR) between counterparties."
    ], "Interest Rates");

    y2 += 38;
    drawSection(col2X, y2, 36, "Working Capital & Cash Management Models", [
      "• Cash Conversion Cycle: CCC = Inventory Days + Receivable Days - Payable Days.",
      "• Economic Order Quantity (EOQ): EOQ = Sqrt[ (2 * Co * D) / Ch ].",
      "• Miller-Orr Model (Volatile Cash):",
      "  - Spread = 3 * [ (3/4 * Transaction Cost * Variance) / Interest Rate ]^(1/3).",
      "  - Return Point = Lower Limit + (Spread / 3); Upper Limit = Lower Limit + Spread."
    ], "Treasury");

    // Footer
    doc.setFillColor(15, 23, 42);
    doc.rect(0, 287, 210, 10, 'F');
    doc.setFontSize(7.5);
    doc.setTextColor(203, 213, 225);
    doc.text("Finance Career Bible · Authored by Ashish · Free Open-Source ACCA Educational Resource · Page 1 of 1", 12, 293);

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
    doc.rect(0, 0, 210, 24, 'F');

    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(255, 255, 255);
    doc.text("ACCA Investment Appraisal — Master 1-Page Decision Rules Sheet", 12, 10);

    doc.setFontSize(8.5);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(148, 163, 184);
    doc.text("Finance Career Bible · Capital Budgeting, NPV, Inflation, Tax Allowances, IRR & Real Options", 12, 17);

    const col1X = 10;
    const col2X = 108;
    const colW = 92;

    const drawSection = (x, y, h, title, lines, tag = "") => {
      doc.setFillColor(248, 250, 252);
      doc.setDrawColor(203, 213, 225);
      doc.roundedRect(x, y, colW, h, 1.5, 1.5, 'FD');

      doc.setFont("helvetica", "bold");
      doc.setFontSize(8.5);
      doc.setTextColor(79, 70, 229);
      doc.text(title, x + 3, y + 4.5);

      if (tag) {
        doc.setFontSize(7);
        doc.setTextColor(100, 116, 139);
        doc.text(tag, x + colW - 3, y + 4.5, { align: 'right' });
      }

      doc.setFont("helvetica", "normal");
      doc.setFontSize(7.2);
      doc.setTextColor(30, 41, 59);

      let textY = y + 8.5;
      lines.forEach(line => {
        doc.text(line, x + 3, textY, { maxWidth: colW - 6 });
        textY += 3.6;
      });
    };

    // COLUMN 1: NPV, Tax, Working Capital & Cash Flows
    let y1 = 28;
    drawSection(col1X, y1, 38, "Net Present Value (NPV) — Gold Standard", [
      "• Formula: NPV = Sum of PV(Cash Inflows) - Initial Capital Outlay.",
      "• Decision Rule: Accept if NPV > 0. Choose highest NPV for mutually exclusive.",
      "• Why Superior: Directly measures absolute dollar wealth added to shareholders.",
      "• Relevant Cash Flows: Incremental, future, cash-only.",
      "• STRICTLY EXCLUDE: Sunk costs, historical research, general overhead allocations.",
      "• INCLUDE: Opportunity costs (e.g. forgone factory rent), lost sales on existing lines."
    ], "NPV Method");

    y1 += 41;
    drawSection(col1X, y1, 38, "Taxation & Capital Allowances (Writing Down)", [
      "• Corporation Tax: Tax paid on operating cash flows (often lagged by 1 year in exams).",
      "• Tax-Allowable Depreciation (TAD): Not an actual cash flow, but creates TAX SAVING.",
      "  Tax Relief = TAD * Tax Rate (e.g., $100k TAD * 25% tax = $25k cash inflow).",
      "• Balancing Allowance (Disposal): Tax Base > Scrap Proceeds → Tax saving on difference.",
      "• Balancing Charge (Disposal): Scrap Proceeds > Tax Base → Extra tax payment on gain."
    ], "Tax Relief");

    y1 += 41;
    drawSection(col1X, y1, 34, "Working Capital & Timing in Project Models", [
      "• Initial Requirement (Year 0): Cash OUTFLOW for raw materials / buffer cash.",
      "• Incremental Changes (Years 1..n): Cash OUTFLOW when NWC increases, INFLOW if decreases.",
      "• Project Termination (Final Year): 100% of cumulative working capital is RECOVERED as inflow.",
      "• Exam Rule: Never apply tax depreciation or tax relief to working capital."
    ], "Working Capital");

    y1 += 37;
    drawSection(col1X, y1, 36, "Inflation Treatment & The Fisher Equation", [
      "• Nominal Cash Flows (includes specific inflation) → Discount at Nominal Discount Rate.",
      "• Real Cash Flows (excludes inflation) → Discount at Real Discount Rate.",
      "• Fisher Equation: (1 + Nominal Rate) = (1 + Real Rate) * (1 + General Inflation).",
      "• Exam Trap: If different line items inflate at different rates, inflate each item to NOMINAL",
      "  cash flows and discount using the NOMINAL WACC."
    ], "Inflation");

    // COLUMN 2: IRR, MIRR, Capital Rationing & Real Options
    let y2 = 28;
    drawSection(col2X, y2, 38, "Internal Rate of Return (IRR & Linear Interpolation)", [
      "• Definition: The exact discount rate where project NPV = 0.",
      "• Interpolation Formula: IRR = A + [ NPV_a / (NPV_a - NPV_b) ] * (B - A)",
      "  (where A is lower rate yielding NPV_a, and B is higher rate yielding NPV_b).",
      "• Decision Rule: Accept if IRR > Cost of Capital (WACC).",
      "• NPV vs IRR Conflict: Always choose NPV. IRR assumes reinvestment at IRR rate",
      "  (unrealistic); NPV correctly assumes reinvestment at the company's WACC."
    ], "IRR Model");

    y2 += 41;
    drawSection(col2X, y2, 34, "Modified IRR (MIRR)", [
      "• Overcomes IRR's multiple rates & reinvestment assumption flaw.",
      "• Formula: MIRR = [ PV(Returns) / PV(Investment) ]^(1/n) * (1 + Reinvestment Rate) - 1",
      "• Assumes intermediate cash flows are reinvested at company's true cost of capital.",
      "• Gives consistent ranking with NPV for mutually exclusive projects of same scale."
    ], "MIRR");

    y2 += 37;
    drawSection(col2X, y2, 38, "Capital Rationing (Single Period)", [
      "• Divisible Projects (Can take fractions):",
      "  - Calculate Profitability Index: PI = PV of Future Cash Inflows / Initial Outlay.",
      "  - Rank projects by highest PI down until capital budget is exhausted.",
      "• Indivisible Projects (All-or-nothing):",
      "  - Use trial-and-error combinations within budget constraint to maximise total NPV.",
      "• Multi-Period Rationing: Formulate as Linear Programming model."
    ], "Rationing");

    y2 += 41;
    drawSection(col2X, y2, 36, "Real Options in Advanced Appraisal (AFM)", [
      "• Traditional NPV ignores managerial flexibility after project commencement.",
      "• Option to Expand: Call option on subsequent growth phases if pilot succeeds.",
      "• Option to Abandon: Put option to sell assets if cash flows underperform.",
      "• Option to Delay: Call option on waiting for market uncertainty to resolve.",
      "• Strategic NPV = Standard Static NPV + Real Option Value."
    ], "Real Options");

    // Footer
    doc.setFillColor(15, 23, 42);
    doc.rect(0, 287, 210, 10, 'F');
    doc.setFontSize(7.5);
    doc.setTextColor(203, 213, 225);
    doc.text("Finance Career Bible · Authored by Ashish · Free Open-Source ACCA Educational Resource · Page 1 of 1", 12, 293);

    doc.save("ACCA_Investment_Appraisal_MasterSheet.pdf");
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PdfCheatSheetEngine };
}
