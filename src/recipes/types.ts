import type { UNITS } from "./constants";

export interface Ingredient {
  amount: number;
  item: string;
  unit: Unit;
}

export interface Method {
  steps?: MethodStep[];
}

interface MethodStep {
  approximateDurationInMinutes: number;
  description: string;
  stepNumber: number;
}

export interface Recipe {
  createdAt: string;
  id: number;
  tags: string[];
  title: string;
}

export interface RecipeDetail extends Recipe {
  ingredients: Ingredient[];
  method: [Method]; // TODO: API should not return this in an array
  originalLink: string | null;
}

export type Unit = (typeof UNITS)[keyof typeof UNITS];
