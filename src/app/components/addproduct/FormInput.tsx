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
    <label className="text-l dark:text-white font-semibold mb-4 text-black">
      {label !== "productid" ? label : ""}
      {as === "input" && (
        // Input field for text or number
        <input
          type={type}
          placeholder={label}
          className="border-b-3 focus:border-b-purple-300 outline-0 border-gray-300 rounded p-2 w-full"
          {...register(
            name,
            type === "number"
              ? {
                  setValueAs: (v) => (v === "" ? undefined : parseInt(v, 10)),
                }
              : undefined
          )}
        />
      )}
      {as === "textarea" && (
        // Textarea field for multi-line input
        <textarea
          placeholder={label}
          rows={4}
          className="border-b-3 focus:border-b-purple-300 outline-0 border-gray-300 rounded p-2 w-full"
          {...register(name)}
        />
      )}
      {as === "select" && (
        // Select dropdown for category selection
        <select
          className="border-b-3 focus:border-b-purple-300 outline-0  border-gray-300 rounded p-2 w-full"
          {...register(name)}
        >
          {categoryOptions.map((option) => (
            <option key={option} value={option} className="dark:text-black">
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </option>
          ))}
        </select>
      )}
      {/* Display error message if exists */}
      {error && <span className="text-xs text-red-500">{error.message}</span>}
    </label>
  );
}
