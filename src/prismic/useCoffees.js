import { useEffect, useMemo } from "react";
import { useSWRInfinite } from "swr";

import fetchCoffees from "./fetchCoffees";

const INITIAL_PAGE = 1;
const PAGE_SIZE = 5;

// useCoffees is a hook that will fetch the coffees from the Prismic API
export default function useCoffees() {
  const {
    data: pages,
    error,
    size,
    setSize,
  } = useSWRInfinite(getKey, (_, page, pageSize) => {
    return fetchCoffees({ page, pageSize });
  });

  // recursive increment page size
  useEffect(() => {
    setSize((prevSize) => size + 1);
  }, [pages, setSize]);

  const data = useMemo(() => pages?.flat(), [pages]);
  return [data, error];
}

function getKey(pageIndex, previousPageData) {
  if (previousPageData != null && !previousPageData.length) return null;
  return ["coffeees", INITIAL_PAGE + pageIndex, PAGE_SIZE];
}
