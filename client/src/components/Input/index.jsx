import { motion } from "framer-motion";
import React from "react";
const Input = ({ label, type, id, handleChange }) => {
  return (
    <motion.div initial={{ y: -20 }} animate={{ y: 0 }} className="space-y-2">
      <label htmlFor={id} className="text-white">
        {label}
      </label>
      <input
        onChange={handleChange}
        type={type}
        name={type}
        id={id}
        className="input"
      />
    </motion.div>
  );
};

export default Input;
