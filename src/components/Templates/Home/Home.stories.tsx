import type { Meta, StoryObj } from "@storybook/react";

import Home from "./Home";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Home> = {
  title: "Templates/Home",
  component: Home,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Home>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {},
};
