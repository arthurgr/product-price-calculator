import { FormItemsInterface, FormActions } from "../interfaces/interfaces";

export default function Summary({
  formState,
}: {
  formState: FormItemsInterface;
}) {
  return (
    <>
      <p>Ingredient 1: {formState.ingredient1}</p>
      <p>Ingredient 2: {formState.ingredient2}</p>
      <br />
      <p>Ingredient Total: {formState.ingredient2 + formState.ingredient1}</p>

      <br />
      <p>Tax: {formState.tax}%</p>

      <br />
      <p>
        Grand Total:{" "}
        {formState.ingredient2 + (formState.ingredient1 * formState.tax) / 100}
      </p>
    </>
  );
}
