import { useEffect, useRef } from "react";

export default function useModal() {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const modal = modalRef.current;
    modal && modal.showModal();
    const handleCloseModal = (e: any) => {
      const dialogDimensions = modal?.getBoundingClientRect();
      console.log(dialogDimensions);
      if (
        dialogDimensions &&
        (e.clientX < dialogDimensions.left ||
          e.clientX > dialogDimensions.right ||
          e.clientY < dialogDimensions.top ||
          e.clientY > dialogDimensions?.bottom)
      ) {
        modal && modal.close();
      }
    };
    modal?.addEventListener("click", handleCloseModal);
    return () => {
      modal?.removeEventListener("click", handleCloseModal);
    };
  }, []);

  return {modalRef}
}
