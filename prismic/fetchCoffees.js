import Prismic from "@prismicio/client";

import createClient from "./createClient";

export default async function fetchCoffees() {
  const client = createClient();
  const query = await client.query(
    Prismic.Predicates.at("document.type", "coffees"),
    { orderings : '[document.first_publication_date]' }
  );

  return query.results.map(({ data, id }) => {
    const image = data.image.url
      ? {
          url: data.image.url,
          height: data.image.dimensions.height,
          width: data.image.dimensions.width,
        }
      : null;

    return {
      id,
      image,
      href: data.href.url,
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
