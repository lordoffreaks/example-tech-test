import faker from "faker";

export default function handler(req, res) {
  res.status(200).json({
    results: [...Array(100)].map((_, index) => ({
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: index % 8 === 0 ? faker.commerce.price() : undefined,
      image: faker.image.image(),
    })),
  });
}
