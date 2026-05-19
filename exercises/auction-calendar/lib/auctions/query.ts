import { auctions as seedAuctions } from "../../data/auctions";
import type {
  Auction,
  AuctionQueryParams,
  AuctionQueryResult,
  SortBy,
} from "../../types/auction";

const DEFAULT_SORT: SortBy = "start_date_asc";

export function parseAuctionQuery(
  input: Record<string, string | string[] | undefined>
): AuctionQueryParams {
  const sort_by = single(input.sort_by) as SortBy | undefined;
  const auction_id = single(input.auction_id);
  const query_by = single(input.query_by);
  const page_size_raw = single(input.page_size);

  return {
    sort_by:
      sort_by === "start_date_asc" || sort_by === "start_date_desc"
        ? sort_by
        : undefined,
    auction_id: auction_id || undefined,
    query_by: query_by || undefined,
    page_size: page_size_raw ? parsePositiveInt(page_size_raw) : undefined,
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

export function filterAuctions(
  items: Auction[],
  params: Pick<AuctionQueryParams, "auction_id" | "query_by">
): Auction[] {
  let filtered = items;

  if (params.auction_id) {
    filtered = filtered.filter((a) => a.auction_id === params.auction_id);
  }

  if (params.query_by?.trim()) {
    const q = params.query_by.trim().toLowerCase();
    filtered = filtered.filter((a) => {
      const haystack = [
        a.title,
        a.subtitle,
        a.location,
        a.department,
        a.month_group,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }

  return filtered;
}

export function sortAuctions(
  items: Auction[],
  sortBy: SortBy = DEFAULT_SORT
): Auction[] {
  const sorted = [...items];
  sorted.sort((a, b) => {
    const cmp = a.start_date.localeCompare(b.start_date);
    return sortBy === "start_date_desc" ? -cmp : cmp;
  });
  return sorted;
}

export function queryAuctions(
  params: AuctionQueryParams,
  source: Auction[] = seedAuctions
): AuctionQueryResult {
  const filtered = filterAuctions(source, params);
  const sorted = sortAuctions(filtered, params.sort_by ?? DEFAULT_SORT);
  const total = sorted.length;
  const pageSize = params.page_size ?? total;

  return {
    results: sorted.slice(0, pageSize),
    total,
  };
}
