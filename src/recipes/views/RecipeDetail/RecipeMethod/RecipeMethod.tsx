import { Typography } from "@mui/material";
import { useMemo } from "react";

import type { Step } from "recipes/types";

interface RecipeMethodProps {
  steps: Step[];
}

export const RecipeMethod = ({ steps }: RecipeMethodProps) => {
  const sortedMethodSteps = useMemo(
    () => steps.sort((a, b) => (a.stepNumber > b.stepNumber ? 1 : -1)),
    [steps],
  );

  return (
    <>
      <Typography variant="h5">Method</Typography>
      {sortedMethodSteps.map((step) => (
        <Typography>{`${step.stepNumber}. ${step.description}`}</Typography>
      ))}
    </>
  );
};
