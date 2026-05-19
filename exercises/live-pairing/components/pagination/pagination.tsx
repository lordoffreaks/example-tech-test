export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <nav aria-label="Pagination">
      <ul>
        <li>
          <button
            type="button"
            disabled={currentPage === 1}
            aria-label={`Go To Page ${currentPage - 1}`}
            onClick={() => onPageChange?.(currentPage - 1)}
          >
            Previous Page
          </button>
        </li>
        <li>
          <button
            type="button"
            aria-current="true"
            aria-label={`Current Page, Page ${currentPage}`}
          >
            {currentPage}
          </button>
        </li>
        <li>
          <button
            type="button"
            disabled={currentPage === totalPages}
            aria-label={`Go To Page ${currentPage + 1}`}
            onClick={() => onPageChange?.(currentPage + 1)}
          >
            Next Page
          </button>
        </li>
      </ul>
    </nav>
  );
}
