"use client";
import { useProductStore } from "@/app/store/useProductStore";

import { Toaster, toast } from "sonner";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { z } from "zod";
import { useCallback } from "react";
import FormInput from "./FormInput";
// Product schema for validation
export const productSchema = z.object({
  id: z.number(),
  title: z.string().min(2, "Title is too short").max(100, "Title is too long"),
  price: z
    .number({ required_error: "Please set a price" })
    .positive("Price must be a positive number"),
  description: z
    .string()
    .min(5, "Description must be between 5 and 500 characters")
    .max(500, "Description must be between 5 and 500 characters"),
  category: z.string(),
  image: z.string().url("Image must be a valid URL"),
});

const formVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
type Props = {
  form: ReturnType<typeof useForm<ProductFormData>>;
};
export type ProductFormData = z.infer<typeof productSchema>;
export default function AddProductForm({ form }: Props) {
  const { addProduct } = useProductStore();
  // Function to handle form submission
  const onSubmit = useCallback(
    (data: ProductFormData) => {
      addProduct(data);
      toast.success("Product added successfully!", {
        description: `Name: ${data.title}`,
      });
    },
    [addProduct]
  );
  // Destructure form methods
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;
  return (
    <section className="flex py-5 h-auto w-full  flex-col items-center text-white">
      <Toaster position="top-center" richColors />
      {/* Form for adding a new product */}
      <motion.form
        variants={formVariants}
        initial="hidden"
        animate="visible"
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white dark:bg-gray-700 border-2 dark:border-0 border-gray-300 rounded-md shadow-md flex w-80 md:w-120 h-auto flex-col gap-2 p-4"
      >
        {/* Hidden input for product ID */}
        <input type="hidden" value={Date.now()} {...register("id")} />
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
