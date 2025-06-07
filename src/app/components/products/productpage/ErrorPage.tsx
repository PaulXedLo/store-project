export default function ErrorPage() {
  return (
    <section className="bg-gray-200 dark:bg-gray-900 min-h-100 flex items-center justify-center">
      <div className="text-center flex-col flex gap-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          No Products Available
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Please check back later.
        </p>
      </div>
    </section>
  );
}
