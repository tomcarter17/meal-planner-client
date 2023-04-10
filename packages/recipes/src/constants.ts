export const UNITS = {
  GRAM: "G",
  KILOGRAM: "KG",
  MILLILITRE: "ML",
  LITRE: "L",
  TABLESPOON: "TBSP",
  TEASPOON: "TSP",
} as const;

export const UNIT_LABELS = {
  [UNITS.GRAM]: "g",
  [UNITS.KILOGRAM]: "kg",
  [UNITS.MILLILITRE]: "ml",
  [UNITS.LITRE]: "l",
  [UNITS.TABLESPOON]: "tbsp",
  [UNITS.TEASPOON]: "tsp",
} as const;
