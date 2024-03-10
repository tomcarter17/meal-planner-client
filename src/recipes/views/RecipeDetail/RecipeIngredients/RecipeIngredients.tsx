import { Typography } from "@mui/material";

import type { Ingredient } from "recipes/types";

interface RecipeIngredientsProps {
  ingredients: Ingredient[];
}

export const RecipeIngredients = ({ ingredients }: RecipeIngredientsProps) => (
  <>
    <Typography variant="h5">Ingredients</Typography>
    {ingredients.map((ingredient) => (
      <Typography key={ingredient.id} component="div">
        {ingredient.name}
      </Typography>
    ))}
  </>
);
