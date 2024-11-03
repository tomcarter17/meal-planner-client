import { type Meta, type StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-remix-react-router";

import { RecipeCard } from "./RecipeCard";

const meta = {
  title: "Components/RecipeCard",
  component: RecipeCard,
  decorators: [withRouter],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof RecipeCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    recipe: {
      createdAt: "2011-10-05T14:48:00.000Z",
      id: 1,
      tags: [{ id: 1, name: "Example tag" }],
      title: "Test title",
    },
  },
};
