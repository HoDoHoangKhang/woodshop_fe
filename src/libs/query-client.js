import {
  QueryClient,
  defaultShouldDehydrateQuery,
} from "@tanstack/react-query";

let browserQueryClient;

export function getQueryClient() {
  if (!browserQueryClient)
    browserQueryClient = new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 60 * 1000,
          refetchOnWindowFocus: false,
        },
        dehydrate: {
          // include pending queries in dehydration
          shouldDehydrateQuery: (query) =>
            defaultShouldDehydrateQuery(query) ||
            query.state.status === "pending",
        },
      },
    });
  return browserQueryClient;
}

