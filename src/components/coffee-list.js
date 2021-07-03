import useCoffees from "../prismic/useCoffees";
import CoffeeItem from "./coffee-item";

// CoffeeList is a React component that displays a list of CoffeeItems.
export default function CoffeeList() {
  const [coffees, loading] = useCoffees();

  if (coffees == null) {
    return <>Loading...</>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-16 animate__animated animate__fadeInUp">
      {coffees?.map((coffee) => {
        return (
          <CoffeeItem
            key={coffee.id}
            country={coffee.country}
            highligh={coffee.highligh}
            href={coffee.href}
            image={coffee.image}
            key={coffee.id}
            name={coffee.name}
            notes={coffee.notes}
            highlight={coffee.highligh}
            properties={coffee.properties}
          />
        );
      })}
    </div>
  );
}
