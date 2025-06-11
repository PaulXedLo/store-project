import { useProductStore } from "@/app/store/useProductStore";
import SearchInput from "../../ui/Search";
import { Category } from "@/app/types/Products";
// This component provides options for viewing and filtering products on a product page.
export default function ProductViewOptions() {
  const { category, setCategory, filterByCategory } = useProductStore();
  console.log("filterByCategory from store:", filterByCategory);
  return (
    <div className="flex flex-col gap-2 items-center justify-between p-4 bg-white dark:bg-gray-800 shadow-md">
      <div className="flex items-center justify-around w-full">
        <div className="flex flex-col items-center">
          {/* Dropdown for selecting product category */}
          <label className="text-sm text-gray-600 font-bold dark:text-gray-400 mb-1">
            View:
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as Category)}
            className="text-sm px-4 text-center border-b-2 border-slate-400 py-1  text-gray-600 dark:text-gray-400"
          >
            {filterByCategory.map((cat) => (
              <option className="text-black" key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        {/* Search input for larger screens */}
        <div className="hidden md:flex  items-center justify-center mt-4">
          <SearchInput />
        </div>
        <div className="flex flex-col items-center">
          {/* Dropdown for filtering products by Price */}
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
      {/* Mobile search input */}
      <div className="md:hidden flex items-center justify-center mt-4">
        <SearchInput />
      </div>
    </div>
  );
}
