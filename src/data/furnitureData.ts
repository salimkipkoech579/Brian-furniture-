export interface FurnitureItem {
  id: string;
  name: string;
  category: "Living Room" | "Dining" | "Bedroom" | "Office & Commercial" | "Bespoke Joinery";
  description: string;
  hardwood: string;
  leadTime: string;
  image: string;
  startingPrice?: string;
  features: string[];
}

export const furnitureItems: FurnitureItem[] = [
  {
    id: "dining-mvule-8seater",
    name: "Master 8-Seater Solid Mvule Dining Set",
    category: "Dining",
    description: "Handcrafted from seasoned East African Mvule (Iroko) timber with live-edge butterfly joints and matching ergonomic spindle-back dining chairs.",
    hardwood: "Aged Kenyan Mvule",
    leadTime: "10-14 Days",
    startingPrice: "KES 145,000",
    image: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1000&q=80",
    features: ["Solid 2.5-inch slab top", "Weather-resistant polyurethane seal", "Seats 8-10 comfortably"]
  },
  {
    id: "sofa-chesterfield-leather",
    name: "The Mara Hand-Tufted Chesterfield Sofa",
    category: "Living Room",
    description: "Deep button-tufted three-seater handcrafted with internal treated cypress framing, high-density comfort foam, and premium full-grain saddle leather.",
    hardwood: "Kiln-Dried Kenyan Cypress Frame",
    leadTime: "12-16 Days",
    startingPrice: "KES 160,000",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80",
    features: ["High-resilience foam core", "Hand-stitched diamond tufting", "Mahogany turned feet"]
  },
  {
    id: "bed-king-mahogany",
    name: "Royal King Platform Bed with Fluted Headboard",
    category: "Bedroom",
    description: "A commanding bedroom centerpiece built from rich African Mahogany with integrated floating bedside ledges and slatted orthopedic timber base.",
    hardwood: "Solid African Mahogany",
    leadTime: "10-14 Days",
    startingPrice: "KES 115,000",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80",
    features: ["Heavy-duty hidden center beam", "Integrated nightstand ledges", "Silk-matte hand wax finish"]
  },
  {
    id: "desk-executive-credenza",
    name: "The Rift Executive Timber Desk & Credenza",
    category: "Office & Commercial",
    description: "Substantial executive office desk featuring wire-management raceway, soft-close dovetail drawers, and matching filing credenza for modern leaders.",
    hardwood: "Mahogany & Teak Inlay",
    leadTime: "14-18 Days",
    startingPrice: "KES 130,000",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80",
    features: ["Soft-close German drawer runners", "Integrated lockable drawer", "Anti-scratch commercial finish"]
  },
  {
    id: "coffee-table-liveedge",
    name: "Kilimanjaro Live-Edge Coffee Table",
    category: "Living Room",
    description: "Naturally contoured single slab cut from fallen acacia hardwood, preserving organic bark edges with matte industrial steel pedestal legs.",
    hardwood: "Salvaged Wild Acacia",
    leadTime: "5-7 Days",
    startingPrice: "KES 48,000",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1000&q=80",
    features: ["One-of-a-kind natural grain", "Hand-flattened & cured", "Heavy-gauge black steel legs"]
  },
  {
    id: "credenza-tv-console",
    name: "Nordic Minimalist TV & Media Credenza",
    category: "Living Room",
    description: "Slatted acoustic tambour sliding doors concealing media components, built with solid cedar and polished brass handles.",
    hardwood: "Solid Red Cedar & Mahogany",
    leadTime: "8-12 Days",
    startingPrice: "KES 85,000",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=80",
    features: ["Slatted airflow doors for consoles", "Cable pass-through channels", "6-foot wide format"]
  }
];

export const woodTypes = [
  {
    name: "African Mahogany",
    characteristics: "Rich reddish-brown luster, deep natural grain, extreme density and heirloom longevity.",
    bestFor: "Dining tables, executive desks, luxury bedframes"
  },
  {
    name: "East African Mvule (Iroko)",
    characteristics: "Often called African Teak. High natural oil content, golden-brown hue, insect & moisture resistant.",
    bestFor: "Outdoor patio sets, heavy-duty dining surfaces, kitchen islands"
  },
  {
    name: "Kenyan Cypress & Cedar",
    characteristics: "Kiln-dried aromatic softwood with warm honey tones, lightweight yet rigid structural integrity.",
    bestFor: "Internal sofa framing, wardrobe carcasses, ceiling beams"
  },
  {
    name: "Wild Acacia (Live Edge)",
    characteristics: "Striking contrasting sapwood and heartwood, organic twisting grain patterns, rock-solid surface.",
    bestFor: "Live-edge centerpieces, console tables, custom bar tops"
  }
];
