import Head from "next/head";
import styled from "styled-components";
import { Card, Pagination } from "../components";

const Main = styled.main`
  max-width: 1200px;
  margin: auto;
  padding: 10px;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tech Test</title>
        <meta name="description" content="Tech Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <h1>Tech Test</h1>
        <Card />
        <Pagination />
      </Main>
    </div>
  );
}
