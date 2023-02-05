import { Formik, Form, Field, ErrorMessage } from "formik";
import useIngredientListContext from "../context/IngredientListContext";
import useIngredientContext from "../context/IngredientContext";
import { INGREDIENT_LIST_CONST } from "@localization/IngredientListConst";

export default function AddIngredientForm() {
  const { ingredientListState, ingredientListDispatch } =
    useIngredientListContext();

  const { ingredientDispatch, ingredientState } = useIngredientContext();

  interface formItems {
    ingredient?: string;
    measurementType?: string;
    purchaseSize?: string;
    averageCost?: string;
  }

  return (
    <>
      <Formik
        initialValues={{
          ingredient: "",
          measurementType: "OZ",
          purchaseSize: "",
          averageCost: "",
        }}
        validate={(values) => {
          const errors: formItems = {};
          if (!values.ingredient) {
            errors.ingredient = "Required";
          }
          if (!values.measurementType) {
            errors.measurementType = "Required";
          }
          if (!values.purchaseSize) {
            errors.purchaseSize = "Required";
          }
          if (!values.averageCost) {
            errors.averageCost = "Required";
          }
          // else if (
          //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          // ) {
          //   errors.email = "Invalid email address";
          // }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          // ingredientListDispatch({
          //   type: "ADD_INGREDIENT",
          //   ingredient: {
          //     ...ingredientState,
          //     measurementType: "oz",
          //   },
          // });
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="ingredient">
              {INGREDIENT_LIST_CONST.INGREDIENT}
            </label>
            <Field
              type="text"
              name="ingredient"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <ErrorMessage name="ingredient" component="div" />

            <label htmlFor="measurementType">
              {INGREDIENT_LIST_CONST.MEASUREMENT_TYPE}
            </label>
            <Field
              type="text"
              name="measurementType"
              disabled
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <ErrorMessage name="measurementType" component="div" />

            <label htmlFor="purchaseSize">
              {INGREDIENT_LIST_CONST.PURCHASE_SIZE}
            </label>
            <Field
              type="text"
              name="purchaseSize"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <ErrorMessage name="purchaseSize" component="div" />

            <label htmlFor="averageCost">
              {INGREDIENT_LIST_CONST.AVERAGE_COST}
            </label>
            <Field
              type="text"
              name="averageCost"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <ErrorMessage name="averageCost" component="div" />

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
            >
              {INGREDIENT_LIST_CONST.ADD_INGREDIENT}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}
