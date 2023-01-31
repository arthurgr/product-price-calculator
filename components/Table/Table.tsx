import { useTable, Column } from "react-table";
import { Ingredient } from "../IngredientList/interfaces/Ingredient";

export default function Table({
  columns,
  data,
}: {
  columns: readonly Column<Ingredient>[];
  data: Array<Ingredient>;
}) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => {
          return (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  key={column.id}
                  scope="col"
                  className="px-6 py-3"
                >
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
            <tr {...row.getRowProps()} key={row.id}>
              {/* {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    key={cell.row.id}
                    className="px-6 py-4"
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })} */}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
