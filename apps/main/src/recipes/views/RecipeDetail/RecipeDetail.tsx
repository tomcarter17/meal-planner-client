import { useParams } from "@solidjs/router";
import Alert from "@suid/material/Alert";
import { Box } from "@suid/material/Box";
import Container from "@suid/material/Container";
import Grid from "@suid/material/Grid";
import Typography from "@suid/material/Typography";
import { Spinner } from "components";
import { Show } from "solid-js";

import RecipeIngredients from "./RecipeIngredients";
import RecipeMethod from "./RecipeMethod";
import { createRecipe } from "../../api/";

const RecipeDetail = () => {
  const params = useParams<{ recipeId: string }>();

  const recipe = createRecipe(params.recipeId);

  return (
    <>
      <Show when={recipe.isLoading}>
        <Spinner sx={{ height: "100%", width: "100%" }} />
      </Show>
      <Show when={recipe.error}>
        <Box p={3}>
          <Alert severity="error">
            <Typography>
              Failed to load recipe: {recipe.error?.message}
            </Typography>
          </Alert>
        </Box>
      </Show>
      <Show when={recipe.data} keyed>
        {(recipe) => (
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h3">{recipe.title}</Typography>
              </Grid>
              {recipe.ingredients?.length && (
                <Grid item xs={12}>
                  <RecipeIngredients ingredients={recipe.ingredients ?? []} />
                </Grid>
              )}
              {recipe.method[0]?.steps && recipe.method[0].steps.length > 0 && (
                <Grid item xs={12}>
                  <RecipeMethod method={recipe.method[0]} />
                </Grid>
              )}
            </Grid>
          </Container>
        )}
      </Show>
    </>
  );
};

export default RecipeDetail;
