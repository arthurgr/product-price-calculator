export default function Label({
  children,
  htmlFor,
}: {
  children: React.ReactNode;
  htmlFor: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block mb-2 text-sm font-semibold text-gray-800 dark:text-white"
    >
      {children}
    </label>
  );
}
