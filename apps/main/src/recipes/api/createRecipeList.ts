import type { CreateQueryResult } from "@tanstack/solid-query";
import { createQuery } from "@tanstack/solid-query";
import type { AxiosError } from "axios";

import type { Recipe } from "../../recipes/types";
import type { DjangoListResponse } from "../../utils/api";
import { createRequest, responseWrapper } from "../../utils/api";

export const createRecipeList = (): CreateQueryResult<
  DjangoListResponse<Recipe>,
  AxiosError
> =>
  createQuery(
    () => ["recipe-list"],
    () =>
      responseWrapper(
        createRequest({
          method: "get",
          url: "/recipes/",
        })
      )
  );
