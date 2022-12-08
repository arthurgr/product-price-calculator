import { FormItemsInterface, FormActions } from "../interfaces/interfaces";

export default function Summary({
  formState,
}: {
  formState: FormItemsInterface;
}) {
  const tax = (formState.ingredient1 + formState.ingredient2) / 10;
  return (
    <>
      <p>Ingredient 1: {formState.ingredient1}</p>
      <p>Ingredient 2: {formState.ingredient2}</p>
      <br />
      <p>Ingredient Total: {formState.ingredient2 + formState.ingredient1}</p>

      <br />
      <p>Tax: {formState.tax}%</p>

      <br />
      <p>Grand Totals: {formState.ingredient1 + formState.ingredient2 + tax}</p>
    </>
  );
}
