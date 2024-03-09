import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
/* eslint-disable react-refresh/only-export-components */
const RecipeDetail = lazy(() => import("recipes/views/RecipeDetail"));
const RecipeList = lazy(() => import("recipes/views/RecipeList"));
/* eslint-enable */

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RecipeList />,
  },
  {
    path: "/recipes/:recipeId",
    element: <RecipeDetail />,
  },
]);
