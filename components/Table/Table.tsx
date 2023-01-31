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
            // eslint-disable-next-line react/jsx-key
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                // eslint-disable-next-line react/jsx-key
                <th
                  {...column.getHeaderProps()}
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
            // eslint-disable-next-line react/jsx-key
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <td {...cell.getCellProps()} className="px-6 py-4">
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
