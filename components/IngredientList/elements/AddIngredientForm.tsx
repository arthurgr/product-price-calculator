import { Formik, Form } from "formik";
import Input from "@/common/Forms/Inputs/Input";
import Label from "@/common/Forms/Inputs/Label";
import useIngredientListContext from "../context/IngredientListContext";
import { INGREDIENT_LIST_CONST } from "@/localization/Consts";
import { VALIDATION } from "@/localization/Validation";
import { validateCurrency } from "@/utilities/regex";
import Select from "@/common/Forms/Inputs/Select";

export default function AddIngredientForm() {
  const { ingredientList, ingredientListDispatch } = useIngredientListContext();

  interface formItems {
    ingredient?: string;
    measurementType?: string;
    purchaseSize?: string;
    averageCost?: string;
  }

  // const supabase = createComponentSupabaseClient({ headers, cookies });

  return (
    <Formik
      initialValues={{
        ingredient: "",
        measurementType: INGREDIENT_LIST_CONST.OZ,
        purchaseSize: "",
        averageCost: "",
      }}
      validate={(values) => {
        const errors: formItems = {};

        const ingredientCheck = ingredientList.filter(
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
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        setSubmitting(false);
        console.log(values);

        // const { data, error } = await supabase.from("ingredients").insert([
        //   {
        //     ingredient: values.ingredient,
        //     measurementType: INGREDIENT_LIST_CONST.OZ,
        //     purchaseSize: values.purchaseSize,
        //   },
        // ]);

        // if (!error) {
        //   console.log(data);
        // }

        // const costPerOunce =
        //   parseInt(values.averageCost) / parseInt(values.purchaseSize);
        // ingredientListDispatch({
        //   type: "ADD_INGREDIENT",
        //   ingredient: {
        //     ingredient: values.ingredient,
        //     measurementType: INGREDIENT_LIST_CONST.OZ,
        //     purchaseSize: values.purchaseSize,
        //     averageCost: currencyFormatter.format(parseInt(values.averageCost)),
        //     costPerOunce: currencyFormatter.format(costPerOunce),
        //   },
        // });
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <div className="relative overflow-x-auto shadow-sm sm:rounded-lg p-5 bg-white">
          <Form>
            <section className="grid md:grid-cols-5 gap-4 sm:grid-cols-1">
              <Input
                label={INGREDIENT_LIST_CONST.INGREDIENT}
                name="ingredient"
              />
              <Select
                label={INGREDIENT_LIST_CONST.MEASUREMENT_TYPE}
                name="measurementType"
                options={[
                  {
                    value: INGREDIENT_LIST_CONST.OZ,
                    label: INGREDIENT_LIST_CONST.OZ,
                  },
                ]}
                disabled
              />
              <Input
                label={`${INGREDIENT_LIST_CONST.PURCHASE_SIZE} (${INGREDIENT_LIST_CONST.OZ})`}
                name="purchaseSize"
              />
              <Input
                label={INGREDIENT_LIST_CONST.AVERAGE_COST}
                name="averageCost"
              />
              <div>
                <Label htmlFor="submit">
                  {INGREDIENT_LIST_CONST.ADD_INGREDIENT}
                </Label>
                <button
                  type="submit"
                  name="ssubmit"
                  disabled={isSubmitting}
                  className="bg-blue-500 hover:bg-blue-700 w-full text-sm text-white py-2 px-4 rounded mb-4"
                >
                  {INGREDIENT_LIST_CONST.ADD_INGREDIENT}
                </button>
              </div>
            </section>
          </Form>
        </div>
      )}
    </Formik>
  );
}
