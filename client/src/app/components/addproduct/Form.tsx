"use client";
import { Toaster } from "sonner";
import { motion } from "framer-motion";
import FormInput from "./FormInput";
import useFormHook from "@/app/hooks/useForm";

const formVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AddProductForm() {
  const { register, handleSubmit, errors, onSubmit: originalOnSubmit } = useFormHook();

  // wrapper sa convertim pretul in number inainte de request
  const onSafeSubmit = (data: any) => {
    const formattedData = {
      ...data,
      price: parseFloat(data.price), 
      category: data.category || "electronics" 
    };
    
    originalOnSubmit(formattedData);
  };

  return (
    <section className="flex py-5 h-auto w-full items-center text-white justify-center">
      <Toaster position="top-center" richColors />
      
      <motion.form
        variants={formVariants}
        initial="hidden"
        animate="visible"
        onSubmit={handleSubmit(onSafeSubmit)}
        className="bg-white dark:bg-gray-700 border-2 dark:border-0 border-gray-300 rounded-md shadow-md flex w-80 md:w-120 h-auto flex-col gap-2 p-4"
      >
        <h2 className="text-xl font-bold text-black dark:text-white mb-2 text-center">Add New Product</h2>

        <FormInput
          name="image"
          as="input"
          type="url"
          label="Image URL"
          register={register}
          error={errors.image}
        />
        <FormInput
          name="title"
          as="input"
          type="text"
          label="Title"
          register={register}
          error={errors.title}
        />
        <FormInput
          name="price"
          as="input"
          label="Price"
          type="number"
          register={register}
          error={errors.price}
        />
        <FormInput
          name="category"
          as="select"
          type="text"
          label="Category"
          register={register}
          error={errors.category}
        />
        <FormInput
          name="description"
          type="text"
          as="textarea"
          label="Description"
          register={register}
          error={errors.description}
        />
        
        <button
          type="submit"
          className="cursor-pointer bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-2 transition-colors"
        >
          Add Product
        </button>
      </motion.form>
    </section>
  );
}