import useIngredientListContext from "../IngredientList/context/IngredientListContext";

export default function Table() {
  const { ingredientListState } = useIngredientListContext();
  return (
    <table>
      <thead>
        <tr>
          <th className="p-2">Ingredient</th>
          <th className="p-2">Measurement Type</th>
          <th className="p-2">Purchase Size</th>
          <th className="p-2">Average Cost</th>
          <th className="p-2">Cost Per Ounce</th>
          <th className="p-2">Delete</th>
        </tr>
      </thead>
      <tbody>
        {ingredientListState.map((ingredient) => {
          return (
            <tr key={ingredient.ingredient}>
              <td className="p-2">{ingredient.ingredient}</td>
              <td className="p-2">{ingredient.measurementType}</td>
              <td className="p-2">{ingredient.purchaseSize}</td>
              <td className="p-2">{ingredient.averageCost}</td>
              <td className="p-2">
                {ingredient.averageCost / ingredient.purchaseSize}
              </td>
              <td className="p-2">
                <button>delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
