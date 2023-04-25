import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";

import { Layout } from "./components/templates/Layout/Layout";
import { Routes } from "./routes/Routes";
import { queryClient } from "./utils/queryClient";

export const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Routes />
        </Layout>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
