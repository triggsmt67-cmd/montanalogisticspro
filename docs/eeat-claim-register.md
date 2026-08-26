# E-E-A-T Evidence Audit and Claim Register

**Subject:** Such Group E-Commerce

**Domain:** `https://suchgroupecommerce.com`

**Baseline commit:** `2ab6734dc2cc85d3547ef54fa5d5df0493889e48`

**Review branch:** `codex/eeat-verification-fixes`

**Status:** Uncommitted corrective patch; not approved for production
**Reviewed:** August 25, 2026

This register separates externally verifiable facts from owner-provided operating information. A linked law or agency page can support a statutory statement, but it cannot verify Such Group E-Commerce's facilities, pricing, software, performance, or contracts. Tax content is general educational information, not tax or legal advice.

## Source ledger

| ID | Primary source | Supports | Does not establish |
|---|---|---|---|
| `MT-SALES-001` | [Montana Department of Revenue sales-tax guidance](https://revenue.mt.gov/taxes/general-sales-tax) | Montana does not impose a general-use sales tax; the page also explains vendor acceptance of resale documentation and online-sales limitations. | The treatment of every purchase, or a client's nexus, registration, income-tax, use-tax, property-tax, or filing duties. |
| `MT-NEXUS-001` | [Montana Department of Revenue nexus guidance](https://revenuefiles.mt.gov/taxes/nexus) | Montana nexus depends on a business's activities and facts. | Immunity from Montana tax or filing duties. |
| `US-PL86-272-001` | [15 U.S.C. § 381](https://www.law.cornell.edu/uscode/text/15/381) | The federal limitation concerns certain interstate solicitation activity and state net-income taxes. | A blanket exemption for warehousing, property, sales/use tax, registration, or other activity. |
| `CA-OUTSTATE-001` | [CDTFA Publication 101](https://cdtfa.ca.gov/formspubs/pub101/index.htm) and [Regulation 1620](https://cdtfa.ca.gov/lawguides/vol1/sutr/1620.html) | California rules for sales delivered outside California and required documentation. | That every online seller will charge no tax or that later California use is exempt. |
| `WA-RATES-001` | [Washington DOR Q3 2026 rate table](https://dor.wa.gov/sites/default/files/2026-05/Q326_LSU-flyer-by-county.pdf) | Seattle's Q3 2026 combined rate is 10.55%; rates are location- and period-specific. | A customer's final rate or elimination of Washington B&O and reporting duties. |
| `WA-BO-001` | [Washington DOR B&O guidance](https://dor.wa.gov/taxes-rates/business-occupation-tax) | Washington B&O obligations may continue independently of sales-tax treatment. | A client's liability without a facts-and-circumstances review. |
| `TX-SALES-001` | [Texas Comptroller sales-tax guidance](https://comptroller.texas.gov/taxes/sales/) | Texas's state rate is 6.25%, with local tax subject to statutory limits. | That every Texas delivery is taxed at 8.25%. |
| `TX-PROP-001` | [Texas Tax Code Chapter 11](https://statutes.capitol.texas.gov/Docs/TX/htm/TX.11.htm) and [Chapter 22](https://statutes.capitol.texas.gov/Docs/TX/htm/TX.22.htm) | Texas property-tax and rendition rules require a fact-specific location, ownership, date, and exemption analysis. | That Montana storage automatically removes all Texas jurisdiction or filing duties. |
| `NY-RATES-001` | [New York Publication 718](https://www.tax.ny.gov/pdf/publications/sales/pub718.pdf) | New York rates vary by jurisdiction; 8.875% is a New York City example. | That all New York sellers or purchases bear that rate. |
| `AMZ-PREP-001` | [Amazon Seller Central](https://sellercentral.amazon.com/) | Current Amazon requirements must be checked in the applicable seller workflow and marketplace. | Certification or endorsement of Such Group E-Commerce, or proof of its performance. A generic login page is not a sufficient citation for a specific rule. |
| `OWNER-OPS-001` | Owner-provided operating information supplied August 25, 2026; no independent audit artifact linked | Current FBA, wholesale, DTC, storage, add-on, receiving, forwarding, container-unloading, and palletization prices; no minimum shipment or minimum charge; first 14 days of storage free; seller responsibility for postage and freight; damage-photo workflow; approved-client receiving policy; address and phone. The owner previously confirmed a **2:00 PM Mountain Time** weekday cutoff target. | Independent performance verification, carrier contracts, insurance, security controls, climate records, software functionality, legal enforceability, or future availability. |

## Claim register

| ID | Claim now permitted in published copy | Risk | Status | Evidence and limitation |
|---|---|---:|---|---|
| `TAX-001` | Montana has no general statewide sales tax. | High | Externally supported | `MT-SALES-001`; do not shorten to “all purchases are tax-free.” |
| `TAX-002` | A qualifying purchase delivered to Montana **may** be billed without state sales tax. | High | Legal/CPA review required | Depends on seller, product, transaction, exemption documentation, later use, and purchaser obligations. |
| `TAX-003` | Montana storage may create nexus, registration, income-tax, property-tax, or filing duties depending on the facts. PL 86-272 is not a blanket warehousing exemption. | High | Externally supported; client-specific conclusion prohibited | `MT-NEXUS-001`, `US-PL86-272-001`. |
| `TAX-004` | Seattle's combined rate was 10.55% for Q3 2026 and is an example, not a universal Washington rate. | High | Externally supported; date-sensitive | `WA-RATES-001`; recheck after September 30, 2026. |
| `TAX-005` | Texas sales tax may reach 8.25%, depending on location. Texas inventory-property-tax treatment is fact-specific. | High | Legal/CPA review required | `TX-SALES-001`, `TX-PROP-001`; no promise that Montana storage eliminates Texas duties. |
| `TAX-006` | New York City is an 8.875% example; New York rates vary by jurisdiction. | High | Externally supported; date-sensitive | `NY-RATES-001`; recheck before publication and after rate changes. |
| `OPS-001` | Eligible weekday orders received before **2:00 PM Mountain Time** are targeted for same-business-day dispatch. | High | Owner confirmed; not independently audited | Subject to inventory readiness, account standing, exceptions, holidays, weather, and carrier pickup schedules. |
| `OPS-002` | Standard prep and receiving windows are performance targets measured from complete dock intake. | Medium | Business confirmation required | Keep asterisk/terms language; do not call the window guaranteed. |
| `OPS-003` | Numerical accuracy rates may not be published yet. | High | Substantiation required | Publish only if internal records define the period, denominator, exclusions, and calculation. The current rendered pages do not rely on 99.9%, 99.98%, or 99.99% claims. |
| `OPS-004` | Climate, insurance, surveillance, alarm, and security-control claims may not be published yet. | High | Business confirmation and records required | Retain only after reviewable records and precise limitations are supplied; do not imply product-grade environmental certification. |
| `OPS-005` | The owner-confirmed price schedule, listed inclusions and exclusions, no-minimum policy, seller-paid shipping, and 14-day storage window reflect the current offer as of August 25, 2026. | High | Owner confirmed; not independently audited | `src/lib/pricing.ts` is the website source of truth. A dated rate card and signed client agreement should control. Storage and abandonment provisions require legal review before being treated as enforceable contract terms. |
| `OPS-006` | Amazon prep follows the applicable published requirements and documented client SOP. | High | Qualified wording only | Do not claim Amazon certification, endorsement, “100% compliance,” or guaranteed acceptance. |
| `OPS-007` | Contact facts: 5311 13th Street South, Great Falls, MT 59405; +1 406-781-1759; remote onboarding and approved-client inventory receiving only. | High | Owner confirmed; not independently audited | The public email was normalized from the apparent typo `support@suchgrooupecomerce.com` to `support@suchgroupecommerce.com`; confirm the mailbox exists before merge. |

## Removed or prohibited claims

The corrective patch removes or rejects these claims unless the business later supplies reviewable evidence and explicitly authorizes publication:

- noon cutoff time;
- daily cubic-volume billing and “pay only for occupied space”;
- locked cages, gated perimeter, biosecurity controls, photographic intake logs, or 24-hour receiving;
- automated split-shipment grouping or universal real-time synchronization;
- automatic cheapest-carrier selection for every package;
- zero inventory property tax, zero registration, or blanket exemption from tax or filing duties;
- automatic tax elimination for every retail or wholesale order;
- direct rail-spur, FTZ 274, tariff-deferral, or similar facility claims.

## Publication gate

Before merging, a reviewer should (1) run the repository checks, (2) verify each dated statutory rate against the linked official source, (3) have a qualified tax professional review the tax-mechanics pages, (4) have counsel review storage, abandonment, disposal, liability, returns, and payment terms for the client agreement, (5) confirm the normalized support mailbox, and (6) attach or identify internal evidence for every remaining performance target, facility control, and integration. Unresolved claims must not be marked “verified.”
