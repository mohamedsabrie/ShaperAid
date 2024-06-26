"use client";

import React, { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

function ContentWrapper({ children }: { children: ReactNode }) {
  return (
    <AnimatePresence>
      <motion.div
        key="home-content"
        id = "home-content"
        transition={{
          ease: "easeInOut",
          duration: 0.5,
          delay: 0.5,
          
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative max-w-6xl mx-auto  z-10 text-white flex flex-col min-h-screen    items-center justify-evenly px-8 py-12 w-full h-full "
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default ContentWrapper;
