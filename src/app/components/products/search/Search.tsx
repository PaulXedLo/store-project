import { Search } from "lucide-react";
export default function SearchInput() {
  return (
    <>
      <Search className="text-gray-600 dark:text-gray-400" />
      <input
        type="search"
        placeholder="Search products..."
        className="ml-2  text-sm px-4 py-1 border-b-2 border-slate-400 text-gray-600 dark:text-gray-400 focus:outline-none focus:border-purple-500"
      />
    </>
  );
}
