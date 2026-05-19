import { useQuery } from "@tanstack/react-query";
import { fetchAuctions } from "../api/fetch-auctions";
import type { AuctionQueryParams, AuctionQueryResult } from "../../types/auction";

export function auctionsQueryKey(params: AuctionQueryParams) {
  return ["auctions", params] as const;
}

export function useAuctionsQuery(
  params: AuctionQueryParams,
  initialData?: AuctionQueryResult
) {
  return useQuery({
    queryKey: auctionsQueryKey(params),
    queryFn: () => fetchAuctions(params),
    initialData,
  });
}
