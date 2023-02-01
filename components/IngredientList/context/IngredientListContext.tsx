import React, { createContext, useContext, useReducer } from "react";
import ingredientListReducer from "../reducers/ingredientListReducer";
import { Ingredient } from "../interfaces/Ingredient";
import { IngredientListActions } from "../interfaces/IngredientListActions";

export interface IngredientListProps {
  ingredientListState: Ingredient[];
  ingredientListDispatch: React.Dispatch<IngredientListActions>;
}

const IngredientListContext = createContext<IngredientListProps>({
  ingredientListState: [],
  ingredientListDispatch: () => {},
});

export const IngredientListProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [ingredientListState, ingredientListDispatch] = useReducer(
    ingredientListReducer,
    []
  );

  return (
    <IngredientListContext.Provider
      value={{ ingredientListState, ingredientListDispatch }}
    >
      {children}
    </IngredientListContext.Provider>
  );
};

export default function useIngredientListContext() {
  return useContext(IngredientListContext);
}
