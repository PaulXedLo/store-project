import { UseFormRegister } from "react-hook-form";
import type { ProductFormData } from "../components/addproduct/Form";

export type FormInputProps = {
  name: keyof ProductFormData;
  as?: React.ElementType;
  label: string;
  register: UseFormRegister<ProductFormData>;
  error?: { message?: string };
  type?: string;
};
