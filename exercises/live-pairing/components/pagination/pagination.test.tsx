import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Pagination } from "./pagination";

describe("Pagination", () => {
  it("should render pagination", () => {
    render(<Pagination currentPage={1} totalPages={3} />);

    screen.getByLabelText("Current Page, Page 1");
  });

  it("calls onPageChange for previous and next", async () => {
    const user = userEvent.setup();
    const onPageChange = jest.fn();

    render(
      <Pagination currentPage={2} totalPages={3} onPageChange={onPageChange} />
    );

    await user.click(screen.getByLabelText("Go To Page 1"));
    await user.click(screen.getByLabelText("Go To Page 3"));

    expect(onPageChange).toHaveBeenCalledWith(1);
    expect(onPageChange).toHaveBeenCalledWith(3);
  });
});
