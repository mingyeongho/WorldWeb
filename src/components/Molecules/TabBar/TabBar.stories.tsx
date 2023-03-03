import allCountries from "../../../gql/allCountries";
import type { Meta, StoryObj } from "@storybook/react";

import TabBar from "./TabBar";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof TabBar> = {
  title: "Molecules/TabBar",
  component: TabBar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TabBar>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {},
  parameters: {
    apolloClient: {
      mocks: [
        {
          request: {
            query: allCountries,
          },
          result: {
            data: {},
          },
        },
      ],
    },
  },
};
