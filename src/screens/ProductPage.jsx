import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import lottie1 from "../images/lottie1.json";
import lottie2 from "../images/lottie2.json";
import lottie3 from "../images/lottie3.json";
import lottie4 from "../images/lottie4.json";
import "./extra.css";

import { motion, useAnimation } from "framer-motion";

const ProductPage = () => {
  const [lottieOptions, setLottieOptions] = useState({
    loop: true,
    autoplay: true,
    animationData: lottie1,
  });

  const spanTextOptions = [
    "Indulge in Delight",
    "Taste Extravaganza",
    "Culinary Paradise",
    "Discover Divine",
  ];

  const [currentSpanIndex, setCurrentSpanIndex] = useState(0);

  const controls = useAnimation();

  useEffect(() => {
    const lottieArray = [lottie1, lottie2, lottie3, lottie4];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % lottieArray.length;
      setLottieOptions((prevOptions) => ({
        ...prevOptions,
        animationData: lottieArray[currentIndex],
      }));

      setCurrentSpanIndex(
        (prevIndex) => (prevIndex + 1) % spanTextOptions.length
      );

      controls.start({
        opacity: 0,
        y: 20,
        transition: { duration: 0.5 },
      });

      setTimeout(() => {
        controls.start({
          opacity: 1,
          y: 0,
        });
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [controls]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center lg:h-screen md:h-fit sm:h-fit bg-gradient-to-bl from-rose-50 via-indigo-100 to-white text-black lg:p-40 md:p-20 sm:p-10">
      <div className="md:w-1/2 md:order-1 p-4 md:p-8 text-center md:text-left mt-28 ">
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 lg:mt-0 md:mt-0 sm:mt-12">
          <motion.span
            // className="text-rose-600 text-3xl md:text-5xl lg:text-6xl font-semibold block mb-2"
            className="title-product"
            animate={controls}
          >
            {spanTextOptions[currentSpanIndex]}
          </motion.span>
          Welcome to Food Fiesta
        </h1>
        <p className="text-lg">
          Your Ultimate Culinary Journey awaits you. Explore the world of
          flavors and indulge in the art of gastronomy.
        </p>
        <button className="bg-rose-600 text-white font-bold py-2 px-4 mt-4 rounded-xl">
          Explore Now
        </button>
      </div>

      <div className="md:w-1/2 md:order-2 p-4">
        <Lottie options={lottieOptions} height={400} width={300} />
      </div>
    </div>
  );
};

export default ProductPage;
