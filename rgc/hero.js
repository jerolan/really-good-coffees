import FancyText from "./fansy-text";

export default function Hero() {
  return (
    <div className="flex flex-col max-w-3xl mx-auto" style={{ height: "50vh" }}>
      <div className="mb-12 pt-20">
        <h1 className="text-8xl font-bold">
          <FancyText>Really Good Coffees</FancyText>
        </h1>
      </div>
      <p className="text-4xl text-gray-800 dark:text-light font-light">
        Una lista de cafés que me gustan
      </p>
    </div>
  );
}
