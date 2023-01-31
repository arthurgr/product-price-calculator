import { useMemo } from "react";
import { Column } from "react-table";
import { Ingredient } from "./interfaces/Ingredient";
import Table from "../Table/Table";

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

  const data = useMemo<Array<Ingredient>>(
    () => [
      {
        id: 1,
        ingredient: "salt",
        measurementType: "oz",
        purchaseSize: 10,
        averageCost: 11,
        costPerOunce: 12,
      },
      {
        id: 2,
        ingredient: "sugar",
        measurementType: "oz",
        purchaseSize: 20,
        averageCost: 21,
        costPerOunce: 22,
      },
      {
        id: 3,
        ingredient: "pepper",
        measurementType: "oz",
        purchaseSize: 30,
        averageCost: 31,
        costPerOunce: 32,
      },
    ],
    []
  );
  return <Table columns={columns} data={data} />;
}
