import { render } from "@testing-library/react";
import Home, { getServerSideProps } from "../pages/index";
import type { Product } from "../types/product";

const mockProducts: Product[] = [...Array(25)].map((_, index) => ({
  name: `Product Name ${index + 1}`,
  description: "This is a product",
  price: "200",
  image: "https://example.com/image",
  id: `${38463 + index}`,
}));

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
    beforeEach(() => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ results: mockProducts }),
      }) as jest.Mock;
    });

    afterEach(() => {
      jest.resetAllMocks();
    });

    it("should get server side props", async () => {
      const actualResults = await getServerSideProps({
        req: { headers: { host: "localhost:3000" } },
      } as Parameters<typeof getServerSideProps>[0]);

      if ("props" in actualResults) {
        expect(actualResults.props.results).toHaveLength(25);
        expect(actualResults.props.results[0]).toEqual(
          expect.objectContaining({
            name: expect.any(String),
            description: expect.any(String),
            image: expect.any(String),
            id: expect.any(String),
          })
        );
      } else {
        throw new Error("Expected props result");
      }
    });

    it("throws when the API request fails", async () => {
      global.fetch = jest.fn().mockResolvedValue({ ok: false }) as jest.Mock;

      await expect(
        getServerSideProps({
          req: { headers: { host: "localhost:3000" } },
        } as Parameters<typeof getServerSideProps>[0])
      ).rejects.toThrow("Failed to load products");
    });
  });
});
