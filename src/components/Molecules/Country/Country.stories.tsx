import type { Meta, StoryObj } from "@storybook/react";

import Country from "./Country";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Country> = {
  title: "Molecules/Country",
  component: Country,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Country>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    name: "Korea",
    code: "KR",
    continent: { code: "AS", name: "Asia" },
    emoji: "🇰🇷",
    languages: [
      {
        code: "Korean",
        name: "Korean",
      },
    ],
  },
};
