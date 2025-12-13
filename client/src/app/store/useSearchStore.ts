import { create } from "zustand";

export const useSearchStore = create<{
  search: string;
  setSearch: (value: string) => void;
}>((set) => ({
  search: "",
  setSearch: (value) => set({ search: value }),
}));
