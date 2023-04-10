import type { CreateQueryResult } from "@tanstack/solid-query";
import { createQuery } from "@tanstack/solid-query";
import type { AxiosError } from "axios";
import type { DjangoListResponse } from "utils";
import { createRequest, responseWrapper } from "utils";

import type { Recipe } from "../../recipes/types";

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
