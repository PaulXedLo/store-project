"use client";
import { useProductStore } from "@/app/store/useProductStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { Toaster, toast } from "sonner";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useCallback } from "react";
import FormInput from "./FormInput";

// Product schema for validation
const productSchema = z.object({
  id: z.number(),
  title: z.string().min(2, "Title is too short").max(100, "Title is too long"),
  price: z.number().positive("Price must be a positive number"),
  description: z
    .string()
    .min(5)
    .max(500, "Description must be between 5 and 500 characters"),
  category: z.string(),
  image: z.string().url("Image must be a valid URL"),
});

type ProductFormData = z.infer<typeof productSchema>;

export default function AddProductForm() {
  const { addProduct } = useProductStore();
  // Initialize the form and validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
  });
  // Handle form submission
  const onSubmit = useCallback(
    (data: ProductFormData) => {
      addProduct(data);
      toast.success("Product added successfully!", {
        description: `Product ID: ${data.id}, Title: ${data.title}`,
      });
    },
    [addProduct]
  );
  return (
    <section className="flex p-3 h-auto w-full  flex-col items-center bg-gray-100 dark:bg-gray-900 text-white">
      <Toaster position="top-center" richColors />
      {/* Form for adding a new product */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" border- rounded-md shadow-md flex w-80 h-auto flex-col gap-2 p-4"
      >
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
          label="title"
          register={register}
          error={errors.title}
        />
        {/* Input for product price */}
        <FormInput
          name="price"
          as="input"
          label="price"
          type="number"
          register={register}
          error={errors.price}
        />
        {/* Input for product category */}
        <FormInput
          name="category"
          as="select"
          type="text"
          label="category"
          register={register}
          error={errors.category}
        />
        {/* Input for product description */}
        <FormInput
          name="description"
          type="text"
          as="textarea"
          label="description"
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
      </form>
    </section>
  );
}
