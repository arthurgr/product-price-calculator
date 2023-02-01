import { useMemo, useReducer } from "react";
import ingredientListReducer from "../reducers/ingredientListReducer";

export default function AddIngredientForm() {
  const [ingredientListState, ingredientListDispatch] = useReducer(
    ingredientListReducer,
    []
  );
  return (
    <>
      <form className="grid grid-cols-1 grid-cols-8 gap-4">
        <div className="mb-6">
          <label
            htmlFor="ingredient"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Ingredient
          </label>
          <input
            type="text"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="measurementType"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Measurement Type
          </label>
          <input
            type="text"
            value="oz"
            id="measurementType"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            disabled
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="purchaseSize"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Purchase Size
          </label>
          <input
            type="text"
            id="purchaseSize"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="averageCost"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Average Cost
          </label>
          <input
            type="text"
            id="averageCost"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
      </form>
      <button
        onClick={() => {
          ingredientListDispatch({
            type: "ADD_INGREDIENT",
            ingredient: {
              id: Math.random(),
              ingredient: "pepper",
              measurementType: "oz",
              purchaseSize: 30,
              averageCost: 31,
              costPerOunce: 32,
            },
          });
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Ingredient
      </button>
    </>
  );
}
