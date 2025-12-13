"use client";
import { Toaster } from "sonner";
import { motion } from "framer-motion";
import FormInput from "./FormInput";
import useFormHook from "@/app/hooks/useForm";

// Product schema for validation
const formVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
export default function AddProductForm() {
  // Custom hook for form
  const { onSubmit, register, handleSubmit, errors } = useFormHook();
  return (
    <section className="flex py-5 h-auto w-full items-center text-white">
      <Toaster position="top-center" richColors />
      {/* Form for adding a new product */}
      <motion.form
        variants={formVariants}
        initial="hidden"
        animate="visible"
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white dark:bg-gray-700 border-2 dark:border-0 border-gray-300 rounded-md shadow-md flex w-80 md:w-120 h-auto flex-col gap-2 p-4"
      >
        {/* Input for product image URL */}
        <FormInput
          name="image"
          as="input"
          type="url"
          label="Image URL"
          register={register}
          error={errors.image}
        />
        {/* Input for product title */}
        <FormInput
          name="title"
          as="input"
          type="text"
          label="Title"
          register={register}
          error={errors.title}
        />
        {/* Input for product price */}
        <FormInput
          name="price"
          as="input"
          label="Price"
          type="number"
          register={register}
          error={errors.price}
        />
        {/* Input for product category */}
        <FormInput
          name="category"
          as="select"
          type="text"
          label="Category"
          register={register}
          error={errors.category}
        />
        {/* Input for product description */}
        <FormInput
          name="description"
          type="text"
          as="textarea"
          label="Description"
          register={register}
          error={errors.description}
        />
        {/* Submit button */}
        <button
          type="submit"
          className="cursor-pointer bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Product
        </button>
      </motion.form>
    </section>
  );
}
