import { Ingredient } from "./Ingredient";

export type IngredientActions =
  | {
      type: "CREATE_INGREDIENT";
      ingredient: Ingredient;
    }
  | { type: "TAX"; tax: number };
