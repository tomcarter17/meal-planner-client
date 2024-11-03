import { Alert, Container, Grid2, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import { Spinner } from "components/Spinner";
import { useRecipe } from "recipes/api";

import { RecipeIngredients } from "./RecipeIngredients";
import RecipeMethod from "./RecipeMethod";

export const RecipeDetail = () => {
  const { recipeId } = useParams<{ recipeId: string }>();

  const {
    data: recipe,
    error,
    isError,
    isLoading,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  } = useRecipe(recipeId!);

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
          <Grid2 container spacing={3}>
            <Grid2 size={{ xs: 12 }}>
              <Typography variant="h3">{recipe.title}</Typography>
            </Grid2>
            {recipe.ingredients.length && (
              <Grid2 size={{ xs: 12 }}>
                <RecipeIngredients ingredients={recipe.ingredients} />
              </Grid2>
            )}
            {recipe.steps.length > 0 && (
              <Grid2 size={{ xs: 12 }}>
                <RecipeMethod steps={recipe.steps} />
              </Grid2>
            )}
          </Grid2>
        </Container>
      )}
    </>
  );
};
