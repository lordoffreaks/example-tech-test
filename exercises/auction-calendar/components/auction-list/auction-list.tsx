import type { Auction } from "../../types/auction";
import { AuctionCard } from "../auction-card";

export interface AuctionListProps {
  auctions: Auction[];
}

export function AuctionList({ auctions }: AuctionListProps) {
  return (
    <section data-testid="auction-list">
      {auctions.map((auction) => (
        <AuctionCard key={auction.auction_id} auction={auction} />
      ))}
    </section>
  );
}
