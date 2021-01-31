import Hero from "../rgc/hero";
import CoffeeList from "../rgc/coffee-list";

import fetchCoffees from "../prismic/fetchCoffees";

export default function Home({ coffees }) {
  return (
    <div className="bg-white dark:bg-dark">
      <main className="container max-w-screen-md mx-auto px-4 ">
        <div className="mb-12 py-16">
          <Hero />
        </div>
        <CoffeeList coffees={coffees} />
      </main>
    </div>
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
