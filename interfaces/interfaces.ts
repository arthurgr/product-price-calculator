export type FormActions =
  | {
      type: "INGREDIENT-1";
      ingredient1: number;
    }
  | {
      type: "INGREDIENT-2";
      ingredient2: number;
    }
  | { type: "TAX"; tax: number };

export interface FormItemsInterface {
  ingredient1: number;
  ingredient2: number;
  tax: number;
}
