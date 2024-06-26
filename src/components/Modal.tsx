"use client";

import useModal from "@/hooks/useModal";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { XMarkIcon } from "@heroicons/react/24/outline";

function Modal({ children }: { children: ReactNode }) {
  const { back } = useRouter();
  const { modalRef } = useModal();
  return (
    <motion.dialog
      onClose={back}
      ref={modalRef}
      key="modal"
      transition={{
        ease: "easeInOut",
        duration: 1,
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative bg-[#1b1f22d9] text-white outline-none h-[400px] w-[400px] pt-[72px]  px-10 pb-6"
    >
        <XMarkIcon
          onClick={() => modalRef.current?.close()}
          className="absolute top-3 right-3 text-white h-10 m-2 cursor-pointer"
        />
      {children}
    </motion.dialog>
  );
}

export default Modal;
