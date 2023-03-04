import type { Meta, StoryObj } from "@storybook/react";

import NationTemplate from "./NationTemplate";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof NationTemplate> = {
  title: "Templates/NationTemplate",
  component: NationTemplate,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NationTemplate>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {},
};
