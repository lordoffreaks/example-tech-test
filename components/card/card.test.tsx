import { screen, render } from "@testing-library/react";
import { Card } from "./card";

describe("Card", () => {
  const exampleProps = {
    name: "Product Name",
    description: "This is a product",
    price: "200",
    image: "https://example.com/image",
    id: "38463",
  };

  it("should render card", () => {
    render(<Card {...exampleProps} />);

    screen.getByText("Product Name");
    screen.getByText("This is a product");
  });
});
