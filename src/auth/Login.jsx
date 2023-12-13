import React, { useState } from "react";
import SideImg from "../images/background8.png";
import logo from "../images/logo2.png";
import { motion } from "framer-motion";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    validateField(name, value);
  };

  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case "email":
        setErrors({
          ...errors,
          email: validateEmail(value),
        });
        break;
      case "password":
        setErrors({
          ...errors,
          password: validatePassword(value),
        });
        break;
      default:
        break;
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? "" : "Invalid email address";
  };

  const validatePassword = (password) => {
    return password.length >= 6 ? "" : "Password must be at least 6 characters";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isFormValid = Object.keys(formData).every((field) => {
      return validateField(field, formData[field]) === "";
    });

    if (isFormValid) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex h-screen bg-white"
    >
      <img
        className="hidden lg:block object-left rounded-tr-full overflow-hidden m-0 p-0"
        src={SideImg}
        alt="Your Alt Text"
      />

      <div className="w-full lg:w-1/2 p-8 flex items-center justify-center">
        <div className="max-w-md w-full">
          <div className="mb-6 text-end ">
            <motion.img
              initial={{ y: -1500, opacity: 0 }}
              animate={{ y: 0, opacity: 5 }}
              transition={{ type: "spring", duration: 1 }}
              src={logo}
              alt="Logo"
              className="mx-auto h-28"
            />
          </div>

          <motion.h2
            className="text-2xl font-semibold text-gray-800 text-center mb-6"
            initial={{ x: -500, opacity: 0 }}
            animate={{ x: 0, opacity: 2 }}
            transition={{ type: "spring", duration: 1 }}
          >
            Sign in to your account
          </motion.h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email Address/Username
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border p-2 rounded-full h-12 ${
                  errors.email ? "border-red-400" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full border p-2 rounded-full h-12 ${
                  errors.password ? "border-red-400" : ""
                }`}
              />
              {errors.password && (
                <p className="text-red-400 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            <div className="mb-4 text-right">
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot Password?
              </a>
            </div>

            <div className="mb-6">
              <button
                type="submit"
                className="w-full bg-rose-600 text-white p-2 hover:bg-rose-700 rounded-full h-12"
              >
                Log In
              </button>
            </div>

            <div className="text-center mb-4">
              <span className="text-gray-600">or</span>
            </div>
            <button
              type="button"
              className="w-3/4 bg-gray-200 text-black p-2 hover:bg-orange-200 hover:text-black flex items-center justify-center rounded-3xl h-12 ml-14"
            >
              Login with Google
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
