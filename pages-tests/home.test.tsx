import { render } from "@testing-library/react";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";
import Home, { getServerSideProps } from "../pages";
import { Product } from "types/types";

describe("Home Page", () => {
  describe("Page Component", () => {
    it("should render", () => {
      const product: Product = {
        name: "Product Name",
        description: "This is a product",
        price: "200",
        image: "https://example.com/image",
        id: "38463",
      };

      const { baseElement } = render(<Home results={[product]} />);
      expect(baseElement).toBeTruthy();
    });
  });

  describe("getServerSideProps", () => {
    const server = setupServer(
      http.get("http://localhost:3000/api/product", async () => {
        return HttpResponse.json(
          [...Array(25)].map((_, index) => ({
            name: `Product Name ${index + 1}`,
            description: "This is a product",
            price: "200",
            image: "https://example.com/image",
            id: `${38463 + index}`,
          }))
        );
      })
    );

    beforeAll(() => {
      server.listen();
    });

    afterEach(() => server.resetHandlers());

    afterAll(() => server.close());

    it("should get server side props", async () => {
      const actualResults = await getServerSideProps();

      expect(actualResults.props.results).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            name: expect.any(String),
            description: expect.any(String),
            price: expect.any(String),
            image: expect.any(String),
            id: expect.any(String),
          }),
        ])
      );
    });
  });
});
