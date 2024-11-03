import { type UseQueryResult } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { type AxiosError } from "axios";

import { type Recipe } from "recipes/types";
import { type DjangoListResponse } from "utils/api";
import { createRequest, responseWrapper } from "utils/api";

export const useRecipeList = (): UseQueryResult<
  DjangoListResponse<Recipe>,
  AxiosError
> =>
  useQuery({
    queryKey: ["recipe", "list"],
    queryFn: () =>
      responseWrapper(
        createRequest({
          method: "get",
          url: "/recipes/",
        }),
      ),
  });
