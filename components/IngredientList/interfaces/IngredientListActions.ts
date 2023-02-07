import { Ingredient } from "./Ingredient";

export type IngredientListActions =
  | {
      type: "ADD_INGREDIENT";
      ingredient: Ingredient;
    }
  | { type: "REMOVE_INGREDIENT"; ingredientIndex: string };
