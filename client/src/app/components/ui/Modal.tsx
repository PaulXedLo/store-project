"use client";
import { useModal } from "@/app/hooks/useModal";
import Button from "./Button";

export default function Modal() {
  const { closeModal } = useModal();

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black/20 z-50"></div>
      <div className="p-10 md:p-0 fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white flex flex-col items-center dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-md w-full">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Will come back later
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            This modal is a placeholder for future content. It will be updated
            soon with more information.
          </p>
          <span onClick={closeModal}>
            <Button>Close modal</Button>
          </span>
        </div>
      </div>
    </>
  );
}
