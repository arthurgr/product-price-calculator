import { Formik, Form, Field, ErrorMessage } from "formik";
import useIngredientListContext from "../context/IngredientListContext";
import useIngredientContext from "../context/IngredientContext";
import { INGREDIENT_LIST_CONST } from "@localization/IngredientListConst";

export default function AddIngredientForm() {
  const { ingredientListState, ingredientListDispatch } =
    useIngredientListContext();

  const { ingredientDispatch, ingredientState } = useIngredientContext();

  return (
    <>
      <form className="grid grid-cols-1 grid-cols-8 gap-4">
        <div className="mb-6">
          <label
            htmlFor="ingredient"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {INGREDIENT_LIST_CONST.INGREDIENT}
          </label>
          <input
            type="text"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(event) => {
              ingredientDispatch({
                type: "INGREDIENT",
                ingredient: event.target.value,
              });
            }}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="measurementType"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {INGREDIENT_LIST_CONST.MEASUREMENT_TYPE}
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
            {INGREDIENT_LIST_CONST.PURCHASE_SIZE}
          </label>
          <input
            type="text"
            id="purchaseSize"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(event) => {
              ingredientDispatch({
                type: "PURCHASE_SIZE",
                purchaseSize: parseInt(event.target.value),
              });
            }}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="averageCost"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {INGREDIENT_LIST_CONST.AVERAGE_COST}
          </label>
          <input
            type="text"
            id="averageCost"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(event) => {
              ingredientDispatch({
                type: "AVERAGE_COST",
                averageCost: parseInt(event.target.value),
              });
            }}
            required
          />
        </div>
      </form>
      <button
        onClick={() => {
          ingredientListDispatch({
            type: "ADD_INGREDIENT",
            ingredient: {
              ...ingredientState,
              measurementType: "oz",
            },
          });
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        {INGREDIENT_LIST_CONST.ADD_INGREDIENT}
      </button>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors: { email?: string } = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              type="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}
