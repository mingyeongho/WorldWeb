import type { Meta, StoryObj } from "@storybook/react";

import Emoji from "./Emoji";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Emoji> = {
  title: "Atoms/Emoji",
  component: Emoji,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Emoji>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const MediumEmoji: Story = {
  args: {
    label: "😄",
  },
};

export const LargeEmoji: Story = {
  args: {
    label: "😄",
    size: "large",
  },
};

export const SmallEmoji: Story = {
  args: {
    label: "😄",
    size: "small",
  },
};
