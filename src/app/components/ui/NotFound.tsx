"use client";
import Hero from "@/app/components/ui/Hero";

type NotFoundProps = {
  slug: string;
};
export default function UnknownProductPage({ slug }: NotFoundProps) {
  return (
    <div className="flex-1 flex h-auto bg-gray-200 not-odd:bg-gray-200 dark:bg-gray-900 justify-center">
      <div className="relative overflow-hidden w-full">
        <Hero
          headerText={`Product ${slug} not found`}
          sourcePath={"/public/myproductsbackground.mp4"}
          paragraphText="You were probably looking for a different page or product. Please check the URL or return to the homepage."
        />
      </div>
    </div>
  );
}
