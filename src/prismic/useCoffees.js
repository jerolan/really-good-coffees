import useSWR, { useSWRInfinite } from "swr";

import fetchCoffees from "./fetchCoffees";

const INITIAL_PAGE = 1;
const PAGE_SIZE = 5;

// useCoffees is a hook that will fetch the coffees from the Prismic API
export default function useCoffees() {
  const { data, error } = useSWR(
    ["coffeees", INITIAL_PAGE, PAGE_SIZE],
    (_, pageSize, page) => {
      return fetchCoffees({ page, pageSize });
    }
  );

  return [data, error];
}
