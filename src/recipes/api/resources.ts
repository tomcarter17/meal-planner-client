import type { Recipe, RecipeDetail } from "recipes/types";
import type { DjangoListResponse } from "utils/api";
import { createRequest, responseWrapper } from "utils/api";

export const getRecipe = (recipeId: string): Promise<RecipeDetail> =>
  responseWrapper(
    createRequest({
      method: "get",
      url: `/recipes/${recipeId}/`,
    })
  );

export const getRecipeList = (): Promise<DjangoListResponse<Recipe>> =>
  responseWrapper(
    createRequest({
      method: "get",
      url: "/recipes/",
    })
  );
