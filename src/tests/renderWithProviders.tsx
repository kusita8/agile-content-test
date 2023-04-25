import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";

import { Layout } from "src/components/templates/Layout/Layout";
import { queryClient } from "src/utils/queryClient";

export const renderWithProviders = (children: React.ReactNode) => {
  return render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>{children}</Layout>
      </BrowserRouter>
    </QueryClientProvider>
  );
};
