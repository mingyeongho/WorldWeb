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
  args: {
    countries: [
      {
        code: "AD",
        name: "Andorra",
        emoji: "🇦🇩",
        continent: {
          code: "EU",
          name: "Europe",
        },
        languages: [
          {
            code: "ca",
            name: "Catalan",
          },
        ],
      },
      {
        code: "AE",
        name: "United Arab Emirates",
        emoji: "🇦🇪",
        continent: {
          code: "AS",
          name: "Asia",
        },
        languages: [
          {
            code: "ar",
            name: "Arabic",
          },
        ],
      },
    ],
  },
};
