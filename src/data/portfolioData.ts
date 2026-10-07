export interface PortfolioProject {
  id: string;
  filename: string;
  title: string;
  category: "Beds & Bedroom" | "Living Room & TV Consoles" | "Tables & Accent Pieces" | "Wardrobes & Storage";
  timber: string;
  finish: string;
  aspect: "tall" | "wide" | "square";
  image: string;
  description: string;
  completionTime: string;
  clientArea: string;
  dimensions: string;
  workshopHighlights: string[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "wa-0037",
    filename: "IMG-20261007-WA0037.jpg",
    title: "Dual Workshop Bedsteads: Royal Blue Tufted King & Natural Timber Spindle Bed",
    category: "Beds & Bedroom",
    timber: "Kiln-Dried Kenyan Timber & Seasoned Cypress",
    finish: "Dual Presentation: Enamel White with Tufted Velvet & Golden Honey Lacquer",
    aspect: "wide",
    image: "/IMG-20261007-WA0037.jpg",
    description: "Frontal outdoor workshop showcase presenting two master commissioned bedframes: on the left, an upholstered king bed with royal blue diamond button tufting and matching footboard; on the right, a handcrafted solid timber bedstead with turned corner finials and spindle lattice rails.",
    completionTime: "7 Days",
    clientArea: "Nairobi Workshop Lawn",
    dimensions: "6ft x 6ft (King) & 5ft x 6ft (Queen)",
    workshopHighlights: [
      "Side-by-side workshop comparison",
      "Royal blue button-tufted headboard",
      "Turned wooden finial posts",
      "Solid non-creak timber mattress slats"
    ]
  },
  {
    id: "wa-0012",
    filename: "IMG-20261007-WA0012.jpg",
    title: "Handcrafted King Bed with Royal Blue Tufted Headboard",
    category: "Beds & Bedroom",
    timber: "Solid Kiln-Dried Timber & Pine Slats",
    finish: "Enamel Frame with Deep Diamond Button-Tufted Royal Blue Velvet",
    aspect: "wide",
    image: "/IMG-20261007-WA0012.jpg",
    description: "Commissioned king-size bedstead featuring royal blue button-tufted headboard with matching footboard upholstered panel, exposed timber posts, and squeak-free orthopedic slats.",
    completionTime: "7 Days",
    clientArea: "Nairobi",
    dimensions: "6ft x 6ft (King Size)",
    workshopHighlights: [
      "Royal blue diamond button tufting",
      "Matching upholstered footboard panel",
      "Heavy-duty center spine support",
      "Non-squeak timber slats"
    ]
  },
  {
    id: "wa-0011",
    filename: "IMG-20261007-WA0011.jpg",
    title: "Two-Tier Media Console with Lockable Key Drawers & Cabinet",
    category: "Living Room & TV Consoles",
    timber: "Engineered Wood with Hardwood Framing",
    finish: "Natural Woodgrain Texture with Azure Feet Accents",
    aspect: "wide",
    image: "/IMG-20261007-WA0011.jpg",
    description: "Multi-level entertainment unit with two lockable security drawers with brass handles, central decoder/soundbar shelf, and right-hand storage locker with key latch.",
    completionTime: "5 Days",
    clientArea: "Westlands, Nairobi",
    dimensions: "150cm L x 45cm W x 65cm H",
    workshopHighlights: [
      "Dual key-locked privacy drawers",
      "Enclosed storage cabinet",
      "Open audio component deck",
      "Elevated moisture-proof feet"
    ]
  },
  {
    id: "wa-0010",
    filename: "IMG-20261007-WA0010.jpg",
    title: "Coral Flared C-Leg Coffee Table with Lower Slatted Shelf",
    category: "Tables & Accent Pieces",
    timber: "Solid Seasoned Hardwood",
    finish: "Coral Satin Polyurethane Seal",
    aspect: "wide",
    image: "/IMG-20261007-WA0010.jpg",
    description: "Artisan occasional table with sweeping curved C-shaped flared legs, smooth rounded tabletop edges, and integrated slatted magazine/shoe shelf below.",
    completionTime: "4 Days",
    clientArea: "Karen, Nairobi",
    dimensions: "120cm L x 60cm W x 48cm H",
    workshopHighlights: [
      "Signature curved C-frame legs",
      "Lower slatted airflow shelf",
      "Moisture-impermeable smooth seal",
      "Stable wide stance"
    ]
  },
  {
    id: "wa-0013",
    filename: "IMG-20261007-WA0013.jpg",
    title: "8-Compartment Wardrobe Closet with Top Clothes Hanging Rail",
    category: "Wardrobes & Storage",
    timber: "Solid Seasoned Pine & Plywood Backing",
    finish: "Protective Whitewash Dust-Seal",
    aspect: "tall",
    image: "/IMG-20261007-WA0013.jpg",
    description: "Floor-to-ceiling bedroom wardrobe organizer carcass featuring upper heavy-duty clothes hanging rail and 8 modular open cubby compartments for folded clothing, bedding, and shoes.",
    completionTime: "6 Days",
    clientArea: "Kilimani, Nairobi",
    dimensions: "210cm H x 120cm W x 55cm D",
    workshopHighlights: [
      "Sturdy overhead hanging bar",
      "8 spacious cubby organizers",
      "55cm deep clothes capacity",
      "Reinforced rear stability wall"
    ]
  },
  {
    id: "wa-0009",
    filename: "IMG-20261007-WA0009.jpg",
    title: "Kitchen Prep Island & Vanity Counter with Basin Cutout",
    category: "Tables & Accent Pieces",
    timber: "Marine-Treated Hardwood Slabs",
    finish: "Waterproof Azure Blue Protective Enamel",
    aspect: "wide",
    image: "/IMG-20261007-WA0009.jpg",
    description: "Multi-purpose workshop utility table and kitchen prep island tailored with a circular basin cutout on top, and double slatted storage levels for easy drainage and airflow.",
    completionTime: "5 Days",
    clientArea: "Kitisuru, Nairobi",
    dimensions: "140cm L x 60cm W x 85cm H",
    workshopHighlights: [
      "Circular top sink/basin aperture",
      "Two lower slatted utility levels",
      "Water-resistant marine enamel",
      "Solid carpenter dowel joinery"
    ]
  },
  {
    id: "wa-0007",
    filename: "IMG-20261007-WA0007.jpg",
    title: "Golden Ochre Flared-Leg Coffee Table & Media Bench",
    category: "Tables & Accent Pieces",
    timber: "Kiln-Dried Hardwood",
    finish: "Warm Golden Ochre Smooth Lacquer",
    aspect: "wide",
    image: "/IMG-20261007-WA0007.jpg",
    description: "Warm-toned accent living room coffee table featuring sculpted arching legs, bottom slatted rack, and generous tabletop surface for tea and centerpiece decor.",
    completionTime: "4 Days",
    clientArea: "Lavington, Nairobi",
    dimensions: "120cm L x 60cm W x 48cm H",
    workshopHighlights: [
      "Flared sculptural leg geometry",
      "Generous surface area",
      "Lower slatted accessory deck"
    ]
  },
  {
    id: "wa-0006",
    filename: "IMG-20261007-WA0006.jpg",
    title: "Tufted King Bedstead (Side Perspective & Slatted Base)",
    category: "Beds & Bedroom",
    timber: "Kiln-Dried Kenyan Timber",
    finish: "Clean White Satin Finish with Velvet Inset",
    aspect: "tall",
    image: "/IMG-20261007-WA0006.jpg",
    description: "Detailed workshop view showing side rail mortise joints, slatted mattress foundation, high tufted headboard, and matching royal blue footboard panel.",
    completionTime: "7 Days",
    clientArea: "Nairobi Workshop",
    dimensions: "6ft x 6ft (King Size)",
    workshopHighlights: [
      "Heavy timber side rails",
      "Deep button tufting detail",
      "Spindle frame accents"
    ]
  },
  {
    id: "wa-0003",
    filename: "IMG-20261007-WA0003.jpg",
    title: "Stacked Dual-Tier Curved Accent Tables (Orange & Coral)",
    category: "Tables & Accent Pieces",
    timber: "Solid Hardwood",
    finish: "Dual-Tone Coral & Tangerine Enamel",
    aspect: "square",
    image: "/IMG-20261007-WA0003.jpg",
    description: "Pair of custom occasional tables demonstrated in stacked configuration, highlighting the balanced flared leg curve that allows modular grouping.",
    completionTime: "4 Days",
    clientArea: "Runda, Nairobi",
    dimensions: "100cm L x 50cm W x 45cm H",
    workshopHighlights: [
      "Stackable curved silhouette",
      "Dual height utility",
      "Vibrant durable colors"
    ]
  },
  {
    id: "wa-0001",
    filename: "IMG-20261007-WA0001.jpg",
    title: "4-Tier Slatted Footwear & Entryway Organizer Stand",
    category: "Wardrobes & Storage",
    timber: "Treated Kenyan Cypress",
    finish: "Vibrant Fuchsia Protective Enamel",
    aspect: "tall",
    image: "/IMG-20261007-WA0001.jpg",
    description: "Compact four-tier vertical storage rack with open horizontal timber slats engineered to keep shoes and household footwear dry, ventilated, and organized.",
    completionTime: "3 Days",
    clientArea: "Ruiru, Kiambu",
    dimensions: "95cm H x 80cm W x 32cm D",
    workshopHighlights: [
      "4 ventilated slatted shelves",
      "Narrow space-saving footprint",
      "Solid dowel joints"
    ]
  },
  {
    id: "wa-0002",
    filename: "IMG-20261007-WA0002.jpg",
    title: "Vibrant Fuchsia Wardrobe Closet with Slanted Shoe Deck",
    category: "Wardrobes & Storage",
    timber: "Selected Solid Timber",
    finish: "Magenta Velvet Finish with Slanted Slats",
    aspect: "tall",
    image: "/IMG-20261007-WA0002.jpg",
    description: "Custom painted wardrobe organizer fitted with upper clothes hanging rail, side stack of 4 cubby shelves, and angled bottom slatted shoe rack.",
    completionTime: "6 Days",
    clientArea: "Thika Road, Nairobi",
    dimensions: "200cm H x 110cm W x 50cm D",
    workshopHighlights: [
      "Angled slatted shoe display rack",
      "Upper hanging rail",
      "4 organized side cubbies"
    ]
  },
  {
    id: "wa-0008",
    filename: "IMG-20261007-WA0008.jpg",
    title: "Outdoor Utility Display Island & Multi-Tier Slatted Stand",
    category: "Tables & Accent Pieces",
    timber: "Weather-Treated Hardwood",
    finish: "UV-Resistant Protective Enamel",
    aspect: "wide",
    image: "/IMG-20261007-WA0008.jpg",
    description: "Custom commissioned outdoor wash counter and matching multi-tier slatted shelving rack completed for outdoor catering and workspace utility.",
    completionTime: "5 Days",
    clientArea: "Ngong, Kajiado",
    dimensions: "140cm L x 60cm W x 85cm H",
    workshopHighlights: [
      "Waterproof outdoor build",
      "Sink/basin cutout",
      "Slatted drainage levels"
    ]
  },
  {
    id: "wa-0005",
    filename: "IMG-20261007-WA0005.jpg",
    title: "Golden Ochre Curved Table (Top Perspective)",
    category: "Tables & Accent Pieces",
    timber: "Solid Seasoned Hardwood",
    finish: "Smooth Honey Satin Lacquer",
    aspect: "wide",
    image: "/IMG-20261007-WA0005.jpg",
    description: "Elevated angle showing the generous plank tabletop, flush rounded perimeter edge, and lower storage deck.",
    completionTime: "4 Days",
    clientArea: "Karen, Nairobi",
    dimensions: "120cm L x 60cm W x 48cm H",
    workshopHighlights: [
      "Smooth wipe-clean surface",
      "Splayed C-curve legs",
      "High load bearing"
    ]
  },
  {
    id: "wa-0004",
    filename: "IMG-20261007-WA0004.jpg",
    title: "Multi-Tier Wardrobe Organizer (Side Frame Angle)",
    category: "Wardrobes & Storage",
    timber: "Kiln-Dried Pine & Timber Framing",
    finish: "Clean Workshop White Wash",
    aspect: "tall",
    image: "/IMG-20261007-WA0004.jpg",
    description: "Side perspective highlighting the sturdy upright partition dividing the clothes hanging zone and the stacked shelving compartments.",
    completionTime: "6 Days",
    clientArea: "Nairobi Workshop",
    dimensions: "210cm H x 120cm W x 55cm D",
    workshopHighlights: [
      "Solid vertical center divider",
      "Deep cubby boxes",
      "Heavy load garment bar"
    ]
  },
  {
    id: "wa-0000",
    filename: "IMG-20261007-WA0000.jpg",
    title: "8-Cubby Wardrobe Shelving Unit (Elevation View)",
    category: "Wardrobes & Storage",
    timber: "Selected Hardwood Framing",
    finish: "Protective Primer & Seal",
    aspect: "tall",
    image: "/IMG-20261007-WA0000.jpg",
    description: "Front elevation view showing symmetrical dual columns of 4 storage cubbies and upper hanging rod ready for bedroom installation.",
    completionTime: "6 Days",
    clientArea: "Nairobi Workshop",
    dimensions: "210cm H x 120cm W x 55cm D",
    workshopHighlights: [
      "Symmetrical cubby distribution",
      "Reinforced shelf joints",
      "Smooth splinter-free sanding"
    ]
  }
];
