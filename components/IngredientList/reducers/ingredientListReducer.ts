import { IngredientListActions } from "../interfaces/IngredientListActions";
import { Ingredient } from "../interfaces/Ingredient";

export default function ingredientListReducer(
  state: Array<Ingredient>,
  action: IngredientListActions
) {
  switch (action.type) {
    case "ADD_INGREDIENT":
      return {
        ...state,
      };
    default:
      throw new Error();
  }
}
