"use client";

import IngredientListTable from "./elements/IngredientListTable";
import { IngredientListProvider } from "./context/IngredientListContext";
import { INGREDIENT_LIST_CONST } from "@/localization/Consts";
import AddIngredientForm from "./elements/AddIngredientForm";

// @TODO figure out type declaration from any
export default function IngredientListElements({
  ingredients,
}: {
  ingredients: any;
}) {
  return (
    <section>
      <IngredientListProvider ingredients={ingredients}>
        <h2 className="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {INGREDIENT_LIST_CONST.ADD_INGREDIENT} :
        </h2>
        <AddIngredientForm />
        <h2 className="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {INGREDIENT_LIST_CONST.INGREDIENT_LIST} :
        </h2>
        <IngredientListTable />
      </IngredientListProvider>
    </section>
  );
}
