import Card from "@suid/material/Card";
import CardContent from "@suid/material/CardContent";
import CardHeader from "@suid/material/CardHeader";
import Chip from "@suid/material/Chip";
import { format, parseISO } from "date-fns";
import { For } from "solid-js";

import type { Recipe } from "recipes/types";

export interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = (props: RecipeCardProps) => (
  <Card raised>
    <CardHeader
      subheader={`Created on ${format(
        parseISO(props.recipe.createdAt),
        "PPPP"
      )}`}
      title={props.recipe.title}
    />
    <CardContent>
      <For each={props.recipe.tags}>{(tag) => <Chip label={tag} />}</For>
    </CardContent>
  </Card>
);

export default RecipeCard;
