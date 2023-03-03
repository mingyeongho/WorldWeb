import type { Meta, StoryObj } from "@storybook/react";

import Countries from "./Countries";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Countries> = {
  title: "Organisms/Countries",
  component: Countries,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Countries>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {},
};
