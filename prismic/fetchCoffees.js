import Prismic from "@prismicio/client";

import createClient from "./createClient";

export default async function fetchCoffees() {
  const client = createClient();
  const query = await client.query(
    Prismic.Predicates.at("document.type", "coffees")
  );

  return query.results.map(({ data, id }) => {
    return {
      id,
      href: data.href.url,
      image: data.image,
      name: data.name[0].text,
      country: data.country,
      notes: data.notes.map(({ note }) => note),
      properties: data.properties.map((property) => ({
        label: property.label,
        value: property.value,
      })),
    };
  });
}
