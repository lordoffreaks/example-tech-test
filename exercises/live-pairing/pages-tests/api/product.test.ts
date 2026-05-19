import { createMocks } from "node-mocks-http";
import handler from "../../pages/api/product";
import { products } from "../../data/products";

describe("/api/product", () => {
  it("returns 25 deterministic products", async () => {
    const { req, res } = createMocks({ method: "GET" });
    await handler(req, res);
    expect(res._getStatusCode()).toBe(200);
    const body = res._getJSONData();
    expect(body.results).toHaveLength(25);
    expect(body.results).toEqual(products);
  });

  it("rejects non-GET methods", async () => {
    const { req, res } = createMocks({ method: "POST" });
    await handler(req, res);
    expect(res._getStatusCode()).toBe(405);
  });
});
