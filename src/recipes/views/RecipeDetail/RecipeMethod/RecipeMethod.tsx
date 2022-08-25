import Typography from "@suid/material/Typography";

import type { Method } from "recipes/types";

interface RecipeMethodProps {
  method: [Method]; // TODO: API should not return this in an array
}

const RecipeMethod = (props: RecipeMethodProps) => (
  <>
    <Typography variant="h5">Method</Typography>
    {props.method[0]?.steps &&
      props.method[0].steps.map((step) => {
        const { description, stepNumber } = step;

        return <Typography>{`${stepNumber}. ${description}`}</Typography>;
      })}
  </>
);

export default RecipeMethod;
