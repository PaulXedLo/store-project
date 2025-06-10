import Image from "next/image";
export default function AddProductHero() {
  return (
    <section className="relative w-full  h-50 bg-gray-100 dark:bg-gray-900 text-white">
      <Image
        src={"/addproducthero.jpg"}
        className=" dark:opacity-50 absolute top-0 left-0 w-full h-full object-cover z-0"
        width={400}
        height={300}
        alt="Add product header background image"
      />
      <div className="flex flex-col items-center">
        <h1 className="mt-14 text-center text-3xl md:text-4xl font-semibold text-white  z-10">
          Add a new product
        </h1>
        <p className="text-center text-s md:text-xl text-gray-200 mt-2 z-10">
          Share your products with the world and manage your inventory easily.
        </p>
      </div>
    </section>
  );
}
