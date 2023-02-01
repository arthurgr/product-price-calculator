import { useMemo, useReducer } from "react";
import { Column } from "react-table";
import { Ingredient } from "./interfaces/Ingredient";
import ingredientListReducer from "./reducers/ingredientListReducer";
import Table from "../Table/Table";
import AddIngredientForm from "./elements/AddIngredientForm";

export default function IngredientList() {
  const [ingredientListState, ingredientListDispatch] = useReducer(
    ingredientListReducer,
    []
  );

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

  const data = useMemo<Array<Ingredient>>(
    () => ingredientListState,
    [ingredientListState]
  );
  return (
    <>
      <AddIngredientForm />
      <Table columns={columns} data={data} />
    </>
  );
}
