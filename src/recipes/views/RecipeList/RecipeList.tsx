import { Alert, Box, Container, Typography } from "@mui/material";

import { Spinner } from "components/Spinner";
import { useRecipeList } from "recipes/api";
import { RecipeCard } from "recipes/components";

export const RecipeList = (): JSX.Element => {
  const { data: recipes, error, isError, isLoading } = useRecipeList();

  return (
    <>
      {isLoading && <Spinner sx={{ height: "100%", width: "100%" }} />}
      {isError && (
        <Box p={3}>
          <Alert severity="error">
            <Typography>Failed to load recipes: {error.message}</Typography>
          </Alert>
        </Box>
      )}

      {recipes?.results && (
        <Container sx={{ mt: 4 }}>
          {recipes.results.map((recipe) => (
            <RecipeCard recipe={recipe} />
          ))}
        </Container>
      )}
    </>
  );
};
