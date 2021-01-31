import Head from "next/head";

import Hero from "../rgc/hero";
import CoffeeList from "../rgc/coffee-list";

import fetchCoffees from "../prismic/fetchCoffees";

export default function Home({ coffees }) {
  return (
    <>
      <Head>
        <title>Really Good Coffees</title>
        <meta name="description" content="Una lista de cafés que me gustan" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Really Good Coffees" />
        <meta
          property="og:description"
          content="Una lista de cafés que me gustan"
        />
        <meta property="og:image" content={coffees[0].image.url} />

        <meta property="twitter:card" content="summary" />
        <meta property="twitter:creator" content="@sediceyerom" />
        <meta property="twitter:title" content="Really Good Coffees" />
        <meta
          property="twitter:description"
          content="Una lista de cafés que me gustan"
        />
        <meta property="twitter:image:src" content={coffees[0].image.url} />
      </Head>

      <div className="bg-white dark:bg-dark">
        <main className="container max-w-screen-md mx-auto px-4 ">
          <div className="mb-12 py-16">
            <Hero />
          </div>
          <CoffeeList coffees={coffees} />
        </main>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const coffees = await fetchCoffees();

  return {
    props: {
      coffees,
    },
  };
}
