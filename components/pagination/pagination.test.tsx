import { screen, render } from "@testing-library/react";
import { Pagination } from "./pagination";

describe("Pagination", () => {
  it("should render pagination", () => {
    render(<Pagination currentPage={1} totalPages={3} />);

    screen.getByLabelText("Current Page, Page 1");
  });
});
