export interface FilterBarProps {
  sortBy: string;
  queryBy: string;
  onSortByChange: (value: string) => void;
  onQueryByChange: (value: string) => void;
}

export function FilterBar({
  sortBy,
  queryBy,
  onSortByChange,
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
          <option value="start_date_asc">Lot number (ascending)</option>
          <option value="start_date_desc">Lot number (descending)</option>
        </select>
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
