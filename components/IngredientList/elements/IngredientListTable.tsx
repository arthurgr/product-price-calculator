import Table from "@/common/Table/Table";
import Thead from "@/common/Table/elements/Thead";
import Th from "@/common/Table/elements/Th";
import Tr from "@/common/Table/elements/Tr";
import Td from "@/common/Table/elements/Td";
import Tbody from "@/common/Table/elements/Tbody";
import useIngredientListContext from "../context/IngredientListContext";
import { INGREDIENT_LIST_CONST } from "@/localization/Consts";
import { currencyFormatter } from "@/utilities/currency/curencyFormatter";
import { BUTTON } from "@/localization/Buttons";
import { BsFillExclamationDiamondFill } from "react-icons/bs";

export default function IngredientListTable() {
  const { ingredientList } = useIngredientListContext();

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>{INGREDIENT_LIST_CONST.INGREDIENT}</Th>
          <Th>{INGREDIENT_LIST_CONST.MEASUREMENT_TYPE}</Th>
          <Th>{INGREDIENT_LIST_CONST.PURCHASE_SIZE}</Th>
          <Th>{INGREDIENT_LIST_CONST.AVERAGE_COST}</Th>
          <Th>{INGREDIENT_LIST_CONST.COST_PER_OUNCE}</Th>
          <Th>{BUTTON.UPDATE}</Th>
          <Th>{BUTTON.DELETE}</Th>
        </Tr>
      </Thead>
      <Tbody>
        {ingredientList.map((ingredient) => {
          return (
            <Tr key={ingredient.ingredient}>
              <Td>{ingredient.ingredient}</Td>
              <Td>{ingredient.measurementType}</Td>
              <Td>
                {ingredient.purchaseSize} {INGREDIENT_LIST_CONST.OZ}
              </Td>
              <Td>
                {currencyFormatter.format(parseInt(ingredient.averageCost))}
              </Td>
              <Td>{currencyFormatter.format(ingredient.costPerOunce)}</Td>
              <Td>
                <button
                  type="button"
                  className="text-white bg-blue-300 focus:outline-none p-1 rounded text-xs"
                  disabled
                >
                  {BUTTON.UPDATE}
                </button>
              </Td>
              <Td>
                <button
                  type="button"
                  className="text-white bg-red-300 focus:outline-none p-1 rounded text-xs"
                  disabled
                >
                  {BUTTON.DELETE}
                </button>
              </Td>
            </Tr>
          );
        })}
        {!ingredientList.length && (
          <Tr>
            <td colSpan={7} className="">
              <div className="flex justify-center align-middle p-5">
                <BsFillExclamationDiamondFill className="text-lg text-yellow-500 mr-1" />
                {INGREDIENT_LIST_CONST.PLEASE_ADD_INGREDIENTS}
              </div>
            </td>
          </Tr>
        )}
      </Tbody>
    </Table>
  );
}
