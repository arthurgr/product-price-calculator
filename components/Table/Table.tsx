import useIngredientListContext from "../IngredientList/context/IngredientListContext";
export default function Table() {
  const { ingredientListState } = useIngredientListContext();
  return (
    <table>
      <thead>
        <tr>
          <th className="p-4">Ingredient</th>
          <th className="p-4">Measurement Type</th>
          <th className="p-4">Purchase Size</th>
          <th className="p-4">Average Cost</th>
          <th className="p-4">Cost Per Ounce</th>
          <th className="p-4">Delete</th>
        </tr>
      </thead>
      <tbody>
        {ingredientListState.map((ingredient) => {
          return (
            <tr key={ingredient.ingredient}>
              <td className="p-4">{ingredient.ingredient}</td>
              <td className="p-4">{ingredient.measurementType}</td>
              <td className="p-4">{ingredient.purchaseSize}</td>
              <td className="p-4">{ingredient.averageCost}</td>
              <td className="p-4">cost per ounce</td>
              <td className="p-4">
                <button>delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
