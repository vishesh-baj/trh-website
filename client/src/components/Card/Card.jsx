import React from "react";
import { motion } from "framer-motion";

const Card = ({ heading, children }) => {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 10 }}
      transition={{ type: "spring", stiffness: 240 }}
      className="rounded-xl bg-opacity-50 backdrop-blur-2xl bg-teal-50 shadow-xl"
    >
      <div className="p-6 sm:p-16">
        <motion.h2 className="mb-8 text-4xl text-white font-bold">
          {heading}
        </motion.h2>
        {children}
      </div>
    </motion.div>
  );
};

export default Card;
