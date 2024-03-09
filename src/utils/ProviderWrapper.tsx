import { CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";

import theme from "./theme";

const queryClient = new QueryClient();

interface ProviderWrapperProps {
  children?: ReactNode;
}

export const ProviderWrapper = ({ children }: ProviderWrapperProps) => (
  <ThemeProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      {children}
    </QueryClientProvider>
  </ThemeProvider>
);
