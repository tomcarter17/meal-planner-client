import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";

import { mockRecipesResponse } from "./mocks/recipe";

export const enableMocking = async () => {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  return worker.start();
};

const handlers = [
  http.get(`${import.meta.env.VITE_API_URL as string}/recipes/`, () => {
    return HttpResponse.json(mockRecipesResponse);
  }),
];

export const worker = setupWorker(...handlers);
