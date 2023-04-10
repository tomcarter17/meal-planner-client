import type { CreateQueryResult } from "@tanstack/solid-query";
import { createQuery } from "@tanstack/solid-query";
import type { AxiosError } from "axios";
import { createRequest, responseWrapper } from "utils";

import type { RecipeDetail } from "../../recipes/types";

const queryFn = (recipeId: string) =>
  responseWrapper(
    createRequest({
      method: "get",
      url: `/recipes/${recipeId}/`,
    })
  );

export const createRecipe = (
  recipeId: string
): CreateQueryResult<RecipeDetail, AxiosError> =>
  createQuery(
    () => ["recipe", { recipeId }],
    () => queryFn(recipeId)
  );
