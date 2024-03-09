import { Alert, Container, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import { Spinner } from "components/Spinner";
import { useRecipe } from "recipes/api";

import { RecipeIngredients } from "./RecipeIngredients";
import RecipeMethod from "./RecipeMethod";

export const RecipeDetail = () => {
  const params = useParams<{ recipeId: string }>();

  const {
    data: recipe,
    error,
    isError,
    isLoading,
  } = useRecipe(params.recipeId!);

  return (
    <>
      {isLoading && <Spinner sx={{ height: "100%", width: "100%" }} />}

      {isError && (
        <Alert severity="error">
          <Typography>Failed to load recipe: {error.message}</Typography>
        </Alert>
      )}

      {recipe && (
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
            {recipe.steps && recipe.steps.length > 0 && (
              <Grid item xs={12}>
                <RecipeMethod steps={recipe.steps} />
              </Grid>
            )}
          </Grid>
        </Container>
      )}
    </>
  );
};
