// lib/data.ts
export interface SlideContent {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
}

// 🥕 Left Panel: Commercial Products (8 slides)
export const commercialProducts: SlideContent[] = [
  {
    id: 1,
    title: "Organic Turmeric Powder",
    subtitle: "Golden Goodness",
    description: "High-curcumin turmeric, sun-dried and ground traditionally.",
    image: "/images/product1.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Pure A2 Cow Ghee",
    subtitle: "Traditional Bilona Method",
    description: "Made from grass-fed desi cow milk, rich in aroma and nutrition.",
    image: "/images/product2.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Whole Wheat Flour",
    subtitle: "Stone-Ground Perfection",
    description: "Slow-milled for authentic taste and nutrition preservation.",
    image: "/images/product3.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "Cold-Pressed Mustard Oil",
    subtitle: "Chemical-Free",
    description: "Extracted at low temperature to retain flavor and nutrients.",
    image: "/images/product4.jpg",
    link: "#",
  },
  {
    id: 5,
    title: "Organic Brown Rice",
    subtitle: "Naturally Grown",
    description: "Unpolished and nutrient-rich rice from our 170-acre farm.",
    image: "/images/product5.jpg",
    link: "#",
  },
  {
    id: 6,
    title: "Raw Organic Honey",
    subtitle: "Pure Sweetness",
    description: "Unfiltered honey collected directly from farm beehives.",
    image: "/images/product6.jpg",
    link: "#",
  },
  {
    id: 7,
    title: "Jaggery Powder",
    subtitle: "Natural Sweetener",
    description: "Made from sugarcane juice without any additives or chemicals.",
    image: "/images/product7.jpg",
    link: "#",
  },
  {
    id: 8,
    title: "Red Chilli Powder",
    subtitle: "Farm-Fresh Spices",
    description: "Sun-dried chillies ground naturally for rich flavor.",
    image: "/images/product8.jpg",
    link: "#",
  },
];

// ⚙️ Top-Right Panel: Processing Techniques (4 slides)
export const processingTechniques: SlideContent[] = [
  {
    id: 1,
    title: "Cold Press Method",
    subtitle: "Oil Extraction",
    description: "No heat applied; nutrients and flavor fully retained.",
    image: "/images/technique1.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Stone Grinding",
    subtitle: "Traditional Milling",
    description: "Slow-speed grinding preserves essential oils and aroma.",
    image: "/images/technique2.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Sun Drying",
    subtitle: "Natural Preservation",
    description: "Energy-efficient method maintaining product integrity.",
    image: "/images/technique3.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "Hand Pounding",
    subtitle: "Spice Processing",
    description: "Traditional pounding retains texture and freshness.",
    image: "/images/technique4.jpg",
    link: "#",
  },
];

// 🪴 Bottom-Right Panel: Certifications (4 slides)
export const certifications: SlideContent[] = [
  {
    id: 1,
    title: "India Organic Certified",
    subtitle: "National Standard",
    description: "Approved by India Organic Certification Authority.",
    image: "/images/cert1.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "USDA Organic",
    subtitle: "Global Recognition",
    description: "Meets U.S. Department of Agriculture organic guidelines.",
    image: "/images/cert2.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "EU Organic",
    subtitle: "European Standards",
    description: "Complies with strict European organic regulations.",
    image: "/images/cert3.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "NCOF Recognition",
    subtitle: "Government Accredited",
    description: "Recognized by the National Centre of Organic Farming.",
    image: "/images/cert4.jpg",
    link: "#",
  },
];
