import { Field, ErrorMessage } from "formik";
import Label from "./Label";

export default function Input({
  label,
  name,
  type,
  disabled,
}: {
  label: string;
  name: string;
  type?: string;
  disabled?: boolean;
}) {
  return (
    <section>
      <Label htmlFor={name}>{label}</Label>
      <Field
        type={type ? type : "text"}
        name={name}
        disabled={disabled && disabled}
        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-sm text-red-600 font-bold"
      />
    </section>
  );
}
