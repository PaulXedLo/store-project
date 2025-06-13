import { z } from "zod";
import { useForm } from "react-hook-form";
import { useCallback } from "react";
import { toast } from "sonner";
import { useProductStore } from "../store/useProductStore";
import { zodResolver } from "@hookform/resolvers/zod";
export type ProductFormData = z.infer<typeof productSchema>;

// Product schema

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

export default function useFormHook() {
  const { addProduct } = useProductStore();
  // Get form for default values and validation
  const form = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    mode: "onTouched",
    defaultValues: {
      id: Date.now(),
      title: "",
      price: 0,
      description: "",
      category: "electronics",
      image:
        "https://pethelpful.com/.image/w_3840,q_auto:good,c_fill,ar_4:3/MTk2NzY3MjA5ODc0MjY5ODI2/top-10-cutest-cat-photos-of-all-time.jpg",
    },
  });

  // Destructure form methods
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  // onSubmit function for the form
  const onSubmit = useCallback(
    (data: ProductFormData) => {
      try {
        addProduct(data);
        toast.success("Product added successfully!", {
          description: `Tap to view ${data.title} in your products.`,
          action: {
            label: "View Products",
            onClick: () => {
              window.location.href = "/products/myproducts";
            },
          },
          style: {
            width: "400px",
          },
        });
      } catch (error) {
        console.error("Error adding product:", error);
        toast.error("Failed to add product. Please try again.");
        return;
      }
      // Reset form

      form.reset({
        id: Date.now(),
        title: "",
        price: 0,
        description: "",
        category: "electronics",
        image:
          "https://pethelpful.com/.image/w_3840,q_auto:good,c_fill,ar_4:3/MTk2NzY3MjA5ODc0MjY5ODI2/top-10-cutest-cat-photos-of-all-time.jpg",
      });
    },
    [addProduct, form]
  );

  // Validate the image URL in the form
  const image = form.watch("image");
  function isValidUrl(url: string | undefined) {
    if (!url || url.trim() === "") return false;
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }
  return {
    onSubmit,
    register,
    handleSubmit,
    isValidUrl,
    form,
    image,
    errors,
  };
}
