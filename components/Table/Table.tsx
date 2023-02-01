import useIngredientListContext from "../IngredientList/context/IngredientListContext";
export default function Table() {
  const { ingredientListState } = useIngredientListContext();
  return (
    <table>
      <thead>
        <tr>
          <th>Ingredient</th>
          <th>Measurement Type</th>
          <th>Purchase Size</th>
          <th>Average Cost</th>
          <th>Cost Per Ounce</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {ingredientListState.map((ingredient) => {
          return (
            <tr key={ingredient.ingredient}>
              <td>{ingredient.ingredient}</td>
              <td>{ingredient.measurementType}</td>
              <td>{ingredient.purchaseSize}</td>
              <td>{ingredient.averageCost}</td>
              <td>cost per ounce</td>
              <td>
                <button>delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
