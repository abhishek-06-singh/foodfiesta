import React, { useState, useEffect } from "react";
import SideImg from "../images/background8.png";
import logo from "../images/logo2.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserData } from "../store/userSlice";
import { motion } from "framer-motion";
import LoadingScreen from "../loading/LoadingScreen";
import { FaUser } from "react-icons/fa";
import UploadPhotoModal from "../modals/UploadPhotoModal";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [googleUserData, setGoogleUserData] = useState({
    name: "",
    picture: "",
    email: "",
  });
  const handleGoogleLogin = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    const { name, picture, email } = decoded;

    setGoogleUserData({
      name,
      picture,
      email,
    });

    localStorage.setItem("GoogleLoginName", name);
    localStorage.setItem("GoogleLoginPicture", picture);
    localStorage.setItem("GoogleLoginEmail", email);

    setIsLoading(true);
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
      className="flex h-screen bg-white overflow-hidden"
    >
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <img
            className="hidden lg:block object-left rounded-tr-[20rem] overflow-hidden m-0 p-0 "
            src={SideImg}
            alt="Your Alt Text"
          />

          <div className="w-full lg:w-1/2 p-8 flex items-center justify-center">
            <div className="max-w-md w-full">
              <div className="mb-6 text-start ">
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
                className="text-4xl font-semibold text-gray-800 text-left mb-6"
                initial={{ x: -500, opacity: 0 }}
                animate={{ x: 0, opacity: 2 }}
                transition={{ type: "spring", duration: 1 }}
              >
                Delightful Bites Await! Join the Food Fiesta with Google Login
                Magic!
              </motion.h2>

              <form>
                <GoogleOAuthProvider clientId="866247817851-bqld33h294eqceglh7i1bajc4orn3fvg.apps.googleusercontent.com">
                  <motion.div
                    className="text-4xl font-semibold text-gray-800 text-center mt-10"
                    initial={{ y: +1500, opacity: 0 }}
                    animate={{ y: 0, opacity: 2 }}
                    transition={{ type: "spring", duration: 2 }}
                  >
                    <GoogleLogin
                      theme="filled_blue"
                      shape="circle"
                      width={"5rem"}
                      onSuccess={handleGoogleLogin}
                      onError={() => {
                        console.log("Login Failed");
                      }}
                    />
                  </motion.div>
                </GoogleOAuthProvider>

                <div className="mt-10">
                  or{" "}
                  <span
                    className="text-bold text-rose-400 text-md  hover:scale-105 transition-all duration-200 cursor-pointer"
                    onClick={() => navigate("/signup")}
                  >
                    Signup{" "}
                  </span>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default Login;
