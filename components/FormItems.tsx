import React from "react";
import { FormItemsInterface, FormActions } from "../interfaces/interfaces";

export default function FormItems({
  formState,
  formDispatch,
}: {
  formState: FormItemsInterface;
  formDispatch: React.Dispatch<FormActions>;
}) {
  return (
    <>
      <div className="col-span-2 mb-3">
        <label
          htmlFor="ingredient-1-cost"
          className="block text-sm font-medium text-gray-700"
        >
          Ingredient 1 Cost
        </label>
        <input
          type="number"
          name="ingredient-1-cost"
          id="ingredient-1-cost"
          min="1"
          step="any"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          onChange={(amount) => {
            formDispatch({
              type: "INGREDIENT-1",
              ingredient1:
                amount.target.value === "" ? 0 : parseInt(amount.target.value),
            });
          }}
        />
      </div>

      <div className="mb-3">
        <label
          htmlFor="ingredient-2-cost"
          className="block text-sm font-medium text-gray-700"
        >
          Ingredient 2 Cost
        </label>
        <input
          type="number"
          name="ingredient-2-cost"
          id="ingredient-2-cost"
          min="1"
          step="any"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          onChange={(amount) => {
            formDispatch({
              type: "INGREDIENT-2",
              ingredient2:
                amount.target.value === "" ? 0 : parseInt(amount.target.value),
            });
          }}
        />
      </div>

      <div className="mb-3">
        <label
          htmlFor="ingredient-2-cost"
          className="block text-sm font-medium text-gray-700"
        >
          Tax
        </label>
        <input
          type="number"
          name="tax"
          id="tax"
          min="1"
          step="any"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          onChange={(amount) => {
            formDispatch({
              type: "TAX",
              tax:
                amount.target.value === "" ? 0 : parseInt(amount.target.value),
            });
          }}
        />
      </div>
    </>
  );
}
