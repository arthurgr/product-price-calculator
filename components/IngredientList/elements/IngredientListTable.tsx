import Table from "../../Table/Table";
import Thead from "../../Table/elements/Thead";
import Th from "../../Table/elements/Th";
import Tr from "../../Table/elements/Tr";
import Td from "../../Table/elements/Td";
import Tbody from "../../Table/elements/Tbody";
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
