import { ThemeProvider } from "@suid/material";
import CssBaseline from "@suid/material/CssBaseline";
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import type { JSX } from "solid-js";

import { theme } from "./theme";

const queryClient = new QueryClient();

interface ProviderWrapperProps {
  children?: JSX.Element;
}

export const ProviderWrapper = (props: ProviderWrapperProps) => (
  <ThemeProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      {props.children}
    </QueryClientProvider>
  </ThemeProvider>
);
