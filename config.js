/* ============================================================
   CONFIG — edit ONLY this file per client
   ============================================================ */

const CONFIG = {

  // ─── BUSINESS INFO ───────────────────────────────────────
  business: {
    name:      "Tree Felling Rosebank",
    phone:     "+27 76 091 4623",
    whatsapp:  "+27 76 091 4623",
    address:   "Johannesburg, South Africa",
    hours:     "Mon–Sat 7am–5pm",
    region:    "Gauteng",
    priceRange:"$$",
    suburbs: [
      "Johannesburg",
      "Randburg",
      "Sandton",
      "Midrand",
      "Roodepoort",
      "Soweto",
      "Centurion",
      "Pretoria"
    ]
  },

  // ─── PAGE META / SEO ─────────────────────────────────────
  meta: {
    title:       "Tree Felling Rosebank — Tree felling in johannesburg",
    description: "Tree Felling Rosebank provides professional tree felling in Johannesburg. 6 Google reviews. Call for a quote today.",
    url:         ""  // Live domain — e.g. https://example.co.za (activates canonical + WebSite schema)
  },

  // ─── BRANDING ────────────────────────────────────────────
  branding: {
    palette:  "forest",   // ember | security | forest | volt | tide
    ogImage:  "images/og.jpg"
  },

  // ─── CONTENT ─────────────────────────────────────────────
  content: {
    eyebrow:    "Tree felling · Johannesburg & surrounds",
    heroTitle:  "Safe tree felling — <em>from assessment to clean-up.</em>",
    heroLead:   "Tree Felling Rosebank handles tree felling, stump removal and trimming across Johannesburg and the surrounding suburbs. Professional equipment, safe teams, clean site.",

    googleRating: "5",
    reviewsCount: "6",
    featuredQuote: "Had a large bluegum brought down in sections. Brilliant team, very professional and left the garden spotless.",
    featuredQuoteAuthor: "— Anri P., Google review",

    trustSignals: ["Safe felling", "Stump removal", "Storm damage", "Clean-up included"],

    // ─── SERVICES ──────────────────────────────────────────
    servicesTitle: "Tree felling and removal done safely.",
    servicesLead:  "Big tree or small — we assess, fell safely and leave your property clear.",
    services: [
      {
        icon:  "tree",
        title: "Tree felling",
        desc:  "Full tree removal from small garden trees to large mature trees requiring section felling. Safety first, every time."
      },
      {
        icon:  "wrench",
        title: "Stump removal",
        desc:  "Stump grinding and removal so you are not left with an eyesore or a trip hazard in your garden."
      },
      {
        icon:  "broom",
        title: "Tree trimming & pruning",
        desc:  "Crown reduction, deadwood removal and shaping to keep trees healthy and clear of rooflines and power lines."
      },
      {
        icon:  "bolt",
        title: "Emergency storm damage",
        desc:  "Tree fallen on your property or across a driveway? We respond quickly to storm and wind damage callouts."
      },
      {
        icon:  "hardhat",
        title: "Dead & dangerous trees",
        desc:  "Diseased, dead or structurally unsafe trees assessed and removed before they become a bigger problem."
      },
      {
        icon:  "calendar",
        title: "Site clearance",
        desc:  "Full site clearance for construction, development or property renovation — trees, stumps and vegetation removed."
      },
    ],

    // ─── WORK GALLERY ──────────────────────────────────────
    galleryTitle: "The work, up close.",
    galleryLead:  "A look at the kind of work we handle every week.",
    gallery: [
      {
        image:   "images/work-1.jpg",
        art:     "lockCylinderPick",
        fig:     "01 — Tree felling",
        title:   "Safely brought down",
        caption: "Large trees section-felled carefully to control exactly where each piece lands — essential near structures and power lines."
      },
      {
        image:   "images/work-2.jpg",
        art:     "lockCylinderPick",
        fig:     "02 — Stump removal",
        title:   "Stump ground out completely",
        caption: "Stump grinding removes the stump below ground level so the area can be replanted, paved or levelled."
      },
      {
        image:   "images/work-3.jpg",
        art:     "lockCylinderPick",
        fig:     "03 — Tree trimming",
        title:   "Shaped and healthy",
        caption: "Crown reduction and deadwood removal improves tree health and clears branches away from rooflines and walls."
      },
      {
        image:   "images/work-4.jpg",
        art:     "lockCylinderPick",
        fig:     "04 — Storm damage",
        title:   "Cleared and safe",
        caption: "Storm and wind damage cleared quickly — fallen trees, broken limbs and debris removed from driveways and structures."
      },
      {
        image:   "images/work-5.jpg",
        art:     "lockCylinderPick",
        fig:     "05 — Site clearance",
        title:   "Site cleared and ready",
        caption: "Full site clearance of trees, stumps and brush for development, construction or property renovation."
      },
    ],

    // ─── PHOTO BAND ────────────────────────────────────────
    band: {
      image: "images/band.jpg",
      alt:   "Tree Felling Rosebank team at work in Johannesburg",
      text:  "Safe, efficient tree felling — from assessment to clean-up."
    },

    // ─── AREAS BLURB ───────────────────────────────────────
    areasTitle: "Based in Johannesburg. Covering the wider area.",
    areasLead:  "We work across Johannesburg CBD, Parktown, Melville and the surrounding suburbs. Emergency callouts for storm damage handled as quickly as possible.",
    areasNote:  "Covering most of greater Johannesburg — call us if you are not sure.",

    // ─── WHY US ────────────────────────────────────────────
    whyTitle: "Why people trust us with their trees.",
    why: [
      {
        title: "Safety first, always",
        desc:  "Every job is risk-assessed before we start. We use proper equipment and experienced climbers for any difficult felling work."
      },
      {
        title: "We leave it clean",
        desc:  "All wood, branches and green waste removed and the site left tidy. No log piles left for you to deal with."
      },
      {
        title: "Fair, honest quotes",
        desc:  "We quote on site so you know exactly what you are paying for before we start."
      },
    ],

    // ─── REVIEWS ───────────────────────────────────────────
    reviewsTitle: "From 6 verified Google reviews.",
    reviews: [
      {
        body:   "Had a large bluegum brought down in sections. Brilliant team, very professional and left the garden spotless.",
        name:   "Anri P.",
        stars:  5,
        source: "Google"
      },
      {
        body:   "Storm damage overnight — tree across the driveway. They were there by mid-morning and had it cleared by lunch. Great service.",
        name:   "Bernard T.",
        stars:  5,
        source: "Google"
      },
      {
        body:   "Used them for stump removal and tree trimming. Fair pricing, reliable team and clean site.",
        name:   "Nomsa D.",
        stars:  5,
        source: "Google"
      },
    ],

    // ─── FAQ ────────────────────────────────────────────────
    faqTitle: "Tree felling questions.",
    faqLead:  "What most people ask before booking.",
    faq: [
      {
        q: "Do you remove the wood and debris after felling?",
        a: "Yes — we remove all green waste, branches and debris. You can ask to keep the logs for firewood if you want them."
      },
      {
        q: "Can you fell a tree close to a house or wall?",
        a: "Yes. Trees close to structures require section felling — we cut from the top down in controlled pieces. We assess every job before quoting."
      },
      {
        q: "Do you handle storm damage callouts?",
        a: "Yes — we prioritise storm damage. Call us and we will get to you as quickly as possible."
      },
      {
        q: "Is stump removal included in the quote?",
        a: "Stump removal is usually quoted separately as it requires different equipment. We quote both together so you have the full picture."
      },
      {
        q: "My neighbour tree is hanging over my property — can you trim it?",
        a: "We can trim your side. For full removal, the tree owner needs to agree. We can advise on the best approach."
      },
    ],

    // ─── CONTACT ───────────────────────────────────────────
    contactTitle: "Tell us about the tree.",
    contactLead:  "Send through the details — size, location, any structures nearby — and we will get back to you quickly.",
    contactPlaceholder: "e.g. large bluegum 15m, close to wall, need felling and stump removed"
  }
};
