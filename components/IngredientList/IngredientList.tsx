import { useMemo, useReducer } from "react";
import { Column } from "react-table";
import { Ingredient } from "./interfaces/Ingredient";
import ingredientListReducer from "./reducers/ingredientListReducer";
import Table from "../Table/Table";

export default function IngredientList() {
  const [ingredientListState, ingredientListDispatch] = useReducer(
    ingredientListReducer,
    [
      {
        id: 0,
        ingredient: "",
        measurementType: "oz",
        purchaseSize: 0,
        averageCost: 0,
        costPerOunce: 0,
      },
    ]
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
      <button
        onClick={() => {
          ingredientListDispatch({
            type: "ADD_INGREDIENT",
            ingredient: {
              id: Math.random(),
              ingredient: "pepper",
              measurementType: "oz",
              purchaseSize: 30,
              averageCost: 31,
              costPerOunce: 32,
            },
          });
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Ingredient
      </button>
      <Table columns={columns} data={data} />
    </>
  );
}
