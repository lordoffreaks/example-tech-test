import { lots as seedLots } from "../../data/lots";
import type { Lot, LotQueryParams, LotQueryResult, SortBy } from "../../types/lot";

const DEFAULT_SORT: SortBy = "start_date_asc";

export function parseLotQuery(
  input: Record<string, string | string[] | undefined>
): LotQueryParams | null {
  const auction_id = single(input.auction_id);
  if (!auction_id) return null;

  const sort_by = single(input.sort_by) as SortBy | undefined;

  return {
    auction_id,
    sort_by:
      sort_by === "start_date_asc" || sort_by === "start_date_desc"
        ? sort_by
        : undefined,
    query_by: single(input.query_by) || undefined,
    page_size: single(input.page_size)
      ? parsePositiveInt(single(input.page_size)!)
      : undefined,
  };
}

function single(value: string | string[] | undefined): string | undefined {
  if (Array.isArray(value)) return value[0];
  return value;
}

function parsePositiveInt(value: string): number | undefined {
  const parsed = Number.parseInt(value, 10);
  if (!Number.isFinite(parsed) || parsed < 1) return undefined;
  return parsed;
}

export function filterLots(
  items: Lot[],
  params: Pick<LotQueryParams, "auction_id" | "query_by">
): Lot[] {
  let filtered = items.filter((lot) => lot.auction_id === params.auction_id);

  if (params.query_by?.trim()) {
    const q = params.query_by.trim().toLowerCase();
    filtered = filtered.filter((lot) => {
      const haystack = [
        lot.title,
        lot.artist ?? "",
        lot.category,
        lot.collection_label ?? "",
        lot.lot_number,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }

  return filtered;
}

export function sortLots(items: Lot[], sortBy: SortBy = DEFAULT_SORT): Lot[] {
  const sorted = [...items];
  sorted.sort((a, b) => {
    const aKey = `${a.lot_number}`;
    const bKey = `${b.lot_number}`;
    const cmp = aKey.localeCompare(bKey, undefined, { numeric: true });
    return sortBy === "start_date_desc" ? -cmp : cmp;
  });
  return sorted;
}

export function queryLots(
  params: LotQueryParams,
  source: Lot[] = seedLots
): LotQueryResult {
  const filtered = filterLots(source, params);
  const sorted = sortLots(filtered, params.sort_by ?? DEFAULT_SORT);
  const total = sorted.length;
  const pageSize = params.page_size ?? total;

  return {
    results: sorted.slice(0, pageSize),
    total,
  };
}
