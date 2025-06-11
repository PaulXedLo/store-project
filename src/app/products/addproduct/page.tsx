"use client";
import AddProductForm from "@/app/components/addproduct/Form";
import ImagePreview from "@/app/components/addproduct/ImagePreview";
import { useForm } from "react-hook-form";
import type { ProductFormData } from "@/app/components/addproduct/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema } from "@/app/components/addproduct/Form";
import Hero from "@/app/components/ui/Hero";

export default function AddProductPage() {
  // Initialize the form with default values and validation schema
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
  const image = form.watch("image");
  // Validate the image URL
  function isValidUrl(url: string | undefined) {
    if (!url || url.trim() === "") return false;
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }
  return (
    <main className="relative flex w-full bg-gray-200 dark:bg-gray-900 flex-col items-center justify-between">
      {/* Hero section for Add Product page */}
      <Hero
        headerText="Add a new product"
        paragraphText="Share your products with the world and manage your inventory easily."
        sourcePath="/myproductsbackground.mp4"
      />
      <section className="flex items-center pt-2">
        {/* Form for adding a new product */}
        <AddProductForm form={form} />
        {/* Show image preview only if the URL is valid */}
        {isValidUrl(image) && image !== "" && (
          <div className="hidden md:flex">
            <ImagePreview image={image} />
          </div>
        )}
      </section>
    </main>
  );
}
