import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

import { mockRecipesResponse } from "./mocks/recipe";

const handlers = [
  http.get("/recipes", () => {
    return HttpResponse.json(mockRecipesResponse);
  }),
];

export const mockServer = setupServer(...handlers);
