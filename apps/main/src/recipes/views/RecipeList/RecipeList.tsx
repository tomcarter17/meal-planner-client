import Alert from "@suid/material/Alert";
import { Box } from "@suid/material/Box";
import Container from "@suid/material/Container";
import Typography from "@suid/material/Typography";
import type { JSX } from "solid-js";
import { For, Show } from "solid-js";

import { Spinner } from "components";
import { createRecipeList } from "recipes/api";
import { RecipeCard } from "recipes/components";

const RecipeList = (): JSX.Element => {
  const recipes = createRecipeList();

  return (
    <>
      <Show when={recipes.isLoading}>
        <Spinner sx={{ height: "100%", width: "100%" }} />
      </Show>
      <Show when={recipes.error}>
        <Box p={3}>
          <Alert severity="error">
            <Typography>
              Failed to load recipes: {recipes.error?.message}
            </Typography>
          </Alert>
        </Box>
      </Show>
      <Show when={recipes.data?.results} keyed>
        {(recipes) => (
          <Container sx={{ mt: 4 }}>
            <For each={recipes}>
              {(recipe) => <RecipeCard recipe={recipe} />}
            </For>
          </Container>
        )}
      </Show>
    </>
  );
};

export default RecipeList;
