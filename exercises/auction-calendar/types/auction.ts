export type AuctionStatus = "open_for_bidding" | "ending_now" | "live_now";
export type SaleType = "online" | "live";

export type SortBy = "start_date_asc" | "start_date_desc";

export interface Auction {
  auction_id: string;
  title: string;
  subtitle: string;
  status: AuctionStatus;
  start_date: string;
  end_date: string;
  display_dates: string;
  location: string;
  sale_type: SaleType;
  month_group: string;
  department: string;
  image_url: string;
}

export interface AuctionQueryParams {
  sort_by?: SortBy;
  auction_id?: string;
  query_by?: string;
  page_size?: number;
}

export interface AuctionQueryResult {
  results: Auction[];
  total: number;
}
