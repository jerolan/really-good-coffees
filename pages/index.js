import Head from "../components/head";
import Hero from "../rgc/hero";
import CoffeeList from "../rgc/coffee-list";

import fetchCoffees from "../prismic/fetchCoffees";

export default function Home({ coffees }) {
  return (
    <>
      <Head />
      <div className="dark:bg-dark leading-relaxed">
        <main>
          <div className="mb-12 py-16">
            <Hero />
          </div>
          <div className="container max-w-screen-md mx-auto px-4">
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
