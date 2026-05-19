export interface FilterBarProps {
  sortBy: string;
  auctionId: string;
  queryBy: string;
  onSortByChange: (value: string) => void;
  onAuctionIdChange: (value: string) => void;
  onQueryByChange: (value: string) => void;
}

export function FilterBar({
  sortBy,
  auctionId,
  queryBy,
  onSortByChange,
  onAuctionIdChange,
  onQueryByChange,
}: FilterBarProps) {
  return (
    <section data-testid="filter-bar">
      <label>
        Sort by
        <select
          aria-label="Sort by"
          value={sortBy}
          onChange={(e) => onSortByChange(e.target.value)}
        >
          <option value="start_date_asc">Start date (ascending)</option>
          <option value="start_date_desc">Start date (descending)</option>
        </select>
      </label>
      <label>
        Auction ID
        <input
          aria-label="Auction ID"
          value={auctionId}
          onChange={(e) => onAuctionIdChange(e.target.value)}
        />
      </label>
      <label>
        Search
        <input
          aria-label="Search"
          value={queryBy}
          onChange={(e) => onQueryByChange(e.target.value)}
        />
      </label>
    </section>
  );
}
