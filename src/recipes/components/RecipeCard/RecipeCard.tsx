import { Card, CardContent, CardHeader, Chip } from "@mui/material";
import { format, parseISO } from "date-fns";
import { useNavigate } from "react-router-dom";

import type { Recipe } from "recipes/types";

export interface RecipeCardProps {
  recipe: Recipe;
}

export const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const navigate = useNavigate();

  const onClick = () => navigate(`/recipes/${recipe.id}`);

  return (
    <Card onClick={onClick} raised sx={{ cursor: "pointer" }}>
      <CardHeader
        subheader={`Created on ${format(parseISO(recipe.createdAt), "PPPP")}`}
        title={recipe.title}
      />
      <CardContent>
        {recipe.tags.map((tag) => (
          <Chip key={tag.id} label={tag.name} sx={{ m: 0.5 }} />
        ))}
      </CardContent>
    </Card>
  );
};
