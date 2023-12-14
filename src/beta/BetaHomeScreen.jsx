import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import DeveloperAvtar from "../images/dev.jpeg";
import { useSelector } from "react-redux";

const BetaHomeScreen = () => {
  const userData = useSelector((state) => state.user);
  const customerAvatar = localStorage.getItem("customerAvatar");

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNo = "7000201383";

    const messageHeader =
      "🚀 Hello, I visited your app as a Beta user now give me my return revards Abhishek (Most handsome man since the human Civilization) . Here are my details: 🚀";

    const formDataText =
      `🧔🏻Visitor Name: ${userData.name}\n` + `📭Email: ${userData.email}\n`;

    const finalMessage = `${messageHeader}\n\n${formDataText}`;

    const encodedFormData = encodeURIComponent(finalMessage);

    window.location.replace(
      `https://api.whatsapp.com/send?phone=${phoneNo}&text=${encodedFormData}`
    );
  };

  return (
    <div className="bg-gray-100 h-screen flex flex-col justify-between items-center">
      <div className="flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 mt-10"
        >
          {customerAvatar && (
            <img
              src={customerAvatar}
              alt="Customer Avatar"
              className="w-40 h-40 rounded-full"
            />
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-2xl font-semibold mb-2">
            Welcome {userData.name}
          </h1>
          <p className="text-gray-600 p-4 left-20 pl-1 pr-1 lg:pl-40 lg:pr-40">
            Thank you for being a part of our development phase. Please redeem
            your reward as a beta user. keep helping Abhishek for the testing
            this app now as you came this far i have some return gift for you
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8"
        >
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Choose your beta user reward:
          </label>
          <select className="w-full p-2 border border-gray-300 rounded-md">
            <option value="1">1 Day Beta User - ₹100</option>
            <option value="30">1 Month Beta User - ₹1000</option>
          </select>
        </motion.div>
        <button
          onClick={handleSubmit}
          className="px-5 py-5 rounded-full w-96 bg-rose-500 bg-opacity-70 border-spacing-1 mt-10 text-white text-lg font-bold hover:bg-rose-300"
        >
          Redeem Reward Buddy 😊
        </button>
      </div>

      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-8 flex flex-col items-center justify-center p-5 bg-sky-950 w-full"
      >
        <img
          src={DeveloperAvtar}
          alt="Developer Avatar"
          className="w-20 h-20 rounded-full mb-4"
        />
        <p className="text-gray-100 font-semibold text-lg">
          <span>Developer , </span>
          <span className="text-md text-indigo-200">
            Abhishek Singh Chauhan{" "}
          </span>
        </p>

        <p className="text-gray-100 text-sm">
          Softwere Developer | Passionate about creating amazing web
          experiences.
        </p>
        <div className="mt-4">
          <a
            href="https://github.com/abhishek-06-singh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            GitHub
          </a>
          {" | "}
          <a
            href="https://www.linkedin.com/in/abhishek-singh-chauhan-458522261/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </motion.footer>
    </div>
  );
};

export default BetaHomeScreen;
