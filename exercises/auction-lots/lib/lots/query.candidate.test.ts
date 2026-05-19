import { queryLots } from "./query";

describe("Phase 3 candidate tests — lots", () => {
  it.skip("returns 400-worthy empty data when auction has no lots", () => {
    const result = queryLots({ auction_id: "99999" });
    expect(result.total).toBe(0);
    expect(result.results).toEqual([]);
  });

  it.skip("ignores whitespace-only query_by values", () => {
    const baseline = queryLots({ auction_id: "32023" });
    const whitespace = queryLots({ auction_id: "32023", query_by: "  " });
    expect(whitespace.total).toBe(baseline.total);
  });
});
