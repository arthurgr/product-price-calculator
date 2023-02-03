import Table from "@common/Table/Table";
import Thead from "@common/Table/elements/Thead";
import Th from "@common/Table/elements/Th";
import Tr from "@common/Table/elements/Tr";
import Td from "@common/Table/elements/Td";
import Tbody from "@common/Table/elements/Tbody";
import useIngredientListContext from "../context/IngredientListContext";
import { INGREDIENT_LIST_CONST } from "@localization/IngredientListConst";

export default function IngredientListTable() {
  const { ingredientListState } = useIngredientListContext();
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>{INGREDIENT_LIST_CONST.INGREDIENT}</Th>
          <Th>{INGREDIENT_LIST_CONST.MEASUREMENT_TYPE}</Th>
          <Th>{INGREDIENT_LIST_CONST.PURCHASE_SIZE}</Th>
          <Th>{INGREDIENT_LIST_CONST.AVERAGE_COST}</Th>
          <Th>{INGREDIENT_LIST_CONST.COST_PER_OUNCE}</Th>
          <Th>{INGREDIENT_LIST_CONST.DELETE}</Th>
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