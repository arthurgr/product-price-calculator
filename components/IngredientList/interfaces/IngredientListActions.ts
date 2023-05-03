import { Ingredient } from "./Ingredient";

export type IngredientListActions =
  | {
      type: "ADD_INGREDIENT";
      ingredient: Ingredient;
    }
  | {
      type: "UPDATE_INGREDIENT_LIST";
      ingredientList: Array<Ingredient>;
    }
  | { type: "REMOVE_INGREDIENT"; ingredientIndex: string };
