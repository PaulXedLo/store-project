import { create } from "zustand";

type ModalState = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};
// simple modal state management using zustand for future scaling
export const useModal = create<ModalState>((set) => ({
  isOpen: false,
  content: null,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));
