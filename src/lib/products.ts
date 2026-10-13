export type Category = "Bags" | "Outerwear" | "Gear";

export type Product = {
  slug: string;
  name: string;
  price: number;
  category: Category;
  colour: string;
  swatch: string;
  tagline: string;
  description: string;
  points: string[];
  specs: [string, string][];
  proof: string;
};

export const products: Product[] = [
  {
    slug: "vane-tote",
    name: "Vane Tote",
    price: 128,
    category: "Bags",
    colour: "Spruce waxed canvas",
    swatch: "#1E4D43",
    tagline: "The tote that shrugs off rain.",
    description:
      "Waxed canvas that sheds a downpour, a magnetic pocket that hands you your keys before you reach the door, and room for a 16 inch laptop without looking like a laptop bag.",
    points: [
      "Waxed canvas sheds rain and wipes clean",
      "Magnetic quick pocket for phone and keys",
      "Fits a 16 inch laptop without looking like a laptop bag",
      "Two year repair guarantee",
    ],
    specs: [
      ["Capacity", "18 L"],
      ["Material", "Waxed cotton canvas, brass hardware"],
      ["Weight", "780 g"],
      ["Dimensions", "42 x 34 x 14 cm"],
    ],
    proof: "Pour a glass of water on it. Watch it bead and roll off.",
  },
  {
    slug: "transit-sling",
    name: "Transit Sling",
    price: 78,
    category: "Bags",
    colour: "Ink ripstop",
    swatch: "#17181A",
    tagline: "Everything you reach for. Nothing you dig for.",
    description:
      "A crossbody built around the commute: a back-panel zip nobody else can open, seven pockets mapped to what you actually carry, and a strap you adjust with one hand.",
    points: [
      "Back-panel zip nobody else can open",
      "Seven pockets mapped to what you carry",
      "One-hand adjust strap",
      "Fits a water bottle",
    ],
    specs: [
      ["Capacity", "4 L"],
      ["Material", "Recycled ripstop nylon"],
      ["Weight", "310 g"],
      ["Dimensions", "30 x 18 x 8 cm"],
    ],
    proof: "Phone, keys, card, earbuds. All found without looking.",
  },
  {
    slug: "long-weekend-duffel",
    name: "Long Weekend Duffel",
    price: 186,
    category: "Bags",
    colour: "Oat canvas, spruce straps",
    swatch: "#D9CDB4",
    tagline: "Three days. One bag. Fits the overhead bin.",
    description:
      "A carry-on sized duffel that opens flat like a suitcase, keeps your shoes in their own tunnel, and holds a long weekend without the checked-bag queue.",
    points: [
      "38 litres, carry-on size",
      "Separate shoe tunnel",
      "Opens flat like a suitcase",
      "Padded laptop sleeve",
    ],
    specs: [
      ["Capacity", "38 L"],
      ["Material", "Heavy cotton canvas, leather trim"],
      ["Weight", "1.4 kg"],
      ["Dimensions", "52 x 30 x 25 cm"],
    ],
    proof: "Three outfits, a pair of shoes and a laptop. Zipped.",
  },
  {
    slug: "squall-shell",
    name: "Squall Shell",
    price: 158,
    category: "Outerwear",
    colour: "Signal rust",
    swatch: "#C4572E",
    tagline: "A rain jacket that packs into its own pocket.",
    description:
      "Fully waterproof with taped seams, pit zips for the walk up the stairs, and a hood that fits over a cap. When the sun comes out it packs down to the size of your fist.",
    points: [
      "Fully waterproof, taped seams",
      "Packs into its own chest pocket",
      "Pit zips for airflow",
      "Hood fits over a cap",
    ],
    specs: [
      ["Waterproof rating", "20,000 mm"],
      ["Material", "3-layer recycled nylon"],
      ["Weight", "290 g"],
      ["Packed size", "Fist-sized"],
    ],
    proof: "Pulled out of a pocket. Zipped up before the rain hits.",
  },
  {
    slug: "holdfast-bottle",
    name: "Holdfast Bottle 24 oz",
    price: 38,
    category: "Gear",
    colour: "Brushed steel, spruce lid",
    swatch: "#B9C2BE",
    tagline: "Ice at 9 a.m. Still ice at 9 p.m.",
    description:
      "Double-wall steel that keeps drinks cold for 36 hours, a leakproof lid you open with one thumb, and a base that fits the cup holder in your car.",
    points: [
      "Keeps drinks cold 36 hours",
      "Leakproof one-hand lid",
      "Fits car cup holders",
      "Dishwasher safe",
    ],
    specs: [
      ["Capacity", "24 oz / 710 ml"],
      ["Material", "18/8 stainless steel"],
      ["Cold", "36 hours"],
      ["Hot", "12 hours"],
    ],
    proof: "A full day in a hot car. Still clinking.",
  },
  {
    slug: "cable-roll",
    name: "Cable Roll",
    price: 44,
    category: "Gear",
    colour: "Fog grey, rust pull",
    swatch: "#B9C2BE",
    tagline: "Every cable. One roll.",
    description:
      "Twelve elastic slots and a zip pocket for the charger brick. Roll it up to the size of a sandwich and stop untangling things at the airport gate.",
    points: [
      "12 elastic slots",
      "Zip pocket for a charger brick",
      "Rolls to the size of a sandwich",
      "Water-resistant shell",
    ],
    specs: [
      ["Slots", "12 elastic, 1 zip pocket"],
      ["Material", "Water-resistant ripstop"],
      ["Weight", "160 g"],
      ["Rolled size", "20 x 9 cm"],
    ],
    proof: "From a tangled bag to one roll in ten seconds.",
  },
  {
    slug: "field-overshirt",
    name: "Field Overshirt",
    price: 118,
    category: "Outerwear",
    colour: "Spruce brushed cotton",
    swatch: "#1E4D43",
    tagline: "The layer you never take off.",
    description:
      "Brushed cotton with a water-resistant finish. Wear it as a shirt in the office and a light jacket on the way home. Pre-washed, so it fits the same on day one hundred.",
    points: [
      "Water-resistant brushed cotton",
      "Hidden phone pocket",
      "Works as a shirt or a light jacket",
      "Pre-washed, no shrink",
    ],
    specs: [
      ["Fit", "Relaxed"],
      ["Material", "Brushed organic cotton, DWR finish"],
      ["Weight", "Midweight"],
      ["Care", "Machine wash cold"],
    ],
    proof: "Light rain beads off. Dinner after, no change needed.",
  },
  {
    slug: "pack-trio",
    name: "Pack Trio",
    price: 58,
    category: "Gear",
    colour: "Oat, fog and spruce",
    swatch: "#EDE6D8",
    tagline: "Fit more. Find it faster.",
    description:
      "Three compression cubes in three colours. Squeeze about 30 percent more into the same bag, and see what's inside through the mesh tops.",
    points: [
      "Three compression cubes",
      "Squeeze about 30 percent more in",
      "Colour coded",
      "See-through mesh tops",
    ],
    specs: [
      ["Sizes", "Small, medium, large"],
      ["Material", "Recycled nylon, mesh tops"],
      ["Weight", "240 g set"],
      ["Compression", "Dual zip"],
    ],
    proof: "Same suitcase. One more day of clothes.",
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const img = (slug: string, kind: "studio" | "lifestyle") => `/products/${slug}/${kind}.jpg`;
