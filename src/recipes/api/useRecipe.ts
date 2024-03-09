import type { UseQueryResult } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";

import type { RecipeDetail } from "recipes/types";
import { createRequest, responseWrapper } from "utils/api";

const query = (recipeId: string) =>
  responseWrapper(
    createRequest({
      method: "get",
      url: `/recipes/${recipeId}/`,
    }),
  );

export const useRecipe = (
  recipeId: string,
): UseQueryResult<RecipeDetail, AxiosError> =>
  useQuery({
    queryKey: ["recipe", { recipeId }],
    queryFn: () => query(recipeId),
  });
