import type { AuctionQueryParams, AuctionQueryResult } from "../../types/auction";

export function buildAuctionsQueryString(
  params: AuctionQueryParams
): string {
  const search = new URLSearchParams();
  if (params.sort_by) search.set("sort_by", params.sort_by);
  if (params.auction_id) search.set("auction_id", params.auction_id);
  if (params.query_by) search.set("query_by", params.query_by);
  if (params.page_size !== undefined) {
    search.set("page_size", String(params.page_size));
  }
  return search.toString();
}

export async function fetchAuctions(
  params: AuctionQueryParams,
  baseUrl = ""
): Promise<AuctionQueryResult> {
  const qs = buildAuctionsQueryString(params);
  const url = `${baseUrl}/api/auctions${qs ? `?${qs}` : ""}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch auctions");
  }
  return response.json();
}
