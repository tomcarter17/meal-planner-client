import { type Decorator } from "@storybook/react";
import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "./queryClient";

export const withQueryClient: Decorator = (Story) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Story />
    </QueryClientProvider>
  );
};
