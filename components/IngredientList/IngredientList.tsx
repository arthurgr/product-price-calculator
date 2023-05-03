"use client";

import IngredientListTable from "./elements/IngredientListTable";
import { IngredientListProvider } from "./context/IngredientListContext";
import { INGREDIENT_LIST_CONST } from "@/localization/Consts";

// @TODO figure out type declaration from any
export default function IngredientList({ ingredients }: { ingredients: any }) {
  return (
    <section>
      <h2 className="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {INGREDIENT_LIST_CONST.INGREDIENT_LIST} :
      </h2>
      <IngredientListProvider ingredients={ingredients}>
        <IngredientListTable />
      </IngredientListProvider>
    </section>
  );
}
