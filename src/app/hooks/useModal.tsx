import { create } from "zustand";

type ModalState = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export const useModal = create<ModalState>((set) => ({
  isOpen: false,
  content: null,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));
