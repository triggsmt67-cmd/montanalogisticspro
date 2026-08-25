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

export const SERVICES_DATA: Record<"amazon" | "ecommerce", Record<string, ServiceDetail>> = {
  amazon: {
    "fba-prep-and-labeling": {
      title: "FBA Prep & Labeling",
      slug: "fba-prep-and-labeling",
      tagline: "Flawless labeling, zero FBA rejection. Built for high-volume sellers.",
      description: "Amazon FBA requirements are notoriously rigid. A single mislabeled carton or missing suffocation warning can land your inventory in stranded status, costing you time, money, and valuable seller metrics. We audit, label, and prep your inventory to guarantee 100% compliance with Amazon’s FBA routing guides. Every unit is scanned at multiple checkpoints to ensure your barcodes are crisp, readable, and applied to the exact specification.",
      sla: "100% compliance guarantee or we cover any associated Amazon prep error fees.",
      turnaround: "24 to 48 hours from dock arrival to ready-to-ship.",
      taxStatus: "100% Tax-Free. Shielded by Montana's zero state sales tax.",
      benefits: [
        {
          title: "Zero-Error Scan SLA",
          description: "Every item and shipping carton is double-scanned using custom scanning checkpoints to verify barcode validity before dispatch."
        },
        {
          title: "FNSKU Application",
          description: "High-contrast thermal labels applied precisely over the original UPC, preventing Amazon from co-mingling your stock."
        },
        {
          title: "Carton Labeling & Weighing",
          description: "Precise box dimensions and weights recorded and printed on official FBA box labels to eliminate carrier and receiving disputes."
        },
        {
          title: "Expiration Date Compliance",
          description: "For grocery and topical items, we verify dates, compile safety documents, and apply human-readable date labels to meet strict Amazon standards."
        }
      ],
      faqs: [
        {
          question: "How do you handle co-mingled inventory?",
          answer: "We cover or replace original manufacturer UPCs with unique FNSKUs (Amazon barcodes) so your inventory is tracked exclusively to your seller account, eliminating the risk of co-mingled inventory issues."
        },
        {
          question: "What happens if Amazon flags a prep error on a shipment you processed?",
          answer: "Under our Compliance SLA, if Amazon issues a chargeback or warning due to a labeling or prep error we committed, we will reimburse the fee and process your next shipment free of charge."
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
      taxStatus: "No sales tax on kitting assembly, packaging materials, or storage.",
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
      taxStatus: "Tax-free packaging materials, bubble wrap, and poly bagging supplies.",
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
        description: "Secure packaging and poly bagging for fragile, liquid, and sharp items. Guaranteed FBA compliance in Montana."
      }
    },
    "tax-free-inventory-storage": {
      title: "Tax-Free Inventory Storage",
      slug: "tax-free-inventory-storage",
      tagline: "Secure warehousing in zero-sales-tax Montana. Fuel your profit margins.",
      description: "Montana is one of the few US states with zero sales tax. Storing your bulk inventory at our state-of-the-art facility completely shields your products from sales and holding taxes, allowing you to run a highly capital-efficient supply chain. We store your goods securely and only prep and ship them to Amazon FBA centers when your stock runs low, saving you from Amazon's seasonal storage fee spikes.",
      sla: "100% Tax-Free status. Absolute data security and inventory protection.",
      turnaround: "Immediate inventory logging upon freight arrival.",
      taxStatus: "No inventory holding tax, no receiving tax, and zero sales tax.",
      benefits: [
        {
          title: "Zero Sales Tax",
          description: "Save up to 8% or more on inventory purchasing and inbound shipping to our tax-free Montana warehouse."
        },
        {
          title: "Secure Warehousing",
          description: "Fully insured, climate-controlled, 24/7 video-monitored facility."
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
          answer: "By designating our Montana warehouse as your receiving address, wholesale orders shipped directly to our facility are exempt from state sales taxes. This immediately preserves up to 8.8% of your buying budget."
        },
        {
          question: "Is your facility climate-controlled?",
          answer: "Yes. Our facility is kept within strict temperature ranges to protect sensitive items like cosmetics, nutritional supplements, and electronics from heat degradation."
        },
        {
          question: "How long can we store inventory at your facility?",
          answer: "We offer both short-term prep staging storage and long-term bulk pallet storage. There is no maximum duration, and our rates remain flat year-round."
        }
      ],
      seo: {
        title: "Tax-Free Inventory Storage in Montana | Such Group E-Commerce",
        description: "Store bulk inventory completely tax-free in Montana. Climate-controlled warehouses with 24/7 security and live audits."
      }
    },
    "removal-order-processing": {
      title: "Removal Order Processing",
      slug: "removal-order-processing",
      tagline: "Recover value from returns and stranded Amazon inventory. Fast turnaround.",
      description: "Unfulfillable or stranded inventory sits at Amazon draining your profits. We receive your Amazon removal orders, inspect each unit for packaging and product damage, clean or repackage them, and route them back to active status or prepare them for secondary channels. We provide photo proof of defects so you can submit reimbursement claims to Amazon without delays.",
      sla: "Detailed condition audits and photographic proof within 48 hours of shipment arrival.",
      turnaround: "Audit report generated in 48 hours; restocking completed within 5 business days.",
      taxStatus: "Zero sales tax on returns receiving, inspection fees, or restocking materials.",
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
      description: "Creating shipments in Seller Central can be tedious and prone to errors. We handle the technical setup—inputting box content information, managing dimensions, selecting carrier options, and generating shipping labels directly—letting you focus strictly on inventory sourcing. We integrate directly with your Seller Central account using secure API access to build shipments flawlessly.",
      sla: "Shipments configured and labels generated same-day upon carton finalization.",
      turnaround: "Same-day shipment setup during warehouse operating hours.",
      taxStatus: "No tax on logistics coordination, freight booking, or compliance setups.",
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
          description: "Expert pallet wrapping, height limits, and stretch wrap protocols to meet Amazon's strict freight rules."
        },
        {
          title: "Workflow Integration",
          description: "Integration through Amazon API or secure sub-user access to handle shipment setup end-to-end."
        }
      ],
      faqs: [
        {
          question: "How do you access our Seller Central account?",
          answer: "We connect using restricted Amazon SP-API credentials or via limited permissions sub-user access. We only request permissions to view and edit shipment plans."
        },
        {
          question: "Can we use our own shipping carrier accounts?",
          answer: "Yes. While we default to Amazon Partnered Carriers for deep discounts, we can book shipments through your DHL, FedEx, UPS, or custom freight contracts."
        },
        {
          question: "How do you handle box content information?",
          answer: "Our warehouse system logs exactly which items go into which box, compiling this data into 2D barcodes or direct uploads so Amazon knows exactly what's inside each box upon arrival."
        }
      ],
      seo: {
        title: "Amazon Inbound Shipment Creation | Such Group E-Commerce",
        description: "Hands-free FBA shipment creation. We handle box content details, palletizing, and shipping labels via SP-API."
      }
    }
  },
  ecommerce: {
    "secure-warehousing": {
      title: "Secure Warehousing",
      slug: "secure-warehousing",
      tagline: "Barcoded inventory tracking. 24/7 security. Zero state inventory tax.",
      description: "Keep your inventory safe, organized, and accessible. Our Montana facility offers high-security, climate-controlled storage for products of all shapes and sizes. We manage inventory dynamically using barcoded shelf and pallet locations for instant searchability. Your inventory is audited weekly, ensuring physical stock perfectly mirrors your digital storefront data.",
      sla: "99.98% inventory accuracy tracking with cycle counts.",
      turnaround: "Inbound inventory received, audited, and binned in under 48 hours.",
      taxStatus: "Zero state sales tax, receiving tax, or inventory holding taxes.",
      benefits: [
        {
          title: "Climate-Controlled Storage",
          description: "Temperature and humidity regulation to protect cosmetics, organic materials, and electronics."
        },
        {
          title: "Dynamic WMS Tracking",
          description: "Every bin, shelf, and pallet is tracked digitally with automated barcode scans during moves."
        },
        {
          title: "Fast Receiving Audits",
          description: "Inbound inventory is unpacked, counted, and added to your active stock within 24-48 hours."
        },
        {
          title: "Zero State Holding Tax",
          description: "No state holding taxes or inventory taxes are applied to goods stored in our Montana warehouse."
        }
      ],
      faqs: [
        {
          question: "Do you charge fees for inbound receiving?",
          answer: "We offer competitive receiving rates based on pallet counts or carton counts. There are never any surprise handling surcharges."
        },
        {
          question: "How secure is your warehouse facility?",
          answer: "Our facility is equipped with 24/7 indoor and outdoor video surveillance, access control card readers, fire suppression systems, and strict background checks for all warehouse staff."
        },
        {
          question: "How frequently do you perform cycle counts?",
          answer: "We perform weekly cycle counts on high-velocity SKUs and monthly counts on slow-moving inventory to maintain 99.98% inventory data integrity."
        }
      ],
      seo: {
        title: "Secure Warehousing & Storage | Such Group E-Commerce",
        description: "Climate-controlled, secure warehousing in tax-free Montana. Weekly cycle counts and real-time inventory tracking."
      }
    },
    "direct-to-consumer-pick-and-pack": {
      title: "Direct-to-Consumer Pick & Pack",
      slug: "direct-to-consumer-pick-and-pack",
      tagline: "Rapid order fulfillment. Seamless e-commerce API integrations.",
      description: "Delighting online shoppers requires speed and accuracy. Our team picks, packs, and ships your orders the same day they are placed, integrating directly with Shopify, WooCommerce, and other major storefronts via API. With our automated scanning system, order pick accuracy reaches 99.9%, drastically lowering return rates and keeping customer ratings high.",
      sla: "Orders placed by 2 PM MT ship same-day with 99.9% pick accuracy.",
      turnaround: "Same-day dispatch for orders within daily SLA window.",
      taxStatus: "No sales tax on picking, packing, or packaging supplies.",
      benefits: [
        {
          title: "API-Driven Workflows",
          description: "Orders sync automatically from your store to our warehouse, and tracking numbers sync back instantly."
        },
        {
          title: "Same-Day Fulfillment",
          description: "Prompt same-day handling ensuring your customers receive their packages as quickly as possible."
        },
        {
          title: "Double-Scan Verification",
          description: "Items are scanned at pick and scanned again at pack to completely eliminate wrong-item shipments."
        },
        {
          title: "Optimized Carrier Rates",
          description: "We route packages dynamically through USPS, UPS, FedEx, and DHL to find the fastest, cheapest path."
        }
      ],
      faqs: [
        {
          question: "Which shopping platforms do you integrate with?",
          answer: "We integrate directly with Shopify, WooCommerce, Magento, BigCommerce, Amazon MCF, TikTok Shop, eBay, and Etsy. Custom integrations are available via our open REST API."
        },
        {
          question: "What is your daily cutoff time for same-day shipping?",
          answer: "Our standard cutoff time is 2:00 PM Mountain Time. Orders received before this time are guaranteed to ship same-day."
        },
        {
          question: "How do you handle shipping rate selection?",
          answer: "Our system runs a rate-shopping algorithm for every package, selecting the cheapest option that meets the customer's selected delivery timeline."
        }
      ],
      seo: {
        title: "DTC Pick & Pack Fulfillment | Such Group E-Commerce",
        description: "Same-day e-commerce order fulfillment. Real-time Shopify integration, rate shopping, and 99.9% pick accuracy."
      }
    },
    "custom-kitting-and-assembly": {
      title: "Custom Kitting & Assembly",
      slug: "custom-kitting-and-assembly",
      tagline: "Promotional kits, subscription boxes, and custom inserts. Exactly as you designed.",
      description: "Want to launch a subscription box, build custom gift sets, or bundle promotional items? We specialize in custom kitting. You define the layout, placement, and visual structure, and our assembly team compiles the perfect product configuration. We strictly document kitting instructions with photo SOPs to guarantee absolute packaging uniformity.",
      sla: "99.9% kitting accuracy with standardized assembly checklists.",
      turnaround: "Custom kitting requests configured and queued within 48 hours.",
      taxStatus: "Zero state sales tax on custom assembly materials or labor.",
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
      taxStatus: "Tax-free return logistics and restocking services.",
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
      sla: "100% adherence to your custom branded packaging layouts and guidelines.",
      turnaround: "Integrated seamlessly into our same-day DTC shipping pipeline.",
      taxStatus: "No sales tax on premium dunnage, custom tissue wrap, or insert materials.",
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
      description: "Shipping to big-box retailers or distribution centers requires absolute adherence to routing guides. We build pallets, format UCC-128 labels, and coordinate freight carriers to meet strict compliance rules for Target, Walmart, Amazon, and others. We help you avoid costly routing penalties and chargebacks.",
      sla: "100% EDI compliance with zero chargebacks due to warehouse errors.",
      turnaround: "Palletization and retail routing prepared in 3 business days.",
      taxStatus: "Tax-free retail logistics preparation and materials.",
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
