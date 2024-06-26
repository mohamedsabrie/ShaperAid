"use client";

import React from "react";
import { motion } from "framer-motion";

function Content() {
  return (
    <motion.div
      transition={{
        delay: 0.5,
        ease: "easeInOut",
        duration: 1,
      }}
      initial={{ height: 0 }}
      whileInView={{ height: "auto" }}
      className="overflow-hidden"
    >
      <div className=" py-8 sm:py-12 sm:px-8 flex flex-col gap-y-3 sm:gap-y-5 items-center justify-center text-center">
        <h1 className="font-semibold text-2xl sm:text-4xl">IHSANAID</h1>
        <p className="text-[11px] sm:text-[13px] font-light">
          A GLOBAL SHAPERS CROSS-HUB COLLABORATION, UNITING HEARTS AND RESOURCES
          TO RAISE FUNDS FOR CRUCIAL HUMANITARIAN AID IN PALESTINE.
        </p>
      </div>
    </motion.div>
  );
}

export default Content;
