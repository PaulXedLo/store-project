import Hero from "./components/home/Hero";
import ProductPage from "./components/products/productpage";

export default function Page() {
  return (
    <div>
      <div className="relative overflow-hidden">
        <Hero />
      </div>
      <ProductPage />
    </div>
  );
}
