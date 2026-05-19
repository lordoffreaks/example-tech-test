import { createMocks } from "node-mocks-http";
import handler from "../../pages/api/auctions";

describe("/api/auctions", () => {
  it("returns auctions with total count", async () => {
    const { req, res } = createMocks({ method: "GET", query: {} });
    await handler(req, res);
    expect(res._getStatusCode()).toBe(200);
    const body = res._getJSONData();
    expect(body.total).toBeGreaterThan(50);
    expect(body.results.length).toBeGreaterThan(0);
  });

  it("rejects non-GET methods", async () => {
    const { req, res } = createMocks({ method: "POST", query: {} });
    await handler(req, res);
    expect(res._getStatusCode()).toBe(405);
  });
});
