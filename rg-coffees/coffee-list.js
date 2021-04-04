import CoffeeItem from "./coffee-item";

export default function CoffeeList({ coffees }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-16">
      {coffees.map((coffee) => {
        return (
          <CoffeeItem
            key={coffee.id}
            href={coffee.href}
            image={coffee.image}
            name={coffee.name}
            country={coffee.country}
            notes={coffee.notes}
            properties={coffee.properties}
          />
        );
      })}
    </div>
  );
}
