// src/data/selectedHomes.ts

export type Home = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
  tags: string[];
  framework: string;
  priceLabel?: string;
  city:
    | "miami"
    | "paris"
    | "brazil"
    | "aspen"
    | "dubai"
    | "st-barth";
};

/* =========================
   MIAMI
========================= */

export const miamiSelection: Home[] = [
  {
    id: "miami-01",
    title: "Modern TownHome — Miami Beach",
    subtitle: "Rental · Modern · High desirability micro-location",
    image: "/img/selected-homes/miami/89-n-shore/01.webp",
    tags: ["Waterfront", "Lifestyle"],
    framework: "Live · Rent · Resell",
    priceLabel: "$1,475,000",
    href: "/selected-homes/miami/89-n-shore-dr-miami-beach",
    city: "miami",
  },
  {
    id: "miami-02",
    title: "New Build Modern — Shorecrest",
    subtitle: "2023 build · AirBnB licensed · Easy operations",
    image: "/img/selected-homes/miami/741-ne-80th/01.webp",
    tags: ["New build", "Lifestyle", "Liquidity"],
    framework: "Live · Rent · Resell",
    priceLabel: "$2,695,000",
    href: "/selected-homes/miami/741-ne-80th-st-miami",
    city: "miami",
  },
  {
    id: "miami-03",
    title: "Bay View Condo — North Bay Village",
    subtitle: "High floor · Open bay views · Low-maintenance lifestyle",
    image: "/img/selected-homes/miami/7935-east-dr-803/01.webp",
    tags: ["Water views", "Condo", "Lifestyle"],
    framework: "Live · Rent · Resell",
    priceLabel: "$946,000",
    href: "/selected-homes/miami/7935-east-dr-apt-803-north-bay-village",
city: "miami",
  },
  {
    id: "miami-04",
    title: "Modern Multi-Family — Miami Beach",
    subtitle: "Newer build · Income profile · Strong long-term optionality",
    image: "/img/selected-homes/miami/3909-garden/01.webp",
    tags: ["Multi-family", "Income", "Long-term hold"],
    framework: "Live · Rent · Resell",
    priceLabel: "$2,900,000",
    href: "/selected-homes/miami/3909-garden-ave-miami-beach",
city: "miami",
  },
  {
    id: "miami-05",
    title: "Waterfront Villa — Normandy Shores",
    subtitle: "Gated island · Private dock · Pool · Ocean access positioning",
    image: "/img/selected-homes/miami/970-s-shore/05.webp",
    tags: ["Waterfront", "Gated", "Boating"],
    framework: "Live · Rent · Resell",
    priceLabel: "$3,690,000",
    href: "/selected-homes/miami/970-s-shore-dr-miami-beach",
city: "miami",
  },

];

/* =========================
   BRAZIL
========================= */

export const brazilSelection: Home[] = [
  {
    id: "brazil-01",
    title: "Walk-to-Beach New Build — Geribá",
    subtitle: "4 suites · Pool + sauna · Modern layout",
    image: "/img/selected-homes/brazil/rua-da-trindade-geriba/01.webp",
    tags: ["Geribá", "New build"],
    framework: "Live · Rent · Resell",
    priceLabel: "R$ 2.780.000",
    href: "/selected-homes/brazil/rua-da-trindade-geriba-buzios",
    city: "brazil",
  },
{
  id: "brazil-02",
  title: "Ferradura Villa - Búzios",
  subtitle: "8 bedrooms · Furnished · 520 m² · Large hosting capacity",
  image: "/img/selected-homes/brazil/ione-saldanha-ferradura/01.webp",
  tags: ["Luxury", "Ferradura", "Scale"],
  framework: "Live · Rent · Resell",
  priceLabel: "R$ 8.500.000",
  href: "/selected-homes/brazil/ione-saldanha-ferradura-buzios",
city: "brazil",
},
{
  id: "brazil-03",
  title: "Ferradura Pool Villa",
  subtitle: "5 bedrooms · Pool · 600 m² · Strong indoor-outdoor flow",
  image: "/img/selected-homes/brazil/ferradura-5q-piscina-600m2/01.webp",
  tags: ["Ferradura", "Pool", "Lifestyle"],
  framework: "Live · Rent · Resell",
  priceLabel: "R$ 4.700.000",
  href: "/selected-homes/brazil/ferradura-5q-piscina-600m2-buzios",
city: "brazil",
},
{
  id: "brazil-04",
  title: "Ferradura Sea-View Villa",
  subtitle: "749 m² · 5 suites · Double-height · Pool · Sea views",
  image: "/img/selected-homes/brazil/rua-e1-ferradura-seaview/01.webp",
  tags: ["Sea view", "Ferradura", "Luxury"],
  framework: "Live · Rent · Resell",
  priceLabel: "R$ 18.000.000",
  href: "/selected-homes/brazil/rua-e1-praia-da-ferradura-buzios",
city: "brazil",
},
{
  id: "brazil-rental-01",
  title: "Villa Bianca — Búzios",
  subtitle: "5 bedrooms · Pool · Sea view · Guest favorite",
  image: "/img/selected-homes/brazil/villa-bianca/01.avif",
  tags: ["Rental", "João Fernandes", "Pool"],
  framework: "Stay · Host · Enjoy",
  priceLabel: "R$ 2.500/night",
  href: "/selected-homes/brazil/villa-bianca-buzios",
city: "brazil",
},

];

/* =========================
   PARIS
========================= */

export const parisSelection: Home[] = [
  {
    id: "paris-01",
    title: "Beaugrenelle Apartment — Paris",
    subtitle: "High floor · 3 bedrooms · Turnkey · Family friendly",
    image: "/img/selected-homes/paris/beaugrenelle-apartment-3-bedrooms/01.webp",
    tags: ["Beaugrenelle", "Family"],
    framework: "Live · Rent · Resell",
    priceLabel: "€3,600 / month",
    href: "/selected-homes/paris/beaugrenelle-apartment-3-bedrooms",
    city: "paris",
  },
];

/* =========================
   ASPEN
========================= */

export const aspenSelection: Home[] = [
  {
    id: "aspen-01",
    title: "Centre-Ville Aspen — Luxe",
    subtitle: "Downtown · 5 bedrooms · Fire pit · Walkable",
    image: "/img/selected-homes/aspen/centre-ville-aspen-luxe/01.webp",
    tags: ["Aspen Core", "Luxury"],
    framework: "Stay · Host · Enjoy",
    priceLabel: "On request",
    href: "/selected-homes/aspen/centre-ville-aspen-luxe",
    city: "aspen",
  },
];

/* =========================
   DUBAI
========================= */

export const dubaiSelection: Home[] = [
  {
    id: "dubai-01",
    title: "Centre-Ville Aspen — Luxe",
    subtitle: "Downtown · 5 bedrooms · Fire pit · Walkable",
    image: "/img/selected-homes/aspen/centre-ville-aspen-luxe/01.webp",
    tags: ["Aspen Core", "Luxury"],
    framework: "Stay · Host · Enjoy",
    priceLabel: "On request",
    href: "/selected-homes/aspen/centre-ville-aspen-luxe",
    city: "dubai",
  },
];
/* =========================
   ST BARTH
========================= */

export const stbarthSelection: Home[] = [
  {
    id: "stbart-01",
    title: "Centre-Ville Aspen — Luxe",
    subtitle: "Downtown · 5 bedrooms · Fire pit · Walkable",
    image: "/img/selected-homes/aspen/centre-ville-aspen-luxe/01.webp",
    tags: ["Aspen Core", "Luxury"],
    framework: "Stay · Host · Enjoy",
    priceLabel: "On request",
    href: "/selected-homes/aspen/centre-ville-aspen-luxe",
    city: "st-barth",
  },
];


/* =========================
   ALL SELECTIONS
========================= */

export const allSelections: Home[] = [
  ...miamiSelection,
  ...parisSelection,
  ...brazilSelection,
  ...aspenSelection,
];
