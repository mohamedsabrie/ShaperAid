"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

function ContentWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.div
      transition={{
        ease: "easeInOut",
        duration: 0.5,
        delay: 0.5,
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="relative max-w-6xl mx-auto  z-10 text-white flex flex-col min-h-screen    items-center justify-evenly px-8 py-12 w-full h-full "
    >
      {children}
    </motion.div>
  );
}

export default ContentWrapper;
