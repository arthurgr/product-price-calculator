import React, { useState, createContext, useContext, useReducer } from "react";
import { Ingredient } from "../interfaces/Ingredient";
import ingredientReducer from "../reducers/ingredientReducer";
import { IngredientActions } from "../interfaces/ingredientActions";

export interface IngredientProps {
  ingredientState: Ingredient | {};
  ingredientDispatch: React.Dispatch<IngredientActions>;
}

const ingredientContext = createContext<IngredientProps>({
  ingredientState: {},
  ingredientDispatch: () => {},
});

export const IngredientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [dark, setDark] = useState(false);

  const [ingredientState, ingredientDispatch] = useReducer(
    ingredientReducer,
    {}
  );

  return (
    <ingredientContext.Provider value={{ ingredientState, ingredientDispatch }}>
      {children}
    </ingredientContext.Provider>
  );
};

export default function useIngredientContext() {
  return useContext(ingredientContext);
}
