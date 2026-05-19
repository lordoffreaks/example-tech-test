import type { Auction } from "../../types/auction";

export interface AuctionCardProps {
  auction: Auction;
}

export function AuctionCard({ auction }: AuctionCardProps) {
  return (
    <article data-testid={`auction-card-${auction.auction_id}`}>
      <img src={auction.image_url} alt="" />
      <p data-testid="auction-status">{auction.status}</p>
      <h3>{auction.title}</h3>
      <p>{auction.subtitle}</p>
      <p>{auction.display_dates}</p>
      <p>{auction.location}</p>
      <p>{auction.department}</p>
    </article>
  );
}
