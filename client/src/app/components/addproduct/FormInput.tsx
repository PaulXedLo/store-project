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
    <label className="text-l dark:text-white font-semibold mb-4 text-black block">
      {label !== "productid" ? label : ""}
      
      {as === "input" && (
        <input
          type={type}
          placeholder={label}
          step={type === "number" ? "0.01" : undefined} 
          className="dark:text-white border-b-3 focus:border-b-purple-300 outline-0 border-gray-300 rounded p-2 w-full text-black"
          {...register(name, {
  
            valueAsNumber: type === "number", 
          })}
        />
      )}

      {as === "textarea" && (
        <textarea
          placeholder={label}
          rows={4}
          className="dark:placeholder-gray-400 border-b-3 focus:border-b-purple-300 outline-0 border-gray-300 rounded p-2 w-full text-black"
          {...register(name)}
        />
      )}

      {as === "select" && (
        <select
          className="dark:text-white border-b-2 dark:border-b-3 focus:border-b-purple-300 outline-0 border-gray-300 rounded p-2 w-full text-black"
          {...register(name)}
        >
          {categoryOptions.map((option) => (
            <option className="dark:text-black dark:bg-white" key={option} value={option}>
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </option>
          ))}
        </select>
      )}

      {error && <span className="text-xs text-red-500 block mt-1">{error.message}</span>}
    </label>
  );
}