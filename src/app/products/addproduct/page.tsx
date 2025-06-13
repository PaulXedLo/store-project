"use client";
import AddProductForm from "@/app/components/addproduct/Form";
import ImagePreview from "@/app/components/addproduct/ImagePreview";
import Hero from "@/app/components/ui/Hero";
import useFormHook from "@/app/hooks/useForm";

export default function AddProductPage() {
  const { image, isValidUrl } = useFormHook();

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
        <AddProductForm />
        {/* Show image preview only if the URL works*/}
        {isValidUrl(image) && image !== "" && (
          <div className="hidden md:flex">
            <ImagePreview />
          </div>
        )}
      </section>
    </main>
  );
}
