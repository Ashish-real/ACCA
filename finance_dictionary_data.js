/* ==========================================================================
   FINANCE CAREER BIBLE (ACCA) — MASTER FINANCE & IFRS DICTIONARY
   Comprehensive Encyclopedia: 70+ Hyper-Specific Technical Definitions,
   IFRS Standards, Valuation Formulas, Real-World Examples & Search Aliases.
   ========================================================================== */

const FINANCE_DICTIONARY = [
  {
    "id": "fifo",
    "term": "FIFO (First-In, First-Out Cost Formula)",
    "category": "Inventory Accounting",
    "paper": "FA / FR",
    "chapter": "Finance_Career_Bible_Chapter9.html",
    "chapterLabel": "Ch 09: Inventory Accounting",
    "definition": "An inventory valuation assumption where the oldest items purchased are assumed to be sold first. Ending inventory on the balance sheet is valued at the most recent purchase prices.",
    "example": "In periods of rising prices (inflation), FIFO produces higher ending inventory valuation, lower Cost of Goods Sold (COGS), and higher reported net profit.",
    "aliases": [
      "FIFO",
      "First-In First-Out",
      "First In First Out"
    ]
  },
  {
    "id": "nrv",
    "term": "Net Realisable Value (NRV)",
    "category": "Inventory Accounting",
    "paper": "FA / FR",
    "chapter": "Finance_Career_Bible_Chapter9.html",
    "chapterLabel": "Ch 09: Inventory Accounting",
    "definition": "The estimated selling price in the ordinary course of business, less the estimated costs of completion and the estimated costs necessary to make the sale: NRV = Selling Price - Completion Costs - Selling Expenses.",
    "example": "Goods bought for $100 with a damaged market value of $80 and repair costs of $10 have an NRV of $70, requiring a $30 write-down from cost.",
    "aliases": [
      "Net Realisable Value",
      "NRV",
      "Net Realizable Value"
    ]
  },
  {
    "id": "avco",
    "term": "AVCO (Weighted Average Cost Formula)",
    "category": "Inventory Accounting",
    "paper": "FA / FR",
    "chapter": "Finance_Career_Bible_Chapter9.html",
    "chapterLabel": "Ch 09: Inventory Accounting",
    "definition": "Calculates the cost of each inventory item by dividing the total cost of goods available for sale by the total number of units available. Smooths out price fluctuations over the accounting period.",
    "example": "Buying 100 units at $10 and 100 units at $14 gives a weighted average unit cost of ($1,000 + $1,400) / 200 = $12 per unit.",
    "aliases": [
      "AVCO",
      "Weighted Average Cost",
      "Average Cost Method"
    ]
  },
  {
    "id": "ias-2",
    "term": "IAS 2 Inventories (Standard)",
    "category": "IFRS Standard",
    "paper": "FA / FR",
    "chapter": "Finance_Career_Bible_Chapter9.html",
    "chapterLabel": "Ch 09: Inventory Accounting",
    "definition": "The overarching IFRS standard requiring inventories to be measured at the lower of Cost and Net Realisable Value (NRV). Prohibits the LIFO method and mandates FIFO or Weighted Average Cost.",
    "example": "Requires inventory write-downs to be recognized immediately in P&L and allows reversals if selling prices subsequently recover.",
    "aliases": [
      "IAS 2",
      "IAS2",
      "IAS 2 Inventories"
    ]
  },
  {
    "id": "ias-16",
    "term": "IAS 16 Property, Plant and Equipment (PPE)",
    "category": "IFRS Standard",
    "paper": "FA / FR",
    "chapter": "Finance_Career_Bible_Chapter10.html",
    "chapterLabel": "Ch 10: Fixed Assets & Depreciation",
    "definition": "Prescribes accounting for tangible assets held for production, rental, or administration. Requires initial measurement at cost (including site restoration PV), followed by either the Cost Model or Revaluation Model.",
    "example": "If land and buildings are revalued upward by $500k, the gain bypasses P&L and is credited directly to Other Comprehensive Income (OCI) and Revaluation Surplus in Equity.",
    "aliases": [
      "IAS 16",
      "IAS16",
      "PPE",
      "Property Plant and Equipment"
    ]
  },
  {
    "id": "revaluation-model",
    "term": "Revaluation Model (IAS 16)",
    "category": "IFRS Standard",
    "paper": "FR / SBR",
    "chapter": "Finance_Career_Bible_Chapter10.html",
    "chapterLabel": "Ch 10: Fixed Assets & Depreciation",
    "definition": "An accounting policy under IAS 16 where an asset is carried at a revalued amount, being its Fair Value at the date of revaluation less subsequent depreciation. Revaluations must be kept sufficiently regular across entire asset classes.",
    "example": "Surpluses go to OCI/Revaluation Surplus; deficits go to P&L unless reversing a previous revaluation surplus on the same asset.",
    "aliases": [
      "Revaluation Surplus",
      "Revaluation Model",
      "IAS 16 Revaluation"
    ]
  },
  {
    "id": "ias-23",
    "term": "IAS 23 Borrowing Costs",
    "category": "IFRS Standard",
    "paper": "FR / SBR",
    "chapter": "Finance_Career_Bible_Chapter10.html",
    "chapterLabel": "Ch 10: Fixed Assets & Depreciation",
    "definition": "Mandates that interest and borrowing costs directly attributable to the acquisition, construction, or production of a qualifying asset (takes a substantial period to get ready) MUST be capitalised as part of the asset cost.",
    "example": "Interest of $50,000 paid on a bank loan specifically taken out to construct a 2-year factory build is capitalised into the factory's Balance Sheet asset value.",
    "aliases": [
      "IAS 23",
      "IAS23",
      "Borrowing Costs",
      "Interest Capitalisation"
    ]
  },
  {
    "id": "ias-40",
    "term": "IAS 40 Investment Property",
    "category": "IFRS Standard",
    "paper": "FR / SBR",
    "chapter": "Finance_Career_Bible_Chapter10.html",
    "chapterLabel": "Ch 10: Fixed Assets & Depreciation",
    "definition": "Governs property (land or buildings) held to earn rental income or for capital appreciation rather than owner-occupation. Allows Fair Value Model (gains/losses directly to P&L with NO depreciation) or Cost Model.",
    "example": "A commercial skyscraper held purely for rental income revalued from $10M to $12M records the entire $2M fair value gain directly in P&L operating income.",
    "aliases": [
      "IAS 40",
      "IAS40",
      "Investment Property"
    ]
  },
  {
    "id": "ias-41",
    "term": "IAS 41 Agriculture",
    "category": "IFRS Standard",
    "paper": "SBR",
    "chapter": "Finance_Career_Bible_Chapter10.html",
    "chapterLabel": "Ch 10: Fixed Assets & Depreciation",
    "definition": "Prescribes accounting for biological assets (living animals or plants) and agricultural produce at the point of harvest. Biological assets are measured at Fair Value less costs to sell, with gains/losses recognized in P&L.",
    "example": "A dairy cattle herd is revalued at the end of the year based on market market livestock prices; market gains are recognized in P&L profit immediately.",
    "aliases": [
      "IAS 41",
      "IAS41",
      "Biological Assets",
      "Agriculture Accounting"
    ]
  },
  {
    "id": "ias-38",
    "term": "IAS 38 Intangible Assets & R&D",
    "category": "Intangibles Accounting",
    "paper": "FR / SBR",
    "chapter": "Finance_Career_Bible_Chapter10.html",
    "chapterLabel": "Ch 10: Intangible Assets",
    "definition": "Governs identifiable non-monetary assets without physical substance (patents, software, licences). Research must ALWAYS be expensed; development is capitalised ONLY if all 6 PIRATE criteria are met.",
    "example": "A pharma firm spending $20M on initial molecular discovery expenses it all. Once clinical trials prove viable with regulatory intent, the final $15M development is capitalised.",
    "aliases": [
      "IAS 38",
      "IAS38",
      "Intangible Assets",
      "R&D Accounting"
    ]
  },
  {
    "id": "pirate",
    "term": "PIRATE Criteria (IAS 38 Development Capitalisation)",
    "category": "Intangibles Accounting",
    "paper": "FR / SBR",
    "chapter": "Finance_Career_Bible_Chapter10.html",
    "chapterLabel": "Ch 10: Intangible Assets",
    "definition": "The six strict mandatory tests under IAS 38 for capitalising development expenditure: Probable future economic benefits, Intention to complete, Resources available, Ability to use/sell, Technical feasibility, and Expenses reliably measurable.",
    "example": "If a software startup has a working prototype (Technical feasibility) and secured funding (Resources) to commercialize it (Intention), development payroll is capitalised on the Balance Sheet.",
    "aliases": [
      "PIRATE",
      "PIRATE criteria",
      "IAS 38 Criteria"
    ]
  },
  {
    "id": "ias-36",
    "term": "IAS 36 Impairment of Assets",
    "category": "IFRS Standard",
    "paper": "FR / SBR",
    "chapter": "Finance_Career_Bible_Chapter11.html",
    "chapterLabel": "Ch 11: Impairment & Provisions",
    "definition": "Ensures assets are carried at no more than their Recoverable Amount. An impairment loss is recognized in P&L when Carrying Amount exceeds Recoverable Amount (Higher of Fair Value less costs of disposal and Value in Use).",
    "example": "A machine with a book value of $500k, scrap sale value of $300k, and projected discounted cash flows (Value in Use) of $420k has a recoverable amount of $420k, requiring an $80k impairment loss.",
    "aliases": [
      "IAS 36",
      "IAS36",
      "Impairment",
      "Asset Impairment"
    ]
  },
  {
    "id": "cgu",
    "term": "Cash-Generating Unit (CGU)",
    "category": "IFRS Standard",
    "paper": "FR / SBR",
    "chapter": "Finance_Career_Bible_Chapter11.html",
    "chapterLabel": "Ch 11: Impairment & Provisions",
    "definition": "The smallest identifiable group of assets that generates cash inflows largely independent of the cash inflows from other assets. Impairment losses are allocated: (1) Specific damaged assets, (2) Goodwill in full, (3) Other non-current assets pro-rata.",
    "example": "An individual retail store inside a nationwide chain functions as a distinct CGU with its own cash register inflows, lease, and staff payroll.",
    "aliases": [
      "CGU",
      "Cash-Generating Unit",
      "Cash Generating Unit"
    ]
  },
  {
    "id": "ifrs-16",
    "term": "IFRS 16 Leases (Standard)",
    "category": "Lease Accounting",
    "paper": "FR / SBR",
    "chapter": "Finance_Career_Bible_Chapter12.html",
    "chapterLabel": "Ch 12: Lease Accounting",
    "definition": "Eliminated the off-balance sheet operating lease distinction for lessees. Mandates recognition of a Right-of-Use (ROU) Asset and a corresponding Lease Liability on Day 1 for all leases over 12 months.",
    "example": "A 10-year retail store lease creates an on-balance sheet ROU Asset and debt liability, shifting rent expense into Depreciation + Financing Interest.",
    "aliases": [
      "IFRS 16",
      "IFRS16",
      "Leases Standard",
      "Lease Accounting"
    ]
  },
  {
    "id": "rou-asset",
    "term": "Right-of-Use (ROU) Asset",
    "category": "Lease Accounting",
    "paper": "FR / SBR",
    "chapter": "Finance_Career_Bible_Chapter12.html",
    "chapterLabel": "Ch 12: Lease Accounting",
    "definition": "An asset representing a lessee's legal right to control the use of an identified physical asset for the lease term. Measured initially at the Lease Liability + lease prepayments + initial direct costs + dismantling obligations PV.",
    "example": "Depreciated on a straight-line basis over the shorter of the lease term or asset useful life.",
    "aliases": [
      "ROU Asset",
      "Right of Use Asset",
      "Right-of-Use Asset"
    ]
  },
  {
    "id": "lease-liability",
    "term": "Lease Liability (IFRS 16)",
    "category": "Lease Accounting",
    "paper": "FR / SBR",
    "chapter": "Finance_Career_Bible_Chapter12.html",
    "chapterLabel": "Ch 12: Lease Accounting",
    "definition": "The financial obligation to make future lease payments, discounted to present value using the interest rate implicit in the lease (or lessee's incremental borrowing rate). Increased by interest and reduced by payments.",
    "example": "A $100k annual lease over 5 years at 8% discount rate gives an initial liability of $399,271, with Year 1 interest of $31,942 recognized in P&L.",
    "aliases": [
      "Lease Liability",
      "IFRS 16 Liability"
    ]
  },
  {
    "id": "ias-37",
    "term": "IAS 37 Provisions, Contingent Liabilities & Assets",
    "category": "IFRS Standard",
    "paper": "FA / FR / SBR",
    "chapter": "Finance_Career_Bible_Chapter11.html",
    "chapterLabel": "Ch 11: Impairment & Provisions",
    "definition": "Regulates liabilities of uncertain timing or amount. A Provision is recognized if: Present obligation from past event + Probable outflow (>50%) + Reliable estimate. Contingent liabilities are disclosed in notes (10%-50%).",
    "example": "A company being sued with an 80% likelihood of a $1M settlement must record a $1M provision and expense in P&L immediately.",
    "aliases": [
      "IAS 37",
      "IAS37",
      "Provisions",
      "Contingent Liabilities"
    ]
  },
  {
    "id": "constructive-obligation",
    "term": "Constructive Obligation (IAS 37)",
    "category": "IFRS Standard",
    "paper": "FR / SBR",
    "chapter": "Finance_Career_Bible_Chapter11.html",
    "chapterLabel": "Ch 11: Impairment & Provisions",
    "definition": "An obligation that derives from an entity's actions where, by an established pattern of past practice or published policies, the entity has created a valid expectation on the part of other parties that it will discharge the responsibility.",
    "example": "A retail store with a published 'no-questions-asked 30-day refund policy' has a constructive obligation to honor refunds even if not legally required by state law.",
    "aliases": [
      "Constructive Obligation",
      "IAS 37 Obligation"
    ]
  },
  {
    "id": "onerous-contract",
    "term": "Onerous Contract (IAS 37)",
    "category": "IFRS Standard",
    "paper": "FR / SBR",
    "chapter": "Finance_Career_Bible_Chapter11.html",
    "chapterLabel": "Ch 11: Impairment & Provisions",
    "definition": "A contract in which the unavoidable costs of meeting the obligations exceed the economic benefits expected to be received under it. The unavoidable costs reflect the least net cost of exiting the contract (Lower of fulfilling or penalty to exit).",
    "example": "A company leasing an empty unused warehouse with $200k remaining rent and an early cancellation penalty of $150k recognizes a $150k onerous contract provision.",
    "aliases": [
      "Onerous Contract",
      "Onerous Contract Provision"
    ]
  },
  {
    "id": "ifrs-15",
    "term": "IFRS 15 Revenue from Contracts with Customers",
    "category": "Revenue Accounting",
    "paper": "FA / FR / SBR",
    "chapter": "Finance_Career_Bible_Chapter13.html",
    "chapterLabel": "Ch 13: Revenue Recognition",
    "definition": "A 5-step model for revenue recognition: (1) Identify contract, (2) Identify performance obligations, (3) Determine transaction price, (4) Allocate price to obligations, (5) Recognise revenue when/as obligations are satisfied.",
    "example": "Selling a phone bundled with a 24-month network plan requires allocating the total price between the phone hardware (recognised at handover) and the network service (recognised monthly over time).",
    "aliases": [
      "IFRS 15",
      "IFRS15",
      "Revenue Recognition",
      "5-Step Model"
    ]
  },
  {
    "id": "performance-obligation",
    "term": "Performance Obligation (IFRS 15)",
    "category": "Revenue Accounting",
    "paper": "FR / SBR",
    "chapter": "Finance_Career_Bible_Chapter13.html",
    "chapterLabel": "Ch 13: Revenue Recognition",
    "definition": "A promise in a contract with a customer to transfer either a good or service (or a bundle of goods or services) that is distinct, or a series of distinct goods/services that are substantially the same.",
    "example": "In software sales, the software license and 1-year technical support represent two separate distinct performance obligations with distinct revenue timings.",
    "aliases": [
      "Performance Obligation",
      "Distinct Obligation"
    ]
  },
  {
    "id": "ifrs-9",
    "term": "IFRS 9 Financial Instruments",
    "category": "Financial Instruments",
    "paper": "FR / SBR",
    "chapter": "Finance_Career_Bible_Chapter14.html",
    "chapterLabel": "Ch 14: Financial Instruments",
    "definition": "Classifies financial assets into Amortised Cost, FVOCI, or FVTPL based on the business model and SPPI (Solely Payments of Principal and Interest) test. Mandates forward-looking Expected Credit Loss (ECL) provisioning.",
    "example": "Standard trade receivables are held to collect contractual cash flows and pass the SPPI test, so they are accounted for at Amortised Cost less ECL allowance.",
    "aliases": [
      "IFRS 9",
      "IFRS9",
      "Financial Instruments",
      "ECL Model"
    ]
  },
  {
    "id": "ecl",
    "term": "Expected Credit Loss (ECL 3-Stage Model)",
    "category": "Financial Instruments",
    "paper": "FR / SBR",
    "chapter": "Finance_Career_Bible_Chapter14.html",
    "chapterLabel": "Ch 14: Financial Instruments",
    "definition": "Forward-looking impairment framework under IFRS 9: Stage 1 (Performing: 12-month ECL), Stage 2 (Underperforming / Significant increase in credit risk: Lifetime ECL), Stage 3 (Credit-impaired / In default: Lifetime ECL with interest on net book value).",
    "example": "A bank holding $100M of corporate loans immediately provisions $1.5M (Stage 1 12-month expected default) on day 1 before any actual late payment occurs.",
    "aliases": [
      "ECL",
      "Expected Credit Loss",
      "IFRS 9 ECL"
    ]
  },
  {
    "id": "ias-32",
    "term": "IAS 32 Financial Instruments: Presentation",
    "category": "Financial Instruments",
    "paper": "FR / SBR",
    "chapter": "Finance_Career_Bible_Chapter14.html",
    "chapterLabel": "Ch 14: Financial Instruments",
    "definition": "Establishes principles for classifying financial instruments as financial liabilities or equity based on the substance of the contractual arrangement (e.g. mandatory redemption vs discretionary dividends). Mandates split accounting for compound instruments.",
    "example": "Convertible bonds are split into a financial liability component (PV of contractual bond interest and principal cash flows) and an equity component (residual conversion option).",
    "aliases": [
      "IAS 32",
      "IAS32",
      "Compound Financial Instruments",
      "Split Accounting"
    ]
  },
  {
    "id": "ias-12",
    "term": "IAS 12 Income Taxes & Deferred Tax",
    "category": "Tax Accounting",
    "paper": "FR / SBR",
    "chapter": "Finance_Career_Bible_Chapter11.html",
    "chapterLabel": "Ch 11: Deferred Taxation",
    "definition": "Requires accounting for current and deferred tax using the Balance Sheet Liability method. Temporary differences arise between the Carrying Value of assets/liabilities and their Tax Base.",
    "example": "Carrying value ($1M) > Tax Base ($600k) due to accelerated tax depreciation creates a $400k Taxable Temporary Difference x 25% tax = $100k Deferred Tax Liability (DTL).",
    "aliases": [
      "IAS 12",
      "IAS12",
      "Deferred Tax",
      "Tax Base"
    ]
  },
  {
    "id": "dtl",
    "term": "Deferred Tax Liability (DTL)",
    "category": "Tax Accounting",
    "paper": "FR / SBR",
    "chapter": "Finance_Career_Bible_Chapter11.html",
    "chapterLabel": "Ch 11: Deferred Taxation",
    "definition": "An amount of income taxes payable in future periods in respect of taxable temporary differences (where carrying amount of an asset exceeds its tax base, or liability carrying amount is less than its tax base).",
    "example": "Claiming 100% first-year tax capital allowances on machinery creates an immediate DTL that unwinds over future years as accounting depreciation exceeds tax deductions.",
    "aliases": [
      "DTL",
      "Deferred Tax Liability"
    ]
  },
  {
    "id": "dta",
    "term": "Deferred Tax Asset (DTA)",
    "category": "Tax Accounting",
    "paper": "FR / SBR",
    "chapter": "Finance_Career_Bible_Chapter11.html",
    "chapterLabel": "Ch 11: Deferred Taxation",
    "definition": "An amount of income taxes recoverable in future periods in respect of deductible temporary differences, unused tax losses carried forward, and tax credits. Recognized only to the extent that probable future taxable profit will be available.",
    "example": "Recording a $200k restructuring provision (which tax authorities only allow when paid) creates a $200k deductible temporary difference x 25% = $50k DTA.",
    "aliases": [
      "DTA",
      "Deferred Tax Asset"
    ]
  },
  {
    "id": "ifrs-3",
    "term": "IFRS 3 Business Combinations & Goodwill",
    "category": "M&A & Consolidation",
    "paper": "FR / SBR",
    "chapter": "Finance_Career_Bible_Chapter15.html",
    "chapterLabel": "Ch 15: Group Accounting",
    "definition": "Prescribes the Acquisition Method for business combinations. All identifiable assets acquired and liabilities assumed are recognized at acquisition-date Fair Value. Goodwill = Consideration + NCI - Net Identifiable Assets.",
    "example": "Acquiring a company for $10M with net fair value assets of $7M and $1M NCI results in $10M + $1M - $7M = $4M recognized Goodwill.",
    "aliases": [
      "IFRS 3",
      "IFRS3",
      "Goodwill",
      "Business Combinations"
    ]
  },
  {
    "id": "ifrs-10",
    "term": "IFRS 10 Consolidated Financial Statements",
    "category": "Consolidation",
    "paper": "FR / SBR",
    "chapter": "Finance_Career_Bible_Chapter15.html",
    "chapterLabel": "Ch 15: Group Accounting",
    "definition": "Defines Control as the basis for consolidation. Control exists when an investor has: (1) Power over the investee, (2) Exposure to variable returns, and (3) Ability to use power to affect returns.",
    "example": "A parent owning 45% of voting shares controls a subsidiary if the remaining 55% is widely dispersed among thousands of passive retail shareholders who never vote.",
    "aliases": [
      "IFRS 10",
      "IFRS10",
      "Consolidation",
      "Control Concept"
    ]
  },
  {
    "id": "pup",
    "term": "Provision for Unrealised Profit (PUP)",
    "category": "Consolidation",
    "paper": "FR / SBR",
    "chapter": "Finance_Career_Bible_Chapter15.html",
    "chapterLabel": "Ch 15: Group Accounting",
    "definition": "The elimination of internal intra-group profits on goods sold between group entities that remain in inventory at the reporting date: PUP = Closing Intra-Group Inventory x Gross Margin (or Markup / (1 + Markup)).",
    "example": "Parent sells $100k goods to Sub at 25% margin. If Sub holds $40k in stock at year-end, a PUP of $10k ($40k x 25%) is deducted from Group Inventory and Group Retained Earnings.",
    "aliases": [
      "PUP",
      "Provision for Unrealised Profit",
      "Unrealised Profit"
    ]
  },
  {
    "id": "ias-28",
    "term": "IAS 28 Investments in Associates & Joint Ventures",
    "category": "Consolidation",
    "paper": "FR / SBR",
    "chapter": "Finance_Career_Bible_Chapter15.html",
    "chapterLabel": "Ch 15: Group Accounting",
    "definition": "Regulates accounting for Associates (entities over which the investor has Significant Influence, presumed at 20% to 50% voting rights). Mandates the Equity Method: Initial cost + Share of post-acquisition profit - Dividends received.",
    "example": "An investor buying 30% of a company for $3M recognizes its $300k share of the associate's $1M annual profit by increasing the B/S investment carrying value to $3.3M.",
    "aliases": [
      "IAS 28",
      "IAS28",
      "Associate",
      "Equity Method",
      "Significant Influence"
    ]
  },
  {
    "id": "ias-8",
    "term": "IAS 8 Accounting Policies, Changes in Estimates and Errors",
    "category": "IFRS Standard",
    "paper": "FA / FR / SBR",
    "chapter": "Finance_Career_Bible_Chapter8.html",
    "chapterLabel": "Ch 08: Financial Statement Prep",
    "definition": "Governs selection of accounting policies and treatment of changes. Changes in Accounting Policies and Prior Period Errors are applied RETROSPECTIVELY (restating comparative figures). Changes in Accounting Estimates are applied PROSPECTIVELY.",
    "example": "Changing from Cost to Fair Value model is retrospective; revising machine useful life from 5 years to 8 years is prospective (affects current and future years only).",
    "aliases": [
      "IAS 8",
      "IAS8",
      "Accounting Policies",
      "Changes in Estimates"
    ]
  },
  {
    "id": "ias-10",
    "term": "IAS 10 Events After the Reporting Period",
    "category": "IFRS Standard",
    "paper": "FA / FR / SBR",
    "chapter": "Finance_Career_Bible_Chapter8.html",
    "chapterLabel": "Ch 08: Financial Statement Prep",
    "definition": "Differentiates events occurring between the reporting date and the date financial statements are authorised for issue. Adjusting Events provide evidence of conditions that existed at the reporting date; Non-Adjusting Events reflect conditions that arose after.",
    "example": "A customer declaring bankruptcy 2 weeks after year-end confirms an uncollectible trade receivable at year-end (Adjusting -> write down). A factory fire occurring after year-end is Non-Adjusting (Disclose in notes).",
    "aliases": [
      "IAS 10",
      "IAS10",
      "Adjusting Events",
      "Non-Adjusting Events"
    ]
  },
  {
    "id": "ias-21",
    "term": "IAS 21 The Effects of Changes in Foreign Exchange Rates",
    "category": "IFRS Standard",
    "paper": "FR / SBR",
    "chapter": "Finance_Career_Bible_Chapter15.html",
    "chapterLabel": "Ch 15: Foreign Currency Translation",
    "definition": "Prescribes accounting for foreign currency transactions and translation of foreign operations. Monetary items (cash, receivables, payables) are retranslated at closing rate with gains/losses to P&L; non-monetary at historical rate.",
    "example": "A UK parent translating a US subsidiary translates Balance Sheet assets/liabilities at closing rate and P&L revenues/expenses at average rate, recording the exchange difference in OCI (Foreign Currency Translation Reserve).",
    "aliases": [
      "IAS 21",
      "IAS21",
      "Foreign Exchange Accounting",
      "Functional Currency"
    ]
  },
  {
    "id": "ias-33",
    "term": "IAS 33 Earnings Per Share (EPS)",
    "category": "IFRS Standard",
    "paper": "FR / SBR",
    "chapter": "Finance_Career_Bible_Chapter19.html",
    "chapterLabel": "Ch 19: Financial Analysis & Ratios",
    "definition": "Mandates public entities to present Basic EPS (Net Profit attributable to ordinary shareholders / Weighted Average Number of Ordinary Shares) and Diluted EPS (reflecting potential ordinary shares from options, warrants, and convertibles).",
    "example": "If a company has $10M profit, 5M shares, and convertible bonds that could create 1M new shares saving $600k interest after-tax: Diluted EPS = ($10M + $0.6M) / (5M + 1M) = $1.77 per share.",
    "aliases": [
      "IAS 33",
      "IAS33",
      "EPS",
      "Diluted EPS",
      "Basic EPS"
    ]
  },
  {
    "id": "ifrs-8",
    "term": "IFRS 8 Operating Segments",
    "category": "IFRS Standard",
    "paper": "SBR",
    "chapter": "Finance_Career_Bible_Chapter19.html",
    "chapterLabel": "Ch 19: Segment Reporting",
    "definition": "Requires reporting based on internal management reporting ('Management Approach'). An operating segment is reportable if its reported revenue, absolute profit/loss, or assets are 10% or more of the combined total of all operating segments.",
    "example": "A conglomerate discloses separate revenue, profit, and asset figures for its Retail, Aviation, and Financial Services divisions if reviewed by the Chief Operating Decision Maker (CODM).",
    "aliases": [
      "IFRS 8",
      "IFRS8",
      "Operating Segments",
      "CODM"
    ]
  },
  {
    "id": "ifrs-13",
    "term": "IFRS 13 Fair Value Measurement",
    "category": "IFRS Standard",
    "paper": "FR / SBR",
    "chapter": "Finance_Career_Bible_Chapter14.html",
    "chapterLabel": "Ch 14: Fair Value Hierarchy",
    "definition": "Defines Fair Value as the price that would be received to sell an asset or paid to transfer a liability in an orderly transaction between market participants at measurement date. Establishes Level 1 (Quoted), Level 2 (Observable inputs), and Level 3 (Unobservable valuation models).",
    "example": "Listed Apple shares are Level 1; unlisted bonds priced via observable yield curves are Level 2; private equity DCF valuations are Level 3.",
    "aliases": [
      "IFRS 13",
      "IFRS13",
      "Fair Value",
      "Fair Value Hierarchy"
    ]
  },
  {
    "id": "wacc",
    "term": "Weighted Average Cost of Capital (WACC)",
    "category": "Corporate Finance",
    "paper": "FM / AFM",
    "chapter": "Finance_Career_Bible_Chapter16.html",
    "chapterLabel": "Ch 16: Cost of Capital",
    "definition": "The blended minimum required rate of return a company must generate on its asset base to satisfy both equity holders and debt providers: WACC = Ke * [E/(E+D)] + Kd*(1-T) * [D/(E+D)], using MARKET values.",
    "example": "A firm with $60M Equity at 12% cost and $40M Debt at 7% pre-tax cost (25% tax) has a WACC of 12%*(0.60) + 7%*(1-0.25)*(0.40) = 9.30%.",
    "aliases": [
      "WACC",
      "Weighted Average Cost of Capital",
      "Cost of Capital"
    ]
  },
  {
    "id": "capm",
    "term": "Capital Asset Pricing Model (CAPM)",
    "category": "Corporate Finance",
    "paper": "FM / AFM",
    "chapter": "Finance_Career_Bible_Chapter16.html",
    "chapterLabel": "Ch 16: Cost of Capital",
    "definition": "A risk-return pricing model determining the cost of equity: Ke = Rf + Beta_e * (Rm - Rf), where (Rm - Rf) is the Equity Risk Premium (ERP) compensating investors for non-diversifiable systematic market risk.",
    "example": "With a Risk-Free rate of 4%, Market Return of 10%, and Equity Beta of 1.3: Ke = 4% + 1.3*(10% - 4%) = 11.80%.",
    "aliases": [
      "CAPM",
      "Capital Asset Pricing Model",
      "Cost of Equity Formula"
    ]
  },
  {
    "id": "asset-beta",
    "term": "Asset Beta (Ba) & Ungearing",
    "category": "Corporate Finance",
    "paper": "FM / AFM",
    "chapter": "Finance_Career_Bible_Chapter16.html",
    "chapterLabel": "Ch 16: Advanced Cost of Capital",
    "definition": "Measures the pure business and operational risk of a company, completely stripped of financial leverage: Ba = Be * [E / (E + D*(1-T))]. Used in pure-play proxy appraisal when expanding into new industries.",
    "example": "A proxy competitor has an Equity Beta of 1.5, Equity of $70M, Debt of $30M, and 20% tax. Its Asset Beta is 1.5 * [70 / (70 + 30*(1-0.2))] = 1.117.",
    "aliases": [
      "Asset Beta",
      "Ungearing",
      "Beta Ungearing",
      "Ba"
    ]
  },
  {
    "id": "apv",
    "term": "Adjusted Present Value (APV)",
    "category": "Corporate Finance",
    "paper": "AFM",
    "chapter": "Finance_Career_Bible_Chapter16.html",
    "chapterLabel": "Ch 16: Advanced Investment Appraisal",
    "definition": "An appraisal method that evaluates an investment in 3 distinct steps: (1) Base Case NPV evaluated as all-equity financed at Ke_u, (2) PV of Financing Effects (Debt Tax Shield - Issue Costs), (3) Total APV = Base Case NPV + PV Tax Shields - Issue Costs.",
    "example": "A buyout with heavy debt uses APV to separate the project's intrinsic operational profitability from the massive tax savings generated by the bank loans.",
    "aliases": [
      "APV",
      "Adjusted Present Value"
    ]
  },
  {
    "id": "modigliani-miller",
    "term": "Modigliani-Miller Capital Structure Propositions",
    "category": "Corporate Finance",
    "paper": "FM / AFM",
    "chapter": "Finance_Career_Bible_Chapter16.html",
    "chapterLabel": "Ch 16: Capital Structure Theory",
    "definition": "Core financial theorems: Without Tax (1958), WACC is completely invariant to debt-equity gearing. With Tax (1963), interest tax deductibility means WACC declines and firm value maximizes as debt increases toward 100%.",
    "example": "Trade-off theory amends MM by balancing the interest tax shield against increasing bankruptcy distress costs as debt levels rise.",
    "aliases": [
      "Modigliani-Miller",
      "MM Theory",
      "Capital Structure Propositions"
    ]
  },
  {
    "id": "pecking-order",
    "term": "Pecking Order Theory",
    "category": "Corporate Finance",
    "paper": "FM / AFM",
    "chapter": "Finance_Career_Bible_Chapter16.html",
    "chapterLabel": "Ch 16: Capital Structure Theory",
    "definition": "A corporate financing hierarchy driven by asymmetric information: Managers prioritize funding new investments with (1) Internal Retained Earnings first, (2) Straight Bank Debt second, and (3) New External Equity as a last resort.",
    "example": "Issuing new equity signals to the market that management believes the stock is currently overvalued, causing share price drops, which is why equity is used last.",
    "aliases": [
      "Pecking Order Theory",
      "Pecking Order"
    ]
  },
  {
    "id": "rights-issue",
    "term": "Rights Issue & TERP (Theoretical Ex-Rights Price)",
    "category": "Corporate Finance",
    "paper": "FM",
    "chapter": "Finance_Career_Bible_Chapter16.html",
    "chapterLabel": "Ch 16: Equity Finance",
    "definition": "An offer of new shares to existing shareholders in proportion to their holding at a discounted subscription price. TERP = [(Existing Shares x Market Price) + (New Rights Shares x Issue Price)] / Total Resulting Shares.",
    "example": "A 1-for-4 rights issue at $8 when current price is $10 gives a TERP of [(4 x $10) + (1 x $8)] / 5 = $9.60 per share.",
    "aliases": [
      "Rights Issue",
      "TERP",
      "Theoretical Ex-Rights Price"
    ]
  },
  {
    "id": "dcf",
    "term": "Discounted Cash Flow (DCF) Valuation",
    "category": "Valuation & Corp Finance",
    "paper": "FM / AFM",
    "chapter": "Finance_Career_Bible_Chapter20.html",
    "chapterLabel": "Ch 20: Business Valuation",
    "definition": "An intrinsic valuation method computing the Enterprise Value of a firm by discounting its projected future Free Cash Flows to the Firm (FCFF) at the Weighted Average Cost of Capital (WACC), plus the discounted Terminal Value.",
    "example": "A company forecasting 5 years of cash flows totaling $3M PV and a $10M PV Terminal Value is valued at an Enterprise Value of $13M.",
    "aliases": [
      "DCF",
      "Discounted Cash Flow",
      "DCF Valuation"
    ]
  },
  {
    "id": "enterprise-value",
    "term": "Enterprise Value (EV)",
    "category": "Valuation & Corp Finance",
    "paper": "FM / AFM",
    "chapter": "Finance_Career_Bible_Chapter20.html",
    "chapterLabel": "Ch 20: Business Valuation",
    "definition": "The total market valuation of a business operation attributable to all capital contributors (equity holders, preferred shares, debt holders, and minority interests): EV = Market Cap + Total Debt + Minority Interest - Cash & Equivalents.",
    "example": "A company with $50M Market Cap, $20M Debt, and $5M Cash has an Enterprise Value of $65M.",
    "aliases": [
      "Enterprise Value",
      "EV",
      "Firm Value"
    ]
  },
  {
    "id": "fcff",
    "term": "Free Cash Flow to Firm (FCFF)",
    "category": "Valuation & Corp Finance",
    "paper": "FM / AFM",
    "chapter": "Finance_Career_Bible_Chapter20.html",
    "chapterLabel": "Ch 20: Business Valuation",
    "definition": "The cash flow available to all funding providers after meeting all operating expenses, taxation, working capital requirements, and capital expenditures: FCFF = EBIT*(1-T) + Depreciation - Capex - Change in Working Capital.",
    "example": "EBIT of $10M at 25% tax ($7.5M NOPAT) + $2M Depreciation - $3M Capex - $1M WC increase yields an FCFF of $5.5M.",
    "aliases": [
      "FCFF",
      "Free Cash Flow to Firm",
      "Unlevered Free Cash Flow"
    ]
  },
  {
    "id": "fcfe",
    "term": "Free Cash Flow to Equity (FCFE)",
    "category": "Valuation & Corp Finance",
    "paper": "AFM",
    "chapter": "Finance_Career_Bible_Chapter20.html",
    "chapterLabel": "Ch 20: Business Valuation",
    "definition": "The net cash flow generated by a firm that is available for distribution to equity shareholders after debt interest payments, debt principal repayments, Capex, and working capital reinvestment. Discounted at Cost of Equity (Ke).",
    "example": "FCFE = FCFF - Interest*(1 - Tax) + Net Debt Issued (Debt Borrowed - Debt Repaid).",
    "aliases": [
      "FCFE",
      "Free Cash Flow to Equity",
      "Levered Free Cash Flow"
    ]
  },
  {
    "id": "terminal-value",
    "term": "Terminal Value (TV)",
    "category": "Valuation & Corp Finance",
    "paper": "FM / AFM",
    "chapter": "Finance_Career_Bible_Chapter20.html",
    "chapterLabel": "Ch 20: Business Valuation",
    "definition": "The estimated aggregate present value of all cash flows beyond the explicit forecast period in a DCF model, typically computed using the Gordon Growth perpetuity formula: TV = [FCF_final * (1 + g)] / (WACC - g).",
    "example": "If final year FCF is $1M, WACC is 10%, and long-term GDP growth g is 2.5%, the undiscounted Terminal Value is $1M * 1.025 / (0.10 - 0.025) = $13.67M.",
    "aliases": [
      "Terminal Value",
      "TV",
      "Gordon Perpetuity TV"
    ]
  },
  {
    "id": "eva",
    "term": "Economic Value Added (EVA)",
    "category": "Valuation & Corp Finance",
    "paper": "APM / AFM",
    "chapter": "Finance_Career_Bible_Chapter20.html",
    "chapterLabel": "Ch 20: Performance & Valuation",
    "definition": "A performance measure calculating the true economic profit generated in excess of the cost of invested capital: EVA = NOPAT - (WACC x Capital Employed), with accounting adjustments (e.g. capitalising R&D and operating leases).",
    "example": "A firm with $15M adjusted NOPAT, $100M Capital Employed, and 10% WACC generates $15M - ($100M x 10%) = $5M of positive Economic Value Added.",
    "aliases": [
      "EVA",
      "Economic Value Added",
      "Economic Profit"
    ]
  },
  {
    "id": "gordon-growth",
    "term": "Gordon Growth Model (Dividend Valuation Model)",
    "category": "Valuation & Corp Finance",
    "paper": "FM / AFM",
    "chapter": "Finance_Career_Bible_Chapter20.html",
    "chapterLabel": "Ch 20: Business Valuation",
    "definition": "Values an equity share based on the perpetual stream of future growing dividends discounted at the cost of equity: P0 = D1 / (Ke - g) = [D0 * (1 + g)] / (Ke - g).",
    "example": "A stock paying a $2 dividend growing at 4% annually with a 12% cost of equity is valued at $2 * 1.04 / (0.12 - 0.04) = $26.00 per share.",
    "aliases": [
      "Gordon Growth Model",
      "DVM",
      "Dividend Valuation Model"
    ]
  },
  {
    "id": "npv",
    "term": "Net Present Value (NPV)",
    "category": "Capital Budgeting",
    "paper": "FM / AFM",
    "chapter": "Finance_Career_Bible_Chapter22.html",
    "chapterLabel": "Ch 22: Investment Appraisal",
    "definition": "The gold standard capital budgeting metric calculating the difference between the present value of all incremental future project cash inflows and initial capital outlay: Accept if NPV > 0.",
    "example": "A $1M investment yielding $400k annually for 4 years discounted at 10% has a PV of $1.268M, giving an NPV of +$268,000 (Accept).",
    "aliases": [
      "NPV",
      "Net Present Value"
    ]
  },
  {
    "id": "irr",
    "term": "Internal Rate of Return (IRR)",
    "category": "Capital Budgeting",
    "paper": "FM / AFM",
    "chapter": "Finance_Career_Bible_Chapter22.html",
    "chapterLabel": "Ch 22: Investment Appraisal",
    "definition": "The exact discount rate that makes project NPV equal to zero. Estimated via linear interpolation: IRR = A + [NPV_a / (NPV_a - NPV_b)] * (B - A). Accept if IRR > Cost of Capital.",
    "example": "If a project yields +$10k NPV at 10% and -$5k NPV at 15%, IRR = 10% + [10 / (10 - (-5))] * (15% - 10%) = 13.33%.",
    "aliases": [
      "IRR",
      "Internal Rate of Return"
    ]
  },
  {
    "id": "mirr",
    "term": "Modified Internal Rate of Return (MIRR)",
    "category": "Capital Budgeting",
    "paper": "AFM",
    "chapter": "Finance_Career_Bible_Chapter22.html",
    "chapterLabel": "Ch 22: Advanced Investment Appraisal",
    "definition": "Fixes IRR's flaws by assuming intermediate positive cash flows are reinvested at the company's true WACC rate rather than the internal project rate: MIRR = [PV of Inflows / PV of Outflows]^(1/n) * (1 + r) - 1.",
    "example": "Resolves multiple IRR issues for non-conventional projects with negative cash flows in later years.",
    "aliases": [
      "MIRR",
      "Modified Internal Rate of Return"
    ]
  },
  {
    "id": "eac",
    "term": "Equivalent Annual Cost (EAC)",
    "category": "Capital Budgeting",
    "paper": "FM / AFM",
    "chapter": "Finance_Career_Bible_Chapter22.html",
    "chapterLabel": "Ch 22: Investment Appraisal",
    "definition": "The annualised cost of owning and operating an asset over its lifespan, used to determine the optimal replacement cycle: EAC = Present Value of Total Lifecycle Costs / Annuity Factor for n years.",
    "example": "Comparing replacing a fleet every 3 years (EAC = $45k/yr) vs every 5 years (EAC = $52k/yr due to soaring maintenance) leads to selecting the 3-year replacement cycle.",
    "aliases": [
      "EAC",
      "Equivalent Annual Cost",
      "Replacement Cycle"
    ]
  },
  {
    "id": "profitability-index",
    "term": "Profitability Index (PI)",
    "category": "Capital Budgeting",
    "paper": "FM",
    "chapter": "Finance_Career_Bible_Chapter22.html",
    "chapterLabel": "Ch 22: Capital Rationing",
    "definition": "A capital rationing ranking metric under single-period constraints for divisible projects: PI = Present Value of Future Cash Inflows / Initial Capital Outlay. Projects are ranked from highest PI to lowest.",
    "example": "A project requiring $500k outlay generating $750k PV of inflows has a PI of 1.50, ranking above a project with a PI of 1.20.",
    "aliases": [
      "Profitability Index",
      "PI",
      "Benefit-Cost Ratio"
    ]
  },
  {
    "id": "capital-rationing",
    "term": "Capital Rationing (Soft vs Hard)",
    "category": "Capital Budgeting",
    "paper": "FM / AFM",
    "chapter": "Finance_Career_Bible_Chapter22.html",
    "chapterLabel": "Ch 22: Capital Rationing",
    "definition": "A situation where a company has positive NPV projects but lacks capital to fund them all. Soft Rationing is internal (imposed by management spending caps); Hard Rationing is external (banks/investors refuse to lend).",
    "example": "Divisible projects are ranked by Profitability Index (PI); indivisible projects require trial-and-error combinations to maximize total NPV.",
    "aliases": [
      "Capital Rationing",
      "Soft Rationing",
      "Hard Rationing"
    ]
  },
  {
    "id": "money-market-hedge",
    "term": "Money Market Hedge (Forex)",
    "category": "Treasury & Risk Management",
    "paper": "FM / AFM",
    "chapter": "Finance_Career_Bible_Chapter24.html",
    "chapterLabel": "Ch 24: Forex Risk Management",
    "definition": "A 4-step treasury hedging structure using money market deposits and borrowings: For future Foreign Inflows (Receipts): Borrow foreign currency today -> Convert to domestic currency at spot rate -> Deposit domestic currency to earn interest.",
    "example": "Eliminates exchange rate risk by matching foreign currency assets with foreign currency liabilities on the balance sheet.",
    "aliases": [
      "Money Market Hedge",
      "MMH",
      "Forex MMH"
    ]
  },
  {
    "id": "fra",
    "term": "Forward Rate Agreement (FRA)",
    "category": "Treasury & Risk Management",
    "paper": "FM / AFM",
    "chapter": "Finance_Career_Bible_Chapter25.html",
    "chapterLabel": "Ch 25: Interest Rate Risk",
    "definition": "An OTC contract locking in an interest rate for a future borrowing or lending period. An FRA '3v9' (3 against 9) fixes a 6-month borrowing rate starting in 3 months from today.",
    "example": "If a borrower locks 5% via an FRA and market SOFR rates rise to 6.5%, the bank pays the borrower the 1.5% difference cash settlement.",
    "aliases": [
      "FRA",
      "Forward Rate Agreement"
    ]
  },
  {
    "id": "interest-rate-collar",
    "term": "Interest Rate Collar",
    "category": "Treasury & Risk Management",
    "paper": "AFM",
    "chapter": "Finance_Career_Bible_Chapter25.html",
    "chapterLabel": "Ch 25: Interest Rate Options",
    "definition": "A hedging strategy combining an Interest Rate Cap (call option providing a ceiling on borrowing rates) with a written Interest Rate Floor (put option giving up benefit if rates drop) to reduce or eliminate the upfront option premium.",
    "example": "A borrower caps borrowing at 6% by paying 1% premium, and sells a 4% floor to collect 1% premium, creating a zero-cost collar between 4% and 6%.",
    "aliases": [
      "Interest Rate Collar",
      "Collar",
      "Cap and Floor"
    ]
  },
  {
    "id": "interest-rate-swap",
    "term": "Interest Rate Swap (IRS)",
    "category": "Treasury & Risk Management",
    "paper": "AFM",
    "chapter": "Finance_Career_Bible_Chapter25.html",
    "chapterLabel": "Ch 25: Interest Rate Swaps",
    "definition": "A derivative agreement where two counterparties exchange interest rate cash flows based on a specified notional principal (e.g. Fixed rate for Floating SOFR/LIBOR). Exploits Comparative Advantage in different debt markets.",
    "example": "A BBB-rated firm swaps its floating loan for an AAA firm's fixed loan, resulting in lower borrowing costs for both parties after bank intermediation.",
    "aliases": [
      "Interest Rate Swap",
      "IRS",
      "Swap"
    ]
  },
  {
    "id": "bsopm",
    "term": "Black-Scholes Option Pricing Model (BSOPM)",
    "category": "Treasury & Risk Management",
    "paper": "AFM",
    "chapter": "Finance_Career_Bible_Chapter26.html",
    "chapterLabel": "Ch 26: Option Valuation",
    "definition": "A mathematical formula for valuing European options based on 5 inputs: Current Stock Price (S), Strike Price (X), Time to Expiry (t), Risk-Free Rate (r), and Volatility (s): Call = S*N(d1) - X*e^(-rt)*N(d2).",
    "example": "Used to price real corporate options such as the option to expand a mine or delay clinical trials.",
    "aliases": [
      "BSOPM",
      "Black-Scholes",
      "Black Scholes Option Pricing"
    ]
  },
  {
    "id": "contribution-margin",
    "term": "Contribution Margin",
    "category": "Management Accounting",
    "paper": "MA / PM",
    "chapter": "Finance_Career_Bible_Chapter5.html",
    "chapterLabel": "Ch 05: Cost-Volume-Profit",
    "definition": "The revenue remaining after deducting variable costs, which contributes toward covering fixed costs and generating net operating profit: Contribution = Selling Price - Variable Cost per unit.",
    "example": "If a product sells for $50 with $30 variable costs, each unit sold provides $20 of contribution to cover fixed factory rent.",
    "aliases": [
      "Contribution Margin",
      "Contribution",
      "Unit Contribution"
    ]
  },
  {
    "id": "cs-ratio",
    "term": "Contribution to Sales Ratio (C/S Ratio)",
    "category": "Management Accounting",
    "paper": "MA / PM",
    "chapter": "Finance_Career_Bible_Chapter5.html",
    "chapterLabel": "Ch 05: Cost-Volume-Profit",
    "definition": "The percentage of each revenue dollar that contributes toward fixed costs: C/S Ratio = (Contribution / Revenue) x 100 = (Unit Contribution / Selling Price) x 100. Also known as the Profit-Volume (P/V) Ratio.",
    "example": "A $20 contribution on a $50 selling price equals a 40% C/S ratio. Break-Even Revenue = Fixed Costs / 0.40.",
    "aliases": [
      "C/S Ratio",
      "Contribution to Sales Ratio",
      "Profit-Volume Ratio",
      "P/V Ratio"
    ]
  },
  {
    "id": "break-even",
    "term": "Break-Even Point (Units & Revenue)",
    "category": "Management Accounting",
    "paper": "MA / PM",
    "chapter": "Finance_Career_Bible_Chapter5.html",
    "chapterLabel": "Ch 05: Cost-Volume-Profit",
    "definition": "The operating sales volume where total revenue equals total costs (Operating Profit = $0): Break-Even Units = Fixed Costs / Unit Contribution; Break-Even Revenue = Fixed Costs / C/S Ratio.",
    "example": "With $100k Fixed Costs and $20 Unit Contribution: Break-Even = 5,000 units or $250k revenue.",
    "aliases": [
      "Break-Even Point",
      "Break-Even",
      "BEP"
    ]
  },
  {
    "id": "margin-of-safety",
    "term": "Margin of Safety (MoS)",
    "category": "Management Accounting",
    "paper": "MA / PM",
    "chapter": "Finance_Career_Bible_Chapter5.html",
    "chapterLabel": "Ch 05: Cost-Volume-Profit",
    "definition": "The cushion between budgeted sales and break-even sales: MoS = Budgeted Sales - Break-Even Sales; MoS % = (Budgeted Sales - Break-Even Sales) / Budgeted Sales x 100.",
    "example": "If budget is 10,000 units and break-even is 6,000 units, the Margin of Safety is 4,000 units or 40% before incurring a loss.",
    "aliases": [
      "Margin of Safety",
      "MoS"
    ]
  },
  {
    "id": "target-costing",
    "term": "Target Costing & Cost Gap",
    "category": "Management Accounting",
    "paper": "PM / APM",
    "chapter": "Finance_Career_Bible_Chapter7.html",
    "chapterLabel": "Ch 07: Modern Costing Techniques",
    "definition": "A market-driven costing approach: Target Cost = Target Selling Price - Required Profit Margin. If the estimated product cost exceeds the target cost, a 'Cost Gap' exists which must be closed via value engineering.",
    "example": "A market price of $100 with a 20% required margin gives an $80 Target Cost. If manufacturing estimates $95, a $15 Cost Gap must be eliminated prior to production launch.",
    "aliases": [
      "Target Costing",
      "Cost Gap"
    ]
  },
  {
    "id": "abc-costing",
    "term": "Activity-Based Costing (ABC)",
    "category": "Management Accounting",
    "paper": "MA / PM",
    "chapter": "Finance_Career_Bible_Chapter7.html",
    "chapterLabel": "Ch 07: Modern Costing Techniques",
    "definition": "An overhead allocation technique assigning costs to Cost Pools based on specific activities, then allocating to products using Cost Drivers (e.g. number of machine setups, purchase orders, quality inspections).",
    "example": "Avoids volume-based cross-subsidization where complex low-volume products are undercosted compared to standard high-volume lines.",
    "aliases": [
      "ABC",
      "Activity-Based Costing",
      "Activity Based Costing"
    ]
  },
  {
    "id": "throughput-accounting",
    "term": "Throughput Accounting & TA Ratio (TPBR)",
    "category": "Management Accounting",
    "paper": "PM / APM",
    "chapter": "Finance_Career_Bible_Chapter7.html",
    "chapterLabel": "Ch 07: Throughput Accounting",
    "definition": "Based on the Theory of Constraints (TOC). Throughput (T) = Revenue - Direct Material Cost. Throughput Accounting Ratio (TPAR) = (Throughput per Bottleneck Hour) / (Factory Cost per Bottleneck Hour). Prioritize products with TPAR > 1.",
    "example": "All labor and overhead are treated as fixed Total Factory Costs; only direct materials are truly variable in the short term.",
    "aliases": [
      "Throughput Accounting",
      "TPAR",
      "Theory of Constraints"
    ]
  },
  {
    "id": "balanced-scorecard",
    "term": "Balanced Scorecard (Kaplan & Norton)",
    "category": "Management Accounting",
    "paper": "PM / SBL / APM",
    "chapter": "Finance_Career_Bible_Chapter28.html",
    "chapterLabel": "Ch 28: Strategic Performance",
    "definition": "A holistic strategic performance management tool evaluating organizations across 4 perspectives: (1) Financial (ROI, EVA), (2) Customer (Retention, NPS), (3) Internal Business Processes (Cycle time, Defect rate), (4) Learning & Growth (Training, Employee retention).",
    "example": "Prevents executive short-termism by aligning operational non-financial drivers with long-term financial shareholder value.",
    "aliases": [
      "Balanced Scorecard",
      "BSC",
      "Kaplan and Norton"
    ]
  },
  {
    "id": "transfer-pricing",
    "term": "Transfer Pricing (Management)",
    "category": "Management Accounting",
    "paper": "PM / APM",
    "chapter": "Finance_Career_Bible_Chapter29.html",
    "chapterLabel": "Ch 29: Divisional Performance",
    "definition": "The internal price charged when one division sells goods/services to another division within the same company. Rule for goal congruence: Minimum Transfer Price = Supplying Division's Marginal Cost + Opportunity Cost of forgone external sales.",
    "example": "If Supplying Division has spare capacity, Opportunity Cost is $0, so Minimum Transfer Price = Marginal Cost ($15).",
    "aliases": [
      "Transfer Pricing",
      "Internal Transfer Price"
    ]
  },
  {
    "id": "audit-risk-model",
    "term": "Audit Risk Model (ISA 200 / 315)",
    "category": "Audit & Assurance",
    "paper": "AA / AAA",
    "chapter": "Finance_Career_Bible_Chapter17.html",
    "chapterLabel": "Ch 17: Audit & Assurance",
    "definition": "The risk that the auditor expresses an inappropriate audit opinion when the financial statements are materially misstated: Audit Risk = Inherent Risk x Control Risk x Detection Risk.",
    "example": "When a client has high Inherent Risk and poor Control Risk (high Risk of Material Misstatement), the auditor MUST lower Detection Risk by performing more substantive testing.",
    "aliases": [
      "Audit Risk",
      "Audit Risk Model",
      "ISA 315 Risk"
    ]
  },
  {
    "id": "inherent-risk",
    "term": "Inherent Risk (ISA 315)",
    "category": "Audit & Assurance",
    "paper": "AA / AAA",
    "chapter": "Finance_Career_Bible_Chapter17.html",
    "chapterLabel": "Ch 17: Audit & Assurance",
    "definition": "The susceptibility of an assertion about a class of transaction, account balance, or disclosure to a misstatement that could be material, before consideration of any related internal controls.",
    "example": "Complex derivative valuations, high-value portable inventory (jewelry), or complex revenue contracts carry inherently high risk.",
    "aliases": [
      "Inherent Risk",
      "ISA 315 Inherent Risk"
    ]
  },
  {
    "id": "control-risk",
    "term": "Control Risk (ISA 315)",
    "category": "Audit & Assurance",
    "paper": "AA / AAA",
    "chapter": "Finance_Career_Bible_Chapter17.html",
    "chapterLabel": "Ch 17: Audit & Assurance",
    "definition": "The risk that a material misstatement will not be prevented, or detected and corrected, on a timely basis by the entity's internal control system.",
    "example": "Lack of segregation of duties where the cashier also reconciles the bank statement creates severe control risk.",
    "aliases": [
      "Control Risk",
      "Internal Control Risk"
    ]
  },
  {
    "id": "detection-risk",
    "term": "Detection Risk (ISA 200)",
    "category": "Audit & Assurance",
    "paper": "AA / AAA",
    "chapter": "Finance_Career_Bible_Chapter17.html",
    "chapterLabel": "Ch 17: Audit & Assurance",
    "definition": "The risk that the procedures performed by the auditor will not detect a misstatement that exists and that could be material. Controlled directly by changing the nature, timing, and extent of substantive audit procedures.",
    "example": "Sampling risk (selecting unrepresentative sample) and non-sampling risk (auditor misinterpreting evidence).",
    "aliases": [
      "Detection Risk",
      "Auditor Detection Risk"
    ]
  },
  {
    "id": "professional-skepticism",
    "term": "Professional Skepticism (ISA 200)",
    "category": "Audit & Assurance",
    "paper": "AA / AAA",
    "chapter": "Finance_Career_Bible_Chapter17.html",
    "chapterLabel": "Ch 17: Audit & Assurance",
    "definition": "An attitude that includes a questioning mind, being alert to conditions which may indicate possible misstatement due to error or fraud, and a critical assessment of audit evidence rather than accepting management assurances at face value.",
    "example": "Corroborating management's optimistic inventory valuation assumptions against external third-party price indices.",
    "aliases": [
      "Professional Skepticism",
      "Skepticism",
      "Auditor Skepticism"
    ]
  },
  {
    "id": "audit-materiality",
    "term": "Audit Materiality & Performance Materiality (ISA 320)",
    "category": "Audit & Assurance",
    "paper": "AA / AAA",
    "chapter": "Finance_Career_Bible_Chapter17.html",
    "chapterLabel": "Ch 17: Audit & Assurance",
    "definition": "Misstatements are material if they could reasonably be expected to influence economic decisions of users. Benchmarks: 0.5%-1% Revenue, 1%-2% Total Assets, 5%-10% Profit Before Tax. Performance Materiality is set lower (e.g. 75%) to capture aggregated undetected errors.",
    "example": "A company with $10M PBT has an overall materiality of $500k (5%) and performance materiality of $375k (75%).",
    "aliases": [
      "Materiality",
      "Audit Materiality",
      "Performance Materiality",
      "ISA 320"
    ]
  },
  {
    "id": "going-concern-audit",
    "term": "Going Concern Assessment (ISA 570)",
    "category": "Audit & Assurance",
    "paper": "AA / AAA",
    "chapter": "Finance_Career_Bible_Chapter17.html",
    "chapterLabel": "Ch 17: Audit & Assurance",
    "definition": "The auditor's responsibility to obtain sufficient appropriate audit evidence regarding management's use of the going concern basis of accounting over a minimum of 12 months from the reporting date.",
    "example": "If severe liquidity issues exist but are adequately disclosed, the auditor issues an Unmodified Opinion with a 'Material Uncertainty Related to Going Concern' paragraph.",
    "aliases": [
      "Going Concern",
      "ISA 570",
      "Going Concern Audit"
    ]
  },
  {
    "id": "key-audit-matters",
    "term": "Key Audit Matters (KAM - ISA 701)",
    "category": "Audit & Assurance",
    "paper": "AA / AAA",
    "chapter": "Finance_Career_Bible_Chapter17.html",
    "chapterLabel": "Ch 17: Audit & Assurance",
    "definition": "Matters that, in the auditor's professional judgment, were of most significance in the audit of financial statements of the current period (e.g. high-risk areas, significant management judgment, or complex M&A accounting).",
    "example": "Disclosed in the audit report of listed entities explaining why the matter was significant and how the audit team addressed it.",
    "aliases": [
      "KAM",
      "Key Audit Matters",
      "ISA 701"
    ]
  },
  {
    "id": "coso-framework",
    "term": "COSO Internal Control Framework",
    "category": "Audit & Assurance",
    "paper": "AA / SBL / AAA",
    "chapter": "Finance_Career_Bible_Chapter17.html",
    "chapterLabel": "Ch 17: Internal Controls",
    "definition": "The globally recognized benchmark framework comprising 5 integrated components: (1) Control Environment (Tone at the top), (2) Risk Assessment, (3) Control Activities (Authorizations, reconciliations), (4) Information & Communication, (5) Monitoring.",
    "example": "Used by auditors and boards to design, implement, and evaluate the effectiveness of financial and operational internal controls.",
    "aliases": [
      "COSO",
      "COSO Framework",
      "Internal Controls"
    ]
  },
  {
    "id": "agency-theory",
    "term": "Agency Theory & Governance",
    "category": "Governance & Strategy",
    "paper": "SBL / SBR",
    "chapter": "Finance_Career_Bible_Chapter18.html",
    "chapterLabel": "Ch 18: Corporate Governance",
    "definition": "A governance concept analyzing the conflict of interest between Principals (Shareholders who own the company) and Agents (Directors who manage it). Explains agency costs and the necessity of independent board oversight.",
    "example": "Executive share options with performance hurdles align director incentives with shareholder wealth creation.",
    "aliases": [
      "Agency Theory",
      "Principal-Agent Problem",
      "Agency Costs"
    ]
  },
  {
    "id": "porters-five-forces",
    "term": "Porter's Five Forces Framework",
    "category": "Strategic Leadership",
    "paper": "SBL",
    "chapter": "Finance_Career_Bible_Chapter18.html",
    "chapterLabel": "Ch 18: Strategic Analysis",
    "definition": "An industry attractiveness framework assessing: (1) Threat of New Entrants, (2) Threat of Substitutes, (3) Bargaining Power of Buyers, (4) Bargaining Power of Suppliers, (5) Intensity of Competitive Rivalry.",
    "example": "The airline industry suffers low profitability due to high buyer power, high supplier power (Boeing/Airbus), and fierce competitive rivalry.",
    "aliases": [
      "Porter's Five Forces",
      "Five Forces",
      "Porters 5 Forces"
    ]
  },
  {
    "id": "ansoff-matrix",
    "term": "Ansoff Product-Market Matrix",
    "category": "Strategic Leadership",
    "paper": "SBL",
    "chapter": "Finance_Career_Bible_Chapter18.html",
    "chapterLabel": "Ch 18: Strategic Growth",
    "definition": "A strategic growth framework categorizing growth options into 4 quadrants: (1) Market Penetration (Existing products, Existing markets - Lowest risk), (2) Market Development (Existing products, New markets), (3) Product Development (New products, Existing markets), (4) Diversification (New products, New markets - Highest risk).",
    "example": "Apple opening retail stores in India is Market Development; Apple developing a self-driving electric car is Diversification.",
    "aliases": [
      "Ansoff Matrix",
      "Ansoff Growth Matrix",
      "Ansoff"
    ]
  },
  {
    "id": "mendelow-matrix",
    "term": "Mendelow's Stakeholder Matrix",
    "category": "Strategic Leadership",
    "paper": "SBL",
    "chapter": "Finance_Career_Bible_Chapter18.html",
    "chapterLabel": "Ch 18: Stakeholder Management",
    "definition": "Maps stakeholders by Power vs Interest: High Power/High Interest (Key Players: Manage Closely), High Power/Low Interest (Keep Satisfied), Low Power/High Interest (Keep Informed), Low Power/Low Interest (Minimal Effort).",
    "example": "Major institutional lenders holding loan covenants are Key Players requiring proactive financial briefing before major acquisitions.",
    "aliases": [
      "Mendelow Matrix",
      "Stakeholder Mapping",
      "Mendelow"
    ]
  },
  {
    "id": "esg-issb",
    "term": "ESG & ISSB Sustainability Standards (IFRS S1 / S2)",
    "category": "Governance & Strategy",
    "paper": "SBR / SBL",
    "chapter": "Finance_Career_Bible_Chapter18.html",
    "chapterLabel": "Ch 18: Sustainability & ESG",
    "definition": "International Sustainability Standards Board framework: IFRS S1 mandates general disclosure of sustainability-related financial risks/opportunities; IFRS S2 mandates specific climate-related disclosures (Scope 1, 2, and 3 carbon emissions).",
    "example": "Requires companies to disclose how physical climate risks (e.g. rising sea levels flooding coastal assets) affect balance sheet asset valuations.",
    "aliases": [
      "ESG",
      "ISSB",
      "IFRS S1",
      "IFRS S2",
      "Sustainability Reporting"
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { FINANCE_DICTIONARY };
}
