import Head from "next/head";
import styled from "styled-components";
import { Card, Pagination } from "../components";
import styles from "../styles/home.module.css";

const Main = styled.main`
  max-width: 1200px;
  margin: auto;
  padding: 10px;
`;

export default function Home({
  results: [{ id, name, description, price, image }],
}) {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Tech Test</title>
        <meta name="description" content="Tech Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <h1>Live Pairing Tech Test</h1>
        <Card
          id={id}
          name={name}
          description={description}
          price={price}
          image={image}
        />
        <Pagination currentPage={5} totalPages={10} />
      </Main>
    </div>
  );
}

export async function getServerSideProps() {
  const fetchUrl = "http://localhost:3000/api/product";

  return {
    props: {
      results: [
        {
          name: "Unbranded Concrete Gloves",
          description:
            "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
          price: "860.00",
          image: "http://placeimg.com/640/480/cats",
          id: "123",
        },
      ],
    },
  };
}
