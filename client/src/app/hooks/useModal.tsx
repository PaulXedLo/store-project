import { create } from "zustand";
import { ModalState } from "../types/Modal";
// simple modal state management using zustand for future scaling
export const useModal = create<ModalState>((set) => ({
  isOpen: false,
  content: null,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));
