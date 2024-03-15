import { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const RecipeDetail = lazy(() => import("recipes/views/RecipeDetail"));
const RecipeList = lazy(() => import("recipes/views/RecipeList"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RecipeList />,
  },
  {
    path: "/recipes/:recipeId",
    element: <RecipeDetail />,
  },
]);

export const Router = () => <RouterProvider router={router} />;
