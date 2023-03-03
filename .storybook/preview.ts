import { MockedProvider } from "@apollo/client/testing";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "light",
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    apolloClient: {
      MockedProvider,
      // any props you want to pass to MockedProvider on every story
    },
  },
};

export default preview;
