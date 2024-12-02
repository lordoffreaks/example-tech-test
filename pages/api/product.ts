import { faker } from "@faker-js/faker";
import { NextApiRequest, NextApiResponse } from "next";
import { Product } from "types/types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ results: Product[] }>
) {
  res.status(200).json({
    results: [...Array(25)].map((_, index) => ({
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: index % 8 === 0 ? faker.commerce.price() : undefined,
      image: faker.image.url(),
    })),
  });
}
