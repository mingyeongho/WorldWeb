import type { Meta, StoryObj } from "@storybook/react";

import CountriesTab from "./CountriesTab";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof CountriesTab> = {
  title: "Organisms/CountriesTab",
  component: CountriesTab,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CountriesTab>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {},
};
