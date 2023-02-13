import { Formik, Form } from "formik";
import Input from "@common/Forms/Inputs/Input";
import useIngredientListContext from "../context/IngredientListContext";
import { currencyFormatter } from "@utilities/currency/curencyFormatter";
import { INGREDIENT_LIST_CONST } from "@localization/IngredientListConst";
import { VALIDATION } from "@localization/Validation";
import { validateCurrency } from "@utilities/regex";

export default function AddIngredientForm() {
  const { ingredientListState, ingredientListDispatch } =
    useIngredientListContext();

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

          const ingredientCheck = ingredientListState.filter(
            (ingredient) => ingredient.ingredient === values.ingredient
          );
          if (!values.ingredient) {
            errors.ingredient = `${VALIDATION.REQUIRED}`;
          } else if (ingredientCheck.length) {
            errors.ingredient = `${VALIDATION.DUPLICATE} ${INGREDIENT_LIST_CONST.INGREDIENT}`;
          }

          if (!values.measurementType) {
            errors.measurementType = `${VALIDATION.REQUIRED}`;
          }

          if (!values.purchaseSize) {
            errors.purchaseSize = `${VALIDATION.REQUIRED}`;
          } else if (!validateCurrency.test(values.purchaseSize)) {
            errors.purchaseSize = `${VALIDATION.EXPECTED_NUMBER}`;
          }

          if (!values.averageCost) {
            errors.averageCost = `${VALIDATION.REQUIRED}`;
          } else if (!validateCurrency.test(values.averageCost)) {
            errors.averageCost = `${VALIDATION.EXPECTED_NUMBER}`;
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(false);
          const costPerOunce =
            parseInt(values.averageCost) / parseInt(values.purchaseSize);
          ingredientListDispatch({
            type: "ADD_INGREDIENT",
            ingredient: {
              ingredient: values.ingredient,
              measurementType: "oz",
              purchaseSize: currencyFormatter.format(
                parseInt(values.purchaseSize)
              ),
              averageCost: currencyFormatter.format(
                parseInt(values.averageCost)
              ),
              costPerOunce: currencyFormatter.format(costPerOunce),
            },
          });
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="flex flex-wrap">
              <div className="mb-4 mr-4">
                <Input
                  label={INGREDIENT_LIST_CONST.INGREDIENT}
                  name="ingredient"
                />
              </div>
              <div className="mb-4 mr-4">
                <Input
                  label={INGREDIENT_LIST_CONST.MEASUREMENT_TYPE}
                  name="measurementType"
                  disabled
                />
              </div>
              <div className="mb-4 mr-4">
                <Input
                  label={INGREDIENT_LIST_CONST.PURCHASE_SIZE}
                  name="purchaseSize"
                />
              </div>
              <div className="mb-4 mr-4">
                <Input
                  label={INGREDIENT_LIST_CONST.AVERAGE_COST}
                  name="averageCost"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 hover:bg-blue-700 text-sm text-white py-2 px-4 rounded mb-4"
            >
              {INGREDIENT_LIST_CONST.ADD_INGREDIENT}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}
