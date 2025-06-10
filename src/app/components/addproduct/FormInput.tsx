//A reusable form input component for adding products, including validation error handling.
import type { FormInputProps } from "@/app/types/Form";
export default function FormInput({
  as,
  name,
  label,
  register,
  error,
  type,
}: FormInputProps) {
  const categoryOptions = ["electronics", "clothing", "accessories"];
  return (
    <label className="text-l font-semibold mb-4 text-black">
      {label}
      {as === "input" && (
        <input
          type={type}
          placeholder={label}
          className="border border-gray-300 rounded p-2 w-full"
          {...register(name)}
        />
      )}
      {as === "textarea" && (
        <textarea
          placeholder={label}
          rows={4}
          className="border border-gray-300 rounded p-2 w-full"
          {...register(name)}
        />
      )}
      {as === "select" && (
        <select
          className="border border-gray-300 rounded p-2 w-full"
          {...register(name)}
        >
          {categoryOptions.map((option) => (
            <option key={option} value={option}>
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </option>
          ))}
        </select>
      )}
      {/* Display error message if exists */}
      {error && <span className="text-red-500">{error.message}</span>}
    </label>
  );
}
