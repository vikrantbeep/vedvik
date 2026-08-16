export type BlogSection = { heading?: string; paragraphs: string[] };
export type BlogFAQ = { q: string; a: string };
export type RelatedLink = { label: string; href: string };

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  body: BlogSection[];
  faqs: BlogFAQ[];
  related: RelatedLink[];
  /** Cover image URL — supplied by the CMS; falls back to a generated placeholder. */
  image?: string;
};

export const posts: BlogPost[] = [
  {
    slug: "how-to-choose-the-right-packaging-machine",
    title: "How to Choose the Right Packaging Machine for Your Production Line",
    category: "Buying Guide",
    date: "2 June 2026",
    readTime: "9 min read",
    excerpt:
      "A packaging machine shapes your line's speed, quality and running cost for years. This guide walks through the seven decisions that matter most — product, pack format, dosing, throughput, changeover, inspection and total cost of ownership — so you invest in the right system the first time.",
    body: [
      {
        paragraphs: [
          "Choosing a packaging machine is one of the highest-leverage capital decisions a manufacturer makes. Get it right and the machine quietly pays for itself in throughput, reduced giveaway and fewer rejects for a decade. Get it wrong and you inherit a bottleneck that constrains every shift, every product launch and every margin conversation for years.",
          "The single biggest mistake buyers make is starting with the machine. They see an impressive line at a trade show or in a competitor's plant and reverse-engineer their requirement to fit it. The right order is the opposite: define your product, your pack and your output first, then let those requirements select the machine. This guide covers the seven decisions, in priority order, that determine whether you buy the right system.",
        ],
      },
      {
        heading: "1. Start with your product, not the machine",
        paragraphs: [
          "Every packaging machine is ultimately a product-handling machine, and products behave very differently. Free-flowing powders, sticky pastes, aerated snacks, abrasive granules, hot-fill liquids and fragile biscuits each impose different demands on dosing, contact materials and handling speed. A machine that runs flawlessly with dry granules can choke on a hygroscopic powder; a filler tuned for thin juice will struggle with a thick sauce.",
          "Before you compare suppliers, document your product's physical behaviour: bulk density, flow characteristics, particle size, temperature, viscosity, abrasiveness and any tendency to bridge, clump or foam. These properties decide which dosing technology fits — auger, volumetric cup, multihead weigher, servo pump or gravity fill — and that choice cascades into every other part of the line.",
        ],
      },
      {
        heading: "2. Lock the pack format before you shortlist",
        paragraphs: [
          "Pack format is a commercial decision as much as a technical one, and it constrains machine architecture more than almost anything else. A stand-up pouch with a spout, a three-side-seal sachet, a pillow pack, a rigid bottle and a 25 kg bulk sack each imply a fundamentally different machine. Switching format after you have bought the machine is expensive or impossible.",
          "Decide the format your market expects, then confirm two things with every supplier: the exact size and style range the machine can run, and how quickly it changes over between them. If you sell into multiple formats or sizes, tool-free, repeatable changeover is worth paying for — it is the difference between a line that flexes with demand and one that ties up a shift on every product switch.",
        ],
      },
      {
        heading: "3. Match the dosing and filling technology to the product",
        paragraphs: [
          "Dosing accuracy is where product quality, regulatory compliance and profit all meet. Volumetric and cup fillers are fast and economical for consistent free-flowing products. Auger fillers handle fine and aerated powders such as spices and nutraceuticals. Multihead weighers deliver high accuracy on irregular products like snacks, pet kibble and frozen pieces. Servo and gravity fillers suit liquids, with flow-meter or weigh-based control for the tightest tolerances.",
          "The right answer depends on the product you documented in step one. Ask suppliers to demonstrate the machine on your actual product, not a stand-in, and to quote a guaranteed fill accuracy and reject rate. Vedvik's pouch packing and liquid filling lines, for example, are matched to product behaviour rather than sold as a one-size-fits-all box.",
        ],
      },
      {
        heading: "4. Size for realistic throughput, not peak rate",
        paragraphs: [
          "Throughput is where buyers most often over- or under-spend. Buying far more speed than you need wastes capital and adds complexity you will maintain forever; buying too little caps your growth and forces a premature second purchase. Size the machine to your realistic volume over the next 18 to 24 months, with sensible headroom — not to a number that flatters a business plan.",
          "Crucially, ask about sustained throughput on your product and pack, not the headline rate quoted on the brochure. Catalogue speeds are usually achieved on ideal product, ideal film and perfect conditions. Real-world output after accounting for changeovers, cleaning and minor stops is the number that actually determines your cost per pack.",
        ],
      },
      {
        heading: "5. Plan for changeover and flexibility",
        paragraphs: [
          "Few lines run a single SKU forever. New sizes, new recipes and seasonal products all demand changeovers, and every minute of changeover is lost production. Tool-free format parts, recipe storage on the HMI and quick-release tooling dramatically reduce downtime and the skill required to switch products safely.",
          "If your roadmap includes new formats, choose a platform that can be upgraded — additional filling stations, extra lanes, or modules for ziplock, spout or shaped pouches — rather than one you will outgrow. Flexibility bought up front is far cheaper than a replacement machine later.",
        ],
      },
      {
        heading: "6. Build in inspection and compliance",
        paragraphs: [
          "A packaging line that fills accurately but ships non-conforming product is a liability. Inline checkweighing controls both underweight (a legal and reputational risk) and overweight (free product given away on every pack, which compounds quickly at volume). Vision inspection verifies fill level, seal integrity, label placement and code legibility, while X-ray and metal detection protect against foreign bodies.",
          "For regulated sectors — pharmaceuticals, nutraceuticals and export food — inspection and serialisation are not optional extras; they are entry requirements. Specify them at the design stage so they integrate cleanly with the primary machine rather than being bolted on later. A checkweigher pays for itself in giveaway savings alone on most high-volume lines.",
        ],
      },
      {
        heading: "7. Weigh total cost of ownership and local support",
        paragraphs: [
          "The purchase price is the smallest part of what a machine costs you. Energy, film and material efficiency, spare-parts availability, mean time between failures and the speed of service support all dwarf the sticker price over a ten-year life. A marginally cheaper machine with slow support and scarce spares is almost always the more expensive choice.",
          "This is where local representation matters most. A machine supplied, installed, commissioned and serviced by a local team — with spares on hand and engineers who can be on site quickly — keeps your line running. That is the core of what Vedvik Machinery provides from Ahmedabad: European packaging and inspection technology backed by Indian installation and after-sales support.",
        ],
      },
      {
        heading: "The bottom line",
        paragraphs: [
          "Choose your machine in the right order — product, format, dosing, throughput, changeover, inspection, then total cost — and you will buy a system that fits your line for years instead of one you fight every shift. If you can describe your product, target output and pack format, our team can recommend the right configuration and arrange a demonstration on your own product.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the most important factor when choosing a packaging machine?",
        a: "Start with your product's physical behaviour — flow, viscosity, particle size and temperature — because it determines the dosing technology, and that choice cascades into every other part of the line. Lock the pack format next, then size for realistic throughput.",
      },
      {
        q: "Should I buy a packaging machine with more speed than I currently need?",
        a: "Size the machine to your realistic 18–24 month volume with sensible headroom. Buying far more speed than you need wastes capital and adds complexity; buying too little caps growth. Always compare sustained throughput on your product, not the brochure's peak rate.",
      },
      {
        q: "Do I need a checkweigher or inspection system on a new line?",
        a: "If you sell by declared weight, run high volumes, or operate in pharma, nutraceutical or export food, yes. A checkweigher controls underweight (legal risk) and overweight (giveaway), and usually pays for itself in giveaway savings. Specify inspection at the design stage so it integrates cleanly.",
      },
    ],
    related: [
      { label: "Pouch Packing", href: "/solutions/horizontal-form-fill-seal" },
      { label: "Liquid Filling", href: "/solutions/liquid-filling" },
      { label: "Checkweighers", href: "/solutions/checkweighers" },
    ],
  },
  {
    slug: "what-is-checkweighing",
    title: "What is Checkweighing? A Complete Guide for Manufacturers",
    category: "Technology",
    date: "4 June 2026",
    readTime: "8 min read",
    excerpt:
      "A checkweigher weighs every pack on the line and rejects any that fall outside tolerance. This guide explains how dynamic checkweighing works, why it protects both compliance and profit, the reject and certification options, and when your line needs one.",
    body: [
      {
        paragraphs: [
          "A checkweigher is an automatic inline scale that weighs every single pack as it moves along the production line and rejects any that fall outside a set weight tolerance. It is one of the simplest and most cost-effective pieces of quality-control equipment a manufacturer can install, and on high-volume lines it often pays for itself within months.",
          "Unlike a static scale, a dynamic checkweigher captures a stable, accurate weight while the product is moving at full line speed — hundreds of packs per minute — and acts on the result in milliseconds. That combination of speed and accuracy is what makes 100% weight verification practical in modern production.",
        ],
      },
      {
        heading: "How a dynamic checkweigher works",
        paragraphs: [
          "Packs are carried over a high-speed weighing conveyor built around a precision load cell or electromagnetic force-restoration (EMFR) weigh sensor. As each pack transits the weigh belt, the system samples the weight signal, filters out vibration and belt noise, and resolves a stable value in a fraction of a second.",
          "That value is compared against the target weight band — a minimum and maximum you configure per product. Packs inside the band continue; packs outside it trigger a reject device downstream. The system also logs every reading, giving you a continuous record of line performance, trends and giveaway for audits and process control.",
        ],
      },
      {
        heading: "Why checkweighing matters: compliance and profit",
        paragraphs: [
          "Checkweighing protects two things at once. The first is compliance. If you sell by declared weight, shipping underweight packs exposes you to legal penalties, retailer chargebacks and reputational damage. Many markets enforce average-weight or minimum-weight legislation, and a certified checkweigher gives you the documented proof of conformance regulators expect.",
          "The second is profit, and it is the one manufacturers underestimate. Every overweight pack is free product given away. A few grams of overfill per pack sounds trivial until you multiply it by hundreds of packs a minute across every shift — at which point it becomes one of the largest controllable losses on the line. By tightening the target band, a checkweigher turns that giveaway back into margin.",
        ],
      },
      {
        heading: "Reject systems and where they fit",
        paragraphs: [
          "Out-of-spec packs are removed by a reject device matched to the product. Air-blast rejects suit light packs like sachets and pouches; pusher or paddle arms handle heavier or rigid packs; drop-flap and diverter systems route product onto a separate conveyor. The right choice depends on pack weight, speed and how the rejected product is collected.",
          "Good reject design includes confirmation that the reject actually occurred — a bin-full sensor, a reject-confirm photocell and lockable reject bins — so that a non-conforming pack can never reach the customer. In regulated environments this validated reject chain is as important as the weighing itself.",
        ],
      },
      {
        heading: "Accuracy, certification and standards",
        paragraphs: [
          "Checkweigher accuracy depends on the weigh technology, line speed, pack weight and the stability of the conveyor and environment. As a rule, accuracy tightens as speed drops and as pack weight rises relative to the required resolution. Manufacturers should ask suppliers for a guaranteed accuracy at their specific speed and weight, demonstrated on their own product.",
          "For trade and regulated use, look for OIML R51 and CE certification, which define the metrological requirements for automatic catchweighing instruments. Certified systems give you legally defensible documentation — important for pharma, export food and any line audited by a regulator or major retailer.",
        ],
      },
      {
        heading: "When does your line need a checkweigher?",
        paragraphs: [
          "If you sell by declared weight, operate in a regulated sector, supply major retailers, or run high enough volumes that giveaway compounds into real money, a checkweigher is usually an easy business case. It is also the natural partner to your filler: the filler aims for the target, and the checkweigher verifies it and feeds back so the filler can be tuned.",
          "Checkweighing also pairs naturally with other inline inspection — metal detection, X-ray and vision — to form a complete end-of-line quality gate. Many manufacturers combine checkweighing with X-ray and metal detection in a single station to verify weight and screen for contaminants in one pass.",
        ],
      },
      {
        heading: "In summary",
        paragraphs: [
          "A checkweigher is a small investment that protects your licence to sell and recovers margin on every pack. If you are specifying a new line or trying to cut giveaway on an existing one, our team can recommend an OIML/CE-certified checkweigher sized to your product, speed and reject requirements.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is a checkweigher?",
        a: "A checkweigher is an automatic inline scale that weighs every pack on a production line while it is moving and automatically rejects any pack that falls outside a set minimum/maximum weight band, protecting both legal compliance and profit.",
      },
      {
        q: "How accurate are checkweighers?",
        a: "Accuracy depends on weigh technology, line speed and pack weight — it tightens at lower speeds and higher pack weights. Ask for a guaranteed accuracy at your specific speed and weight. For trade use, choose OIML R51 and CE-certified systems.",
      },
      {
        q: "Is a checkweigher legally required?",
        a: "If you sell by declared weight, many markets enforce average- or minimum-weight legislation, and a certified checkweigher provides the documented proof of conformance regulators and retailers expect. It is effectively required in pharma and export food.",
      },
    ],
    related: [
      { label: "Checkweighers", href: "/solutions/checkweighers" },
      { label: "X-Ray & Metal Detection", href: "/solutions/x-ray-and-metal-detection" },
      { label: "Vision Inspection", href: "/solutions/vision-inspection" },
    ],
  },
  {
    slug: "vffs-vs-hffs-packaging-machines",
    title: "VFFS vs HFFS Packaging Machines: Which One is Right for Your Product?",
    category: "Buying Guide",
    date: "16 June 2026",
    readTime: "9 min read",
    excerpt:
      "Vertical and horizontal form-fill-seal machines are not interchangeable. The right choice depends on your product, pack format and throughput. This guide explains how each works, their strengths and limits, and how to decide between VFFS and HFFS.",
    body: [
      {
        paragraphs: [
          "Form-fill-seal (FFS) machines are the workhorses of modern packaging. They take a flat roll of film, form it into a pouch or bag, fill it with product and seal it — all in one continuous, automated process. The category splits into two architectures that look similar on a spec sheet but behave very differently in practice: vertical (VFFS) and horizontal (HFFS).",
          "Choosing the wrong one is an expensive mistake, because the orientation of the machine dictates which products and formats it can run well. This guide explains how each works, where each excels, and a simple framework for deciding which fits your product.",
        ],
      },
      {
        heading: "What form-fill-seal means",
        paragraphs: [
          "In any FFS machine, film unwinds from a reel, a forming shoulder or plate shapes it into a tube or pouch, vertical and horizontal seals are made, the product is dosed in, and the final seal closes the pack — which is then cut off and discharged. Doing all of this in one machine is what makes FFS so efficient compared with using pre-made pouches.",
          "The defining difference between the two types is the direction in which the pack is formed and filled. That single factor changes how product enters the pack, which in turn decides what each machine is good at.",
        ],
      },
      {
        heading: "Vertical form-fill-seal (VFFS)",
        paragraphs: [
          "In a VFFS machine the film is formed into a vertical tube and the product drops into it by gravity, usually fed from a multihead weigher, auger or volumetric filler mounted above. The machine then seals and cuts the pack at the bottom.",
          "VFFS excels with free-flowing products — snacks, granules, powders, grains, pulses, frozen pieces and pet food — at high speed. It produces pillow packs, gusseted bags and (with the right kit) stand-up and quad-seal pouches, and it does so with a compact footprint because the whole process stacks vertically. For high-volume dry products in bag formats, VFFS is usually the most cost-effective choice.",
        ],
      },
      {
        heading: "Horizontal form-fill-seal (HFFS)",
        paragraphs: [
          "In an HFFS machine, pouches are formed and filled lying flat as they move horizontally through the machine — either from a roll of film or from pre-made pouches in a pouch-handling (pick-fill-seal) version. Because the pack is filled while horizontal and supported, product can be placed rather than dropped.",
          "That makes HFFS the better choice for premium and complex formats: shaped pouches, spouted pouches, ziplock and resealable packs, and products that need careful handling — wet items, delicate pieces, or multiple components placed into one pack. HFFS lines like the Effytec HB Series run shaped, spouted and ziplock pouches at up to 320 packs per minute, which is why they dominate premium food, beverage and personal-care packaging.",
        ],
      },
      {
        heading: "VFFS vs HFFS: head to head",
        paragraphs: [
          "Product: VFFS suits free-flowing dry products dropped by gravity; HFFS suits liquids, wet products, delicate items and anything that must be placed precisely. Format: VFFS owns pillow and gusseted bags; HFFS owns shaped, spouted, ziplock and stand-up pouches. Speed: both can be very fast, but VFFS tends to lead on simple high-volume bags while HFFS leads on complex premium pouches.",
          "Footprint and cost: VFFS is generally more compact and lower cost for equivalent simple output, while HFFS commands a premium for the formats and handling it enables. Neither is universally 'better' — they are tools for different jobs, and many plants run both.",
        ],
      },
      {
        heading: "How to decide",
        paragraphs: [
          "Work in this order. First, fix the pack format your market expects — that alone often makes the decision. If you need a pillow or gusseted bag of a free-flowing product, VFFS. If you need a premium stand-up, spouted or ziplock pouch, HFFS. Second, consider the product's behaviour: gravity-droppable and free-flowing leans VFFS; wet, delicate or placed leans HFFS. Third, weigh volume and budget.",
          "By industry, VFFS dominates snacks, spices, grains and pet food; HFFS dominates premium beverages, sauces, personal care and pharmaceutical pouches. If your roadmap spans both, talk to a supplier who offers both so the recommendation is driven by your product rather than by what they happen to stock.",
        ],
      },
      {
        heading: "The verdict",
        paragraphs: [
          "VFFS and HFFS are complementary, not competing. Choose VFFS for free-flowing products in bag formats at high volume, and HFFS for premium, shaped or resealable pouches and products that need careful handling. Share your product and target pack format with our team and we'll recommend the right architecture — and demonstrate it on your own product before you commit.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the difference between VFFS and HFFS?",
        a: "VFFS (vertical form-fill-seal) forms a vertical tube of film and drops product in by gravity — ideal for free-flowing products in pillow and gusseted bags. HFFS (horizontal form-fill-seal) forms and fills pouches lying flat, so product can be placed precisely — ideal for shaped, spouted and ziplock pouches and delicate or wet products.",
      },
      {
        q: "Which is faster, VFFS or HFFS?",
        a: "Both can run at high speed. VFFS typically leads on simple, high-volume bag formats of dry product, while HFFS leads on complex premium pouches — for example, HFFS lines can run shaped, spouted and ziplock pouches at up to 320 packs per minute.",
      },
      {
        q: "Can one machine do both VFFS and HFFS?",
        a: "No — they are different architectures. The choice is driven by your pack format and product. Many plants run both types for different products. Start by fixing the pack format your market expects, then match the machine to it.",
      },
    ],
    related: [
      { label: "Pouch Packing (HFFS)", href: "/solutions/horizontal-form-fill-seal" },
      { label: "Bulk Packing (HFFS/VFFS)", href: "/solutions/bulk-packing" },
      { label: "Stick Packing", href: "/solutions/stick-packing" },
    ],
  },
];

export const postSlugs = posts.map((p) => p.slug);

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
