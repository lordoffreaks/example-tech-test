import Head from "next/head";
import type { GetServerSideProps } from "next";
import { getLotDetail } from "../../../../data/lot-details";
import { LotDetailShell } from "../../../../components";
import type { LotDetail } from "../../../../types/lot-detail";

interface LotPageProps {
  lot: LotDetail;
}

export default function LotPage({ lot }: LotPageProps) {
  return (
    <>
      <Head>
        <title>
          {lot.title} | Bonhams-inspired tech test
        </title>
      </Head>
      <main data-testid="lot-detail-ai">
        <p>Phase 4 (optional): style this page from the reference screenshot.</p>
        <LotDetailShell lot={lot} />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<LotPageProps> = async (
  context
) => {
  const auctionId = String(context.params?.auctionId ?? "");
  const lotId = String(context.params?.lotId ?? "");
  const lot = getLotDetail(auctionId, lotId);

  if (!lot) {
    return { notFound: true };
  }

  return { props: { lot } };
};
