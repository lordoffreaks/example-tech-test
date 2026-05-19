import type { Auction } from "../../types/auction";

export function AuctionHeader({ auction }: { auction: Auction }) {
  return (
    <header data-testid="auction-header">
      <p data-testid="auction-status">{auction.status}</p>
      <h1>{auction.title}</h1>
      <p>{auction.subtitle}</p>
      <p>{auction.display_dates}</p>
      <p>{auction.location}</p>
      <p>{auction.lots_available} lots available</p>
      <img src={auction.image_url} alt="" />
    </header>
  );
}
