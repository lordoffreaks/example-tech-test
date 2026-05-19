import type { LotQueryParams, LotQueryResult } from "../../types/lot";

export function buildLotsQueryString(params: LotQueryParams): string {
  const search = new URLSearchParams();
  search.set("auction_id", params.auction_id);
  if (params.sort_by) search.set("sort_by", params.sort_by);
  if (params.query_by) search.set("query_by", params.query_by);
  if (params.page_size !== undefined) {
    search.set("page_size", String(params.page_size));
  }
  return search.toString();
}

export async function fetchLots(
  params: LotQueryParams,
  baseUrl = ""
): Promise<LotQueryResult> {
  const qs = buildLotsQueryString(params);
  const response = await fetch(`${baseUrl}/api/lots?${qs}`);
  if (!response.ok) {
    throw new Error("Failed to fetch lots");
  }
  return response.json();
}
