import Head from "../components/head";
import Hero from "../rg-coffees/hero";
import CoffeeList from "../rg-coffees/coffee-list";

import fetchCoffees from "../prismic/fetchCoffees";

export default function Home({ coffees }) {
  return (
    <>
      <Head />
      <div className="dark:bg-dark leading-relaxed">
        <main className="px-4">
          <div className="mb-12 py-16">
            <Hero />
          </div>
          <div className="container max-w-screen-md mx-auto">
            <CoffeeList coffees={coffees} />
          </div>
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
