import { Ingredient } from "../interfaces/Ingredient";
import { IngredientActions } from "../interfaces/ingredientActions";

export default function ingredientReducer(
  state: Ingredient | {},
  action: IngredientActions
) {
  switch (action.type) {
    case "CREATE_INGREDIENT":
      return { ...state };
    default:
      throw new Error();
  }
}
