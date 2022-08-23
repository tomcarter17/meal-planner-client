import Typography from "@suid/material/Typography";
import type { JSX } from "solid-js";

import { UNIT_LABELS } from "recipes/constants";
import type { Ingredient } from "recipes/types";

interface RecipeIngredientsProps {
  ingredients: Ingredient[];
}

const RecipeIngredients = (props: RecipeIngredientsProps): JSX.Element => (
  <>
    <Typography variant="h5">Ingredients</Typography>
    {props.ingredients.map((ingredient) => {
      const { amount, item, unit } = ingredient;

      // eslint-disable-next-line security/detect-object-injection
      const unitString = UNIT_LABELS[unit] ?? "";

      return (
        <Typography component="div">{`${amount}${unitString} ${item}`}</Typography>
      );
    })}
  </>
);

export default RecipeIngredients;
