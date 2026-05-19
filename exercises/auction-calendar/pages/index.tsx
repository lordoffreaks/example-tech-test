import Head from "next/head";
import type { GetServerSideProps } from "next";
import { useState } from "react";
import { AuctionList, FilterBar, Pagination } from "../components";
import { queryAuctions } from "../lib/auctions/query";
import { useAuctionsQuery } from "../lib/hooks/use-auctions-query";
import type { AuctionQueryParams, AuctionQueryResult } from "../types/auction";

interface HomeProps {
  initialData: AuctionQueryResult;
}

const DEFAULT_PAGE_SIZE = 12;

export default function Home({ initialData }: HomeProps) {
  const [params, setParams] = useState<AuctionQueryParams>({
    sort_by: "start_date_asc",
    page_size: DEFAULT_PAGE_SIZE,
  });
  const [currentPage, setCurrentPage] = useState(1);

  const { data = initialData, isFetching } = useAuctionsQuery(params, initialData);

  return (
    <>
      <Head>
        <title>Upcoming auctions | Bonhams-inspired tech test</title>
      </Head>
      <main>
        <h1>Upcoming auctions</h1>
        <p>{isFetching ? "Updating…" : `${data.total} results`}</p>

        <FilterBar
          sortBy={params.sort_by ?? "start_date_asc"}
          auctionId={params.auction_id ?? ""}
          queryBy={params.query_by ?? ""}
          onSortByChange={(sort_by) =>
            setParams((prev) => ({
              ...prev,
              sort_by: sort_by as AuctionQueryParams["sort_by"],
            }))
          }
          onAuctionIdChange={(auction_id) =>
            setParams((prev) => ({ ...prev, auction_id: auction_id || undefined }))
          }
          onQueryByChange={(query_by) =>
            setParams((prev) => ({ ...prev, query_by: query_by || undefined }))
          }
        />

        <AuctionList auctions={data.results} />

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

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const initialData = queryAuctions({
    sort_by: "start_date_asc",
    page_size: DEFAULT_PAGE_SIZE,
  });

  return { props: { initialData } };
};
