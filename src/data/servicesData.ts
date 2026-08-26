export interface ServiceDetail {
  title: string;
  slug: string;
  tagline: string;
  description: string;
  sla: string;
  turnaround: string;
  taxStatus: string;
  benefits: Array<{
    title: string;
    description: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  seo: {
    title: string;
    description: string;
  };
}

/**
 * @deprecated Legacy prototype content. No current route imports this object.
 * Do not publish these entries without owner verification against `src/lib/pricing.ts`
 * and the E-E-A-T claim register; several concepts remain future-scope placeholders.
 */
export const SERVICES_DATA: Record<"amazon" | "ecommerce", Record<string, ServiceDetail>> = {
  amazon: {
    "fba-prep-and-labeling": {
      title: "FBA Prep & Labeling",
      slug: "fba-prep-and-labeling",
      tagline: "Precision labeling and rigorous FBA inspection. Built for high-volume sellers.",
      description: "Amazon FBA requirements are notoriously rigid. A single mislabeled carton or missing suffocation warning can land your inventory in stranded status, costing you time, money, and valuable seller metrics. We audit, label, and prep your inventory in strict alignment with Amazon’s FBA routing guides. Every unit is scanned at multiple checkpoints to ensure your barcodes are crisp, readable, and applied to the exact specification.",
      sla: "Strict adherence to Amazon 2026 inbound prep guidelines with multi-checkpoint scan verification.*",
      turnaround: "24 to 48 hours for standard prep orders from complete dock intake.*",
      taxStatus: "Montana has no general statewide sales tax; transaction and client obligations vary.",
      benefits: [
        {
          title: "Multi-Scan Verification",
          description: "Every item and shipping carton is scanned at intake and boxing to verify barcode readability and FNSKU accuracy."
        },
        {
          title: "FNSKU Application",
          description: "High-contrast thermal labels applied precisely over original UPCs to maintain segregated inventory tracking."
        },
        {
          title: "Carton Labeling & Weighing",
          description: "Box dimensions and scale-calibrated weights printed on official FBA box labels to minimize carrier billing discrepancies."
        },
        {
          title: "Expiration Date Compliance",
          description: "For grocery and topical items, we verify dates and apply human-readable date labels meeting Amazon guidelines."
        }
      ],
      faqs: [
        {
          question: "How do you handle co-mingled inventory?",
          answer: "We cover or replace manufacturer UPCs with unique FNSKUs (Amazon barcodes) so your inventory is tracked exclusively to your seller account."
        },
        {
          question: "What happens if Amazon flags a prep defect on a shipment?",
          answer: "We adhere strictly to Amazon's published inbound prep standards. In the rare event of a verified barcode or packaging error caused on our line, our team will re-prep and correct the affected units promptly at no additional labor charge."
        },
        {
          question: "Can you source custom shipping materials for our products?",
          answer: "Yes, we maintain a complete inventory of standard-sized boxes, bubble wrap, poly-bags, and tape. For custom sizes or custom branded boxes, you can ship them to us for storage and use on your prep."
        }
      ],
      seo: {
        title: "FBA Prep & Labeling Services | Such Group E-Commerce",
        description: "Zero-error Amazon FBA prep and labeling. Avoid compliance chargebacks with 48-hour turnarounds in tax-free Montana."
      }
    },
    "bundling-and-multipacks": {
      title: "Bundling & Multipacks",
      slug: "bundling-and-multipacks",
      tagline: "Increase your average order value and listing defensibility with custom kitting.",
      description: "Stand out on Amazon by creating custom multipacks and bundles that competitors can't easily replicate. We receive your inventory in bulk, verify count accuracy, assemble components into beautiful customer-ready kits, and seal them to meet FBA requirements. From kitting beauty bundles to putting together complex product kits with custom promotional inserts, we handle it with precision.",
      sla: "99.9% bundle assembly accuracy with strict visual inspection guidelines.",
      turnaround: "48 to 72 hours depending on kitting complexity and volume.",
      taxStatus: "Montana has no general statewide sales tax; transaction and client obligations vary.",
      benefits: [
        {
          title: "Custom Kit Assembly",
          description: "Bring multiple unique SKUs together into a single, unified FNSKU listing with neat placements."
        },
        {
          title: "Poly-Bagging Bundles",
          description: "Multipacks are sealed inside high-durability transparent poly-bags featuring required suffocation warning text."
        },
        {
          title: "Promotional Inserts",
          description: "Include custom printed materials, coupons, or user manuals seamlessly into every bundle we construct."
        },
        {
          title: "Optimized Box Sizing",
          description: "Configure multi-packs to minimize volume footprint, cutting down your FBA shipping and storage tier costs."
        }
      ],
      faqs: [
        {
          question: "Do you assemble custom inserts or promotional cards?",
          answer: "Yes. You can supply custom inserts, stickers, or cards, and we will place them inside each bundle at specified locations during the assembly process."
        },
        {
          question: "How do you charge for kitting and assembly?",
          answer: "Kitting is charged on a per-unit basis depending on the number of items in the bundle and packaging requirements. Contact us for a precise quote based on your spec sheet."
        },
        {
          question: "Can you store component SKUs separately before kitting?",
          answer: "Yes, we store component SKUs in separate storage bins and only trigger kitting runs as you create shipment requests."
        }
      ],
      seo: {
        title: "Amazon Bundling & Multipack Assembly | Such Group E-Commerce",
        description: "Boost listings with custom Amazon kitting, bundling, and multipacks. Tax-free storage and fast turnaround in Montana."
      }
    },
    "poly-bagging-and-fragile-handling": {
      title: "Poly Bagging & Fragile Handling",
      slug: "poly-bagging-and-fragile-handling",
      tagline: "Protect fragile, liquid, or powdered ASINs. Built to survive transit.",
      description: "Delicate and unpackaged items require heavy-duty protection to survive Amazon's sorting centers. We inspect and package your liquid, powder, sharp, or fragile items using heavy-duty poly bagging, custom bubble wrapping, and outer box reinforcements. Our packaging meets or exceeds Amazon's drop-test guidelines, ensuring your items reach the consumer completely intact and without leaks.",
      sla: "Under 0.05% transit damage rate with premium packaging materials.",
      turnaround: "24 to 48 hours for standard fragile wrapping.",
      taxStatus: "Montana has no general statewide sales tax; transaction and client obligations vary.",
      benefits: [
        {
          title: "Suffocation Warning Bags",
          description: "Premium transparent bags meeting Amazon's 3-mil thickness rules with multi-language warning text."
        },
        {
          title: "Bubble Wrap Shielding",
          description: "Multi-layered bubble wrapping for glass, electronics, cosmetics, and other breakable ASINs."
        },
        {
          title: "Liquid & Powder Seal",
          description: "Heat-sealing cap locks and leak-proof plastic layers for health and beauty products."
        },
        {
          title: "Strict Drop Testing",
          description: "Simulated package drops to ensure your fragile items can handle standard courier transits."
        }
      ],
      faqs: [
        {
          question: "What thickness are your poly bags?",
          answer: "We use premium, high-density 3-mil thick poly bags that meet or exceed Amazon's FBA requirement for bag strength and suffocation warnings."
        },
        {
          question: "How do you handle liquids or cosmetics?",
          answer: "We inspect caps for tightness, apply heat-shrink wrap or cap-sealing tape, and place the product inside a leak-proof poly-bag to prevent liquid spillage from ruining other shipments."
        },
        {
          question: "Do you charge extra for custom wrapping?",
          answer: "We charge a minor flat rate for bubble wrap, poly bagging, and cap sealing. We provide clear, transparent line-item pricing on your dashboard."
        }
      ],
      seo: {
        title: "Amazon Poly Bagging & Fragile Handling | Such Group E-Commerce",
        description: "Secure packaging and poly bagging for fragile, liquid, and sharp items in compliance with Amazon FBA packaging standards."
      }
    },
    "tax-free-inventory-storage": {
      title: "Tax-Free Inventory Storage",
      slug: "tax-free-inventory-storage",
      tagline: "Secure warehousing in zero-sales-tax Montana. Fuel your profit margins.",
      description: "Montana has no general statewide sales tax. Qualifying inventory purchases delivered to our Montana facility may therefore be billed without state sales tax, depending on the transaction and the client’s tax obligations. We store your goods securely and only prep and ship them to Amazon FBA centers when your stock runs low, helping reduce exposure to Amazon's seasonal storage fees.",
      sla: "Climate-controlled storage (60°F–80°F) and multi-point security.*",
      turnaround: "Immediate inventory logging upon freight arrival.",
      taxStatus: "Montana has no general statewide sales tax; other tax obligations depend on the client and transaction.",
      benefits: [
        {
          title: "Montana Sales-Tax Advantage",
          description: "Qualifying inventory purchases delivered to Montana may avoid state sales tax at checkout. Eligibility and other tax obligations depend on the transaction and your business."
        },
        {
          title: "Secure Warehousing",
          description: "Fully insured, climate-controlled (60°F–80°F year-round), 24/7 video-monitored facility."
        },
        {
          title: "Cycle Count Audits",
          description: "Frequent physical cycle counts to ensure your digital records match actual physical stock."
        },
        {
          title: "Just-In-Time Prep",
          description: "Keep your inventory in storage and only prep/ship to FBA as stock levels require, avoiding high storage fees at Amazon."
        }
      ],
      faqs: [
        {
          question: "How does the tax-free status save my brand money?",
          answer: "Montana has no general statewide sales tax, so qualifying purchases delivered directly to our facility may be billed without state sales tax. Treatment varies by transaction and business; consult a qualified tax adviser about your circumstances."
        },
        {
          question: "Is your facility climate-controlled?",
          answer: "Yes. Our facility is actively climate-controlled and maintained within a stable 60°F to 80°F range year-round, protecting cosmetics, packaged goods, and sensitive inventory from freezing winter temperatures and summer heat."
        },
        {
          question: "How long can we store inventory at your facility?",
          answer: "We offer both short-term prep staging storage and long-term bulk pallet storage. There is no maximum duration, and our rates remain flat year-round."
        }
      ],
      seo: {
        title: "Tax-Free Inventory Storage in Montana | Such Group E-Commerce",
        description: "Store bulk inventory in Montana’s no-general-sales-tax environment with climate control, security monitoring, and inventory audits."
      }
    },
    "removal-order-processing": {
      title: "Removal Order Processing",
      slug: "removal-order-processing",
      tagline: "Recover value from returns and stranded Amazon inventory. Fast turnaround.",
      description: "Unfulfillable or stranded inventory sits at Amazon draining your profits. We receive your Amazon removal orders, inspect each unit for packaging and product damage, clean or repackage them, and route them back to active status or prepare them for secondary channels. We provide photo proof of defects so you can submit reimbursement claims to Amazon without delays.",
      sla: "Detailed condition audits and photographic proof within 48 hours of shipment arrival.",
      turnaround: "Audit report generated in 48 hours; restocking completed within 5 business days.",
      taxStatus: "Montana has no general statewide sales tax; transaction and client obligations vary.",
      benefits: [
        {
          title: "Condition Grading",
          description: "Detailed evaluation of returned items, classifying them as New, Like New, or Damaged."
        },
        {
          title: "Refurbishment & Re-prep",
          description: "Cleaning, replacing damaged poly-bags or boxes, and applying fresh barcodes to make units sellable again."
        },
        {
          title: "Photo Proof Documentation",
          description: "High-resolution photos of damaged goods provided instantly to support your reimbursement claims."
        },
        {
          title: "Liquidation Prep",
          description: "Palletizing and labeling unfulfillable goods for bulk sales to third-party liquidators."
        }
      ],
      faqs: [
        {
          question: "Do you charge extra for photos of damaged items?",
          answer: "No. High-resolution photo documentation is included in our standard flat removal auditing fee to ensure you have the evidence required for Amazon claims."
        },
        {
          question: "Can you return sellable items back to Amazon FBA?",
          answer: "Absolutely. Once we verify that an item is pristine, we will re-prep it (new poly-bag, fresh FNSKU) and include it in your next outbound shipment to FBA."
        },
        {
          question: "What do you do with items that cannot be resold?",
          answer: "We can discard them, return them to you, or compile them onto liquidation pallets according to your specific account preferences."
        }
      ],
      seo: {
        title: "Amazon Removal Order Processing | Such Group E-Commerce",
        description: "Recover stranded Amazon FBA stock. We receive, inspect, photo-document, and re-prep removal orders tax-free."
      }
    },
    "inbound-shipment-creation": {
      title: "Inbound Shipment Creation",
      slug: "inbound-shipment-creation",
      tagline: "We manage Seller Central shipment plans. Hands-free shipping setup.",
      description: "Creating shipments in Seller Central can be tedious and prone to errors. We handle the technical setup—inputting box content information, managing dimensions, selecting carrier options, and generating shipping labels directly—letting you focus strictly on inventory sourcing. We integrate directly with your Seller Central account using secure API access to build and upload shipments accurately.",
      sla: "Shipments configured and labels generated same-day upon carton finalization.",
      turnaround: "Same-day shipment setup during warehouse operating hours.",
      taxStatus: "Montana has no general statewide sales tax; transaction and client obligations vary.",
      benefits: [
        {
          title: "Box Content Compliance",
          description: "Accurate submission of 2D barcodes or box content details to eliminate Amazon's manual processing fees."
        },
        {
          title: "SPD & LTL Booking",
          description: "Seamless booking for Small Parcel Deliveries (SPD) and Less Than Truckload (LTL) shipments using Amazon Partnered Carriers."
        },
        {
          title: "Palletization Standards",
          description: "Pallet wrapping, height limits, and stretch-wrap protocols designed around Amazon's published freight requirements."
        },
        {
          title: "Workflow Integration",
          description: "Integration through Amazon API or secure sub-user access to handle shipment setup end-to-end."
        }
      ],
      faqs: [
        {
          question: "How do you access our Seller Central account?",
          answer: "We connect using restricted Amazon SP-API credentials or limited-permission sub-user access. We only request permissions needed to view and edit shipment plans."
        },
        {
          question: "Can we use our own shipping carrier accounts?",
          answer: "Yes. While we can use Amazon Partnered Carriers, we can also book shipments through your DHL, FedEx, UPS, or freight contracts when supported by the workflow."
        },
        {
          question: "How do you handle box content information?",
          answer: "Our warehouse system records which items go into each box and uses that data for supported 2D-barcode or direct-upload workflows."
        }
      ],
      seo: {
        title: "Amazon Inbound Shipment Creation | Such Group E-Commerce",
        description: "Hands-free FBA shipment creation. We build box content, generate 2D barcodes, and book partnered carriers in Seller Central."
      }
    }
  },
  ecommerce: {
    "secure-warehousing": {
      title: "Secure Warehousing",
      slug: "secure-warehousing",
      tagline: "Barcoded inventory tracking. Security monitoring. Climate-controlled storage.",
      description: "Keep your inventory safe, organized, and accessible. Our Montana facility offers secure, climate-controlled warehousing maintained at 60°F–80°F year-round. We manage inventory using barcoded shelf and pallet locations and conduct scheduled cycle counts to help physical stock remain aligned with inventory records.",
      sla: "99.98% inventory accuracy performance target with scheduled cycle counts.*",
      turnaround: "Inbound inventory targeted for receiving, audit, and binning within 24 to 48 business hours after complete dock intake.*",
      taxStatus: "Montana has no general statewide sales tax; other tax obligations depend on the client and transaction.",
      benefits: [
        {
          title: "Climate-Controlled Facility",
          description: "Active temperature regulation (60°F–80°F year-round) to prevent product degradation for cosmetics, supplements, and sensitive goods."
        },
        {
          title: "Dynamic WMS Tracking",
          description: "Bins, shelves, and pallets are tracked digitally with barcode scans during inventory movements."
        },
        {
          title: "Fast Receiving Audits",
          description: "Inbound inventory is targeted for unpacking, counting, and addition to active stock within 24–48 business hours after complete dock intake."
        },
        {
          title: "Montana Tax Environment",
          description: "Montana has no general statewide sales tax. Other taxes, registrations, and filing obligations depend on the client and transaction."
        }
      ],
      faqs: [
        {
          question: "Do you charge fees for inbound receiving?",
          answer: "Receiving rates are quoted based on pallet or carton counts and the handling requirements in the client agreement."
        },
        {
          question: "How secure is your warehouse facility?",
          answer: "Our documented controls include indoor and outdoor video surveillance and restricted facility access. Specific insurance, fire-protection, and personnel-screening terms are confirmed in each client agreement."
        },
        {
          question: "How frequently do you perform cycle counts?",
          answer: "We perform regular cycle counts on high-velocity SKUs and scheduled counts on stored inventory. The 99.98% figure is a performance target, not a guarantee."
        }
      ],
      seo: {
        title: "Secure Warehousing & Storage | Such Group E-Commerce",
        description: "Secure, climate-controlled e-commerce warehousing in Montana with scheduled cycle counts and barcoded inventory tracking."
      }
    },
    "direct-to-consumer-pick-and-pack": {
      title: "Direct-to-Consumer Pick & Pack",
      slug: "direct-to-consumer-pick-and-pack",
      tagline: "Rapid order fulfillment. Seamless e-commerce API integrations.",
      description: "Delighting online shoppers requires speed and accuracy. Eligible orders received before the daily cutoff are targeted for same-business-day fulfillment. Our team integrates with supported e-commerce storefronts and uses barcode scanning to help reduce picking errors.",
      sla: "Targeted same-day fulfillment for eligible orders received before 2:00 PM Mountain Time with a 99.9% pick-accuracy performance target.*",
      turnaround: "Same-business-day dispatch target for eligible orders received before the daily cutoff, subject to inventory readiness and carrier schedules.*",
      taxStatus: "Montana has no general statewide sales tax; transaction and client obligations vary.",
      benefits: [
        {
          title: "API-Driven Workflows",
          description: "Orders can sync from supported stores to our warehouse, with tracking information returned through the connected workflow."
        },
        {
          title: "Same-Day Fulfillment Target",
          description: "Eligible orders received before 2:00 PM Mountain Time are targeted for same-business-day carrier dispatch."
        },
        {
          title: "Double-Scan Verification",
          description: "Items are scanned at pick and again at pack to help minimize incorrect-item shipments."
        },
        {
          title: "Carrier Selection",
          description: "Available UPS, FedEx, and USPS services can be compared against the selected delivery requirements; final service depends on the order and connected accounts."
        }
      ],
      faqs: [
        {
          question: "Which shopping platforms do you integrate with?",
          answer: "Supported storefront integrations are confirmed during onboarding and may include major platforms such as Shopify and WooCommerce. Availability, data flow, marketplace support, and any custom work depend on the approved technical scope."
        },
        {
          question: "What is your daily cutoff time for same-day shipping?",
          answer: "Our standard cutoff is 2:00 PM Mountain Time, Monday through Friday. Eligible orders received before this time are targeted for same-business-day carrier dispatch, subject to inventory readiness, account standing, order exceptions, holidays, weather, and carrier pickup schedules."
        },
        {
          question: "How do you handle shipping rate selection?",
          answer: "Available services can be compared against the order's delivery requirements when supported by the connected carrier accounts. Rates and service availability vary by carrier, account, destination, and package."
        }
      ],
      seo: {
        title: "DTC Pick and Pack Fulfillment | Such Group E-Commerce",
        description: "DTC pick-and-pack fulfillment from Montana with a 2 PM Mountain Time same-day target for eligible orders and barcode verification."
      }
    },
    "custom-kitting-and-assembly": {
      title: "Custom Kitting & Assembly",
      slug: "custom-kitting-and-assembly",
      tagline: "Promotional kits, subscription boxes, and custom inserts. Exactly as you designed.",
      description: "Want to launch a subscription box, build custom gift sets, or bundle promotional items? We specialize in custom kitting. You define the layout, placement, and visual structure, and our assembly team compiles the product configuration. We strictly document kitting instructions with photo SOPs to maintain consistent, standardized packaging across every order.",
      sla: "99.9% kitting accuracy with standardized assembly checklists.",
      turnaround: "Custom kitting requests configured and queued within 48 hours.",
      taxStatus: "Montana has no general statewide sales tax; transaction and client obligations vary.",
      benefits: [
        {
          title: "Subscription Box Fulfillment",
          description: "High-volume monthly assembly of custom-curated items in branded packaging with custom paper inserts."
        },
        {
          title: "Multi-SKU Bundles",
          description: "Assembling complex gift boxes, holiday packs, or promotional kits on-demand or in bulk."
        },
        {
          title: "Insert Management",
          description: "Adding flyers, discount cards, samples, or stickers exactly where they belong in the package."
        },
        {
          title: "Flexible Scale",
          description: "Ability to handle recurring kitting runs from 100 kits to 20,000+ kits per month."
        }
      ],
      faqs: [
        {
          question: "Can we provide our own custom branded boxes?",
          answer: "Yes. We encourage you to ship your branded boxes, poly-mailers, tissue paper, and stickers to our warehouse. We store them and use them to package your orders."
        },
        {
          question: "Do you have minimum volume requirements for kitting?",
          answer: "We handle kitting projects of all scales. However, for complex assembly projects, we recommend a minimum run of 100 kits to optimize setup costs."
        },
        {
          question: "How do we submit kitting instructions?",
          answer: "You can upload visual step-by-step assembly guides. Our warehouse team reviews these guides and creates a physical sample card for approval before commencing the full assembly run."
        }
      ],
      seo: {
        title: "E-commerce Kitting & Assembly | Such Group E-Commerce",
        description: "Custom subscription box assembly, multi-SKU kitting, and custom branded packaging. Error-free retail kitting."
      }
    },
    "streamlined-returns": {
      title: "Streamlined Returns",
      slug: "streamlined-returns",
      tagline: "Turn customer returns into active inventory. Mitigate revenue leaks.",
      description: "Returns are a part of doing business online, but they shouldn't be a black hole. We process customer returns quickly: auditing contents, inspecting item condition, photographing issues, and restocking sellable goods to recover your margins. Our returns dashboard gives you full visibility into what has been returned, why, and what was restocked.",
      sla: "Returns processed, inspected, and updated in your system in under 48 hours.",
      turnaround: "48-hour return inspection to restocking pipeline.",
      taxStatus: "Montana has no general statewide sales tax; transaction and client obligations vary.",
      benefits: [
        {
          title: "Visual Inspection",
          description: "Items checked for wear, missing accessories, or original packaging damage."
        },
        {
          title: "Condition Assessment",
          description: "Sorting returns into Restockable, Refurbish, Liquidate, or Dispose categories."
        },
        {
          title: "Photo Audits",
          description: "High-resolution photos uploaded for customer disputes or warranty validation."
        },
        {
          title: "Fast Restocking",
          description: "Sellable items are cleaned, repackaged, and returned to inventory bins immediately."
        }
      ],
      faqs: [
        {
          question: "Can you provide prepaid return labels for our customers?",
          answer: "Yes, our system can generate return shipping labels at our discounted carrier rates, which you can email directly to your customers."
        },
        {
          question: "How do you handle damaged returns?",
          answer: "Damaged or opened returns are inspected, photographed, and placed in a designated holds bin. We notify you via your dashboard to decide whether to liquidate or discard them."
        },
        {
          question: "Can you refurbish or re-pack returned items?",
          answer: "Yes. If an item is in pristine condition but the box is torn, we can repackage it in a clean box or bag, apply a fresh barcode, and return it to active stock."
        }
      ],
      seo: {
        title: "E-commerce Return Processing | Such Group E-Commerce",
        description: "Recover margins with fast, structured return logistics. Auditing, condition checks, and restocking in Montana."
      }
    },
    "branded-unboxing-experience": {
      title: "Branded Unboxing Experience",
      slug: "branded-unboxing-experience",
      tagline: "Deliver the ultimate first impression. Customized packaging SOPs.",
      description: "The unboxing is the only physical touchpoint DTC brands have with customers. Make it count. We execute custom packing layouts, utilizing your branded boxes, custom tissue paper, sticker seals, and specific product arrangements. We treat your packaging design as a strict standard operating procedure.",
      sla: "Documented adherence to your custom branded packaging layouts and SOP guidelines.",
      turnaround: "Integrated seamlessly into our same-day DTC shipping pipeline.",
      taxStatus: "Montana has no general statewide sales tax; transaction and client obligations vary.",
      benefits: [
        {
          title: "Branded Outer Packaging",
          description: "Packing orders inside your custom-printed mailers, shipping boxes, or using branded tape."
        },
        {
          title: "Custom Dunnage",
          description: "Utilizing color-coordinated crinkle paper, custom tissue wrap, or compostable packing peanuts."
        },
        {
          title: "Strategic Placement",
          description: "Ensuring products face upwards, logos are visible, and marketing cards are on top."
        },
        {
          title: "Fragrance & Detail Application",
          description: "SOP options to spray custom scents, apply tags, or seal items in custom envelopes."
        }
      ],
      faqs: [
        {
          question: "Do you charge extra for branded packaging?",
          answer: "Branded packaging carries a minor surcharge over standard brown-box packing due to the extra details. We supply clear, transparent pricing based on the complexity of your unboxing requirements."
        },
        {
          question: "Can you print custom pack slips with our logo?",
          answer: "Yes, our system formats packing slips to include your brand logo, custom fonts, social media links, and personalized messages."
        },
        {
          question: "Can we change packaging layouts for seasonal campaigns?",
          answer: "Absolutely. You can update your packing layout instructions in our portal at any time to include holiday flyers, custom seasonal boxes, or seasonal gifts."
        }
      ],
      seo: {
        title: "Branded Unboxing & Custom Packaging | Such Group E-Commerce",
        description: "Delight e-commerce customers with custom unboxing. We pack with branded boxes, tissue paper, and cards."
      }
    },
    "b2b-and-retail-routing": {
      title: "B2B & Retail Routing",
      slug: "b2b-and-retail-routing",
      tagline: "EDI compliance. UCC-128 labeling. Eliminate retail chargebacks.",
      description: "Shipping to big-box retailers or distribution centers requires strict adherence to routing guides. We build pallets, format UCC-128 labels, and coordinate freight carriers to meet compliance rules for Target, Walmart, Amazon, and others. We help you avoid costly routing penalties and chargebacks.",
      sla: "EDI-compliant order processing designed to prevent routing errors and chargebacks.",
      turnaround: "Palletization and retail routing prepared in 3 business days.",
      taxStatus: "Montana has no general statewide sales tax; transaction and client obligations vary.",
      benefits: [
        {
          title: "UCC-128 / GS1 Labeling",
          description: "Accurate barcode labeling that links directly to the purchase order for retail receiving."
        },
        {
          title: "Retail Compliance Audits",
          description: "We follow specific retailer routing guides down to pallet height, tie-high layout, and carrier setup."
        },
        {
          title: "EDI Integration",
          description: "Compatibility with popular EDI platforms to automate ASN (Advanced Shipping Notice) creation."
        },
        {
          title: "LTL & FTL Coordination",
          description: "Booking freight carriers, scheduling dock pickups, and managing Bill of Lading (BOL) paperwork."
        }
      ],
      faqs: [
        {
          question: "Which retail routing systems do you support?",
          answer: "We support retail routing for Amazon Vendor Central, Target, Walmart, Home Depot, Costco, Nordstrom, Macy's, and major retail distribution chains across the US."
        },
        {
          question: "How do you prevent retail chargebacks?",
          answer: "We strictly audit pallet configurations, box weights, and GS1 labels before loading trailers. Every shipment is photographed on the dock to prove compliance in case of distributor receiving errors."
        },
        {
          question: "Can you coordinate freight with our designated carriers?",
          answer: "Yes, we coordinate directly with your retail routing carriers (e.g. FedEx Freight, Estes, Old Dominion) to book docks and schedule pickup windows."
        }
      ],
      seo: {
        title: "B2B Retail Routing & Compliance | Such Group E-Commerce",
        description: "Avoid distributor chargebacks with compliant B2B retail routing. UCC-128 barcodes, EDI, and palletization in Montana."
      }
    }
  }
};
