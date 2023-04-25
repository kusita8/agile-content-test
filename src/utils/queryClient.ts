import { QueryClient } from "@tanstack/react-query";

const staleMinutes = 15;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      staleTime: staleMinutes * 60000,
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
    },
  },
});
