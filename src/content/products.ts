export type Product = {
  slug: string;
  name: string;
  category: string;
  scent: string;
  size: string;
  priceCents: number;
  tagline: string;
  description: string;
  features: string[];
  ingredients: string;
  directions: string[];
  image: string;
  inStock: boolean;
};

export const products: Product[] = [
  {
    slug: "dishwashing-liquid-lemongrass",
    name: "Dishwashing Liquid",
    category: "Kitchen",
    scent: "Lemongrass",
    size: "750 ml",
    priceCents: 8900,
    tagline: "Powerful on grease. Gentle on hands.",
    description:
      "Our flagship dishwashing liquid cuts through grease and baked-on grime without drying out your skin. Formulated with plant-derived surfactants and a bright lemongrass scent, it's tough where it counts and kind everywhere else.",
    features: [
      "Tough on grease",
      "Gentle on hands",
      "Clean & safe ingredients",
      "Biodegradable formula",
    ],
    // Placeholder — replace with the verified INCI ingredient list before launch.
    ingredients:
      "Plant-derived surfactants, biodegradable emulsifiers, natural lemongrass extract, purified water. Full ingredient list to be confirmed.",
    directions: [
      "Apply a small amount to a wet sponge or directly onto dishes.",
      "Work into a lather and clean as usual.",
      "Rinse thoroughly with water.",
    ],
    image: "/brand/dishwashing-liquid-lemongrass-bottle.png",
    inStock: true,
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
