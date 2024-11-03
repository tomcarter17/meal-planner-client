import { type Meta, type StoryObj } from "@storybook/react";
import { http, HttpResponse } from "msw";
import { withRouter } from "storybook-addon-remix-react-router";

import { withQueryClient } from "utils/test/decorators";
import { mockRecipesResponse } from "utils/test/mocks/recipe";

import { RecipeList } from "./RecipeList";

const meta = {
  title: "Components/RecipeList",
  component: RecipeList,
  decorators: [withQueryClient, withRouter],
  parameters: {
    layout: "centered",
    msw: {
      handlers: [
        http.get("http://localhost:3000/recipes/", () =>
          HttpResponse.json(mockRecipesResponse),
        ),
      ],
    },
  },
} satisfies Meta<typeof RecipeList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
