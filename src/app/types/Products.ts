export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};
export type ProductState = {
  products: Product[];
  productsPerPage: number;
  showPageOptions: boolean;
  productPage: number;
  loading: boolean;
  setShowPageOptions: (show: boolean) => void;
  setLoading: (loading: boolean) => void;
  setProductPage: (page: number) => void;
  fetchProducts: () => Promise<void>;
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
};
