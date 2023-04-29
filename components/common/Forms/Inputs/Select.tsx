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
      <label htmlFor={name} className="block">
        {label}
      </label>
      <Field as="select" name={name} disabled={disabled && disabled}>
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
