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
   ALL SELECTIONS
========================= */

export const allSelections: Home[] = [
  ...miamiSelection,
  ...parisSelection,
  ...brazilSelection,
  ...aspenSelection,
];
