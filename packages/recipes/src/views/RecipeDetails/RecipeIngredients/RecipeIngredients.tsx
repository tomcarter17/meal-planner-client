import Typography from "@suid/material/Typography";
import type { JSX } from "solid-js";

import { UNIT_LABELS } from "../../../constants";
import type { Ingredient } from "../../../types";

interface RecipeIngredientsProps {
  ingredients: Ingredient[];
}

const RecipeIngredients = (props: RecipeIngredientsProps): JSX.Element => (
  <>
    <Typography variant="h5">Ingredients</Typography>
    {props.ingredients.map((ingredient) => {
      // eslint-disable-next-line security/detect-object-injection
      const unitString = UNIT_LABELS[ingredient.unit] ?? "";

      return (
        <Typography component="div">{`${ingredient.amount}${unitString} ${ingredient.item}`}</Typography>
      );
    })}
  </>
);

export default RecipeIngredients;
