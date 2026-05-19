import { createMocks } from "node-mocks-http";
import handler from "../../pages/api/lots";

describe("/api/lots", () => {
  it("returns lots when auction_id is provided", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: { auction_id: "32023" },
    });
    await handler(req, res);
    expect(res._getStatusCode()).toBe(200);
    const body = res._getJSONData();
    expect(body.total).toBeGreaterThan(50);
  });

  it("returns 400 when auction_id is missing", async () => {
    const { req, res } = createMocks({ method: "GET", query: {} });
    await handler(req, res);
    expect(res._getStatusCode()).toBe(400);
  });

  it("rejects non-GET methods", async () => {
    const { req, res } = createMocks({
      method: "POST",
      query: { auction_id: "32023" },
    });
    await handler(req, res);
    expect(res._getStatusCode()).toBe(405);
  });
});
