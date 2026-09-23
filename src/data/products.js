export const products = [
  // ==========================================
  // BEDDING (Home Furnishings -> Bedding)
  // ==========================================
  {
    id: "bed-01",
    name: "Avadh Waffle Pure Flax Linen Bedcover Set",
    mainCategory: "Home Furnishings",
    category: "Bedding",
    subcategory: "Bed Covers",
    tagline: "Pre-washed European flax woven in deep breathable waffle honeycomb",
    price: 7499,
    originalPrice: 9200,
    rating: 5.0,
    reviewsCount: 41,
    isFeatured: true,
    isBestseller: true,
    isNew: true,
    material: "100% Normandy Pre-Washed Flax",
    weave: "Deep Honeycomb Waffle",
    pattern: "Solid Waffle Weave",
    origin: "Selection Luxury Linen Loom",
    headerTypes: ["Includes King Bedcover + 2 Pillow Shams"],
    dimensions: [
      { id: "queen", label: "Queen (90 x 100 in)", priceMultiplier: 1 },
      { id: "king", label: "King (108 x 108 in)", priceMultiplier: 1.25 }
    ],
    colors: [
      { name: "Warm Oatmeal", hex: "#DDD2C1", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80" },
      { name: "Terracotta Clay", hex: "#C86D51", image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=80" },
      { name: "Botanical Olive", hex: "#657762", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80" }
    ],
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Incomparably soft, thermoregulating pure linen that grows softer with every wash. The ultimate bedroom centerpiece.",
    fullDescription: "Woven with extra deep honeycomb pockets that trap air for natural insulation in winter while staying cool and breathable through warm humid nights.",
    careInstructions: "Machine wash warm, tumble dry low for relaxed lived-in crinkle texture. No ironing needed.",
    roomRecommendation: "Master Bedrooms, Luxury Guest Suites."
  },
  {
    id: "bed-02",
    name: "Jaipuri Hand-Block Cotton Dohar",
    mainCategory: "Home Furnishings",
    category: "Bedding",
    subcategory: "Dohars",
    tagline: "Triple-layer fine mulmul cotton with natural herbal dye block print",
    price: 2899,
    originalPrice: 3499,
    rating: 4.9,
    reviewsCount: 36,
    isFeatured: true,
    isBestseller: true,
    isNew: true,
    material: "100% Organic Mulmul Cotton",
    weave: "Triple Layer Handloom Voile",
    pattern: "Traditional Floral Mughal Boota",
    origin: "Jaipur & Meerut Atelier",
    headerTypes: ["Reversible Floral & Geometric Print"],
    dimensions: [
      { id: "single", label: "Single (60 x 90 in)", priceMultiplier: 1 },
      { id: "double", label: "Double (90 x 100 in)", priceMultiplier: 1.4 }
    ],
    colors: [
      { name: "Mustard & Indigo", hex: "#D99B26", image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=80" },
      { name: "Coral Rose & Sage", hex: "#E07A5F", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80" }
    ],
    images: [
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Featherweight summer dohar constructed with three layers of ultra-soft mulmul cotton, printed with heritage wooden teak blocks.",
    fullDescription: "The middle layer is softly brushed cotton flannel, sandwiched between sheer block-printed voile outer sheets, giving optimal breathability during air-conditioned summer nights.",
    careInstructions: "Machine wash cold on gentle cycle. Dry in gentle shade to preserve herbal dye vibrancy.",
    roomRecommendation: "Living Room Daybeds, Master Suites, Summer Sleeping."
  },
  {
    id: "bed-03",
    name: "Royal Rajputana 8-Piece Diwan Set",
    mainCategory: "Home Furnishings",
    category: "Bedding",
    subcategory: "Diwan Sets",
    tagline: "Complete set with 1 Diwan Sheet, 5 Cushion Covers, and 2 Bolster Covers",
    price: 4950,
    originalPrice: 6200,
    rating: 4.8,
    reviewsCount: 22,
    isFeatured: true,
    isBestseller: false,
    isNew: false,
    material: "Pure Glace Cotton & Zari Embroidery",
    weave: "High Thread-Count Satin Weave",
    pattern: "Paisley Arch & Geometric Borders",
    origin: "Meerut Master Diwan Workshop",
    headerTypes: ["Includes 1 Sheet + 5 Cushions + 2 Bolsters"],
    dimensions: [
      { id: "std", label: "Standard Diwan (60 x 90 in)", priceMultiplier: 1 }
    ],
    colors: [
      { name: "Peacock Blue & Gold", hex: "#1C4E5E", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80" },
      { name: "Deep Ruby & Ochre", hex: "#8A2828", image: "https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?auto=format&fit=crop&w=1000&q=80" }
    ],
    images: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Curated heritage diwan ensemble adorned with delicate gold zari embroidery on breathable, heavy-drape cotton.",
    fullDescription: "A timeless centerpiece for classical baithaks and drawing rooms. Designed to fit traditional diwan mattresses with perfectly coordinated cushion and bolster covers.",
    careInstructions: "Gentle machine wash inside out or dry clean for zari longevity.",
    roomRecommendation: "Traditional Baithaks, Drawing Rooms, Living Lounges."
  },
  {
    id: "bed-04",
    name: "Heirloom 400 TC Satin Percale Bedsheet",
    mainCategory: "Home Furnishings",
    category: "Bedding",
    subcategory: "Bedsheets",
    tagline: "400 Thread Count long-staple Indian cotton with double-stitched hem",
    price: 3299,
    originalPrice: 4100,
    rating: 4.9,
    reviewsCount: 58,
    isFeatured: false,
    isBestseller: true,
    isNew: false,
    material: "100% Long-Staple Combed Cotton",
    weave: "Crisp Percale / Smooth Sateen",
    pattern: "Minimalist Hemstitch Border",
    origin: "Selection Handloom Loom",
    headerTypes: ["Includes Flat Sheet + 2 Pillowcases"],
    dimensions: [
      { id: "king", label: "King Flat (108 x 108 in)", priceMultiplier: 1 },
      { id: "superking", label: "Super King (108 x 120 in)", priceMultiplier: 1.2 }
    ],
    colors: [
      { name: "Sage Mist", hex: "#8DA98F", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80" },
      { name: "Turmeric Yellow", hex: "#E3A82B", image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=80" },
      { name: "Ivory Pearl", hex: "#FAF5EE", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80" }
    ],
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Buttery soft, silky-smooth 400 TC bedsheet that stays cool, resists pilling, and retains structured crispness.",
    fullDescription: "Crafted from hand-selected combed cotton fibers woven with high-density threads to provide an unmistakable 5-star sanctuary hotel hand-feel.",
    careInstructions: "Machine wash warm with mild detergent. Tumble dry on medium heat.",
    roomRecommendation: "Master Bedrooms, Guest Rooms."
  },
  {
    id: "bed-05",
    name: "Kashmir Hand-Spun Pashmina Throw Blanket",
    mainCategory: "Home Furnishings",
    category: "Bedding",
    subcategory: "Blankets",
    tagline: "100% Changthangi goat pashmina wool with delicate feather fringe",
    price: 9450,
    originalPrice: 11900,
    rating: 5.0,
    reviewsCount: 31,
    isFeatured: true,
    isBestseller: true,
    isNew: false,
    material: "Pure Handloom Pashmina Cashmere",
    weave: "Chashm-e-Bulbul Diamond Weave",
    pattern: "Micro Diamond Weave with Fringes",
    origin: "Kashmir Valley & Meerut Curation",
    headerTypes: ["Hand-Twisted Fringe Edges"],
    dimensions: [
      { id: "throw", label: "Standard Throw (50 x 70 in)", priceMultiplier: 1 }
    ],
    colors: [
      { name: "Undyed Natural Flax Cream", hex: "#EDE6D8", image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=80" },
      { name: "Muted Sage Green", hex: "#728974", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80" },
      { name: "Peacock Blue", hex: "#1B4D63", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80" }
    ],
    images: [
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "The softest natural fiber on earth. Handspun by master artisans on wooden charkhas.",
    fullDescription: "Draped over a reading armchair or the foot of a bed, this authentic pashmina throw delivers cloud-like softness and timeless luxury.",
    careInstructions: "Specialist cashmere dry clean only. Store with cedar balls.",
    roomRecommendation: "Master Bed, Living Room Armchairs, Library."
  },
  {
    id: "bed-06",
    name: "Jaipur Microfiber Winter Quilt & Comforter",
    mainCategory: "Home Furnishings",
    category: "Bedding",
    subcategory: "Quilts",
    tagline: "Ultra-warm 400 GSM all-season quilt with baffle-box anti-clump stitching",
    price: 4599,
    originalPrice: 5600,
    rating: 4.8,
    reviewsCount: 29,
    isFeatured: false,
    isBestseller: false,
    isNew: true,
    material: "100% Breathable Microfiber & Cotton Shell",
    weave: "Baffle-Box Quilted",
    pattern: "Reversible Dual Tone",
    origin: "Selection Bedding Studio",
    headerTypes: ["Includes Reversible King Quilt"],
    dimensions: [
      { id: "queen", label: "Queen (90 x 100 in)", priceMultiplier: 1 },
      { id: "king", label: "King (108 x 108 in)", priceMultiplier: 1.25 }
    ],
    colors: [
      { name: "Sage & Deep Olive", hex: "#5A6F57", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80" },
      { name: "Mustard Ochre & Ivory", hex: "#D49B24", image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=80" }
    ],
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Ultra-plush winter quilt that locks in warmth while preventing clump accumulation.",
    fullDescription: "Expertly stitched with corner loops for quilt covers. Hypoallergenic filling gives continuous thermal comfort throughout cold seasons.",
    careInstructions: "Machine wash cold gentle. Sun air seasonally.",
    roomRecommendation: "Bedrooms, Winter Sanctuaries."
  },
  {
    id: "bed-07",
    name: "Pure Cotton Flange Quilt Cover Set",
    mainCategory: "Home Furnishings",
    category: "Bedding",
    subcategory: "Quilt Covers",
    tagline: "300 TC percale duvet cover with mother-of-pearl hidden button closure",
    price: 2699,
    originalPrice: 3299,
    rating: 4.7,
    reviewsCount: 18,
    isFeatured: false,
    isBestseller: false,
    isNew: false,
    material: "100% Combed Cotton Percale",
    weave: "Crisp Plain Weave",
    pattern: "Solid with French Seam Flange",
    origin: "Selection Handloom Loom",
    headerTypes: ["Includes 1 Duvet Cover + 2 Pillow Shams"],
    dimensions: [
      { id: "queen", label: "Queen (90 x 100 in)", priceMultiplier: 1 },
      { id: "king", label: "King (108 x 108 in)", priceMultiplier: 1.2 }
    ],
    colors: [
      { name: "Coral Blush", hex: "#E28773", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80" },
      { name: "Crisp Linen Chalk", hex: "#FAF9F6", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80" }
    ],
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Protective and styling cover for duvets and comforters with tailored 2-inch border flanges.",
    fullDescription: "Easy to slip over any comforter or dohar to refresh your bed look seasonally while keeping inserts clean.",
    careInstructions: "Machine wash cold. Warm iron if desired.",
    roomRecommendation: "Master Suite, Guest Bed."
  },

  // ==========================================
  // CURTAINS (Home Furnishings -> Curtains)
  // ==========================================
  {
    id: "curt-01",
    name: "Aethelgard Handwoven Botanical Curtain (Stitched)",
    mainCategory: "Home Furnishings",
    category: "Curtains",
    subcategory: "Stitched",
    tagline: "Pure Belgian flax linen with gentle sage foliage print — Tailored ready to hang",
    price: 3450,
    originalPrice: 4200,
    rating: 4.9,
    reviewsCount: 38,
    isFeatured: true,
    isBestseller: true,
    isNew: false,
    material: "Pure Flax Linen",
    weave: "Open Slub Handloom",
    opacity: "Light Filtering (60%)",
    drapeWeight: "Medium Drape (240 GSM)",
    origin: "Meerut Handloom Workshop",
    headerTypes: [
      "Eyelet Brass Rings",
      "Pencil Pleat",
      "American Double Pleat",
      "Rod Pocket"
    ],
    dimensions: [
      { id: "w5", label: "Window (5 ft x 4 ft)", priceMultiplier: 1 },
      { id: "d7", label: "Door (7 ft x 4 ft)", priceMultiplier: 1.35 },
      { id: "ld9", label: "Long Door (9 ft x 4 ft)", priceMultiplier: 1.7 },
      { id: "cust", label: "Custom Tailored Dimensions", priceMultiplier: 1.9 }
    ],
    colors: [
      { name: "Sage Leaf & Cream", hex: "#8DA98F", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80" },
      { name: "Terracotta Clay", hex: "#C86D51", image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=80" },
      { name: "Warm Ivory", hex: "#FAF5EE", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80" }
    ],
    images: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Crafted from premium hand-spun linen with delicate sage botanicals that cast soft ambient shadows.",
    fullDescription: "Our signature Aethelgard drapery combines artisanal slub linen with heirloom botanical motifs. The open-weave texture filters harsh glare into a calm, gentle warmth while retaining natural air circulation.",
    careInstructions: "Dry clean recommended for first wash. Gentle machine wash cold with mild linen detergent.",
    roomRecommendation: "Living Rooms, Sunlit Dining Spaces, Master Bedrooms."
  },
  {
    id: "curt-02",
    name: "Sultana Heritage Paisley Jacquard Drape (Stitched)",
    mainCategory: "Home Furnishings",
    category: "Curtains",
    subcategory: "Stitched",
    tagline: "Heavy brocade jacquard with regal Kashmiri tone-on-tone paisley relief",
    price: 5850,
    originalPrice: 6900,
    rating: 5.0,
    reviewsCount: 24,
    isFeatured: true,
    isBestseller: false,
    isNew: true,
    material: "Organic Cotton & Silk Blend",
    weave: "Double-Warp Jacquard",
    opacity: "Room Darkening (85%)",
    drapeWeight: "Heavy Luxe Drape (380 GSM)",
    origin: "Meerut Master Weaving Guild",
    headerTypes: [
      "American Triple Pinch Pleat",
      "Eyelet Vintage Bronze",
      "Concealed Tab Top"
    ],
    dimensions: [
      { id: "w5", label: "Window (5 ft x 4 ft)", priceMultiplier: 1 },
      { id: "d7", label: "Door (7 ft x 4 ft)", priceMultiplier: 1.35 },
      { id: "ld9", label: "Long Door (9 ft x 4 ft)", priceMultiplier: 1.7 },
      { id: "cust", label: "Custom Tailored Dimensions", priceMultiplier: 1.9 }
    ],
    colors: [
      { name: "Heritage Teal & Gold", hex: "#163638", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80" },
      { name: "Antique Bronze", hex: "#9E8357", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80" },
      { name: "Deep Forest Olive", hex: "#263B2F", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80" }
    ],
    images: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Substantial, regal drape woven on traditional jacquard looms featuring raised paisley relief.",
    fullDescription: "The Sultana drape captures the majesty of 19th-century royal textile ateliers. Using high-density organic cotton wefts paired with raw filament silk accents.",
    careInstructions: "Professional dry clean only. Steam gently to remove transit folds.",
    roomRecommendation: "Formal Drawing Rooms, Library Corners, Master Suites."
  },
  {
    id: "curt-03",
    name: "Pure Normandy Slub Linen Fabric Length (Unstitched / Fabric)",
    mainCategory: "Home Furnishings",
    category: "Curtains",
    subcategory: "Unstitched / Fabric",
    tagline: "Unstitched running fabric by the metre (54-inch width) for bespoke drapery tailoring",
    price: 1850,
    originalPrice: 2200,
    rating: 4.9,
    reviewsCount: 47,
    isFeatured: true,
    isBestseller: true,
    isNew: true,
    material: "100% Normandy Flax Linen",
    weave: "Artisanal Low-Speed Slub Weave",
    opacity: "Light Filtering (55%)",
    drapeWeight: "260 GSM Running Fabric (54 in Width)",
    origin: "Meerut Drapery Atelier",
    headerTypes: [
      "Cut by the Metre (Continuous Length)",
      "Swatches Available"
    ],
    dimensions: [
      { id: "m3", label: "3.0 Metres Bolt", priceMultiplier: 1 },
      { id: "m5", label: "5.0 Metres Bolt", priceMultiplier: 1.6 },
      { id: "m10", label: "10.0 Metres Roll", priceMultiplier: 3.1 }
    ],
    colors: [
      { name: "Mustard Ochre", hex: "#D99B26", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=80" },
      { name: "Deep Indigo", hex: "#1F3A52", image: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=1000&q=80" },
      { name: "Sage Natural", hex: "#7E9780", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80" }
    ],
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Running unstitched curtain fabric cut from full bolts. Choose your fabric, choose your finish, and tailor for your unique space.",
    fullDescription: "For bespoke interior designers and homeowners who demand tailored drop heights, custom fullness pleats, or Roman shades. Cut continuously to your desired meterage.",
    careInstructions: "Pre-wash before cutting/stitching if pre-shrinking is needed.",
    roomRecommendation: "Custom Window Drapery, Roman Shades, Partitions."
  },
  {
    id: "curt-04",
    name: "Kashan Gossamer Sheer Voile (Stitched)",
    mainCategory: "Home Furnishings",
    category: "Curtains",
    subcategory: "Stitched",
    tagline: "Ultra-fine breathable bamboo cotton voile with subtle micro-stripes",
    price: 2499,
    originalPrice: 2999,
    rating: 4.8,
    reviewsCount: 52,
    isFeatured: false,
    isBestseller: true,
    isNew: false,
    material: "Fine Bamboo & Cotton Voile",
    weave: "Gauze Weave",
    opacity: "Sheer (30%)",
    drapeWeight: "Featherweight (110 GSM)",
    origin: "Meerut Studio",
    headerTypes: ["Rod Pocket", "Pencil Pleat", "Soft Eyelet"],
    dimensions: [
      { id: "w5", label: "Window (5 ft x 4 ft)", priceMultiplier: 1 },
      { id: "d7", label: "Door (7 ft x 4 ft)", priceMultiplier: 1.35 },
      { id: "ld9", label: "Long Door (9 ft x 4 ft)", priceMultiplier: 1.7 }
    ],
    colors: [
      { name: "Oatmeal Mist", hex: "#EAE5D9", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80" },
      { name: "Pure Chalk White", hex: "#FFFFFF", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80" }
    ],
    images: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "A breath of fresh daylight. Floating effortlessly with gentle breezes, offering daytime privacy without losing sunshine.",
    fullDescription: "Crafted from sustainable fine bamboo fibres and handloom cotton, the Kashan sheer softens harsh sun rays into a warm diffusion.",
    careInstructions: "Machine wash delicate inside mesh bag. Hang damp for natural drape.",
    roomRecommendation: "Balconies, Sunrooms, Airy Living Lounges."
  },
  {
    id: "curt-05",
    name: "Varanasi Brocade Damask Curtain Panel (Stitched)",
    mainCategory: "Home Furnishings",
    category: "Curtains",
    subcategory: "Stitched",
    tagline: "Hand-embroidered medallion motif on pure dupion silk backing",
    price: 6990,
    originalPrice: 8400,
    rating: 4.9,
    reviewsCount: 27,
    isFeatured: true,
    isBestseller: false,
    isNew: false,
    material: "Pure Dupion Silk & Cotton Weft",
    weave: "Brocade Damask",
    opacity: "Room Darkening (80%)",
    drapeWeight: "Substantial Luxe Drape (340 GSM)",
    origin: "Varanasi Master Guild & Selection Workshop",
    headerTypes: ["American Triple Pinch Pleat", "Brass Eyelet"],
    dimensions: [
      { id: "w5", label: "Window (5 ft x 4 ft)", priceMultiplier: 1 },
      { id: "d7", label: "Door (7 ft x 4 ft)", priceMultiplier: 1.35 },
      { id: "ld9", label: "Long Door (9 ft x 4 ft)", priceMultiplier: 1.7 }
    ],
    colors: [
      { name: "Sage & Old Gold", hex: "#7A917B", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80" },
      { name: "Ivory Champagne", hex: "#F3ECE0", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80" }
    ],
    images: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Regal damask motifs rendered in raised silk brocade that transform window arches into heritage art pieces.",
    fullDescription: "Heirloom drapery constructed with meticulous pattern matching. Double interlined to protect delicate silk from sun bleaching.",
    careInstructions: "Professional dry clean only.",
    roomRecommendation: "High-Ceiling Halls, Grand Drawing Rooms."
  },

  // ==========================================
  // BATH & LINEN (Home Furnishings -> Bath & Linen)
  // ==========================================
  {
    id: "bath-01",
    name: "Heritage 700 GSM Zero-Twist Bath Towel Set",
    mainCategory: "Home Furnishings",
    category: "Bath & Linen",
    subcategory: "Towels",
    tagline: "Ultra-plush zero-twist combed cotton with waffle woven border — Set of 2",
    price: 2199,
    originalPrice: 2799,
    rating: 4.9,
    reviewsCount: 43,
    isFeatured: true,
    isBestseller: true,
    isNew: true,
    material: "100% Long-Staple Combed Cotton",
    weave: "700 GSM Zero-Twist Terry",
    pattern: "Solid with Textured Waffle Hem",
    origin: "Selection Bath Atelier",
    headerTypes: ["Set of 2 Large Bath Towels (30 x 58 in)"],
    dimensions: [
      { id: "std", label: "2 Bath Towels (30 x 58 in)", priceMultiplier: 1 },
      { id: "family", label: "4-Piece Family Set (2 Bath + 2 Hand)", priceMultiplier: 1.65 }
    ],
    colors: [
      { name: "Powder Sky Blue", hex: "#7FA4B8", image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=80" },
      { name: "Terracotta Earth", hex: "#C86D51", image: "https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?auto=format&fit=crop&w=1000&q=80" },
      { name: "Muted Sage", hex: "#8DA98F", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80" }
    ],
    images: [
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Ultra-absorbent 700 GSM luxury bath towels that dry rapidly and remain cloud-soft across hundreds of washes.",
    fullDescription: "Constructed with un-twisted long-staple cotton loops that expose maximum fiber surface for instant water absorption without heavy sogginess.",
    careInstructions: "Machine wash warm without silicone fabric softeners to maintain peak absorbency.",
    roomRecommendation: "Master En-Suite, Spa Bathrooms."
  },
  {
    id: "bath-02",
    name: "Pre-Washed Flax Waffle Kimono Bathrobe",
    mainCategory: "Home Furnishings",
    category: "Bath & Linen",
    subcategory: "Bathrobes",
    tagline: "European flax and organic cotton waffle robe with waist tie and deep pockets",
    price: 3899,
    originalPrice: 4800,
    rating: 5.0,
    reviewsCount: 19,
    isFeatured: true,
    isBestseller: false,
    isNew: true,
    material: "60% Pure Flax Linen, 40% Cotton",
    weave: "Breathable Honeycomb Weave",
    pattern: "Clean Unisex Kimono Cut",
    origin: "Selection Lounge Atelier",
    headerTypes: ["Includes Detachable Belt"],
    dimensions: [
      { id: "sm", label: "Small / Medium", priceMultiplier: 1 },
      { id: "lxl", label: "Large / Extra Large", priceMultiplier: 1 }
    ],
    colors: [
      { name: "Natural Flax Sand", hex: "#D6C7B2", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80" },
      { name: "Olive Tint", hex: "#7E8E7C", image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=80" }
    ],
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Spa-grade waffle bathrobe that is lightweight, breathable, and dries almost instantly.",
    fullDescription: "Relaxed tailored fit with wide sleeves, deep front pockets, and a sturdy matching belt. Pre-washed for a supple, skin-friendly drape.",
    careInstructions: "Machine wash cold. Line dry or tumble dry low.",
    roomRecommendation: "Bathroom, Poolside, Morning Lounging."
  },

  // ==========================================
  // SOFT FURNISHINGS (Home Furnishings -> Soft Furnishings)
  // ==========================================
  {
    id: "soft-01",
    name: "Ganga Hand-Block Cushion Covers (Set of 3)",
    mainCategory: "Home Furnishings",
    category: "Soft Furnishings",
    subcategory: "Cushion Covers",
    tagline: "Artisanal hand-carved teak block prints on unbleached linen canvas",
    price: 2199,
    originalPrice: 2800,
    rating: 4.9,
    reviewsCount: 64,
    isFeatured: true,
    isBestseller: true,
    isNew: false,
    material: "100% Handloom Cotton Linen",
    weave: "Handspun Slub Canvas",
    pattern: "Botanical Teak Block Motif",
    origin: "Meerut Master Block Studio",
    headerTypes: ["Concealed YKK Zipper & Flanged Piping"],
    dimensions: [
      { id: "c16", label: "16 x 16 inches (Set of 3)", priceMultiplier: 1 },
      { id: "c18", label: "18 x 18 inches (Set of 3)", priceMultiplier: 1.25 },
      { id: "c20", label: "20 x 20 inches (Set of 3)", priceMultiplier: 1.5 }
    ],
    colors: [
      { name: "Turmeric & Sage", hex: "#D99B26", image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=80" },
      { name: "Indigo Clay & Cream", hex: "#2A3C4A", image: "https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?auto=format&fit=crop&w=1000&q=80" },
      { name: "Coral Terracotta", hex: "#C86D51", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80" }
    ],
    images: [
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Hand-stamped by our third-generation master printers using natural mineral dyes.",
    fullDescription: "Each pillow cover in this trio carries slight artisanal variations that celebrate authentic human touch.",
    careInstructions: "Cold hand wash with natural detergent or gentle cycle inside out.",
    roomRecommendation: "Sofas, Daybeds, Accent Armchairs."
  },
  {
    id: "soft-02",
    name: "Matka Raw Silk Bolster Covers (Pair)",
    mainCategory: "Home Furnishings",
    category: "Soft Furnishings",
    subcategory: "Bolsters",
    tagline: "Handwoven Matka silk with delicate antique gold zari drawstrings",
    price: 1999,
    originalPrice: 2450,
    rating: 4.8,
    reviewsCount: 15,
    isFeatured: false,
    isBestseller: false,
    isNew: true,
    material: "Pure Matka Raw Silk",
    weave: "Slubbed Silk Weave",
    pattern: "Solid Textured with Zari Borders",
    origin: "Meerut Master Workshop",
    headerTypes: ["Drawstring End Ties with Tassels"],
    dimensions: [
      { id: "std", label: "Pair (8 x 28 in each)", priceMultiplier: 1 }
    ],
    colors: [
      { name: "Mustard Gold", hex: "#CFA034", image: "https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?auto=format&fit=crop&w=1000&q=80" },
      { name: "Deep Peacock", hex: "#184556", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80" }
    ],
    images: [
      "https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Regal bolster covers tailored from organic raw silk, finished with hand-tied tassels.",
    fullDescription: "Adds rich architectural framing to diwans, daybeds, and master headboards with noble natural sheen.",
    careInstructions: "Dry clean only.",
    roomRecommendation: "Diwans, Sofas, Bed Pillows."
  },
  {
    id: "soft-03",
    name: "Quilted Heritage Floral Sofa Throw Cover (3-Seater)",
    mainCategory: "Home Furnishings",
    category: "Soft Furnishings",
    subcategory: "Sofa Covers",
    tagline: "Multi-layer quilted cotton protector with anti-slip backing and floral motif",
    price: 3650,
    originalPrice: 4400,
    rating: 4.8,
    reviewsCount: 28,
    isFeatured: true,
    isBestseller: true,
    isNew: false,
    material: "100% Combed Cotton Shell with Polyfill",
    weave: "Precision Diamond Quilting",
    pattern: "Heritage Mughal Floral",
    origin: "Selection Soft Workshop",
    headerTypes: ["Includes 3-Seater Protector with Arm Rest Covers"],
    dimensions: [
      { id: "s3", label: "3-Seater Sofa (70 x 85 in)", priceMultiplier: 1 },
      { id: "s5", label: "5-Seater Complete Set (3+1+1)", priceMultiplier: 1.7 }
    ],
    colors: [
      { name: "Sage Foliage", hex: "#7A917B", image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=80" },
      { name: "Terracotta Bloom", hex: "#C86D51", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80" }
    ],
    images: [
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Protects living room sofas from spills and wear while adding timeless heritage charm.",
    fullDescription: "Quilted with soft inner filling that provides plush seating comfort while staying securely draped over sofa cushions.",
    careInstructions: "Machine wash cold, air dry.",
    roomRecommendation: "Living Room Sofas, Lounges."
  },
  {
    id: "soft-04",
    name: "Embroidered Kantha Stitch Pillow Covers (Pair)",
    mainCategory: "Home Furnishings",
    category: "Soft Furnishings",
    subcategory: "Pillow Covers",
    tagline: "Artisanal running stitch embroidery on organic hand-spun cotton — Pair of 2",
    price: 1450,
    originalPrice: 1800,
    rating: 4.9,
    reviewsCount: 34,
    isFeatured: false,
    isBestseller: false,
    isNew: true,
    material: "100% Handloom Cotton",
    weave: "Kantha Hand-Stitch",
    pattern: "Linear Geometric Kantha",
    origin: "Bengal & Meerut Cluster",
    headerTypes: ["Pair of 2 Sleeping Pillow Covers (18 x 28 in)"],
    dimensions: [
      { id: "std", label: "Pair (18 x 28 in each)", priceMultiplier: 1 }
    ],
    colors: [
      { name: "Turmeric & Chalk", hex: "#D99B26", image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=80" },
      { name: "Indigo Blue Stitch", hex: "#223E56", image: "https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?auto=format&fit=crop&w=1000&q=80" }
    ],
    images: [
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Textured pillow covers featuring authentic Kantha running needlework.",
    fullDescription: "Adds tactile artisanal depth to your bedding arrangement with breathable, unbleached cotton.",
    careInstructions: "Machine wash cold gentle cycle.",
    roomRecommendation: "Bedrooms, Daybeds."
  },

  // ==========================================
  // LADIES' SUITS (Ladies' Suits -> Unstitched)
  // ==========================================
  {
    id: "suit-01",
    name: "Raw Matka Silk & Zari Suit Cut (Unstitched)",
    mainCategory: "Ladies' Suits",
    category: "Ladies' Suits",
    subcategory: "Unstitched",
    tagline: "Pure hand-reeled Matka raw silk with antique gold woven border (3.5m Length)",
    price: 6490,
    originalPrice: 7800,
    rating: 5.0,
    reviewsCount: 39,
    isFeatured: true,
    isBestseller: true,
    isNew: true,
    material: "100% Pure Matka Raw Silk",
    weave: "Textured Slub Weave with Zari Weft",
    pattern: "Heritage Woven Zari Border",
    origin: "Artisanal Silk Cluster & Meerut Masterhouse",
    headerTypes: ["Unstitched 3.5m Length (Kurta + Bottom / Dupatta length)"],
    dimensions: [
      { id: "f35", label: "3.5 Metres (Kurta + Pants)", priceMultiplier: 1 },
      { id: "f45", label: "4.5 Metres (Full 3-Piece Suit with Dupatta)", priceMultiplier: 1.35 }
    ],
    colors: [
      { name: "Mustard Gold", hex: "#D49B24", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=80" },
      { name: "Rose Coral", hex: "#C75D52", image: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=1000&q=80" },
      { name: "Peacock Teal", hex: "#1C4E5E", image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=1000&q=80" }
    ],
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Tactile, textured raw silk with natural irregular slubs that create noble matte luster and structured drape.",
    fullDescription: "Reeled from mulberry cocoons with minimal chemical processing to retain the pure natural texture of raw silk. Perfect for tailored bandhgalas, festive kurtas, and celebratory salwar suits.",
    careInstructions: "Specialist silk dry clean only.",
    roomRecommendation: "Bespoke Tailoring, Festive Wear, Weddings."
  },
  {
    id: "suit-02",
    name: "Chanderi Handloom Tissue Silk Suit Length (Unstitched)",
    mainCategory: "Ladies' Suits",
    category: "Ladies' Suits",
    subcategory: "Unstitched",
    tagline: "Fine Chanderi silk cotton with gold tilla zari motifs (4.0m Cut)",
    price: 5200,
    originalPrice: 6400,
    rating: 4.9,
    reviewsCount: 26,
    isFeatured: true,
    isBestseller: false,
    isNew: true,
    material: "Chanderi Silk Cotton Blend",
    weave: "Featherweight Tissue Weave",
    pattern: "Fine Gold Tilla Booti",
    origin: "Chanderi Master Guild",
    headerTypes: ["Unstitched 4.0m Cut (Includes Dupatta Fabric)"],
    dimensions: [
      { id: "f40", label: "4.0 Metres Complete Set", priceMultiplier: 1 }
    ],
    colors: [
      { name: "Turmeric Yellow", hex: "#E5A932", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=80" },
      { name: "Sage Celadon", hex: "#7D957F", image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=1000&q=80" },
      { name: "Deep Indigo", hex: "#1D374D", image: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=1000&q=80" }
    ],
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Glimmering Chanderi tissue silk woven with pure gold zari threads.",
    fullDescription: "Ethereal lightweight fabric that breathes with ease while holding graceful celebratory structure. Paired with a delicate woven border.",
    careInstructions: "Dry clean only. Store wrapped in cotton muslin.",
    roomRecommendation: "Festivals, Family Gatherings, Daytime Celebrations."
  },
  {
    id: "suit-03",
    name: "Himalayan Merino Wool & Cashmere Suit Length (Unstitched)",
    mainCategory: "Ladies' Suits",
    category: "Ladies' Suits",
    subcategory: "Unstitched",
    tagline: "70% Fine Merino Wool + 30% Cashmere blend (3.5m Cut)",
    price: 8900,
    originalPrice: 11500,
    rating: 5.0,
    reviewsCount: 29,
    isFeatured: true,
    isBestseller: true,
    isNew: false,
    material: "Merino Wool & Fine Cashmere",
    weave: "Herringbone Handloom Twill",
    pattern: "Micro Herringbone",
    origin: "Himalayan Foothills & Meerut Weave Masterhouse",
    headerTypes: ["Unstitched 3.5m Length"],
    dimensions: [
      { id: "f35", label: "3.5 Metres (Jacket + Trouser / Winter Suit)", priceMultiplier: 1 },
      { id: "f45", label: "4.5 Metres (Full 3-Piece Length)", priceMultiplier: 1.3 }
    ],
    colors: [
      { name: "Olive Twill", hex: "#4B5B49", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=80" },
      { name: "Terracotta Rust", hex: "#B85842", image: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=1000&q=80" },
      { name: "Deep Charcoal Teal", hex: "#1C3435", image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=1000&q=80" }
    ],
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription: "Impeccably woven wool twill offering natural elastane stretch, rich drape, and unmatched winter thermal comfort.",
    fullDescription: "Selection Handloom’s suiting legacy traces back to 1950. Woven with fine Australian Merino wool and soft Himalayan cashmere in a micro-herringbone structure that moulds cleanly to custom tailoring.",
    careInstructions: "Specialist dry clean only.",
    roomRecommendation: "Winter Weddings, Formal Occasions, Executive Ensembles."
  }
];

export default products;
