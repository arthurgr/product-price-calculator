import { Ingredient } from "./Ingredient";

export type IngredientActions =
  | {
      type: "INGREDIENT";
      ingredient: string;
    }
  | {
      type: "PURCHASE_SIZE";
      purchaseSize: number;
    }
  | {
      type: "AVERAGE_COST";
      averageCost: number;
    }
  | { type: "TAX"; tax: number };
