import { useMemo } from "react";
import { Column } from "react-table";
import { Ingredient } from "./interfaces/Ingredient";
import Table from "../Table/Table";

export default function IngredientList() {
  const columns = useMemo<Column<Ingredient>[]>(
    () => [
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
        measurementType: "oz",
        purchaseSize: 20,
        averageCost: 50,
        costPerOunce: 50,
      },
      {
        id: 2,
        measurementType: "oz",
        purchaseSize: 20,
        averageCost: 50,
        costPerOunce: 50,
      },
      {
        id: 3,
        measurementType: "oz",
        purchaseSize: 20,
        averageCost: 50,
        costPerOunce: 50,
      },
    ],
    []
  );
  return <Table columns={columns} data={data} />;
}
