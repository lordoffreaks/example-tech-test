import { auctions } from "../../data/auctions";
import {
  filterAuctions,
  parseAuctionQuery,
  queryAuctions,
  sortAuctions,
} from "./query";

describe("parseAuctionQuery", () => {
  it("parses supported query params", () => {
    expect(
      parseAuctionQuery({
        sort_by: "start_date_desc",
        auction_id: "32023",
        query_by: "jewellery",
        page_size: "10",
      })
    ).toEqual({
      sort_by: "start_date_desc",
      auction_id: "32023",
      query_by: "jewellery",
      page_size: 10,
    });
  });

  it("ignores unsupported sort values", () => {
    expect(parseAuctionQuery({ sort_by: "title_asc" }).sort_by).toBeUndefined();
  });

  it("ignores invalid page_size", () => {
    expect(parseAuctionQuery({ page_size: "abc" }).page_size).toBeUndefined();
  });

  it("uses the first value when query params are arrays", () => {
    expect(
      parseAuctionQuery({ sort_by: ["start_date_desc", "start_date_asc"] })
        .sort_by
    ).toBe("start_date_desc");
  });
});

describe("filterAuctions", () => {
  it("filters by auction_id", () => {
    const filtered = filterAuctions(auctions, { auction_id: auctions[0].auction_id });
    expect(filtered).toHaveLength(1);
    expect(filtered[0].auction_id).toBe(auctions[0].auction_id);
  });

  it("filters by query_by across searchable fields", () => {
    const filtered = filterAuctions(auctions, { query_by: "Greek" });
    expect(filtered.length).toBeGreaterThan(0);
    expect(
      filtered.every((auction) =>
        `${auction.title} ${auction.subtitle} ${auction.location} ${auction.department}`
          .toLowerCase()
          .includes("greek")
      )
    ).toBe(true);
  });

  it("returns all auctions when no filters are provided", () => {
    expect(filterAuctions(auctions, {})).toHaveLength(auctions.length);
  });
});

describe("sortAuctions", () => {
  it("sorts by start_date ascending by default", () => {
    const sorted = sortAuctions(auctions);
    for (let i = 1; i < sorted.length; i += 1) {
      expect(sorted[i - 1].start_date <= sorted[i].start_date).toBe(true);
    }
  });

  it("sorts by start_date descending", () => {
    const sorted = sortAuctions(auctions, "start_date_desc");
    for (let i = 1; i < sorted.length; i += 1) {
      expect(sorted[i - 1].start_date >= sorted[i].start_date).toBe(true);
    }
  });
});

describe("queryAuctions", () => {
  it("returns total before page_size slicing", () => {
    const result = queryAuctions({ page_size: 5 });
    expect(result.results).toHaveLength(5);
    expect(result.total).toBe(auctions.length);
  });

  it("returns all results when page_size is omitted", () => {
    const result = queryAuctions({});
    expect(result.results).toHaveLength(auctions.length);
    expect(result.total).toBe(auctions.length);
  });

  it("combines filter, sort, and page_size", () => {
    const result = queryAuctions({
      query_by: "Art",
      sort_by: "start_date_desc",
      page_size: 3,
    });
    expect(result.results.length).toBeLessThanOrEqual(3);
    expect(result.total).toBeGreaterThanOrEqual(result.results.length);
  });
});
