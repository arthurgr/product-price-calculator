export type IngredientListActions =
  | {
      type: "ADD_INGREDIENT";
      ingredient1: number;
    }
  | { type: "TAX"; tax: number };
