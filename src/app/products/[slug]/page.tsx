import React from "react";
import UnknownProductPage from "../../components/ui/NotFound";
type Params = Promise<{ slug: string }>;
export default async function ProductPage({ params }: { params: Params }) {
  const { slug } = await params;
  return (
    <div className="flex-1 flex h-auto bg-gray-200 not-odd:bg-gray-200 dark:bg-gray-900  justify-center">
      <UnknownProductPage slug={slug} />
    </div>
  );
}
