import Alert from "@suid/material/Alert";
import { Box } from "@suid/material/Box";
import Container from "@suid/material/Container";
import Typography from "@suid/material/Typography";
import type { JSX } from "solid-js";
import { createResource, For, Show } from "solid-js";

import { Spinner } from "components";
import { getRecipeList } from "recipes/api/resources";
import { RecipeCard } from "recipes/components";
import type { Recipe } from "recipes/types";
import type { DjangoListResponse } from "utils/api";

const RecipeList = (): JSX.Element => {
  const [data] = createResource<DjangoListResponse<Recipe>>(getRecipeList);

  return (
    <>
      <Show when={data.loading}>
        <Spinner sx={{ height: "100%", width: "100%" }} />
      </Show>
      <Show when={data.error}>
        <Box p={3}>
          <Alert severity="error">
            <Typography>
              Failed to load recipes: {data.error.message}
            </Typography>
          </Alert>
        </Box>
      </Show>
      <Show when={data()?.results}>
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
