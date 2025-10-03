import { QueryClient, QueryCache, MutationCache } from "@tanstack/react-query";

function queryErrorHandler(error: unknown): void {
  // Here you can implement a global error handler,
  // for example, by showing a toast notification.
  const title = error instanceof Error ? error.message : "Something went wrong";
  console.error(title);
  // toast.error(title)
}

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: queryErrorHandler
  }),
  mutationCache: new MutationCache({
    onError: queryErrorHandler
  }),
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes: data is considered fresh for 5 minutes
      gcTime: 1000 * 60 * 30, // 30 minutes: inactive data is garbage collected after 30 minutes
      refetchOnWindowFocus: false, // Do not refetch on window focus
      retry: 1 // Retry failed requests once
    }
  }
});

export default queryClient;
