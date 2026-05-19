import type { AuctionStatus, SaleType } from "./shared";

export type { AuctionStatus, SaleType };

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
  lots_available: number;
}
