import { useAnimate, useInView } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function useModal() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const { push } = useRouter();
  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: 1 }, { duration: 1 });
    }
  }, [isInView]);

  useEffect(() => {
    const backgroundElement = document.getElementById("homeBg");
    const handleCloseModal = async (e: any) => {
      await animate(scope.current, { opacity: 0 }, { duration: 1 });
      push("/");
    };
    document.getElementById("homeBg")?.classList.add("blur-sm");
    backgroundElement?.addEventListener("click", handleCloseModal);
    return () => {
      document.getElementById("homeBg")?.classList.remove("blur-sm");
      backgroundElement?.removeEventListener("click", handleCloseModal)
    };
  }, []);

  return { scope, animate };
}
