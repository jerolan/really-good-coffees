import FancyText from "./fansy-text";

export default function Hero() {
  return (
    <div className="text-center">
      <div className="mb-7">
        <h1 className="text-6xl font-bold">
          <FancyText>Really Good Coffees</FancyText>
        </h1>
      </div>
      <p className="text-4xl text-dark dark:text-light font-light">
        Una lista de cafés que me gustan
      </p>
    </div>
  );
}
