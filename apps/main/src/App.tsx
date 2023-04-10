import { Route, Router, Routes } from "@solidjs/router";
import { Spinner } from "components";
import { lazy, Suspense } from "solid-js";
import { ProviderWrapper } from "utils";

const RecipeDetail = lazy(() => import("./recipes/views/RecipeDetail"));
const RecipeList = lazy(() => import("./recipes/views/RecipeList"));

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