import { Field, ErrorMessage } from "formik";

export default function Select({
  label,
  name,
  options,
  disabled,
}: {
  label: string;
  name: string;
  options: Array<{ label: string; value: string }>;
  type?: string;
  disabled?: boolean;
}) {
  const selectOptions = options.map((option) => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Field
        as="select"
        name={name}
        disabled={disabled && disabled}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:bg-gray-200 disabled:cursor-not-allowed"
      >
        {selectOptions}
      </Field>
      <ErrorMessage
        name={name}
        component="div"
        className="text-sm text-red-600 font-bold"
      />
    </>
  );
}
