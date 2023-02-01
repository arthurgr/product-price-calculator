import { Ingredient } from "../interfaces/Ingredient";
import { IngredientActions } from "../interfaces/ingredientActions";

export default function ingredientReducer(
  state: Ingredient,
  action: IngredientActions
) {
  switch (action.type) {
    case "INGREDIENT":
      return { ...state, ingredient: action.ingredient };
    case "PURCHASE_SIZE":
      return { ...state, purchaseSize: action.purchaseSize };
    case "AVERAGE_COST":
      return { ...state, averageCost: action.averageCost };
    default:
      throw new Error();
  }
}
