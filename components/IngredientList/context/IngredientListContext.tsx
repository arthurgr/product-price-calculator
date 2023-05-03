"use client";

import React, { createContext, useContext, useEffect, useReducer } from "react";
import ingredientListReducer from "../reducers/ingredientListReducer";
import { Ingredient } from "../interfaces/Ingredient";
import { IngredientListActions } from "../interfaces/IngredientListActions";

export interface IngredientListProps {
  ingredientList: Ingredient[];
  ingredientListDispatch: React.Dispatch<IngredientListActions>;
}

const IngredientListContext = createContext<IngredientListProps>({
  ingredientList: [],
  ingredientListDispatch: () => {},
});

export const IngredientListProvider = ({
  ingredients,
  children,
}: {
  ingredients: Array<Ingredient>;
  children: React.ReactNode;
}) => {
  const [ingredientList, ingredientListDispatch] = useReducer(
    ingredientListReducer,
    []
  );

  useEffect(() => {
    ingredientListDispatch({
      type: "UPDATE_INGREDIENT_LIST",
      ingredientList: [...ingredients],
    });
  }, [ingredients]);

  return (
    <IngredientListContext.Provider
      value={{ ingredientList, ingredientListDispatch }}
    >
      {children}
    </IngredientListContext.Provider>
  );
};

export default function useIngredientListContext() {
  return useContext(IngredientListContext);
}
