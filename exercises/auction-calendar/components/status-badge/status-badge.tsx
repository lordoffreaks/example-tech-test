import type { AuctionStatus } from "../../types/auction";

const LABELS: Record<AuctionStatus, string> = {
  open_for_bidding: "Open for bidding",
  ending_now: "Ending now",
  live_now: "Live now",
};

export function StatusBadge({ status }: { status: AuctionStatus }) {
  return <span data-testid="status-badge">{LABELS[status]}</span>;
}
