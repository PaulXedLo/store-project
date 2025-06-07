import type { Product } from "./Products";

export type PageProps = {
  products: Product[];
  productPage: number;
  setProductPage: (page: number) => void;
  showPageOptions: boolean;
  setShowPageOptions: (show: boolean) => void;
  handlePageChange: () => void;
  productsPerPage: number;
};
