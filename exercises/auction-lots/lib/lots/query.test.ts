import { lots } from "../../data/lots";
import { filterLots, parseLotQuery, queryLots, sortLots } from "./query";

describe("parseLotQuery", () => {
  it("requires auction_id", () => {
    expect(parseLotQuery({})).toBeNull();
  });

  it("ignores unsupported sort values", () => {
    expect(
      parseLotQuery({ auction_id: "32023", sort_by: "invalid" })?.sort_by
    ).toBeUndefined();
  });

  it("ignores invalid page_size", () => {
    expect(
      parseLotQuery({ auction_id: "32023", page_size: "nope" })?.page_size
    ).toBeUndefined();
  });

  it("uses the first value when query params are arrays", () => {
    expect(
      parseLotQuery({
        auction_id: ["32023", "31745"],
        sort_by: ["start_date_desc", "start_date_asc"],
      })
    ).toEqual({
      auction_id: "32023",
      sort_by: "start_date_desc",
      query_by: undefined,
      page_size: undefined,
    });
  });

  it("parses supported query params", () => {
    expect(
      parseLotQuery({
        auction_id: "32023",
        sort_by: "start_date_desc",
        query_by: "imari",
        page_size: "8",
      })
    ).toEqual({
      auction_id: "32023",
      sort_by: "start_date_desc",
      query_by: "imari",
      page_size: 8,
    });
  });
});

describe("filterLots", () => {
  it("scopes results to auction_id", () => {
    const filtered = filterLots(lots, { auction_id: "32023" });
    expect(filtered.every((lot) => lot.auction_id === "32023")).toBe(true);
    expect(filtered.length).toBeGreaterThan(50);
  });

  it("filters by query_by", () => {
    const filtered = filterLots(lots, {
      auction_id: "32023",
      query_by: "Lot 701",
    });
    expect(filtered.length).toBeGreaterThan(0);
  });
});

describe("sortLots", () => {
  it("sorts lot numbers ascending", () => {
    const scoped = lots.filter((lot) => lot.auction_id === "32023").slice(0, 10);
    const sorted = sortLots(scoped, "start_date_asc");
    expect(sorted[0].lot_number <= sorted[sorted.length - 1].lot_number).toBe(
      true
    );
  });

  it("sorts lot numbers descending", () => {
    const scoped = lots.filter((lot) => lot.auction_id === "32023").slice(0, 10);
    const sorted = sortLots(scoped, "start_date_desc");
    expect(sorted[0].lot_number >= sorted[sorted.length - 1].lot_number).toBe(
      true
    );
  });

  it("uses ascending order by default", () => {
    const scoped = lots.filter((lot) => lot.auction_id === "32023").slice(0, 10);
    const sorted = sortLots(scoped);
    expect(sorted[0].lot_number <= sorted[sorted.length - 1].lot_number).toBe(
      true
    );
  });
});

describe("queryLots", () => {
  it("returns total before page_size slicing", () => {
    const result = queryLots({ auction_id: "32023", page_size: 5 });
    expect(result.results).toHaveLength(5);
    expect(result.total).toBeGreaterThan(50);
  });

  it("returns all lots when page_size is omitted", () => {
    const result = queryLots({ auction_id: "32023" });
    expect(result.results.length).toBe(result.total);
  });

  it("applies default sort when sort_by is omitted", () => {
    const result = queryLots({ auction_id: "32023", page_size: 10 });
    expect(result.results[0].lot_number <= result.results.at(-1)!.lot_number).toBe(
      true
    );
  });
});
