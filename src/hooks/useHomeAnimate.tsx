import { useAnimate } from "framer-motion";
import { useEffect } from "react";

export default function useHomeAnimate() {
  const [bgScope, bgAnimate] = useAnimate();
  const [contentScope, contentAnimate] = useAnimate();
  async function myAnimation() {
    await bgAnimate(bgScope.current, { opacity: 1 }, { duration: 3, delay:0.5 });
    contentAnimate(contentScope.current, { opacity: 1 }, { duration: 1, delay:0.5 });
  }
  useEffect(() => {
    myAnimation();
  }, []);

  return { bgScope, contentScope };
}
