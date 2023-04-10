import { Route, Router, Routes } from "@solidjs/router";
import { CssBaseline, ThemeProvider } from "@suid/material";
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import { Spinner } from "components";
import { RecipeDetails, RecipeList } from "recipes";
import { Suspense } from "solid-js";
import { theme } from "utils";

const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <Router>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route element={<RecipeList />} path="/" />
            <Route element={<RecipeDetails />} path="/recipes/:recipeId" />
          </Routes>
        </Suspense>
      </Router>
    </QueryClientProvider>
  </ThemeProvider>
  );
};

export default App;
