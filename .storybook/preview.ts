import { type Preview } from "@storybook/react";
import { initialize, mswLoader } from "msw-storybook-addon";

initialize();

const preview = {
  loaders: [mswLoader],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
} satisfies Preview;

export default preview;
