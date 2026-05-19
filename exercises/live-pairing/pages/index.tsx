import Head from "next/head";
import type { GetServerSideProps } from "next";
import { useState } from "react";
import styled from "styled-components";
import { Card, Pagination } from "../components";
import styles from "../styles/home.module.css";
import type { Product } from "../types/product";

const Main = styled.main`
  max-width: 1200px;
  margin: auto;
  padding: 10px;
`;

interface HomeProps {
  results: Product[];
}

export default function Home({ results }: HomeProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Live Pairing Tech Test</title>
        <meta name="description" content="Live Pairing Tech Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <h1>Live Pairing Tech Test</h1>

        {results.map(({ id, name, description, price, image }) => (
          <Card
            key={id}
            id={id}
            name={name}
            description={description}
            price={price}
            image={image}
          />
        ))}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </Main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async (
  context
) => {
  const protocol =
    (context.req.headers["x-forwarded-proto"] as string | undefined) ?? "http";
  const host = context.req.headers.host ?? "localhost:3000";
  const response = await fetch(`${protocol}://${host}/api/product`);

  if (!response.ok) {
    throw new Error("Failed to load products");
  }

  const data = (await response.json()) as HomeProps;

  return {
    props: {
      results: data.results,
    },
  };
};
