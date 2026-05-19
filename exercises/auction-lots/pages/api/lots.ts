import type { NextApiRequest, NextApiResponse } from "next";
import { parseLotQuery, queryLots } from "../../lib/lots/query";
import type { LotQueryResult } from "../../types/lot";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<LotQueryResult | { error: string }>
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  const params = parseLotQuery(req.query);
  if (!params) {
    return res.status(400).json({ error: "auction_id is required" });
  }

  return res.status(200).json(queryLots(params));
}
