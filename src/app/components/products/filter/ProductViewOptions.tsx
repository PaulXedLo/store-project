export default function ProductViewOptions() {
  return (
    <div className="flex flex-col gap-2 items-center justify-between p-4 bg-white dark:bg-gray-800 shadow-md">
      <div className="flex items-center justify-around  w-full">
        <div className="flex flex-col items-center">
          <label className="text-sm text-gray-600 font-bold dark:text-gray-400 mb-1">
            View:
          </label>
          <select className="text-sm px-4 text-center border-b-2 border-slate-400 py-1  text-gray-600 dark:text-gray-400">
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
          </select>
        </div>
        <div className="flex flex-col items-center">
          <label className="text-sm text-gray-600 font-bold dark:text-gray-400 mb-1">
            Filter:
          </label>
          <select className="text-sm text-center border-b-2 border-slate-400 py-1  text-gray-600 dark:text-gray-400">
            Sort by:
            <option value="relevance">Relevance</option>
            <option value="price-asc">Price: Low to High</option>
          </select>
        </div>
      </div>
    </div>
  );
}
