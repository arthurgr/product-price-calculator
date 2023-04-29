import { Field, ErrorMessage } from "formik";

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
    <>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <Field
        type={type ? type : "text"}
        name={name}
        disabled={disabled && disabled}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-sm text-red-600 font-bold"
      />
    </>
  );
}
