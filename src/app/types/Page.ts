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

export type NextPage = {
  visibility: boolean;
  productPage: number;
  showPageOptions: boolean;
  setShowPageOptions: (value: boolean) => void;
  handlePageChange: () => void;
  filteredCount: number;
  productsPerPage: number;
};
