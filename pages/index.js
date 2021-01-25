import Hero from "../src/hero";
import Gallery from "../src/gallery";

export default function Home() {
  return (
    <main className="container max-w-screen-md mx-auto px-4">
      <div className="mb-12 py-16">
        <Hero />
      </div>
      <Gallery />
    </main>
  );
}
