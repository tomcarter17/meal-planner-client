import { type Recipe } from "recipes/types";
import { type DjangoListResponse } from "utils/api";

export const mockRecipesResponse: DjangoListResponse<Recipe> = {
  count: 5,
  next: null,
  previous: null,
  results: [
    {
      id: 1,
      createdAt: new Date(2024, 12, 1).toISOString(),
      tags: [],
      title: "Recipe 1",
    },
    {
      id: 2,
      createdAt: new Date(2024, 12, 1).toISOString(),
      tags: [],
      title: "Recipe 2",
    },
    {
      id: 3,
      createdAt: new Date(2024, 12, 1).toISOString(),
      tags: [],
      title: "Recipe 3",
    },
    {
      id: 4,
      createdAt: new Date(2024, 12, 1).toISOString(),
      tags: [],
      title: "Recipe 4",
    },
    {
      id: 5,
      createdAt: new Date(2024, 12, 1).toISOString(),
      tags: [],
      title: "Recipe 5",
    },
  ],
};
