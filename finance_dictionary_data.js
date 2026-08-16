/* ==========================================================================
   FINANCE CAREER BIBLE (ACCA) — MASTER FINANCE & IFRS DICTIONARY
   100+ Hyper-Specific, Independent Definitions, IFRS Standards, Valuation Models & Deal Examples.
   Every term is uniquely defined to eliminate cross-concept definition collisions.
   ========================================================================== */

const FINANCE_DICTIONARY = [
  // ── INVENTORY & ASSET ACCOUNTING (IAS 2 & PPE) ──
  {
    id: "fifo",
    term: "FIFO (First-In, First-Out Cost Formula)",
    category: "Inventory Accounting",
    paper: "FA / FR",
    chapter: "Finance_Career_Bible_Chapter9.html",
    chapterLabel: "Ch 09: Inventory Accounting",
    definition: "An inventory valuation assumption where the oldest items purchased are assumed to be sold first. Ending inventory on the balance sheet is valued at the most recent purchase prices.",
    example: "In periods of rising prices (inflation), FIFO produces higher ending inventory valuation, lower Cost of Goods Sold (COGS), and higher reported net profit.",
    aliases: ["FIFO", "First-In First-Out", "First In First Out"]
  },
  {
    id: "nrv",
    term: "Net Realisable Value (NRV)",
    category: "Inventory Accounting",
    paper: "FA / FR",
    chapter: "Finance_Career_Bible_Chapter9.html",
    chapterLabel: "Ch 09: Inventory Accounting",
    definition: "The estimated selling price in the ordinary course of business, less the estimated costs of completion and the estimated costs necessary to make the sale: NRV = Selling Price - Completion Costs - Selling Expenses.",
    example: "Goods bought for $100 with a damaged market value of $80 and repair costs of $10 have an NRV of $70, requiring a $30 write-down from cost.",
    aliases: ["Net Realisable Value", "NRV", "Net Realizable Value"]
  },
  {
    id: "avco",
    term: "AVCO (Weighted Average Cost Formula)",
    category: "Inventory Accounting",
    paper: "FA / FR",
    chapter: "Finance_Career_Bible_Chapter9.html",
    chapterLabel: "Ch 09: Inventory Accounting",
    definition: "Calculates the cost of each inventory item by dividing the total cost of goods available for sale by the total number of units available. Smooths out price fluctuations over the accounting period.",
    example: "Buying 100 units at $10 and 100 units at $14 gives a weighted average unit cost of ($1,000 + $1,400) / 200 = $12 per unit.",
    aliases: ["AVCO", "Weighted Average Cost", "Average Cost Method"]
  },
  {
    id: "ias-2",
    term: "IAS 2 Inventories (Standard)",
    category: "IFRS Standard",
    paper: "FA / FR",
    chapter: "Finance_Career_Bible_Chapter9.html",
    chapterLabel: "Ch 09: Inventory Accounting",
    definition: "The overarching IFRS standard requiring inventories to be measured at the lower of Cost and Net Realisable Value (NRV). Prohibits the LIFO method and mandates FIFO or Weighted Average Cost.",
    example: "Requires inventory write-downs to be recognized immediately in P&L and allows reversals if selling prices subsequently recover.",
    aliases: ["IAS 2", "IAS 2 Inventories", "Lower of Cost and NRV"]
  },

  // ── LEASES (IFRS 16) ──
  {
    id: "rou-asset",
    term: "Right-of-Use Asset (ROU Asset)",
    category: "Lease Accounting",
    paper: "FR / SBR",
    chapter: "Finance_Career_Bible_Chapter4.html",
    chapterLabel: "Ch 04: IFRS Fundamentals",
    definition: "A balance sheet asset representing a lessee's right to control the use of an identified asset over the lease term. Measured initially at lease liability plus initial direct costs, and depreciated straight-line.",
    example: "Leasing corporate office space for 5 years creates an ROU Asset capitalized on day one and depreciated over the 5-year lease term.",
    aliases: ["Right-of-Use Asset", "ROU Asset", "Right of Use Asset"]
  },
  {
    id: "lease-liability",
    term: "Lease Liability",
    category: "Lease Accounting",
    paper: "FR / SBR",
    chapter: "Finance_Career_Bible_Chapter4.html",
    chapterLabel: "Ch 04: IFRS Fundamentals",
    definition: "A financial liability recognized by a lessee representing the present value of future lease payments discounted at the interest rate implicit in the lease (or the lessee's incremental borrowing rate).",
    example: "5 annual lease payments of $100k discounted at 6% results in an initial Lease Liability of $421,236, amortized annually with interest expense.",
    aliases: ["Lease Liability", "Lease Liabilities", "Lease Obligation"]
  },
  {
    id: "ifrs-16",
    term: "IFRS 16 Leases (Standard)",
    category: "IFRS Standard",
    paper: "FR / SBR",
    chapter: "Finance_Career_Bible_Chapter4.html",
    chapterLabel: "Ch 04: IFRS Fundamentals",
    definition: "The international lease accounting standard that eliminated off-balance-sheet operating leases for lessees, requiring almost all leases to be capitalized on the balance sheet as ROU Assets and Lease Liabilities.",
    example: "Transformed retail and airline balance sheets by bringing billions in store and aircraft leases onto reported assets and interest-bearing debt.",
    aliases: ["IFRS 16", "IFRS 16 Leases", "Lease Accounting Standard"]
  },

  // ── FINANCIAL INSTRUMENTS & IMPAIRMENT (IFRS 9 & IAS 36) ──
  {
    id: "ecl",
    term: "Expected Credit Loss (ECL)",
    category: "Financial Instruments",
    paper: "FR / SBR",
    chapter: "Finance_Career_Bible_Chapter10.html",
    chapterLabel: "Ch 10: Financial Instruments",
    definition: "A forward-looking credit loss impairment model under IFRS 9. Requires entities to recognize credit loss provisions based on historical default rates and macroeconomic forecasts before actual default occurs.",
    example: "Stage 1 requires a 12-month ECL provision on day one; a significant increase in credit risk transitions the asset to Stage 2 requiring a Lifetime ECL provision.",
    aliases: ["Expected Credit Loss", "ECL", "Lifetime ECL", "12-month ECL"]
  },
  {
    id: "amortised-cost",
    term: "Amortised Cost (Financial Assets)",
    category: "Financial Instruments",
    paper: "FR / SBR",
    chapter: "Finance_Career_Bible_Chapter10.html",
    chapterLabel: "Ch 10: Financial Instruments",
    definition: "The amount at which a financial asset or liability is measured at initial recognition minus principal repayments, plus/minus cumulative amortization using the Effective Interest Rate (EIR) method.",
    example: "A corporate bond purchased at a discount is recorded at cost and accreted upward to par value over its maturity using the effective interest method.",
    aliases: ["Amortised Cost", "Amortized Cost", "Effective Interest Rate", "EIR Method"]
  },
  {
    id: "ifrs-9",
    term: "IFRS 9 Financial Instruments (Standard)",
    category: "IFRS Standard",
    paper: "FR / SBR",
    chapter: "Finance_Career_Bible_Chapter10.html",
    chapterLabel: "Ch 10: Financial Instruments",
    definition: "The comprehensive standard governing classification and measurement of financial assets (Amortised Cost, FVOCI, FVTPL), financial liabilities, hedge accounting, and ECL impairment.",
    example: "Replaced IAS 39's incurred loss model with the proactive Expected Credit Loss model to prevent delayed loan loss provisioning during banking crises.",
    aliases: ["IFRS 9", "IFRS 9 Financial Instruments"]
  },
  {
    id: "impairment-loss",
    term: "Impairment Loss & Recoverable Amount",
    category: "IFRS Standard",
    paper: "FR / SBR",
    chapter: "Finance_Career_Bible_Chapter8.html",
    chapterLabel: "Ch 08: PPE & Depreciation",
    definition: "The amount by which an asset's carrying value exceeds its Recoverable Amount (which is the higher of Fair Value Less Costs of Disposal and Value in Use). The loss is expensed immediately in P&L.",
    example: "A production line with $500k book value and $420k Recoverable Amount triggers an immediate $80,000 impairment loss.",
    aliases: ["Impairment Loss", "Recoverable Amount", "Value in Use", "VIU", "FVLCD", "Cash-Generating Unit", "CGU"]
  },
  {
    id: "ias-36",
    term: "IAS 36 Impairment of Assets (Standard)",
    category: "IFRS Standard",
    paper: "FR / SBR",
    chapter: "Finance_Career_Bible_Chapter8.html",
    chapterLabel: "Ch 08: PPE & Depreciation",
    definition: "The standard prescribing procedures to ensure assets are carried at no more than their recoverable amount. Mandates annual impairment tests for Goodwill and indefinite-life intangibles.",
    example: "Requires allocated goodwill to be tested at the Cash-Generating Unit (CGU) level at least once a year.",
    aliases: ["IAS 36", "IAS 36 Impairment", "Impairment of Assets"]
  },

  // ── TAXATION & DEFERRED TAX (IAS 12 & TX) ──
  {
    id: "deferred-tax-liability",
    term: "Deferred Tax Liability (DTL)",
    category: "Tax Accounting",
    paper: "FR / SBR",
    chapter: "Finance_Career_Bible_Chapter10.html",
    chapterLabel: "Ch 10: Tax Planning",
    definition: "The amount of income taxes payable in future periods in respect of Taxable Temporary Differences (typically when accounting asset carrying amount exceeds the tax base).",
    example: "Claiming 100% first-year tax capital allowances reduces current tax now but creates a DTL for higher future tax payments as accounting depreciation is recognized.",
    aliases: ["Deferred Tax Liability", "DTL", "Taxable Temporary Difference"]
  },
  {
    id: "deferred-tax-asset",
    term: "Deferred Tax Asset (DTA)",
    category: "Tax Accounting",
    paper: "FR / SBR",
    chapter: "Finance_Career_Bible_Chapter10.html",
    chapterLabel: "Ch 10: Tax Planning",
    definition: "The amount of income taxes recoverable in future periods in respect of Deductible Temporary Differences, carryforward of unused tax losses, and tax credits.",
    example: "A restructuring provision expensed under IAS 37 that is only tax-deductible when paid creates a DTA (carrying amount of liability > tax base).",
    aliases: ["Deferred Tax Asset", "DTA", "Deductible Temporary Difference"]
  },
  {
    id: "ias-12",
    term: "IAS 12 Income Taxes (Standard)",
    category: "IFRS Standard",
    paper: "FR / SBR",
    chapter: "Finance_Career_Bible_Chapter10.html",
    chapterLabel: "Ch 10: Tax Planning",
    definition: "Governs current and deferred tax accounting using the balance sheet liability method, comparing asset and liability carrying values against their respective tax bases.",
    example: "Requires re-measuring deferred tax balances whenever corporate income tax rates are substantively enacted by parliament.",
    aliases: ["IAS 12", "IAS 12 Income Taxes", "Deferred Tax Standard"]
  },

  // ── REVENUE & INTANGIBLES (IFRS 15 & IAS 38) ──
  {
    id: "performance-obligation",
    term: "Performance Obligation (IFRS 15)",
    category: "Revenue Accounting",
    paper: "FR / SBR",
    chapter: "Finance_Career_Bible_Chapter7.html",
    chapterLabel: "Ch 07: Revenue Recognition",
    definition: "A promise in a contract with a customer to transfer either a distinct good/service or a series of distinct goods/services. Revenue is recognized only when the obligation is satisfied.",
    example: "A telecommunications bundle includes two distinct performance obligations: the smartphone handset (point in time) and network service (over time).",
    aliases: ["Performance Obligation", "Distinct Good or Service", "Satisfied Over Time"]
  },
  {
    id: "ifrs-15",
    term: "IFRS 15 Revenue from Contracts (Standard)",
    category: "IFRS Standard",
    paper: "FR / SBR",
    chapter: "Finance_Career_Bible_Chapter7.html",
    chapterLabel: "Ch 07: Revenue Recognition",
    definition: "The comprehensive 5-step revenue recognition standard: (1) Identify contract, (2) Identify performance obligations, (3) Determine price, (4) Allocate price, (5) Recognize revenue.",
    example: "Prevents upfront revenue recognition on long-term software support contracts, requiring allocation across standalone selling prices.",
    aliases: ["IFRS 15", "IFRS 15 Revenue", "5-step revenue model", "Revenue Recognition Standard"]
  },
  {
    id: "pirate-criteria",
    term: "PIRATE Capitalisation Criteria (IAS 38)",
    category: "Intangibles Accounting",
    paper: "FR / SBR",
    chapter: "Finance_Career_Bible_Chapter4.html",
    chapterLabel: "Ch 04: IFRS Fundamentals",
    definition: "The 6 strict criteria required to capitalize development expenditure: Probable economic benefits, Intention to complete, Resources available, Ability to use/sell, Technical feasibility, Expenditure reliably measurable.",
    example: "R&D costs meeting all 6 PIRATE tests are capitalized as intangible assets and amortized over commercial product life.",
    aliases: ["PIRATE criteria", "PIRATE", "Development Cost Capitalisation", "Development Expenditure"]
  },
  {
    id: "ias-38",
    term: "IAS 38 Intangible Assets (Standard)",
    category: "IFRS Standard",
    paper: "FR / SBR",
    chapter: "Finance_Career_Bible_Chapter4.html",
    chapterLabel: "Ch 04: IFRS Fundamentals",
    definition: "Standard governing non-monetary assets without physical substance. Mandates expensing all pure research and capitalizing development only when commercial and technical feasibility is proven.",
    example: "Internally generated brands, mastheads, and customer lists can NEVER be recognized as assets under IAS 38.",
    aliases: ["IAS 38", "IAS 38 Intangible Assets", "Intangible Assets Standard"]
  },

  // ── CONSOLIDATION & GOODWILL (IFRS 3 & IFRS 10) ──
  {
    id: "goodwill",
    term: "Goodwill (Business Combinations)",
    category: "M&A & Consolidation",
    paper: "FR / SBR",
    chapter: "Finance_Career_Bible_Chapter11.html",
    chapterLabel: "Ch 11: Consolidation Basics",
    definition: "An unidentifiable intangible asset recognized in a business combination representing future economic benefits from synergies: Goodwill = Consideration + NCI - Fair Value of Net Identifiable Assets.",
    example: "Buying a tech company for $50M with identifiable net assets of $35M recognizes $15M of Goodwill on the consolidated balance sheet.",
    aliases: ["Goodwill", "Purchased Goodwill", "Goodwill on Acquisition"]
  },
  {
    id: "nci",
    term: "Non-Controlling Interest (NCI)",
    category: "Consolidation",
    paper: "FR / SBR",
    chapter: "Finance_Career_Bible_Chapter11.html",
    chapterLabel: "Ch 11: Consolidation Basics",
    definition: "The equity in a subsidiary not attributable, directly or indirectly, to the parent company. Can be measured at Proportionate Share of Net Assets or at Full Fair Value.",
    example: "If Parent owns 80% of Subsidiary with $10M net assets, NCI is 20% ($2M under proportionate method).",
    aliases: ["Non-Controlling Interest", "NCI", "Minority Interest"]
  },
  {
    id: "ifrs-3",
    term: "IFRS 3 Business Combinations (Standard)",
    category: "IFRS Standard",
    paper: "FR / SBR",
    chapter: "Finance_Career_Bible_Chapter11.html",
    chapterLabel: "Ch 11: Consolidation Basics",
    definition: "Governs accounting for mergers and acquisitions using the Acquisition Method. Requires identifying the acquirer, measuring consideration at fair value, and recognizing acquired assets at fair value.",
    example: "Contingent consideration (earnout) payable in cash is measured at fair value at acquisition date with subsequent changes recognized in P&L.",
    aliases: ["IFRS 3", "IFRS 3 Business Combinations", "Acquisition Method"]
  },

  // ── CORPORATE FINANCE, COST OF CAPITAL & VALUATION ──
  {
    id: "wacc",
    term: "WACC (Weighted Average Cost of Capital)",
    category: "Corporate Finance",
    paper: "FM / AFM",
    chapter: "Finance_Career_Bible_Chapter22.html",
    chapterLabel: "Ch 22: Corporate Finance",
    definition: "The average expected rate of return required by all capital providers (equity and debt), weighted by their respective market values: WACC = Ke*(E/V) + Kd*(1-T)*(D/V).",
    example: "Used as the discount rate for appraisal of new business projects having identical business risk and capital structure to the existing firm.",
    aliases: ["WACC", "Weighted Average Cost of Capital", "Overall Cost of Capital", "Corporate Hurdle Rate"]
  },
  {
    id: "cost-of-equity",
    term: "Cost of Equity (Ke)",
    category: "Corporate Finance",
    paper: "FM / AFM",
    chapter: "Finance_Career_Bible_Chapter22.html",
    chapterLabel: "Ch 22: Corporate Finance",
    definition: "The return required by equity shareholders for investing in a firm, reflecting compensation for time value of money and equity risk. Calculated via CAPM: Ke = Rf + Beta*(Rm - Rf).",
    example: "If Risk-Free Rate is 4%, Market Risk Premium is 6%, and Beta is 1.5, Cost of Equity = 4% + 1.5(6%) = 13.0%.",
    aliases: ["Cost of Equity", "Ke", "Required Return on Equity"]
  },
  {
    id: "cost-of-debt",
    term: "Cost of Debt (Kd)",
    category: "Corporate Finance",
    paper: "FM / AFM",
    chapter: "Finance_Career_Bible_Chapter22.html",
    chapterLabel: "Ch 22: Corporate Finance",
    definition: "The effective interest rate a company pays on its borrowings. Because interest is tax-deductible, the effective cost in WACC is the after-tax cost: Kd(after-tax) = Kd(pre-tax) * (1 - Tax Rate).",
    example: "A 6% corporate bond with a 25% corporate tax rate has an after-tax cost of debt of 6% * (1 - 0.25) = 4.5%.",
    aliases: ["Cost of Debt", "Kd", "After-tax Cost of Debt"]
  },
  {
    id: "capm",
    term: "CAPM (Capital Asset Pricing Model)",
    category: "Corporate Finance",
    paper: "FM / AFM",
    chapter: "Finance_Career_Bible_Chapter22.html",
    chapterLabel: "Ch 22: Corporate Finance",
    definition: "A model describing the relationship between systematic risk and expected return for assets, showing that expected return equals the risk-free rate plus a risk premium proportional to Beta.",
    example: "Illustrates that investors are compensated only for systematic market risk, as unsystematic company-specific risk can be eliminated through portfolio diversification.",
    aliases: ["CAPM", "Capital Asset Pricing Model", "Security Market Line"]
  },
  {
    id: "equity-risk-premium",
    term: "Equity Risk Premium (ERP)",
    category: "Valuation & Corp Finance",
    paper: "FM / AFM",
    chapter: "Finance_Career_Bible_Chapter22.html",
    chapterLabel: "Ch 22: Corporate Finance",
    definition: "The excess return that investing in the stock market provides over a risk-free rate (government bonds), representing the market price of risk: ERP = Rm - Rf.",
    example: "If expected stock market return (Rm) is 10% and government bond yield (Rf) is 4%, the Equity Risk Premium is 6%.",
    aliases: ["Equity Risk Premium", "ERP", "Market Risk Premium"]
  },
  {
    id: "risk-free-rate",
    term: "Risk-Free Rate (Rf)",
    category: "Corporate Finance",
    paper: "FM / AFM",
    chapter: "Finance_Career_Bible_Chapter22.html",
    chapterLabel: "Ch 22: Corporate Finance",
    definition: "The theoretical rate of return of an investment with zero risk of financial default, typically proxied by long-term government sovereign bond yields (e.g. 10-year US Treasuries or UK Gilts).",
    example: "Serves as the foundational baseline hurdle rate in all DCF, CAPM, and WACC calculations.",
    aliases: ["Risk-Free Rate", "Rf", "Risk Free Rate"]
  },
  {
    id: "asset-beta",
    term: "Asset Beta (Unlevered Beta)",
    category: "Valuation & Risk",
    paper: "FM / AFM",
    chapter: "Finance_Career_Bible_Chapter26.html",
    chapterLabel: "Ch 26: Advanced Financial Management",
    definition: "Measures purely the business risk of an industry or operation, having mathematically stripped out the financial risk created by debt leverage: Ba = Be * [E / (E + D*(1-T))].",
    example: "Used to ungear a listed competitor's equity beta in order to calculate the pure operational risk of an unlisted project.",
    aliases: ["Asset Beta", "Unlevered Beta", "Ba", "Ungearing Beta"]
  },
  {
    id: "equity-beta",
    term: "Equity Beta (Levered Beta)",
    category: "Valuation & Risk",
    paper: "FM / AFM",
    chapter: "Finance_Career_Bible_Chapter26.html",
    chapterLabel: "Ch 26: Advanced Financial Management",
    definition: "Measures the systematic risk of a company's shares as experienced by equity shareholders, reflecting both underlying business risk and financial risk from debt leverage.",
    example: "As a company increases debt financing, financial risk rises, driving Equity Beta higher even if business operations remain unchanged.",
    aliases: ["Equity Beta", "Levered Beta", "Be", "Regearing Beta"]
  },
  {
    id: "dcf",
    term: "DCF (Discounted Cash Flow)",
    category: "Valuation & M&A",
    paper: "FM / AFM",
    chapter: "Finance_Career_Bible_Chapter33.html",
    chapterLabel: "Ch 33: DCF Valuation",
    definition: "A valuation method that estimates Enterprise Value by projecting future Free Cash Flows (FCFF) and discounting them back to present value using the company's WACC.",
    example: "Forecasting 5 years of cash flows and discounting at 9% WACC plus terminal value yields the intrinsic enterprise value of an M&A target.",
    aliases: ["DCF", "Discounted Cash Flow", "DCF Valuation", "Intrinsic Valuation"]
  },
  {
    id: "terminal-value",
    term: "Terminal Value (TV)",
    category: "Valuation",
    paper: "FM / AFM",
    chapter: "Finance_Career_Bible_Chapter33.html",
    chapterLabel: "Ch 33: DCF Valuation",
    definition: "The present value of all cash flows beyond the explicit forecast period in a DCF model, calculated using the Gordon Growth Model: TV = [FCF * (1 + g)] / (WACC - g).",
    example: "Terminal value often accounts for 65%–85% of total estimated Enterprise Value in long-horizon DCF valuations.",
    aliases: ["Terminal Value", "TV", "Gordon Growth Model", "Perpetuity Value"]
  },
  {
    id: "fcff",
    term: "Free Cash Flow to Firm (FCFF)",
    category: "Valuation & Corp Finance",
    paper: "FM / AFM",
    chapter: "Finance_Career_Bible_Chapter33.html",
    chapterLabel: "Ch 33: DCF Valuation",
    definition: "The cash generated by core operations available for distribution to all capital providers: FCFF = NOPAT + Depreciation - Capex - Change in Working Capital.",
    example: "Discounting FCFF by WACC calculates Enterprise Value (EV), from which Net Debt is subtracted to find Equity Value.",
    aliases: ["Free Cash Flow to Firm", "FCFF", "Unlevered Free Cash Flow"]
  },
  {
    id: "fcfe",
    term: "Free Cash Flow to Equity (FCFE)",
    category: "Valuation & Corp Finance",
    paper: "FM / AFM",
    chapter: "Finance_Career_Bible_Chapter33.html",
    chapterLabel: "Ch 33: DCF Valuation",
    definition: "The cash generated by a business available for distribution specifically to equity shareholders after debt servicing: FCFE = Net Income + D&A - Capex - Change in NWC + Net Debt Issued.",
    example: "Discounting FCFE by the Cost of Equity (Ke) directly yields the intrinsic Equity Value of the company.",
    aliases: ["Free Cash Flow to Equity", "FCFE", "Levered Free Cash Flow"]
  },
  {
    id: "apv",
    term: "APV (Adjusted Present Value)",
    category: "Valuation & Corp Finance",
    paper: "AFM",
    chapter: "Finance_Career_Bible_Chapter26.html",
    chapterLabel: "Ch 26: Advanced Financial Management",
    definition: "A valuation approach that evaluates an investment as if it were 100% equity-financed (base-case NPV) and then adds the net present value of financing side effects (PV of debt tax shield minus debt issue costs).",
    example: "APV = Base-Case NPV + PV(Tax Shield) - Issue Costs. Highly useful for Leveraged Buyouts (LBOs) where debt levels change dramatically over time.",
    aliases: ["APV", "Adjusted Present Value", "Base-Case NPV", "PV of Tax Shield"]
  },
  {
    id: "npv",
    term: "NPV (Net Present Value)",
    category: "Capital Budgeting",
    paper: "FM / AFM",
    chapter: "Finance_Career_Bible_Chapter22.html",
    chapterLabel: "Ch 22: Corporate Finance",
    definition: "The difference between the present value of cash inflows and initial capital investment discounted at the project hurdle rate. Projects with NPV > 0 add direct economic value to shareholders.",
    example: "An investment of $1M that generates present value cash flows of $1.3M has an NPV of +$300,000 and should be accepted.",
    aliases: ["NPV", "Net Present Value", "Capital Budgeting Appraisal"]
  },
  {
    id: "irr",
    term: "IRR (Internal Rate of Return)",
    category: "Capital Budgeting",
    paper: "FM / AFM",
    chapter: "Finance_Career_Bible_Chapter22.html",
    chapterLabel: "Ch 22: Corporate Finance",
    definition: "The exact discount rate at which the Net Present Value (NPV) of all project cash flows equals zero. A project is acceptable if IRR exceeds the corporate hurdle rate (WACC).",
    example: "If a project requires 10% cost of capital and has an IRR of 15%, it delivers 5% excess annualized economic yield.",
    aliases: ["IRR", "Internal Rate of Return", "Modified Internal Rate of Return", "MIRR"]
  },
  {
    id: "ebitda",
    term: "EBITDA",
    category: "Financial Analysis",
    paper: "FR / FM",
    chapter: "Finance_Career_Bible_Chapter19.html",
    chapterLabel: "Ch 19: Ratio Analysis",
    definition: "Earnings Before Interest, Tax, Depreciation, and Amortisation. A standard proxy for pure operating cash profitability before capital structure and non-cash accounting charges.",
    example: "Commonly used in valuation multiples (EV/EBITDA) and bank debt covenant limits (e.g. Net Debt / EBITDA ≤ 3.0x).",
    aliases: ["EBITDA", "Operating Profitability Proxy"]
  },
  {
    id: "enterprise-value",
    term: "Enterprise Value (EV)",
    category: "Valuation",
    paper: "FM / AFM",
    chapter: "Finance_Career_Bible_Chapter33.html",
    chapterLabel: "Ch 33: DCF Valuation",
    definition: "The total theoretical takeover valuation of an entire operating business: EV = Market Cap (Equity Value) + Total Debt + Minority Interest + Preferred Shares - Cash & Cash Equivalents.",
    example: "A company with $600M market cap, $150M debt, and $50M cash has an Enterprise Value of $700M.",
    aliases: ["Enterprise Value", "EV", "Total Enterprise Value"]
  },

  // ── MANAGEMENT ACCOUNTING & COST CONTROL ──
  {
    id: "abc",
    term: "Activity-Based Costing (ABC)",
    category: "Management Accounting",
    paper: "MA / PM / APM",
    chapter: "Finance_Career_Bible_Chapter5.html",
    chapterLabel: "Ch 05: Cost Accounting",
    definition: "A modern costing system that pools overhead costs by specific business activities and absorbs them into products using cost drivers that reflect true resource consumption.",
    example: "Assigning equipment calibration costs based on actual calibration hours rather than arbitrary direct labor hours.",
    aliases: ["Activity-Based Costing", "ABC", "Activity Based Costing"]
  },
  {
    id: "cost-driver",
    term: "Cost Driver (ABC)",
    category: "Management Accounting",
    paper: "MA / PM",
    chapter: "Finance_Career_Bible_Chapter5.html",
    chapterLabel: "Ch 05: Cost Accounting",
    definition: "The unit of an activity that causes the change in activity's cost (e.g. number of machine setups, number of purchase orders, number of customer deliveries).",
    example: "Number of purchase orders processed is the cost driver for the procurement department cost pool.",
    aliases: ["Cost Driver", "Cost Drivers"]
  },
  {
    id: "cost-pool",
    term: "Cost Pool (ABC)",
    category: "Management Accounting",
    paper: "MA / PM",
    chapter: "Finance_Career_Bible_Chapter5.html",
    chapterLabel: "Ch 05: Cost Accounting",
    definition: "An aggregation of all overhead costs associated with a single distinct operational activity that share the same cost driver.",
    example: "All expenses related to machine maintenance (mechanic wages, spare parts, oil) are grouped into the Machine Maintenance Cost Pool.",
    aliases: ["Cost Pool", "Cost Pools"]
  },
  {
    id: "contribution-margin",
    term: "Contribution Margin & Break-Even",
    category: "Management Accounting",
    paper: "MA / PM",
    chapter: "Finance_Career_Bible_Chapter6.html",
    chapterLabel: "Ch 06: Management Accounting",
    definition: "The portion of sales revenue available to cover fixed costs and generate profit: Contribution = Selling Price - Variable Cost. Break-Even Units = Total Fixed Costs / Contribution Per Unit.",
    example: "Selling price $50, variable cost $30 gives $20 contribution. If fixed costs are $100,000, break-even volume is 5,000 units.",
    aliases: ["Contribution Margin", "Contribution Per Unit", "Break-Even Point", "Break Even Units"]
  },
  {
    id: "margin-of-safety",
    term: "Margin of Safety (CVP)",
    category: "Management Accounting",
    paper: "MA / PM",
    chapter: "Finance_Career_Bible_Chapter6.html",
    chapterLabel: "Ch 06: Management Accounting",
    definition: "The extent by which budgeted (or actual) sales volume exceeds the break-even sales volume, showing how much sales can drop before the business incurs a loss.",
    example: "If break-even is 5,000 units and expected demand is 7,500 units, the Margin of Safety is 2,500 units or 33.3%.",
    aliases: ["Margin of Safety", "MoS"]
  },
  {
    id: "material-price-variance",
    term: "Material Price Variance",
    category: "Variance Analysis",
    paper: "PM / APM",
    chapter: "Finance_Career_Bible_Chapter24.html",
    chapterLabel: "Ch 24: Advanced Management Tools",
    definition: "Measures the difference between standard and actual material purchase prices multiplied by actual quantity purchased: MPV = (Standard Price - Actual Price) * Actual Quantity.",
    example: "Buying 1,000 kg at $9/kg when standard is $10/kg generates a $1,000 Favourable Material Price Variance.",
    aliases: ["Material Price Variance", "MPV"]
  },
  {
    id: "material-usage-variance",
    term: "Material Usage Variance",
    category: "Variance Analysis",
    paper: "PM / APM",
    chapter: "Finance_Career_Bible_Chapter24.html",
    chapterLabel: "Ch 24: Advanced Management Tools",
    definition: "Measures whether production used more or less raw material than standard allowed for actual output: MUV = (Standard Quantity for actual output - Actual Quantity used) * Standard Price.",
    example: "Using 1,200 kg instead of 1,000 kg standard at $10/kg creates a $2,000 Adverse Material Usage Variance.",
    aliases: ["Material Usage Variance", "MUV"]
  },
  {
    id: "target-costing",
    term: "Target Costing",
    category: "Management Accounting",
    paper: "PM / APM",
    chapter: "Finance_Career_Bible_Chapter24.html",
    chapterLabel: "Ch 24: Advanced Management Tools",
    definition: "A proactive cost-management process that deduces allowable manufacturing cost from competitive market prices: Target Cost = Target Selling Price - Desired Profit Margin.",
    example: "If market price is $100 and required margin is 20% ($20), the target cost is $80. Any initial cost gap is engineered out during design.",
    aliases: ["Target Costing", "Target Cost", "Cost Gap"]
  },
  {
    id: "throughput-accounting",
    term: "Throughput Accounting (TPAR)",
    category: "Management Accounting",
    paper: "PM / APM",
    chapter: "Finance_Career_Bible_Chapter24.html",
    chapterLabel: "Ch 24: Advanced Management Tools",
    definition: "A Theory of Constraints methodology treating only direct materials as variable. Throughput Accounting Ratio (TPAR) = Return per Factory Hour / Cost per Factory Hour. Profitable if TPAR > 1.",
    example: "Maximizes factory throughput by scheduling production to prioritize products with the highest return per bottleneck machine hour.",
    aliases: ["Throughput Accounting", "TPAR", "Throughput Accounting Ratio", "Theory of Constraints"]
  },

  // ── AUDIT, ASSURANCE & RISK (AA / AAA / ISA) ──
  {
    id: "audit-risk",
    term: "Audit Risk (ISA 200 / 315)",
    category: "Audit & Assurance",
    paper: "AA / AAA",
    chapter: "Finance_Career_Bible_Chapter26.html",
    chapterLabel: "Ch 26: Risk & Assurance",
    definition: "The risk that the auditor issues an unqualified (clean) opinion on financial statements that are materially misstated: Audit Risk = Inherent Risk * Control Risk * Detection Risk.",
    example: "When Risk of Material Misstatement (IR * CR) is high, auditors expand substantive testing sample sizes to reduce Detection Risk.",
    aliases: ["Audit Risk", "Audit Risk Model", "Risk of Material Misstatement", "RoMM"]
  },
  {
    id: "inherent-risk",
    term: "Inherent Risk",
    category: "Audit & Assurance",
    paper: "AA / AAA",
    chapter: "Finance_Career_Bible_Chapter26.html",
    chapterLabel: "Ch 26: Risk & Assurance",
    definition: "The susceptibility of a financial statement assertion to a material misstatement assuming that there are no related internal controls.",
    example: "Complex derivative valuations, high-volume cash transactions, and subjective management estimates inherently carry high inherent risk.",
    aliases: ["Inherent Risk", "Inherent Risks"]
  },
  {
    id: "control-risk",
    term: "Control Risk",
    category: "Audit & Assurance",
    paper: "AA / AAA",
    chapter: "Finance_Career_Bible_Chapter26.html",
    chapterLabel: "Ch 26: Risk & Assurance",
    definition: "The risk that a material misstatement will not be prevented, or detected and corrected on a timely basis by the entity's internal controls.",
    example: "Lack of dual authorization on high-value bank wire transfers represents high control risk.",
    aliases: ["Control Risk", "Control Risks"]
  },
  {
    id: "detection-risk",
    term: "Detection Risk",
    category: "Audit & Assurance",
    paper: "AA / AAA",
    chapter: "Finance_Career_Bible_Chapter26.html",
    chapterLabel: "Ch 26: Risk & Assurance",
    definition: "The risk that the procedures performed by the auditor will not detect a misstatement that exists and could be material. Controlled directly by audit sample size and testing rigor.",
    example: "Auditors reduce detection risk by performing physical year-end inventory counts and testing 100% of large unusual journal entries.",
    aliases: ["Detection Risk", "Sampling Risk", "Non-Sampling Risk"]
  },
  {
    id: "substantive-procedures",
    term: "Substantive Procedures",
    category: "Audit & Assurance",
    paper: "AA / AAA",
    chapter: "Finance_Career_Bible_Chapter25.html",
    chapterLabel: "Ch 25: Audit Evidence",
    definition: "Audit procedures designed to detect monetary misstatements at the assertion level, comprising Tests of Details (e.g. invoice verification) and Substantive Analytical Procedures.",
    example: "Direct circularization of customer trade receivable balances and recalculating annual depreciation charges are substantive procedures.",
    aliases: ["Substantive Procedures", "Substantive Testing", "Tests of Detail", "Substantive Analytical Procedures"]
  },
  {
    id: "tests-of-controls",
    term: "Tests of Controls",
    category: "Audit & Assurance",
    paper: "AA / AAA",
    chapter: "Finance_Career_Bible_Chapter25.html",
    chapterLabel: "Ch 25: Audit Evidence",
    definition: "Audit procedures performed to evaluate the operating effectiveness of client internal controls in preventing or detecting material misstatements throughout the period.",
    example: "Inspecting 50 purchase orders to verify supervisory sign-off before invoice payment is a test of controls.",
    aliases: ["Tests of Controls", "Test of Controls", "Control Testing"]
  },
  {
    id: "materiality",
    term: "Materiality (ISA 320)",
    category: "Audit & Assurance",
    paper: "AA / AAA",
    chapter: "Finance_Career_Bible_Chapter11.html",
    chapterLabel: "Ch 11: Audit Core",
    definition: "The threshold magnitude of an omission or misstatement that could reasonably influence the economic decisions of users of financial statements: Benchmarks typically 0.5%–1% Revenue, 1%–2% Assets, 5%–10% PBT.",
    example: "An unrecorded liability of $500k against a materiality threshold of $200k requires mandatory financial statement correction.",
    aliases: ["Materiality", "Overall Materiality", "ISA 320", "Material Misstatement"]
  },
  {
    id: "performance-materiality",
    term: "Performance Materiality",
    category: "Audit & Assurance",
    paper: "AA / AAA",
    chapter: "Finance_Career_Bible_Chapter11.html",
    chapterLabel: "Ch 11: Audit Core",
    definition: "An amount set by the auditor below overall materiality (typically 50%–75% of overall materiality) to reduce the probability that aggregate uncorrected small misstatements exceed overall materiality.",
    example: "If overall materiality is $100k, performance materiality might be set at $65k for testing individual transaction accounts.",
    aliases: ["Performance Materiality"]
  },

  // ── TAXATION, LAW & STRATEGY ──
  {
    id: "transfer-pricing",
    term: "Transfer Pricing & Arm's Length Principle",
    category: "Taxation",
    paper: "TX / ATX / APM",
    chapter: "Finance_Career_Bible_Chapter10.html",
    chapterLabel: "Ch 10: Tax Planning",
    definition: "Rules governing the pricing of goods, services, and IP transferred between related multinational entities. Transactions must reflect market prices as if negotiated between independent parties (Arm's Length Principle).",
    example: "A parent company charging its subsidiary inflated royalties to shift profits to a zero-tax haven will face tax adjustments and transfer pricing penalties.",
    aliases: ["Transfer Pricing", "Arm's Length Principle", "Arms Length Principle", "BEPS", "Transfer Price"]
  },
  {
    id: "capital-allowances",
    term: "Capital Allowances (Tax Depreciation)",
    category: "Taxation",
    paper: "TX / ATX",
    chapter: "Finance_Career_Bible_Chapter37.html",
    chapterLabel: "Ch 37: Taxation Fundamentals",
    definition: "Tax-deductible expense allowances permitted by tax authorities in place of accounting depreciation (e.g. Annual Investment Allowance (AIA) or Writing Down Allowance (WDA)).",
    example: "Claiming 100% Annual Investment Allowance on $500k equipment reduces taxable profit by $500k in the year of purchase.",
    aliases: ["Capital Allowances", "Writing Down Allowance", "WDA", "Annual Investment Allowance", "AIA", "Tax Depreciation"]
  },
  {
    id: "agency-theory",
    term: "Agency Theory & Corporate Governance",
    category: "Governance & Strategy",
    paper: "BT / SBL",
    chapter: "Finance_Career_Bible_Chapter28.html",
    chapterLabel: "Ch 28: Governance & Ethics",
    definition: "Analyzes the conflict of interest between principals (shareholder owners) and agents (directors and management). Mitigated via independent board oversight, audit committees, and share incentives.",
    example: "Independent Non-Executive Directors on audit committees ensure management does not manipulate earnings for short-term bonus gains.",
    aliases: ["Agency Theory", "Principal-Agent Problem", "Corporate Governance", "Audit Committee", "Non-Executive Directors"]
  },
  {
    id: "porters-five-forces",
    term: "Porter's Five Forces",
    category: "Strategic Leadership",
    paper: "SBL / APM",
    chapter: "Finance_Career_Bible_Chapter31.html",
    chapterLabel: "Ch 31: SBL Strategic Frameworks",
    definition: "A framework assessing industry attractiveness across 5 competitive forces: (1) Threat of New Entrants, (2) Buyer Power, (3) Supplier Power, (4) Threat of Substitutes, (5) Competitive Rivalry.",
    example: "High supplier concentration and proprietary technology give chip suppliers high bargaining power over device manufacturers.",
    aliases: ["Porter's Five Forces", "Five Forces", "Industry Attractiveness", "Competitive Rivalry"]
  },
  {
    id: "mendelow-matrix",
    term: "Mendelow's Stakeholder Matrix",
    category: "Strategic Leadership",
    paper: "SBL",
    chapter: "Finance_Career_Bible_Chapter31.html",
    chapterLabel: "Ch 31: SBL Strategic Frameworks",
    definition: "Maps stakeholders by Power and Interest to dictate engagement: High Power/High Interest (Key Players - Manage Closely), High Power/Low Interest (Keep Satisfied), Low Power/High Interest (Keep Informed), Low Power/Low Interest (Minimal Effort).",
    example: "Major institutional investors holding 40% equity are Key Players requiring proactive executive management.",
    aliases: ["Mendelow's Matrix", "Mendelow", "Stakeholder Matrix", "Manage Closely", "Keep Satisfied"]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { FINANCE_DICTIONARY };
}
