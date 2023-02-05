import { Formik, Form, Field, ErrorMessage } from "formik";
import Input from "@common/Forms/Inputs/Input";
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
            <Input label={INGREDIENT_LIST_CONST.INGREDIENT} name="ingredient" />
            <Input
              label={INGREDIENT_LIST_CONST.MEASUREMENT_TYPE}
              name="measurementType"
            />
            <Input
              label={INGREDIENT_LIST_CONST.PURCHASE_SIZE}
              name="purchaseSize"
            />
            <Input
              label={INGREDIENT_LIST_CONST.AVERAGE_COST}
              name="averageCost"
            />

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
