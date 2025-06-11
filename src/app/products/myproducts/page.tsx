"use client";
import { MyProductsList } from "@/app/components/myproducts/List";
import Hero from "@/app/components/ui/Hero";

export default function MyProductsPage() {
  return (
    <main className="flex w-full bg-gray-200 dark:bg-gray-900 flex-col items-center justify-between">
      {/* Hero section for My Products page */}
      <Hero
        headerText="My Products"
        paragraphText="Currently listed products"
        sourcePath="/myproductsbackground.mp4"
      />
      <MyProductsList />
    </main>
  );
}
