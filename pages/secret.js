import Glow from "../components/glow";
import Head from "../components/head";
import Image from "../components/image";

export default function Secret({ coffees }) {
  return (
    <>
      <div className="bg-light relative min-h-screen">
        <Head title="Yellowme Plum" />
        <main className="pt-20 text-dark text-center">
          <h6 className="text-2xl md:text-4xl mb-16 animate__animated animate__fadeInDown">
            Colombia - Antioquia
          </h6>
          <h1 className="text-6xl md:text-8xl text-center font-bold italic mb-10 animate__animated animate__fadeInDown">
            Yellow<span className="italic">me</span> Plum
          </h1>
          <div className="flex justify-center mb-16 animate__animated animate__zoomIn">
            <div className="relative " style={{ width: "fit-content" }}>
              <Glow opacity="lg" />
              <Image
                src="/bolsa.png"
                alt="Picture of the author"
                width={287}
                height={404}
              />
              <div
                className="absolute transform -skew-y-6"
                style={{ top: 140, left: 90 }}
              >
                <Image src="/label.png" width={143} height={202} />
              </div>
            </div>
          </div>
          <h3 className="text-xl md:text-3xl font-bold mb-16 animate__animated animate__fadeInUp">
            Date - Yellow Plum - Kiwi
          </h3>
          <h6 className="text-2xl md:text-4xl animate__animated animate__fadeInUp">
            Colombia - Tabi - Caturra - Castillo
          </h6>
        </main>
      </div>
    </>
  );
}
