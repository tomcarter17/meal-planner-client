export interface Ingredient {
  id: number;
  name: string;
}

export interface Step {
  approximateDurationInMinutes: number;
  description: string;
  stepNumber: number;
}

export interface Recipe {
  createdAt: string;
  id: number;
  tags: Tag[];
  title: string;
}

export interface RecipeDetail extends Recipe {
  ingredients: Ingredient[];
  originalLink: string | null;
  steps: Step[];
  tags: Tag[];
}

interface Tag {
  id: number;
  name: string;
}
