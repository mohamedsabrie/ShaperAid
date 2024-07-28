"use client";

import React from "react";
import { motion } from "framer-motion";
import { useAppContext } from "@/app/Providers";

function Content() {
  const { homeAnimate, setHomeAnimate } = useAppContext();
  console.log(homeAnimate, "homeAnimate")
  return (
    <motion.div
    
      transition={{
        delay:homeAnimate ?  0.5 : 0,
        ease: "easeInOut",
        duration: 1,
      }}
      onAnimationComplete={() => {
        setHomeAnimate(false);
      }}
      initial={{ height: homeAnimate ? 0 : "auto" }}
      whileInView={{ height: "auto" }}
      className="overflow-hidden"
    >
      <div className=" py-8 sm:py-12 sm:px-8 flex flex-col gap-y-3 sm:gap-y-5 items-center justify-center text-center">
        <h1 className="font-semibold text-2xl sm:text-4xl">SHAPERAID</h1>
        <p className="text-[11px] sm:text-[13px] font-light tracking-[0.2em] ">
          A GLOBAL SHAPERS CROSS-HUB COLLABORATION, UNITING HEARTS AND RESOURCES
          TO RAISE FUNDS FOR CRUCIAL HUMANITARIAN AID IN PALESTINE.
        </p>
      </div>
    </motion.div>
  );
}

export default Content;
