// Product type representing a product in the store
export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};
// Category type for product categories
export type Category =
  | "all"
  | "men's clothing"
  | "women's clothing"
  | "jewelery"
  | "electronics";
// Sort option type for sorting products
export type SortOption =
  | "relevance"
  | "latest"
  | "price - low to high"
  | "price - high to low";
// ProductState type representing the state of products in the store
export type ProductState = {
  products: Product[];
  productsPerPage: number;
  showPageOptions: boolean;
  category: Category;
  myproducts: Product[];
  sortOption: SortOption;
  sortBy: SortOption[];
  filterByCategory: Category[];
  productPage: number;
  loading: boolean;
  setShowPageOptions: (show: boolean) => void;
  setSortOption: (sortOption: SortOption) => void;
  setCategory: (category: Category) => void;
  setLoading: (loading: boolean) => void;
  setProductPage: (page: number) => void;
  fetchProducts: () => Promise<void>;
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
};
