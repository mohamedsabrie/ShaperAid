import { useAnimate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function useModal() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: 1 }, { duration: 1 });
    }
  }, [isInView]);

  useEffect(() => {
    document.querySelector(".home-bg")?.classList.add("blur-sm");
    return () => {
      document.querySelector(".home-bg")?.classList.remove("blur-sm");
    };
  }, []);

  useEffect(() => {
    const modal = scope.current;
    const handleCloseModal = (e: any) => {
      const dialogDimensions = modal?.getBoundingClientRect();
      console.log(dialogDimensions, "dialogDimensions");
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
    // return () => {
    //   modal?.removeEventListener("click", handleCloseModal);
    // };
  }, []);

  return { scope, animate };
}
