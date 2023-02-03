import Table from "@common/Table/Table";
import Thead from "@common/Table/elements/Thead";
import Th from "@common/Table/elements/Th";
import Tr from "@common/Table/elements/Tr";
import Td from "@common/Table/elements/Td";
import Tbody from "@common/Table/elements/Tbody";
import useIngredientListContext from "../context/IngredientListContext";

export default function IngredientListTable() {
  const { ingredientListState } = useIngredientListContext();
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Ingredient</Th>
          <Th>Measurement Type</Th>
          <Th>Purchase Size</Th>
          <Th>Average Cost</Th>
          <Th>Cost Per Ounce</Th>
          <Th>Delete</Th>
        </Tr>
      </Thead>
      <Tbody>
        {ingredientListState.map((ingredient) => {
          return (
            <Tr key={ingredient.ingredient}>
              <Td>{ingredient.ingredient}</Td>
              <Td>{ingredient.measurementType}</Td>
              <Td>{ingredient.purchaseSize}</Td>
              <Td>{ingredient.averageCost}</Td>
              <Td>{ingredient.averageCost / ingredient.purchaseSize}</Td>
              <Td>
                <button>delete</button>
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
}
