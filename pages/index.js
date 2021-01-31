import Hero from "../src/hero";
import Gallery from "../src/gallery";

import fetchCoffees from "../prismic/fetchCoffees";

export default function Home({ coffees }) {
  return (
    <main className="container max-w-screen-md mx-auto px-4">
      <div className="mb-12 py-16">
        <Hero />
      </div>
      <Gallery coffees={coffees} />
    </main>
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
