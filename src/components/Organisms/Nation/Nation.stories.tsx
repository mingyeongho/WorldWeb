import type { Meta, StoryObj } from "@storybook/react";

import Nation from "./Nation";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Nation> = {
  title: "Organisms/Nation",
  component: Nation,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Nation>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    nation: {
      code: "KR",
      name: "South Korea",
      native: "대한민국",
      phone: "82",
      continent: {
        code: "AS",
        name: "Asia",
      },
      capital: "Seoul",
      currency: "KRW",
      languages: [
        {
          code: "ko",
          name: "Korean",
          native: "한국어",
          rtl: false,
        },
      ],
      emoji: "🇰🇷",
      states: [],
    },
  },
};
