import Head from "next/head";
import type { GetServerSideProps } from "next";
import { useState } from "react";
import {
  AuctionHeader,
  CategoryFilter,
  FilterBar,
  LotGallery,
  Pagination,
} from "../../components";
import { auctions } from "../../data/auctions";
import { queryLots } from "../../lib/lots/query";
import { useLotsQuery } from "../../lib/hooks/use-lots-query";
import type { Auction } from "../../types/auction";
import type { LotQueryParams, LotQueryResult } from "../../types/lot";

interface AuctionPageProps {
  auction: Auction;
  initialData: LotQueryResult;
}

const DEFAULT_PAGE_SIZE = 12;

export default function AuctionPage({ auction, initialData }: AuctionPageProps) {
  const [params, setParams] = useState<LotQueryParams>({
    auction_id: auction.auction_id,
    sort_by: "start_date_asc",
    page_size: DEFAULT_PAGE_SIZE,
  });
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { data = initialData } = useLotsQuery(params, initialData);

  const categories = Array.from(
    new Set(initialData.results.map((lot) => lot.category))
  );

  const visibleLots = selectedCategory
    ? data.results.filter((lot) => lot.category === selectedCategory)
    : data.results;

  return (
    <>
      <Head>
        <title>
          {auction.title} | Bonhams-inspired tech test
        </title>
      </Head>
      <main>
        <AuctionHeader auction={auction} />

        <FilterBar
          sortBy={params.sort_by ?? "start_date_asc"}
          queryBy={params.query_by ?? ""}
          onSortByChange={(sort_by) =>
            setParams((prev) => ({
              ...prev,
              sort_by: sort_by as LotQueryParams["sort_by"],
            }))
          }
          onQueryByChange={(query_by) =>
            setParams((prev) => ({ ...prev, query_by: query_by || undefined }))
          }
        />

        <CategoryFilter
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        <LotGallery lots={visibleLots} />

        <Pagination
          total={data.total}
          pageSize={params.page_size ?? DEFAULT_PAGE_SIZE}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<AuctionPageProps> = async (
  context
) => {
  const auctionId = String(context.params?.auctionId ?? "");
  const auction = auctions.find((item) => item.auction_id === auctionId);

  if (!auction) {
    return { notFound: true };
  }

  const initialData = queryLots({
    auction_id: auctionId,
    sort_by: "start_date_asc",
    page_size: DEFAULT_PAGE_SIZE,
  });

  return { props: { auction, initialData } };
};
