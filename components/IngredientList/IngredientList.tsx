"use client";

import IngredientListTable from "./elements/IngredientListTable";
import AddIngredientForm from "./elements/AddIngredientForm";
import { IngredientListProvider } from "./context/IngredientListContext";
import { IngredientProvider } from "./context/IngredientContext";
import { INGREDIENT_LIST_CONST } from "@/localization/Consts";

export default function IngredientList() {
  return (
    <section>
      <h2 className="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {INGREDIENT_LIST_CONST.INGREDIENT_LIST} :
      </h2>
      <IngredientListProvider>
        <IngredientProvider>
          <AddIngredientForm />
          <IngredientListTable />
        </IngredientProvider>
      </IngredientListProvider>
    </section>
  );
}
