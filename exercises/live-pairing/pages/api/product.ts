import type { NextApiRequest, NextApiResponse } from "next";
import { products } from "../../data/products";
import type { ProductApiResponse } from "../../types/product";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductApiResponse | { error: string }>
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  return res.status(200).json({ results: products });
}
