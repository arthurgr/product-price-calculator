import IngredientListTable from "./elements/IngredientListTable";
import AddIngredientForm from "./elements/AddIngredientForm";
import { IngredientListProvider } from "./context/IngredientListContext";
import { IngredientProvider } from "./context/IngredientContext";

export default function IngredientList() {
  return (
    <IngredientListProvider>
      <IngredientProvider>
        <AddIngredientForm />
        <IngredientListTable />
      </IngredientProvider>
    </IngredientListProvider>
  );
}
