/* ==========================================================================
   FINANCE CAREER BIBLE (ACCA) — CLIENT-SIDE 1-PAGE PDF CHEAT SHEET ENGINE
   Generates condensed vector 1-page PDF cheat sheets for FR, FM, and Investment Appraisal.
   ========================================================================== */

const PdfCheatSheetEngine = {
  getJsPDF() {
    if (typeof window !== 'undefined' && window.jspdf && window.jspdf.jsPDF) {
      return window.jspdf.jsPDF;
    }
    return null;
  },

  // 1. Financial Reporting (FR / SBR) Cheat Sheet
  generateFRPDF() {
    const jsPDF = this.getJsPDF();
    if (!jsPDF) {
      alert("PDF library is still loading. Please try again in a few seconds.");
      return;
    }

    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

    // Header Banner
    doc.setFillColor(17, 24, 39);
    doc.rect(0, 0, 210, 28, 'F');

    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.setTextColor(255, 255, 255);
    doc.text("ACCA Financial Reporting (FR) — 1-Page Revision Sheet", 14, 13);

    doc.setFontSize(9.5);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(203, 213, 225);
    doc.text("Finance Career Bible · Core IFRS Accounting Standards & Recognition Rules", 14, 21);

    let y = 38;
    const standards = [
      ["IAS 1: Presentation of Financial Statements", "Fair presentation, going concern, accruals concept. Requires current vs non-current split (≤12 months)."],
      ["IAS 2: Inventories", "Valued at lower of Cost and Net Realisable Value (NRV). Cost formulas: FIFO or AVCO. LIFO strictly prohibited."],
      ["IAS 12: Income Taxes (Deferred Tax)", "Balance sheet liability method: Taxable temporary differences create DTLs; deductible differences create DTAs."],
      ["IAS 16: Property, Plant & Equipment", "Initial recognition at cost + dismantling obligations. Subsequent measurement: Cost Model or Revaluation Model."],
      ["IAS 36: Impairment of Assets", "Carrying amount > Recoverable amount (higher of FVLCD and Value in Use). Annual impairment test for Goodwill."],
      ["IAS 37: Provisions & Contingencies", "Recognize provision only if: Present obligation + Probable outflow (>50%) + Reliable estimate possible."],
      ["IAS 38: Intangible Assets", "Research must always be expensed. Development costs capitalized only when all 6 PIRATE criteria are satisfied."],
      ["IFRS 15: Revenue from Contracts", "5-Step Model: (1) Contract, (2) Performance obligations, (3) Price, (4) Allocate price, (5) Recognize revenue."],
      ["IFRS 16: Leases", "Lessees recognize Right-of-Use (ROU) Asset and Lease Liability at present value of lease payments on Day 1."]
    ];

    standards.forEach(([std, desc]) => {
      doc.setFillColor(241, 245, 249);
      doc.roundedRect(12, y - 4, 186, 17, 2, 2, 'F');

      doc.setFont("helvetica", "bold");
      doc.setFontSize(10.5);
      doc.setTextColor(79, 70, 229);
      doc.text(std, 16, y + 1);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(51, 65, 85);
      doc.text(desc, 16, y + 7, { maxWidth: 178 });
      y += 21;
    });

    // Footer
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184);
    doc.text("Finance Career Bible · Authored by Ashish · Free Open-Source ACCA Educational Resource", 14, 287);

    doc.save("ACCA_FR_Revision_CheatSheet.pdf");
  },

  // 2. Financial Management (FM / AFM) Cheat Sheet
  generateFMPDF() {
    const jsPDF = this.getJsPDF();
    if (!jsPDF) {
      alert("PDF library is still loading. Please try again in a few seconds.");
      return;
    }

    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

    // Header Banner
    doc.setFillColor(17, 24, 39);
    doc.rect(0, 0, 210, 28, 'F');

    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.setTextColor(255, 255, 255);
    doc.text("ACCA Financial Management (FM) — 1-Page Formula Sheet", 14, 13);

    doc.setFontSize(9.5);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(203, 213, 225);
    doc.text("Finance Career Bible · Core Corporate Finance, Valuation & Treasury Formulas", 14, 21);

    let y = 38;
    const formulas = [
      ["WACC (Weighted Average Cost of Capital)", "WACC = Ke * [E / (E + D)] + Kd * (1 - T) * [D / (E + D)]"],
      ["CAPM (Cost of Equity)", "Ke = Rf + Beta * (Rm - Rf)   where (Rm - Rf) = Equity Risk Premium"],
      ["Dividend Growth Model (Gordon)", "Ke = (D1 / P0) + g   where   D1 = D0 * (1 + g)"],
      ["Asset Beta (Ungearing Formula)", "Ba = Be * [E / (E + D * (1 - T))]   (strips out financial debt risk)"],
      ["DCF Terminal Value (Perpetuity)", "TV = [FCF * (1 + g)] / (WACC - g)"],
      ["Adjusted Present Value (APV)", "APV = Base-Case All-Equity NPV + PV of Debt Tax Shields - Issue Costs"],
      ["Working Capital & Cash Conversion Cycle", "CCC = Days Inventory + Days Receivables - Days Payables"]
    ];

    formulas.forEach(([title, formula]) => {
      doc.setFillColor(241, 245, 249);
      doc.roundedRect(12, y - 4, 186, 17, 2, 2, 'F');

      doc.setFont("helvetica", "bold");
      doc.setFontSize(10.5);
      doc.setTextColor(79, 70, 229);
      doc.text(title, 16, y + 1);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(51, 65, 85);
      doc.text(formula, 16, y + 7, { maxWidth: 178 });
      y += 21;
    });

    // Footer
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184);
    doc.text("Finance Career Bible · Authored by Ashish · Free Open-Source ACCA Educational Resource", 14, 287);

    doc.save("ACCA_FM_Formula_CheatSheet.pdf");
  },

  // 3. Investment Appraisal Cheat Sheet
  generateInvestmentPDF() {
    const jsPDF = this.getJsPDF();
    if (!jsPDF) {
      alert("PDF library is still loading. Please try again in a few seconds.");
      return;
    }

    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

    // Header Banner
    doc.setFillColor(17, 24, 39);
    doc.rect(0, 0, 210, 28, 'F');

    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.setTextColor(255, 255, 255);
    doc.text("ACCA Investment Appraisal — 1-Page Decision Rules Sheet", 14, 13);

    doc.setFontSize(9.5);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(203, 213, 225);
    doc.text("Finance Career Bible · Capital Budgeting, NPV, IRR & Payback Criteria", 14, 21);

    let y = 38;
    const methods = [
      ["Net Present Value (NPV)", "NPV = Sum of PV inflows - Initial Investment. Accept project if NPV > 0. Maximizes shareholder wealth."],
      ["Internal Rate of Return (IRR)", "Discount rate where NPV = 0. Linear interpolation: IRR = A + [a / (a - b)] * (B - A). Accept if IRR > WACC."],
      ["Payback Period", "Time taken for cumulative nominal cash inflows to recover initial outlay. Favors early liquidity."],
      ["Discounted Payback Period", "Time taken for cumulative discounted cash flows to recover initial investment, incorporating cost of capital."],
      ["Profitability Index (PI)", "PI = PV of Future Cash Inflows / Initial Outlay. Essential decision metric under single-period capital rationing."],
      ["Modified IRR (MIRR)", "Overcomes multiple IRR problem by assuming reinvestment at cost of capital: MIRR = (PV of return / PV of investment)^(1/n) - 1"]
    ];

    methods.forEach(([name, desc]) => {
      doc.setFillColor(241, 245, 249);
      doc.roundedRect(12, y - 4, 186, 17, 2, 2, 'F');

      doc.setFont("helvetica", "bold");
      doc.setFontSize(10.5);
      doc.setTextColor(79, 70, 229);
      doc.text(name, 16, y + 1);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(51, 65, 85);
      doc.text(desc, 16, y + 7, { maxWidth: 178 });
      y += 21;
    });

    // Footer
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184);
    doc.text("Finance Career Bible · Authored by Ashish · Free Open-Source ACCA Educational Resource", 14, 287);

    doc.save("ACCA_Investment_Appraisal_CheatSheet.pdf");
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PdfCheatSheetEngine };
}
