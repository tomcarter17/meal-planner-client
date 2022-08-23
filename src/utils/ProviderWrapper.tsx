import { ThemeProvider } from "@suid/material";
import CssBaseline from "@suid/material/CssBaseline";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { JSX } from "solid-js";

import theme from "./theme";

// Waiting on @tanstack/solid-query to be a thing
// const queryClient = new QueryClient();

interface ProviderWrapperProps {
  children?: JSX.Element;
}

export const ProviderWrapper = (props: ProviderWrapperProps) => (
  <ThemeProvider theme={theme}>
    {/* <QueryClientProvider client={queryClient}> */}
    <CssBaseline />
    {props.children}
    {/* </QueryClientProvider> */}
  </ThemeProvider>
);
