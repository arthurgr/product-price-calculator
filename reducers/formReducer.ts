import { FormActions, FormItemsInterface } from "../interfaces/interfaces";

export default function formReducer(
  state: FormItemsInterface,
  action: FormActions
) {
  switch (action.type) {
    case "INGREDIENT-1":
      return {
        ...state,
        ingredient1: action.ingredient1,
      };
    case "INGREDIENT-2":
      return {
        ...state,
        ingredient2: action.ingredient2,
      };
    case "TAX":
      return {
        ...state,
        tax: action.tax,
      };
    default:
      throw new Error();
  }
}
