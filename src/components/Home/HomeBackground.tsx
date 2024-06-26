"use client"

import React from "react";
import { motion } from "framer-motion";

function HomeBackground() {
  return (
    <motion.div
      transition={{
        ease: "easeOut",
        duration: 1,
        delay: 2,
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      id="homeBg"
      className="absolute right-0 left-0 h-full w-full  bg-home-bg bg-cover "
    >
      <div className="absolute right-0 left-0 h-full w-full bg-black bg-opacity-40" />
    </motion.div>
  );
}

export default HomeBackground;
