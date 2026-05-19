import { useQuery } from "@tanstack/react-query";
import { fetchLots } from "../api/fetch-lots";
import type { LotQueryParams, LotQueryResult } from "../../types/lot";

export function lotsQueryKey(params: LotQueryParams) {
  return ["lots", params] as const;
}

export function useLotsQuery(
  params: LotQueryParams,
  initialData?: LotQueryResult
) {
  return useQuery({
    queryKey: lotsQueryKey(params),
    queryFn: () => fetchLots(params),
    initialData,
    enabled: Boolean(params.auction_id),
  });
}
