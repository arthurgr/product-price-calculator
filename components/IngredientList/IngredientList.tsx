import { useMemo } from "react";
import { Column } from "react-table";
import { Ingredient } from "./interfaces/Ingredient";
import Table from "../Table/Table";
import AddIngredientForm from "./elements/AddIngredientForm";
import { IngredientListProvider } from "./context/IngredientListContext";

export default function IngredientList() {
  const columns = useMemo<Column<Ingredient>[]>(
    () => [
      {
        Header: "Ingredient",
        accessor: "ingredient",
      },
      {
        Header: "Measurement Type",
        accessor: "measurementType",
      },
      {
        Header: "Purchase Size",
        accessor: "purchaseSize",
      },
      {
        Header: "Average Cost",
        accessor: "averageCost",
      },
      {
        Header: "Cost Per Ounce",
        accessor: "costPerOunce",
      },
    ],
    []
  );

  return (
    <IngredientListProvider>
      <AddIngredientForm />
      <Table columns={columns} data={[]} />
    </IngredientListProvider>
  );
}
