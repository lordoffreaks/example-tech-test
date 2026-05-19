import { queryAuctions } from "./query";

/**
 * Phase 3 — complete these tests to reach 100% coverage.
 * Remove `.skip` and make each test pass.
 */
describe("Phase 3 candidate tests — auctions", () => {
  it.skip("treats whitespace-only query_by as no text filter", () => {
    const baseline = queryAuctions({});
    const whitespace = queryAuctions({ query_by: "   " });
    expect(whitespace.total).toBe(baseline.total);
  });

  it.skip("returns an empty result set when auction_id does not exist", () => {
    const result = queryAuctions({ auction_id: "does-not-exist" });
    expect(result.total).toBe(0);
    expect(result.results).toEqual([]);
  });
});
