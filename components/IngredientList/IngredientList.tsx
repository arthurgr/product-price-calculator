import IngredientListTable from "./elements/IngredientListTable";
import AddIngredientForm from "./elements/AddIngredientForm";
import { IngredientListProvider } from "./context/IngredientListContext";
import { IngredientProvider } from "./context/IngredientContext";
import { INGREDIENT_LIST_CONST } from "@/localization/Consts";

export default function IngredientList() {
  return (
    <section className="p-6 mb-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h2 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {INGREDIENT_LIST_CONST.INGREDIENT_LIST} :
      </h2>
      <IngredientListProvider>
        <IngredientProvider>
          <AddIngredientForm />
          <hr className="divider lg:divider-horizontal mb-4" />
          <IngredientListTable />
        </IngredientProvider>
      </IngredientListProvider>
    </section>
  );
}
