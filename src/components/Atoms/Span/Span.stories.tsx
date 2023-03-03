import type { Meta, StoryObj } from "@storybook/react";

import Span from "./Span";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Span> = {
  title: "Atoms/Span",
  component: Span,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Span>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const MediumSpan: Story = {
  args: {
    label: "Span",
  },
};
