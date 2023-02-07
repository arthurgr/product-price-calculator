export interface Ingredient {
  id?: number;
  ingredient: string;
  measurementType: "oz";
  purchaseSize: number;
  averageCost: number;
  costPerOunce: number;
}
