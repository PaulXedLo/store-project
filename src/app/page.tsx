import Hero from "./components/home/Hero";
import ProductPage from "./components/products/productpage";

export default function Page() {
  return (
    <div className="flex  w-full bg-gray-200 dark:bg-gray-900 flex-col items-center justify-between">
      <div className="relative overflow-hidden w-full flex items-center justify-center flex-1">
        <Hero />
      </div>
      <ProductPage />
    </div>
  );
}
