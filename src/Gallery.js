import Image from "next/image";

export default function Gallery() {
  const coffees = [
    {
      image: "/vercel.svg",
      name: "El Sauce",
      country: "Peru",
      notes: ["Cherry", "Honeycomb", "Cranberry"],
      properties: [
        {
          label: "Variedad/es",
          value: "Pluma",
        },
        {
          label: "Variedad/es",
          value: "Pluma",
        },
        {
          label: "Variedad/es",
          value: "Pluma",
        },
      ],
    },
    {
      image: "/vercel.svg",
      name: "El Sauce",
      country: "Peru",
      notes: ["Cherry", "Honeycomb", "Cranberry"],
      properties: [
        {
          label: "Variedad/es",
          value: "Pluma",
        },
        {
          label: "Variedad/es",
          value: "Pluma",
        },
        {
          label: "Variedad/es",
          value: "Pluma",
        },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
      {coffees.map((coffee) => (
        <GalleryItem
          image={coffee.image}
          name={coffee.name}
          country={coffee.country}
          notes={coffee.notes}
          properties={coffee.properties}
        />
      ))}
    </div>
  );
}

function GalleryItem({ image, name, country, notes, properties }) {
  return (
    <a href="https://nextjs.org/docs">
      <div className="p-6 shadow-lg hover:shadow-2xl leading-none rounded-lg">
        <div className="w-full h-96 mb-6 bg-gray-200 overflow-hidden rounded-lg">
          <img src={image} alt={name} layout="fill" />
        </div>
        <div>
          <div className="mb-2.5">
            <p className="font-semibold">{country}</p>
          </div>
          <div className="mb-2.5">
            <h3 className="text-4xl font-bold text-coffee">{name}</h3>
          </div>
          <div className="mb-8">
            <div className="flex space-x-2 -mx-2">
              {notes.map((note) => (
                <div className="rounded-lg bg-secondary bg-opacity-10 px-2">
                  <p className="text-sm font-medium text-secondary">{note}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {properties.map((property) => (
              <div>
                <p className="text-sm">
                  <span className="text-gray-500">{property.label}</span>{" "}
                  {property.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}
