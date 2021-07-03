import Prismic from "@prismicio/client";

import createClient from "./createClient";

// fetchCoffees is a function that fetches all the coffees from the Prismic API
export default async function fetchCoffees({ page = 1, pageSize = 5 } = {}) {
  const client = createClient();

  const query = await client.query(
    Prismic.Predicates.at("document.type", "coffees"),
    { orderings: "[document.first_publication_date desc]", page, pageSize }
  );

  return query.results.map(createCoffeeFromPrismicResponse);
}

function createCoffeeFromPrismicResponse({ data, id }) {
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
    country: data.country,
    highligh: Boolean(data.highligh),
    href: data.href.url,
    name: data.name[0].text,
    notes: data.notes.map(({ note }) => note),
    properties: data.properties.map((property) => ({
      label: property.label,
      value: property.value,
    })),
  };
}
