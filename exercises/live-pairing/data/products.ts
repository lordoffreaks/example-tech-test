import type { Product } from "../types/product";

/** Deterministic catalog — always 25 items for pagination exercise. */
export const products: Product[] = [
  {
    id: "24522",
    name: "Unbranded Concrete Gloves",
    description:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    price: "860.00",
    image: "https://picsum.photos/seed/product-24522/640/480",
  },
  {
    id: "24523",
    name: "Gorgeous Wooden Chicken",
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    image: "https://picsum.photos/seed/product-24523/640/480",
  },
  {
    id: "24524",
    name: "Exceptional Fast Car",
    description:
      "This desirable manual-transmission car benefits from long-term early ownership and a well-documented maintenance history",
    image: "https://picsum.photos/seed/product-24524/640/480",
  },
  {
    id: "24525",
    name: "Splendid Gardening Secateurs",
    description:
      "An indispensable tool, essential for tidying up around the garden",
    price: "49.99",
    image: "https://picsum.photos/seed/product-24525/640/480",
  },
  ...Array.from({ length: 21 }, (_, index) => {
    const id = String(24526 + index);
    const withPrice = index % 8 === 0;
    return {
      id,
      name: `Sample Product ${index + 5}`,
      description: `Description for catalog item ${id}.`,
      ...(withPrice ? { price: `${(19.99 + index).toFixed(2)}` } : {}),
      image: `https://picsum.photos/seed/product-${id}/640/480`,
    } satisfies Product;
  }),
];
