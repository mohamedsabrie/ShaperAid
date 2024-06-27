"use client";

import useModal from "@/hooks/useModal";
import React, { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { XMarkIcon } from "@heroicons/react/24/outline";

function Modal({ children }: { children: ReactNode }) {
  const { push } = useRouter();
  const { scope, animate } = useModal();

  return (
    <div className=" sm:py-12 py-4 px-4 ">
      <dialog 
        open
        ref={scope}
        className="relative top-1/2   opacity-0 z-20  bg-[#1b1f22d9]  text-white outline-none max-w-[640px] pt-10 sm:pt-[72px] px-4 sm:px-10 pb-6 "
      >
        <XMarkIcon
          onClick={async() => {
            await animate(scope.current, { opacity: 0}, {duration: 1});
            push("/")
          } }
          className="absolute top-3 right-3 text-white h-6 sm:h-10 m-2 cursor-pointer"
        />
        {children}
      </dialog>
    </div>
  );
}

export default Modal;
