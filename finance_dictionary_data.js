/* ==========================================================================
   FINANCE CAREER BIBLE (ACCA) — MASTER FINANCE & IFRS DICTIONARY
   65+ Comprehensive Definitions, IFRS Standards, Valuation Models & Deal Examples.
   ========================================================================== */

const FINANCE_DICTIONARY = [
  // ── IFRS & INTERNATIONAL ACCOUNTING STANDARDS ──
  {
    id: "ias-1",
    term: "IAS 1 Presentation of Financial Statements",
    category: "IFRS Standard",
    paper: "FA / FR / SBR",
    chapter: "Finance_Career_Bible_Chapter3.html",
    chapterLabel: "Ch 03: Financial Statements",
    definition: "Prescribes the basis for presenting general-purpose financial statements to ensure comparability. Mandates fair presentation, going concern assumption, accruals accounting, materiality, and current vs non-current distinction.",
    example: "Requires splitting borrowings into current liabilities (due within 12 months) and non-current liabilities on the Statement of Financial Position.",
    aliases: ["IAS 1", "Presentation of Financial Statements", "Going Concern", "Accruals Concept", "Fair Presentation"]
  },
  {
    id: "ias-2",
    term: "IAS 2 Inventories",
    category: "IFRS Standard",
    paper: "FA / FR",
    chapter: "Finance_Career_Bible_Chapter9.html",
    chapterLabel: "Ch 09: Inventory Accounting",
    definition: "Requires inventories to be measured at the lower of cost and Net Realisable Value (NRV). Cost formulas permitted are FIFO or Weighted Average (AVCO). LIFO is strictly prohibited under IFRS.",
    example: "If goods purchased for $100 have an estimated selling price of $110 less $20 disposal costs (NRV = $90), they must be written down by $10 to $90.",
    aliases: ["IAS 2", "Net Realisable Value", "NRV", "Lower of Cost and NRV", "FIFO", "AVCO", "Inventory Write-down"]
  },
  {
    id: "ias-7",
    term: "IAS 7 Statement of Cash Flows",
    category: "IFRS Standard",
    paper: "FA / FR / SBR",
    chapter: "Finance_Career_Bible_Chapter3.html",
    chapterLabel: "Ch 03: Financial Statements",
    definition: "Classifies cash inflows and outflows into Operating, Investing, and Financing activities. Eliminates non-cash accounting accruals to reveal true liquidity generation.",
    example: "Depreciation of $50,000 is added back to Net Profit in Operating Activities because it is a non-cash expense.",
    aliases: ["IAS 7", "Statement of Cash Flows", "Operating Cash Flow", "Investing Activities", "Financing Activities", "Cash Flow from Operations"]
  },
  {
    id: "ias-8",
    term: "IAS 8 Accounting Policies, Changes in Estimates & Errors",
    category: "IFRS Standard",
    paper: "FR / SBR",
    chapter: "Finance_Career_Bible_Chapter4.html",
    chapterLabel: "Ch 04: IFRS Fundamentals",
    definition: "Changes in accounting policies and material prior-period error corrections must be applied retrospectively (restating prior comparatives). Changes in accounting estimates are applied prospectively.",
    example: "Switching depreciation methods (e.g. straight-line to reducing balance) is a change in estimate applied prospectively from the current year.",
    aliases: ["IAS 8", "Accounting Policies", "Accounting Estimates", "Prior Period Errors", "Retrospective Restatement"]
  },
  {
    id: "ias-10",
    term: "IAS 10 Events After the Reporting Period",
    category: "IFRS Standard",
    paper: "FR / SBR",
    chapter: "Finance_Career_Bible_Chapter4.html",
    chapterLabel: "Ch 04: IFRS Fundamentals",
    definition: "Distinguishes between Adjusting Events (conditions existing at the reporting date, requiring balance sheet adjustment) and Non-Adjusting Events (conditions arising after year-end, requiring disclosure only).",
    example: "A major customer insolvency occurring 2 weeks after year-end confirms an existing uncollectable debt and is an Adjusting Event.",
    aliases: ["IAS 10", "Events After the Reporting Period", "Adjusting Events", "Non-Adjusting Events", "Post Balance Sheet Events"]
  },
  {
    id: "ias-12",
    term: "IAS 12 Income Taxes (Deferred Tax)",
    category: "IFRS Standard",
    paper: "FR / SBR",
    chapter: "Finance_Career_Bible_Chapter10.html",
    chapterLabel: "Ch 10: Tax Planning",
    definition: "Accounts for the tax consequences of transactions recognized in financial statements that differ from tax authority rules, calculating Temporary Differences between Carrying Amount and Tax Base.",
    example: "Accelerated tax depreciation creates a Taxable Temporary Difference, resulting in a Deferred Tax Liability (DTL).",
    aliases: ["IAS 12", "Deferred Tax", "Deferred Tax Asset", "Deferred Tax Liability", "Temporary Differences", "Tax Base", "DTA", "DTL"]
  },
  {
    id: "ias-16",
    term: "IAS 16 Property, Plant and Equipment (PPE)",
    category: "IFRS Standard",
    paper: "FA / FR / SBR",
    chapter: "Finance_Career_Bible_Chapter8.html",
    chapterLabel: "Ch 08: PPE & Depreciation",
    definition: "Governs recognition, initial measurement at cost (including dismantling obligations), and subsequent measurement via the Cost Model or Revaluation Model.",
    example: "A factory bought for $1M with $100k dismantling obligation is capitalized at $1.1M and depreciated over its useful life.",
    aliases: ["IAS 16", "Property, Plant and Equipment", "PPE", "Revaluation Surplus", "Depreciation", "Cost Model", "Revaluation Model", "Component Depreciation"]
  },
  {
    id: "ias-20",
    term: "IAS 20 Government Grants & Disclosure of Assistance",
    category: "IFRS Standard",
    paper: "FR / SBR",
    chapter: "Finance_Career_Bible_Chapter4.html",
    chapterLabel: "Ch 04: IFRS Fundamentals",
    definition: "Grants are recognized when there is reasonable assurance of compliance and receipt. Capital grants are recognized as deferred income or deducted from asset cost; revenue grants are matched to related expenses.",
    example: "A $200k grant toward a $1M green equipment purchase can either reduce PPE cost to $800k or be recognized as deferred income amortized over asset life.",
    aliases: ["IAS 20", "Government Grants", "Government Assistance", "Deferred Income Grant"]
  },
  {
    id: "ias-21",
    term: "IAS 21 The Effects of Changes in Foreign Exchange Rates",
    category: "IFRS Standard",
    paper: "FR / SBR",
    chapter: "Finance_Career_Bible_Chapter11.html",
    chapterLabel: "Ch 11: Consolidation Basics",
    definition: "Transactions are recorded in the functional currency at spot rate. At reporting date, monetary items are retranslated at closing rate (gains/losses in P&L), while foreign subsidiary assets/liabilities are translated at closing rate (in OCI).",
    example: "A foreign trade receivable of €100k recorded at $1.10 is retranslated at $1.05 year-end, recognizing a $5,000 foreign exchange loss in P&L.",
    aliases: ["IAS 21", "Foreign Exchange", "Functional Currency", "Presentation Currency", "Closing Rate", "Monetary Items", "Forex Translation"]
  },
  {
    id: "ias-23",
    term: "IAS 23 Borrowing Costs",
    category: "IFRS Standard",
    paper: "FR / SBR",
    chapter: "Finance_Career_Bible_Chapter8.html",
    chapterLabel: "Ch 08: PPE & Depreciation",
    definition: "Borrowing costs directly attributable to the acquisition, construction, or production of a Qualifying Asset (an asset taking substantial time to get ready) MUST be capitalized as part of asset cost.",
    example: "Interest on a construction loan for a 2-year factory build is capitalized into PPE during construction rather than expensed in P&L.",
    aliases: ["IAS 23", "Borrowing Costs", "Capitalisation of Interest", "Qualifying Asset"]
  },
  {
    id: "ias-24",
    term: "IAS 24 Related Party Disclosures",
    category: "IFRS Standard",
    paper: "FR / SBR",
    chapter: "Finance_Career_Bible_Chapter30.html",
    chapterLabel: "Ch 30: SBR Complex Topics",
    definition: "Requires disclosure of related party relationships, transactions, and outstanding balances to ensure readers understand potential transfer pricing or non-arm's-length bias.",
    example: "Loans made to key management personnel or leases from a CEO's personal holding company must be disclosed with terms and amounts.",
    aliases: ["IAS 24", "Related Party", "Related Party Disclosures", "Key Management Personnel", "Arm's Length"]
  },
  {
    id: "ias-33",
    term: "IAS 33 Earnings Per Share (EPS)",
    category: "IFRS Standard",
    paper: "FR / SBR",
    chapter: "Finance_Career_Bible_Chapter19.html",
    chapterLabel: "Ch 19: Ratio Analysis",
    definition: "Mandates calculation and presentation of Basic EPS (Net Profit / Weighted Average Shares) and Diluted EPS (accounting for convertible bonds, options, and warrants).",
    example: "Convertible debt with potential to create 1,000,000 new shares reduces Basic EPS from $2.00 to Diluted EPS of $1.75.",
    aliases: ["IAS 33", "Earnings Per Share", "Basic EPS", "Diluted EPS", "Weighted Average Shares"]
  },
  {
    id: "ias-36",
    term: "IAS 36 Impairment of Assets",
    category: "IFRS Standard",
    paper: "FR / SBR",
    chapter: "Finance_Career_Bible_Chapter8.html",
    chapterLabel: "Ch 08: PPE & Depreciation",
    definition: "Ensures assets are carried at no more than their Recoverable Amount. Recoverable Amount is the higher of Fair Value Less Costs of Disposal (FVLCD) and Value in Use (VIU).",
    example: "Carrying value of $120k vs Recoverable Amount of $105k triggers a mandatory $15k impairment write-down in P&L.",
    aliases: ["IAS 36", "Impairment", "Impairment of Assets", "Recoverable Amount", "Value in Use", "VIU", "Cash-Generating Unit", "CGU"]
  },
  {
    id: "ias-37",
    term: "IAS 37 Provisions, Contingent Liabilities & Assets",
    category: "IFRS Standard",
    paper: "FR / SBR",
    chapter: "Finance_Career_Bible_Chapter4.html",
    chapterLabel: "Ch 04: IFRS Fundamentals",
    definition: "A provision is recognized when: (1) present obligation from past event, (2) probable economic outflow (>50%), (3) reliable estimate possible. Contingent liabilities are disclosed, not recognized.",
    example: "A 70% probable legal claim of $1M is recognized as a provision; a 30% possible claim is disclosed in notes.",
    aliases: ["IAS 37", "Provision", "Provisions", "Contingent Liability", "Contingent Asset", "Onerous Contract", "Restructuring Provision"]
  },
  {
    id: "ias-38",
    term: "IAS 38 Intangible Assets",
    category: "IFRS Standard",
    paper: "FR / SBR",
    chapter: "Finance_Career_Bible_Chapter4.html",
    chapterLabel: "Ch 04: IFRS Fundamentals",
    definition: "Non-monetary assets without physical substance. Research must always be expensed. Development costs MUST be capitalized once all 6 PIRATE criteria are satisfied.",
    example: "Software coding costs meeting technical feasibility and commercial viability criteria are capitalized on the balance sheet and amortized.",
    aliases: ["IAS 38", "Intangible Asset", "Intangible Assets", "PIRATE criteria", "Development Expenditure", "Amortisation", "Research and Development"]
  },
  {
    id: "ias-40",
    term: "IAS 40 Investment Property",
    category: "IFRS Standard",
    paper: "FR / SBR",
    chapter: "Finance_Career_Bible_Chapter8.html",
    chapterLabel: "Ch 08: PPE & Depreciation",
    definition: "Property held to earn rentals or for capital appreciation. Entities can choose Fair Value Model (gains/losses directly in P&L, no depreciation) or Cost Model (depreciated under IAS 16).",
    example: "An office building held for rental income valued at $2M that rises to $2.3M records a $300k fair value gain in P&L under the Fair Value Model.",
    aliases: ["IAS 40", "Investment Property", "Fair Value Model", "Rental Yield"]
  },
  {
    id: "ifrs-2",
    term: "IFRS 2 Share-based Payment",
    category: "IFRS Standard",
    paper: "SBR",
    chapter: "Finance_Career_Bible_Chapter30.html",
    chapterLabel: "Ch 30: SBR Complex Topics",
    definition: "Requires fair value accounting for share options granted to employees. Equity-settled schemes are measured at grant date fair value and recognized over vesting period with an increase in equity.",
    example: "10,000 executive stock options with $5 grant date fair value vesting over 3 years creates an annual P&L expense of $16,667.",
    aliases: ["IFRS 2", "Share-based Payment", "Stock Options", "Vesting Period", "Grant Date Fair Value", "Cash-Settled"]
  },
  {
    id: "ifrs-3",
    term: "IFRS 3 Business Combinations (Goodwill)",
    category: "IFRS Standard",
    paper: "FR / SBR",
    chapter: "Finance_Career_Bible_Chapter11.html",
    chapterLabel: "Ch 11: Consolidation Basics",
    definition: "Requires the acquisition method for M&A. Goodwill = Consideration Transferred + NCI - Net Identifiable Assets at Fair Value. Goodwill is tested annually for impairment under IAS 36.",
    example: "Acquiring a company for $10M with net fair value assets of $7M creates $3M of capitalized Goodwill on the consolidated balance sheet.",
    aliases: ["IFRS 3", "Business Combinations", "Goodwill", "Acquisition Method", "Non-Controlling Interest", "NCI", "Bargain Purchase", "Fair Value of Net Assets"]
  },
  {
    id: "ifrs-5",
    term: "IFRS 5 Non-current Assets Held for Sale & Discontinued Operations",
    category: "IFRS Standard",
    paper: "FR / SBR",
    chapter: "Finance_Career_Bible_Chapter4.html",
    chapterLabel: "Ch 04: IFRS Fundamentals",
    definition: "Assets available for immediate sale with a highly probable sale within 12 months are classified as Held for Sale, measured at lower of carrying amount and FVLCD, and depreciation ceases immediately.",
    example: "A division put up for auction stops depreciating and is presented separately as a single line item under Discontinued Operations.",
    aliases: ["IFRS 5", "Held for Sale", "Discontinued Operations", "FVLCD"]
  },
  {
    id: "ifrs-8",
    term: "IFRS 8 Operating Segments",
    category: "IFRS Standard",
    paper: "SBR",
    chapter: "Finance_Career_Bible_Chapter30.html",
    chapterLabel: "Ch 30: SBR Complex Topics",
    definition: "Adopts the management approach: reportable operating segments are components whose operating results are regularly reviewed by the Chief Operating Decision Maker (CODM).",
    example: "A segment meeting the 10% threshold of total revenue, profit/loss, or assets requires distinct revenue, margin, and asset disclosures.",
    aliases: ["IFRS 8", "Operating Segments", "CODM", "Segment Reporting", "Reportable Segment"]
  },
  {
    id: "ifrs-9",
    term: "IFRS 9 Financial Instruments",
    category: "IFRS Standard",
    paper: "FR / SBR",
    chapter: "Finance_Career_Bible_Chapter10.html",
    chapterLabel: "Ch 10: Financial Instruments",
    definition: "Classifies financial assets into Amortised Cost, FVOCI, and FVTPL based on business model and SPPI cash flow tests. Enforces the forward-looking Expected Credit Loss (ECL) impairment model.",
    example: "Trade receivables are assessed for credit risk on day one, recognizing a 12-month or lifetime Expected Credit Loss provision before any actual default.",
    aliases: ["IFRS 9", "Financial Instruments", "Expected Credit Loss", "ECL", "Amortised Cost", "FVTPL", "FVOCI", "Hedge Accounting", "SPPI Test"]
  },
  {
    id: "ifrs-13",
    term: "IFRS 13 Fair Value Measurement",
    category: "IFRS Standard",
    paper: "FR / SBR",
    chapter: "Finance_Career_Bible_Chapter4.html",
    chapterLabel: "Ch 04: IFRS Fundamentals",
    definition: "Defines Fair Value as the price that would be received to sell an asset in an orderly transaction between market participants. Establishes a 3-level fair value hierarchy (Level 1 quoted, Level 2 observable, Level 3 unobservable models).",
    example: "Publicly traded equity shares are Level 1; unlisted private company DCF models are Level 3.",
    aliases: ["IFRS 13", "Fair Value", "Fair Value Measurement", "Level 1 Inputs", "Level 2 Inputs", "Level 3 Inputs", "Highest and Best Use"]
  },
  {
    id: "ifrs-15",
    term: "IFRS 15 Revenue from Contracts with Customers",
    category: "IFRS Standard",
    paper: "FR / SBR",
    chapter: "Finance_Career_Bible_Chapter7.html",
    chapterLabel: "Ch 07: Revenue Recognition",
    definition: "Establishes a 5-step model: (1) Identify contract, (2) Identify distinct performance obligations, (3) Determine transaction price, (4) Allocate price, (5) Recognize revenue over time or at point in time.",
    example: "A $1,200 annual SaaS contract bundled with free hardware is unbundled: hardware revenue recognized on delivery, software revenue recognized ratably over 12 months.",
    aliases: ["IFRS 15", "Revenue Recognition", "Performance Obligation", "5-step model", "Transaction Price", "Variable Consideration", "Contract Asset"]
  },
  {
    id: "ifrs-16",
    term: "IFRS 16 Leases (Right-of-Use Asset)",
    category: "IFRS Standard",
    paper: "FR / SBR",
    chapter: "Finance_Career_Bible_Chapter4.html",
    chapterLabel: "Ch 04: IFRS Fundamentals",
    definition: "Eliminates off-balance-sheet operating lease accounting for lessees. Lessees recognize a Right-of-Use (ROU) Asset and a Lease Liability measured at the present value of lease payments.",
    example: "Leasing an office for 5 years at $100k/yr capitalized at 6% discount rate adds an ~~$421k ROU Asset and $421k Lease Liability to the balance sheet on day one.",
    aliases: ["IFRS 16", "Right-of-Use Asset", "ROU Asset", "Lease Liability", "Lessor", "Lessee", "Operating Lease", "Incremental Borrowing Rate"]
  },

  // ── CORPORATE FINANCE, VALUATION & CAPITAL STRUCTURE ──
  {
    id: "wacc",
    term: "WACC (Weighted Average Cost of Capital)",
    category: "Valuation & Corp Finance",
    paper: "FM / AFM",
    chapter: "Finance_Career_Bible_Chapter22.html",
    chapterLabel: "Ch 22: Corporate Finance",
    definition: "The overall required rate of return for a company, calculated as the weighted average cost of equity (Ke) and after-tax cost of debt (Kd): WACC = Ke*(E/V) + Kd*(1-T)*(D/V).",
    example: "A firm with 60% equity at 12% cost and 40% debt at 5% pretax cost with 25% tax has WACC = 0.60(12%) + 0.40(5% * 0.75) = 7.2% + 1.5% = 8.7%.",
    aliases: ["WACC", "Weighted Average Cost of Capital", "Cost of Capital", "Hurdle Rate", "Discount Rate", "Overall Cost of Capital"]
  },
  {
    id: "capm",
    term: "CAPM (Capital Asset Pricing Model)",
    category: "Valuation & Corp Finance",
    paper: "FM / AFM",
    chapter: "Finance_Career_Bible_Chapter22.html",
    chapterLabel: "Ch 22: Corporate Finance",
    definition: "Calculates the expected return on equity based on systemic market risk (Beta): Ke = Rf + Beta * (Rm - Rf), where Rf is the risk-free rate and (Rm - Rf) is the Equity Risk Premium.",
    example: "If 10-year Treasury yield is 4%, Equity Risk Premium is 6%, and stock Beta is 1.2, Cost of Equity = 4% + 1.2(6%) = 11.2%.",
    aliases: ["CAPM", "Capital Asset Pricing Model", "Cost of Equity", "Risk-Free Rate", "Equity Risk Premium", "Beta", "Security Market Line"]
  },
  {
    id: "dcf",
    term: "DCF (Discounted Cash Flow)",
    category: "Valuation & Corp Finance",
    paper: "FM / AFM",
    chapter: "Finance_Career_Bible_Chapter33.html",
    chapterLabel: "Ch 33: DCF Valuation",
    definition: "A valuation method that estimates Enterprise Value by forecasting Free Cash Flows to Firm (FCFF) into the future and discounting them back to present value using WACC.",
    example: "Forecasting 5 years of cash flows and discounting at 9% WACC plus terminal value yields the intrinsic enterprise value of an M&A target.",
    aliases: ["DCF", "Discounted Cash Flow", "Free Cash Flow to Firm", "FCFF", "FCFE", "Terminal Value", "Intrinsic Value", "Gordon Growth Model"]
  },
  {
    id: "npv",
    term: "NPV (Net Present Value)",
    category: "Corporate Finance",
    paper: "FM / AFM",
    chapter: "Finance_Career_Bible_Chapter22.html",
    chapterLabel: "Ch 22: Corporate Finance",
    definition: "The difference between the present value of cash inflows and initial capital outlay discounted at the project cost of capital. A project creates shareholder value if NPV > 0.",
    example: "An initial $1M investment that generates discounted inflows of $1.25M has an NPV of +$250,000 and should be accepted.",
    aliases: ["NPV", "Net Present Value", "Investment Appraisal", "Discounted Cash Flow Analysis", "Capital Budgeting"]
  },
  {
    id: "irr",
    term: "IRR (Internal Rate of Return)",
    category: "Corporate Finance",
    paper: "FM / AFM",
    chapter: "Finance_Career_Bible_Chapter22.html",
    chapterLabel: "Ch 22: Corporate Finance",
    definition: "The exact discount rate that makes the Net Present Value of all cash flows equal to zero. Accept project if IRR > Cost of Capital (WACC).",
    example: "If a project has an IRR of 16% and corporate hurdle rate is 10%, the project generates excess economic return.",
    aliases: ["IRR", "Internal Rate of Return", "MIRR", "Modified Internal Rate of Return"]
  },
  {
    id: "apv",
    term: "APV (Adjusted Present Value)",
    category: "Valuation & Corp Finance",
    paper: "AFM",
    chapter: "Finance_Career_Bible_Chapter26.html",
    chapterLabel: "Ch 26: Advanced Financial Management",
    definition: "Separates an investment's base-case operating value (as if all-equity financed at Keu) from the net present value of financing side effects (tax shields, subsidized loans, issue costs).",
    example: "APV = Base-Case NPV + PV of Tax Shield - Issue Costs. Essential for evaluation of highly leveraged buyouts (LBOs).",
    aliases: ["APV", "Adjusted Present Value", "Tax Shield", "Unlevered Cost of Equity", "Keu", "Base-Case NPV"]
  },
  {
    id: "ebitda",
    term: "EBITDA (Earnings Before Interest, Tax, Depreciation & Amortisation)",
    category: "Financial Analysis",
    paper: "FR / FM",
    chapter: "Finance_Career_Bible_Chapter19.html",
    chapterLabel: "Ch 19: Ratio Analysis",
    definition: "A core proxy for operating cash profitability that strips out capital structure (interest), tax jurisdiction (tax), and accounting policy differences (depreciation & amortisation).",
    example: "Used in EV/EBITDA multiples and debt covenants (e.g. Net Debt / EBITDA leverage caps in credit agreements).",
    aliases: ["EBITDA", "EBIT", "Operating Profit", "Operating Cash Flow Proxy", "EBITDA Margin"]
  },
  {
    id: "enterprise-value",
    term: "Enterprise Value (EV)",
    category: "Valuation",
    paper: "FM / AFM",
    chapter: "Finance_Career_Bible_Chapter33.html",
    chapterLabel: "Ch 33: DCF Valuation",
    definition: "The total theoretical takeover price of an entire operating business: Market Capitalization (Equity Value) + Total Debt + Minority Interest + Preferred Stock - Cash & Equivalents.",
    example: "A company with $500M market cap, $200M debt, and $50M cash has an Enterprise Value of $650M.",
    aliases: ["Enterprise Value", "EV", "Equity Value", "Market Capitalization", "Bridge to Equity Value", "Net Debt"]
  },
  {
    id: "beta",
    term: "Beta (Asset Beta & Equity Beta)",
    category: "Valuation & Risk",
    paper: "FM / AFM",
    chapter: "Finance_Career_Bible_Chapter26.html",
    chapterLabel: "Ch 26: Advanced Financial Management",
    definition: "Measures the systematic volatility of a stock relative to the broader market. Equity Beta (Be) includes financial leverage; Asset Beta (Ba) reflects purely business risk with debt stripped out.",
    example: "Asset Beta = Be * [E / (E + D*(1-T))]. Used to ungear an industry proxy beta and re-gear it for a project's specific debt-equity ratio.",
    aliases: ["Beta", "Asset Beta", "Equity Beta", "Ungearing Beta", "Regearing Beta", "Systematic Risk", "Unlevered Beta"]
  },
  {
    id: "eva",
    term: "Economic Value Added (EVA)",
    category: "Performance Management",
    paper: "APM",
    chapter: "Finance_Career_Bible_Chapter27.html",
    chapterLabel: "Ch 27: Advanced Performance Management",
    definition: "Measures true economic profit created above the total cost of capital: EVA = NOPAT - (WACC * Capital Employed), with accounting adjustments for R&D capitalization and operating leases.",
    example: "NOPAT of $12M on Capital Employed of $100M with 9% WACC yields EVA = $12M - $9M = +$3M value creation.",
    aliases: ["EVA", "Economic Value Added", "NOPAT", "Economic Profit", "Capital Charge"]
  },

  // ── MANAGEMENT ACCOUNTING & FP&A ──
  {
    id: "abc",
    term: "Activity-Based Costing (ABC)",
    category: "Management Accounting",
    paper: "MA / PM / APM",
    chapter: "Finance_Career_Bible_Chapter5.html",
    chapterLabel: "Ch 05: Cost Accounting",
    definition: "An advanced costing methodology that assigns overhead costs to activities based on resource consumption, and then allocates activity costs to products using Cost Drivers.",
    example: "Machine setup costs are allocated based on number of setup hours required rather than arbitrary direct labor hours.",
    aliases: ["Activity-Based Costing", "ABC", "Cost Pool", "Cost Driver", "Overhead Absorption", "Activity-Based Management"]
  },
  {
    id: "cvp-analysis",
    term: "CVP Analysis & Break-Even Point",
    category: "Management Accounting",
    paper: "MA / PM",
    chapter: "Finance_Career_Bible_Chapter6.html",
    chapterLabel: "Ch 06: Management Accounting",
    definition: "Examines the relationship between cost behavior, sales volume, and profit. Break-even volume = Fixed Costs / Contribution per Unit (where Contribution = Price - Variable Cost).",
    example: "Fixed costs of $200k with $50 contribution per unit requires 4,000 units sold to break even (zero profit/loss).",
    aliases: ["CVP", "Cost-Volume-Profit", "Break-Even", "Break-Even Point", "Margin of Safety", "Contribution per Unit", "Contribution Margin"]
  },
  {
    id: "variance-analysis",
    term: "Standard Costing & Variance Analysis",
    category: "Management Accounting",
    paper: "PM / APM",
    chapter: "Finance_Career_Bible_Chapter24.html",
    chapterLabel: "Ch 24: Advanced Management Tools",
    definition: "Quantitative comparison of actual financial results against budgeted standard targets, broken down into price/rate variances and quantity/efficiency variances.",
    example: "Material Price Variance = (Standard Price - Actual Price) * Actual Quantity. Explains whether procurement purchased materials above or below benchmark.",
    aliases: ["Variance Analysis", "Material Price Variance", "Labor Rate Variance", "Sales Volume Variance", "Planning Variance", "Operational Variance", "Standard Costing"]
  },
  {
    id: "rolling-forecast",
    term: "Rolling Forecast (FP&A)",
    category: "FP&A & Budgeting",
    paper: "PM / APM",
    chapter: "Finance_Career_Bible_Chapter20.html",
    chapterLabel: "Ch 20: Budgeting & FP&A",
    definition: "A continuous planning model where a company forecasts 12–18 months into the future on a rolling monthly or quarterly basis, replacing static annual budgets with dynamic updates.",
    example: "At the end of Q1, Q1 actuals are recorded and a new quarter (Q1 next year) is added to the 4-quarter rolling horizon.",
    aliases: ["Rolling Forecast", "Rolling Budget", "Beyond Budgeting", "FP&A Forecasting", "Continuous Budgeting"]
  },
  {
    id: "target-costing",
    term: "Target Costing & Kaizen Costing",
    category: "Management Accounting",
    paper: "PM / APM",
    chapter: "Finance_Career_Bible_Chapter24.html",
    chapterLabel: "Ch 24: Advanced Management Tools",
    definition: "Target Costing works backwards from market price: Target Cost = Target Selling Price - Required Profit Margin. Any gap is closed during product design. Kaizen Costing focuses on continuous small improvements during production.",
    example: "To sell a gadget at $200 with 25% profit ($50), design engineers must build it for a Target Cost of ≤$150.",
    aliases: ["Target Costing", "Kaizen Costing", "Cost Gap", "Life Cycle Costing", "Value Engineering"]
  },
  {
    id: "throughput-accounting",
    term: "Throughput Accounting (TA Ratio)",
    category: "Management Accounting",
    paper: "PM / APM",
    chapter: "Finance_Career_Bible_Chapter24.html",
    chapterLabel: "Ch 24: Advanced Management Tools",
    definition: "Focuses on maximizing Throughput (Sales Revenue - Direct Material Cost) through the bottleneck resource: Throughput Accounting Ratio (TPAR) = Return per Factory Hour / Cost per Factory Hour. A product is profitable if TPAR > 1.",
    example: "Prioritizing products that generate the highest throughput per bottleneck machine hour maximizes overall plant profitability.",
    aliases: ["Throughput Accounting", "TPAR", "Theory of Constraints", "Bottleneck Resource", "Return per Factory Hour"]
  },

  // ── AUDIT & ASSURANCE ──
  {
    id: "audit-risk",
    term: "Audit Risk Model (ISA 200 / 315)",
    category: "Audit & Assurance",
    paper: "AA / AAA",
    chapter: "Finance_Career_Bible_Chapter26.html",
    chapterLabel: "Ch 26: Risk & Assurance",
    definition: "Audit Risk is the risk that the auditor expresses an inappropriate audit opinion on materially misstated financial statements. Audit Risk = Inherent Risk (IR) * Control Risk (CR) * Detection Risk (DR).",
    example: "If inherent risk is high and internal controls are weak, the auditor must reduce Detection Risk by expanding substantive testing sample sizes.",
    aliases: ["Audit Risk", "Audit Risk Model", "Inherent Risk", "Control Risk", "Detection Risk", "Risk of Material Misstatement", "RoMM"]
  },
  {
    id: "materiality",
    term: "Materiality (ISA 320)",
    category: "Audit & Assurance",
    paper: "AA / AAA",
    chapter: "Finance_Career_Bible_Chapter11.html",
    chapterLabel: "Ch 11: Audit Core",
    definition: "An omission or misstatement is material if it could reasonably influence the economic decisions of users. Auditors set Overall Materiality and Performance Materiality (lower threshold to reduce aggregation risk).",
    example: "Common benchmarks: 0.5%–1% of Revenue, 1%–2% of Total Assets, or 5%–10% of Profit Before Tax (PBT).",
    aliases: ["Materiality", "Performance Materiality", "ISA 320", "Clearly Trivial Threshold", "Material Misstatement"]
  },
  {
    id: "substantive-procedures",
    term: "Substantive Procedures vs Tests of Controls",
    category: "Audit & Assurance",
    paper: "AA / AAA",
    chapter: "Finance_Career_Bible_Chapter25.html",
    chapterLabel: "Ch 25: Audit Evidence",
    definition: "Tests of Controls evaluate whether internal controls operate effectively to prevent/detect misstatements. Substantive Procedures (tests of detail and analytical procedures) directly detect monetary misstatements.",
    example: "Testing management signatures on purchase orders is a Test of Control; sending external bank balance confirmations is a Substantive Procedure.",
    aliases: ["Substantive Procedures", "Test of Controls", "Tests of Detail", "Substantive Testing", "Audit Evidence", "AEIOU"]
  },
  {
    id: "kam",
    term: "Key Audit Matters (ISA 701)",
    category: "Audit & Assurance",
    paper: "AA / AAA",
    chapter: "Finance_Career_Bible_Chapter29.html",
    chapterLabel: "Ch 29: Advanced Audit & Assurance",
    definition: "Matters that, in the auditor's professional judgment, were of most significance in the audit of financial statements of listed entities. Disclosed in the Auditor's Report with audit response details.",
    example: "Goodwill impairment testing and complex valuation of unquoted Level 3 derivatives are frequently disclosed as KAMs.",
    aliases: ["Key Audit Matters", "KAM", "ISA 701", "Auditor's Report", "Emphasis of Matter"]
  },
  {
    id: "coso",
    term: "COSO Internal Control Framework",
    category: "Audit & Governance",
    paper: "AA / SBL",
    chapter: "Finance_Career_Bible_Chapter35.html",
    chapterLabel: "Ch 35: Internal Controls",
    definition: "The global benchmark framework for internal controls comprising 5 components: (1) Control Environment, (2) Risk Assessment, (3) Control Activities, (4) Information & Communication, (5) Monitoring.",
    example: "Segregation of duties (e.g. separating invoice approval from cash disbursement) is a core Control Activity under COSO.",
    aliases: ["COSO", "COSO Framework", "Internal Controls", "Control Environment", "Segregation of Duties"]
  },

  // ── TAXATION, LAW & STRATEGY ──
  {
    id: "transfer-pricing",
    term: "Transfer Pricing & Arm's Length Principle",
    category: "Taxation",
    paper: "TX / ATX / APM",
    chapter: "Finance_Career_Bible_Chapter10.html",
    chapterLabel: "Ch 10: Tax Planning",
    definition: "Rules governing the pricing of transactions between related multinational entities. Transactions must reflect market prices as if negotiated between independent third parties (Arm's Length Principle).",
    example: "A parent entity charging its subsidiary an inflated royalty to shift profits to a low-tax jurisdiction will face transfer pricing tax adjustments.",
    aliases: ["Transfer Pricing", "Arm's Length Principle", "OECD Transfer Pricing", "CFC Rules", "Base Erosion and Profit Shifting", "BEPS"]
  },
  {
    id: "capital-allowances",
    term: "Capital Allowances & Tax Depreciation",
    category: "Taxation",
    paper: "TX / ATX",
    chapter: "Finance_Career_Bible_Chapter37.html",
    chapterLabel: "Ch 37: Taxation Fundamentals",
    definition: "Tax-deductible allowances that replace accounting depreciation for tax calculations (e.g. Annual Investment Allowance (AIA), Writing Down Allowance (WDA)).",
    example: "Claiming 100% Annual Investment Allowance on $500k equipment reduces taxable profit by $500k in year one.",
    aliases: ["Capital Allowances", "Writing Down Allowance", "WDA", "Annual Investment Allowance", "AIA", "Tax Depreciation"]
  },
  {
    id: "agency-theory",
    term: "Agency Theory & Corporate Governance",
    category: "Governance & Strategy",
    paper: "BT / SBL",
    chapter: "Finance_Career_Bible_Chapter28.html",
    chapterLabel: "Ch 28: Governance & Ethics",
    definition: "Examines the conflict of interest between principals (shareholders who own the company) and agents (directors/executives who manage the company). Addressed via board oversight and performance share alignment.",
    example: "Independent Non-Executive Directors (NEDs) on the Audit Committee ensure management cannot manipulate earnings to maximize their annual cash bonuses.",
    aliases: ["Agency Theory", "Principal-Agent Problem", "Corporate Governance", "Audit Committee", "Non-Executive Directors"]
  },
  {
    id: "porters-five-forces",
    term: "Porter's Five Forces (Strategic Analysis)",
    category: "Strategic Leadership",
    paper: "SBL / APM",
    chapter: "Finance_Career_Bible_Chapter31.html",
    chapterLabel: "Ch 31: SBL Strategic Frameworks",
    definition: "Evaluates industry attractiveness and competitive intensity across 5 forces: (1) Threat of New Entrants, (2) Bargaining Power of Buyers, (3) Bargaining Power of Suppliers, (4) Threat of Substitutes, (5) Competitive Rivalry.",
    example: "High buyer concentration and low switching costs give enterprise customers high bargaining power, squeezing profit margins.",
    aliases: ["Porter's Five Forces", "Five Forces", "Industry Attractiveness", "Competitive Rivalry", "Threat of Substitutes"]
  },
  {
    id: "mendelow-matrix",
    term: "Mendelow's Stakeholder Matrix",
    category: "Strategic Leadership",
    paper: "SBL",
    chapter: "Finance_Career_Bible_Chapter31.html",
    chapterLabel: "Ch 31: SBL Strategic Frameworks",
    definition: "Categorizes stakeholders based on Power and Interest to determine communication strategy: High Power/High Interest (Manage Closely), High Power/Low Interest (Keep Satisfied), Low Power/High Interest (Keep Informed), Low Power/Low Interest (Minimal Effort).",
    example: "Major institutional shareholders holding 40% equity are High Power / High Interest and must be managed closely.",
    aliases: ["Mendelow's Matrix", "Mendelow", "Stakeholder Mapping", "Manage Closely", "Keep Satisfied"]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { FINANCE_DICTIONARY };
}
