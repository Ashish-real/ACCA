/* ==========================================================================
   FINANCE CAREER BIBLE (ACCA) — MODULAR FINANCIAL CALCULATION ENGINE
   Standalone calculation logic for NPV, WACC, Financial Ratios, DCF & Sensitivity.
   ========================================================================== */

const FinancialEngine = {
  formatCurrency(value) {
    if (isNaN(value) || value === null || !isFinite(value)) return "—";
    return "$" + Number(value).toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
  },

  formatPercent(value, decimals = 2) {
    if (isNaN(value) || value === null || !isFinite(value)) return "—";
    return (Number(value) * 100).toFixed(decimals) + "%";
  },

  // 1. Chapter 15: Investment Appraisal (NPV)
  calculateNPV(investment, annualCashflow, discountRatePct, projectYears) {
    const rate = Number(discountRatePct) / 100;
    const years = Number(projectYears);
    const initialOutlay = Number(investment);
    const cashflow = Number(annualCashflow);

    let totalPV = 0;
    const schedule = [];

    for (let yr = 1; yr <= years; yr++) {
      const discountFactor = 1 / Math.pow(1 + rate, yr);
      const pv = cashflow * discountFactor;
      totalPV += pv;
      schedule.push({
        year: yr,
        cashflow: cashflow,
        discountFactor: discountFactor,
        pv: pv
      });
    }

    const npv = totalPV - initialOutlay;
    return {
      npv,
      totalPV,
      initialOutlay,
      schedule,
      isAccepted: npv > 0,
      formattedNPV: this.formatCurrency(npv),
      formattedPV: this.formatCurrency(totalPV)
    };
  },

  // 2. Chapter 16: Cost of Capital (WACC)
  calculateWACC(equityValue, debtValue, costOfEquityPct, pretaxCostOfDebtPct, taxRatePct) {
    const E = Number(equityValue);
    const D = Number(debtValue);
    const Ke = Number(costOfEquityPct) / 100;
    const KdPre = Number(pretaxCostOfDebtPct) / 100;
    const T = Number(taxRatePct) / 100;

    const V = E + D;
    if (V <= 0) return { wacc: 0, weightE: 0, weightD: 0, kdAftertax: 0 };

    const weightE = E / V;
    const weightD = D / V;
    const kdAftertax = KdPre * (1 - T);
    const wacc = (weightE * Ke) + (weightD * kdAftertax);

    return {
      wacc,
      weightE,
      weightD,
      kdAftertax,
      formattedWACC: this.formatPercent(wacc, 2),
      formattedKdAftertax: this.formatPercent(kdAftertax, 2),
      formattedWeightE: this.formatPercent(weightE, 1),
      formattedWeightD: this.formatPercent(weightD, 1)
    };
  },

  // 3. Chapter 19: Financial Analysis Ratios
  calculateRatios(revenue, grossProfit, operatingProfit, currentAssets, currentLiabilities) {
    const rev = Number(revenue);
    const gp = Number(grossProfit);
    const ebit = Number(operatingProfit);
    const ca = Number(currentAssets);
    const cl = Number(currentLiabilities);

    const grossMargin = rev > 0 ? (gp / rev) : 0;
    const operatingMargin = rev > 0 ? (ebit / rev) : 0;
    const currentRatio = cl > 0 ? (ca / cl) : 0;

    return {
      grossMargin,
      operatingMargin,
      currentRatio,
      formattedGrossMargin: this.formatPercent(grossMargin, 2),
      formattedOperatingMargin: this.formatPercent(operatingMargin, 2),
      formattedCurrentRatio: currentRatio > 0 ? currentRatio.toFixed(2) + "x" : "—"
    };
  },

  // 4. Chapter 20: DCF Valuation
  calculateDCF(baseRevenue, growthPct, ebitdaMarginPct, taxRatePct, waccPct, terminalGrowthPct, forecastYears) {
    const rev = Number(baseRevenue);
    const growth = Number(growthPct) / 100;
    const margin = Number(ebitdaMarginPct) / 100;
    const tax = Number(taxRatePct) / 100;
    const wacc = Number(waccPct) / 100;
    const g = Number(terminalGrowthPct) / 100;
    const years = Number(forecastYears);

    if (wacc <= g) {
      return { error: "WACC must exceed terminal growth rate (WACC > g)", enterpriseValue: null };
    }

    let pvExplicit = 0;
    let projRev = rev;
    let lastFCF = 0;
    const projectedFCFs = [];

    for (let yr = 1; yr <= years; yr++) {
      projRev *= (1 + growth);
      const ebitda = projRev * margin;
      const nopat = ebitda * (1 - tax);
      const fcf = nopat;
      lastFCF = fcf;

      const df = 1 / Math.pow(1 + wacc, yr);
      const pv = fcf * df;
      pvExplicit += pv;

      projectedFCFs.push({
        year: yr,
        revenue: projRev,
        ebitda: ebitda,
        fcf: fcf,
        pv: pv
      });
    }

    const terminalValue = lastFCF * (1 + g) / (wacc - g);
    const terminalPV = terminalValue / Math.pow(1 + wacc, years);
    const enterpriseValue = pvExplicit + terminalPV;

    return {
      enterpriseValue,
      pvExplicit,
      terminalValue,
      terminalPV,
      projectedFCFs,
      formattedEV: this.formatCurrency(enterpriseValue),
      formattedPVExplicit: this.formatCurrency(pvExplicit),
      formattedTV: this.formatCurrency(terminalValue),
      formattedTerminalPV: this.formatCurrency(terminalPV)
    };
  },

  // DCF Sensitivity Matrix (WACC x Terminal Growth)
  generateSensitivity(baseRevenue, growthPct, ebitdaMarginPct, taxRatePct, forecastYears, waccRates = [0.08, 0.09, 0.10, 0.11, 0.12], growthRates = [0.02, 0.03, 0.04, 0.05]) {
    const matrix = [];

    waccRates.forEach(w => {
      const row = { wacc: w, values: [] };
      growthRates.forEach(g => {
        const res = this.calculateDCF(baseRevenue, growthPct, ebitdaMarginPct, taxRatePct, w * 100, g * 100, forecastYears);
        row.values.push({
          growth: g,
          val: res.enterpriseValue,
          formatted: res.enterpriseValue !== null ? this.formatCurrency(res.enterpriseValue) : "N/A"
        });
      });
      matrix.push(row);
    });

    return {
      waccRates,
      growthRates,
      matrix
    };
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { FinancialEngine };
}
