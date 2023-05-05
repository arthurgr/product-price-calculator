import React, { createContext, useContext, useReducer } from "react";
import { Ingredient } from "../interfaces/Ingredient";
import ingredientReducer from "../reducers/ingredientReducer";
import { IngredientActions } from "../interfaces/ingredientActions";

export interface IngredientProps {
  ingredientState: Ingredient;
  ingredientDispatch: React.Dispatch<IngredientActions>;
}

const IngredientContext = createContext<IngredientProps>({
  ingredientState: {
    id: 0,
    ingredient: "",
    measurementType: "oz",
    purchaseSize: "0",
    averageCost: "0",
    costPerOunce: 0,
  },
  ingredientDispatch: () => {},
});

export const IngredientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [ingredientState, ingredientDispatch] = useReducer<
    // @TODO Remove any declarations
    React.Reducer<any, any>
  >(ingredientReducer, {
    id: 0,
    ingredient: "",
    measurementType: "oz",
    purchaseSize: "0",
    averageCost: "0",
    costPerOunce: "0",
  });

  return (
    <IngredientContext.Provider value={{ ingredientState, ingredientDispatch }}>
      {children}
    </IngredientContext.Provider>
  );
};

export default function useIngredientContext() {
  return useContext(IngredientContext);
}
