import Head from "next/head";
import Link from "next/link";
import { auctions } from "../data/auctions";

export default function Home() {
  return (
    <>
      <Head>
        <title>Auction lots tech test</title>
      </Head>
      <main>
        <h1>Bonhams-inspired lots exercise</h1>
        <p>Select an auction to begin:</p>
        <ul>
          {auctions.map((auction) => (
            <li key={auction.auction_id}>
              <Link href={`/auction/${auction.auction_id}`}>
                {auction.title} — {auction.subtitle}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
