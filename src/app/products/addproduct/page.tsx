import AddProductForm from "@/app/components/addproduct/Form";
import AddProductHero from "@/app/components/addproduct/Hero";

export default function AddProductPage() {
  return (
    <main className="relative flex flex-col items-center justify-center ">
      <AddProductHero />
      <AddProductForm />
    </main>
  );
}
