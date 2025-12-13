"use client";
import { MyProductsList } from "@/app/components/myproducts/List";
import Hero from "@/app/components/ui/Hero";

export default function MyProductsPage() {
  return (
    <main className="w-full min-h-screen bg-gray-200 dark:bg-gray-900 flex flex-col">
      {/* Hero section */}
      <Hero
        headerText="My Products"
        paragraphText="Currently listed products"
        sourcePath="/myproductsbackground.mp4"
      />

      {/* Products List section */}
      <section className="w-full flex-1 px-4 py-8">
        <MyProductsList />
      </section>
    </main>
  );
}
