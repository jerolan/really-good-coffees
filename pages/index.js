import Head from "../components/head";
import Hero from "../components/hero";
import CoffeeList from "../components/coffee-list";

import fetchCoffees from "../prismic/fetchCoffees";

export default function Home({ coffees }) {
  return (
    <>
      <Head />
      <div className="dark:bg-dark leading-relaxed">
        <main className="px-4">
          <div className="mb-12 py-16 animate__animated animate__fadeInDown">
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
