import Head from "next/head";
import type { GetServerSideProps } from "next";
import { auctions } from "../../data/auctions";
import type { Auction } from "../../types/auction";

interface AuctionPageProps {
  auction: Auction;
}

export default function AuctionLandingPage({ auction }: AuctionPageProps) {
  return (
    <>
      <Head>
        <title>{auction.title} | Bonhams-inspired tech test</title>
      </Head>
      <main data-testid="auction-landing-ai">
        <p>Phase 4 (optional): style this page from the reference screenshot.</p>
        <h1>{auction.title}</h1>
        <p>{auction.subtitle}</p>
        <p>{auction.display_dates}</p>
        <p>{auction.location}</p>
        <img src={auction.image_url} alt="" />
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

  return { props: { auction } };
};
