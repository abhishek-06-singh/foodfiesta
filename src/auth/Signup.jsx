import React, { useState } from "react";
import SideImg from "../images/background9.png";
import logo from "../images/logo2.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserData } from "../store/userSlice";
import { motion } from "framer-motion";
import LoadingScreen from "../loading/LoadingScreen";
import { FaUser } from "react-icons/fa";
import UploadPhotoModal from "../modals/UploadPhotoModal";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      case "name":
        setErrors({
          ...errors,
          name: validateName(value),
        });
        break;
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
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? "" : "Invalid email address";
  };

  const validatePassword = (password) => {
    return password.length >= 6 ? "" : "Password must be at least 6 characters";
  };

  const validateName = (name) => {
    return name.length >= 3 ? "" : "Name must be at least 3 characters";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isFormValid = Object.values(errors).every((error) => error === "");

    if (isFormValid) {
      setIsModalOpen(true);
    } else {
      console.log("Form has errors. Please fix them before submitting.");
    }
  };

  const handleUpload = (file) => {
    // Handle file upload logic here
    setFormData({ ...formData, profilePhoto: file });
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsLoading(true);

    // Dispatch the action to update user data in the Redux store
    dispatch(setUserData(formData));

    setTimeout(() => {
      setIsLoading(false);
      navigate("/home");
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex h-screen bg-[#F9FBF9]"
    >
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <img
            className="hidden lg:block object-left rounded-tr-[20rem] overflow-hidden m-0 p-0 w-1/2"
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
                className="text-xl font-semibold text-gray-800 text-center mb-6"
                initial={{ x: -500, opacity: 0 }}
                animate={{ x: 0, opacity: 2 }}
                transition={{ type: "spring", duration: 1 }}
              >
                Sign Up
              </motion.h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full border p-2 rounded-full h-12 ${
                      errors.name ? "border-red-400" : ""
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Email Address
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

                <div className="mb-4 relative">
                  <label
                    htmlFor="password"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`w-full border p-2 rounded-full h-12 ${
                        errors.password ? "border-red-400" : ""
                      }`}
                    />
                    <button
                      type="button"
                      onClick={handleTogglePassword}
                      className="absolute  right-5 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    >
                      {showPassword ? (
                        <LuEyeOff className="text-rose-800 text-xl " />
                      ) : (
                        <LuEye className="text-rose-800 text-xl " />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.password}
                    </p>
                  )}
                </div>

                <div
                  className="text-sm text-right text-rose-400 cursor-pointer hover:scale-105 transition-all duration-200 mb-10"
                  onClick={() => navigate("/")}
                >
                  Already have an account?
                </div>

                <div className="mb-6">
                  <button
                    type="submit"
                    className="w-full bg-rose-600 text-white p-2 hover:bg-rose-700 rounded-full h-12"
                  >
                    Log In
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* Render the UploadPhotoModal */}
          <UploadPhotoModal
            isOpen={isModalOpen}
            onClose={handleModalClose}
            onUpload={handleUpload}
          />
        </>
      )}
    </motion.div>
  );
};

export default Signup;
