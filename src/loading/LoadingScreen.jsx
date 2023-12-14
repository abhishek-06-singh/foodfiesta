import React from "react";
import logo from "../images/logo2.png";
import { motion } from "framer-motion";
import { GiFoodTruck } from "react-icons/gi";

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center flex-col p-20 bg-gray-100 w-screen bg-opacity-25 overflow-hidden">
      <motion.img
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
        src={logo}
        className=" h-32 mt-40"
      />
      <motion.div
        className="flex mt-40"
        initial={{ x: -500, opacity: 0 }}
        animate={{ x: 0, opacity: 2 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <h2 className="text-2xl">Your Food On the Way...</h2>
        <GiFoodTruck className="ml-4 text-rose-400 text-4xl" />
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
