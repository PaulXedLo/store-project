import { UseFormRegister } from "react-hook-form";

type ProductFormData = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export type FormInputProps = {
  name: keyof ProductFormData;
  as?: React.ElementType;
  label: string;
  register: UseFormRegister<ProductFormData>;
  error?: { message?: string };
  type?: string;
};
