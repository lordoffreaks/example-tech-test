export function Pagination() {
  const currentPage = 5;
  const totalPages = 10;

  return (
    <nav aria-label="Pagination">
      <ul>
        <li>
          <button
            type="button"
            disabled={currentPage === 1}
            aria-label={`Go To Page ${currentPage - 1}`}
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
          >
            Next Page
          </button>
        </li>
      </ul>
    </nav>
  );
}
