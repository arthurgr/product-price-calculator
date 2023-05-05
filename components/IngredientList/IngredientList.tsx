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
        <div className="mb-6">
          <h2 className="mb-3 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            {INGREDIENT_LIST_CONST.ADD_INGREDIENT} :
          </h2>
          <AddIngredientForm />
        </div>

        <IngredientListTable />
      </IngredientListProvider>
    </section>
  );
}
