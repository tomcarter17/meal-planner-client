import Typography from "@suid/material/Typography";
import { For } from "solid-js";

import type { Method } from "recipes/types";

interface RecipeMethodProps {
  method: Method;
}

const RecipeMethod = (props: RecipeMethodProps) => (
  <>
    <Typography variant="h5">Method</Typography>
    <For each={props.method.steps}>
      {(step) => (
        <Typography>{`${step.stepNumber}. ${step.description}`}</Typography>
      )}
    </For>
  </>
);

export default RecipeMethod;
