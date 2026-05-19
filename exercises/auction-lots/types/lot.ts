import type { LotStatus, SortBy } from "./shared";

export type { LotStatus, SortBy };

export interface Lot {
  lot_id: string;
  auction_id: string;
  lot_number: string;
  title: string;
  artist?: string;
  estimate_low: number;
  estimate_high: number;
  currency: string;
  sold_price?: number;
  status: LotStatus;
  category: string;
  image_url: string;
  collection_label?: string;
}

export interface LotQueryParams {
  auction_id: string;
  sort_by?: SortBy;
  query_by?: string;
  page_size?: number;
}

export interface LotQueryResult {
  results: Lot[];
  total: number;
}
