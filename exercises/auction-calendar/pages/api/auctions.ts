import type { NextApiRequest, NextApiResponse } from "next";
import { parseAuctionQuery, queryAuctions } from "../../lib/auctions/query";
import type { AuctionQueryResult } from "../../types/auction";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<AuctionQueryResult | { error: string }>
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  const params = parseAuctionQuery(req.query);
  return res.status(200).json(queryAuctions(params));
}
