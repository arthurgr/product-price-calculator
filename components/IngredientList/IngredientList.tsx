import { useMemo } from "react";
import { useTable } from "react-table";
import { Ingredient } from "./interfaces/Ingredient";

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => {
          return (
            <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th key={column.id} {...column.getHeaderProps()}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          );
        })}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr key={row.id} {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default function IngredientList() {
  const columns = useMemo(
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
