import CoffeeItem from "./coffee-item";

export default function CoffeeList({ coffees }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-16 animate__animated animate__fadeInUp">
      {coffees.map((coffee) => {
        return (
          <CoffeeItem
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
