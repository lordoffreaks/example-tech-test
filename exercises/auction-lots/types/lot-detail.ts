export interface LotDetail {
  lot_id: string;
  auction_id: string;
  lot_number: string;
  artist: string;
  title: string;
  medium: string;
  dimensions: string;
  estimate_low: number;
  estimate_high: number;
  currency: string;
  sale_datetime: string;
  image_urls: string[];
  description: string;
  footnotes: string;
}
