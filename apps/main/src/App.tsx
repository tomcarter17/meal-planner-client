import { Route, Router, Routes } from "@solidjs/router";
import { lazy, Suspense } from "solid-js";

import { Spinner } from "components";
import { ProviderWrapper } from "utils/ProviderWrapper";

const RecipeDetail = lazy(() => import("recipes/views/RecipeDetail"));
const RecipeList = lazy(() => import("recipes/views/RecipeList"));

const App = () => {
  return (
    <ProviderWrapper>
      <Router>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route element={<RecipeList />} path="/" />
            <Route element={<RecipeDetail />} path="/recipes/:recipeId" />
          </Routes>
        </Suspense>
      </Router>
    </ProviderWrapper>
  );
};

export default App;
