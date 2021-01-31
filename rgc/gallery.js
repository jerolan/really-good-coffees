import GalleryItem from "./gallery-item";

export default function Gallery({ coffees }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
      {coffees.map((coffee) => {
        return (
          <GalleryItem
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
