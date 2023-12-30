import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const IMG_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

const BannerSlider = ({ data, status, error }) => {
  if (status === "loading") {
    return (
      <div className="flex flex-wrap justify-center lg:space-x-7 mt-10 mb-5">
        <Skeleton
          width={350}
          height={230}
          style={{ margin: "0.5rem", borderRadius: "20px" }}
        />
        <Skeleton
          width={350}
          height={230}
          style={{ margin: "0.5rem", borderRadius: "20px" }}
        />
        <Skeleton
          width={350}
          height={230}
          style={{ margin: "0.5rem", borderRadius: "20px" }}
        />
      </div>
    );
  }
  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="mt-10">
      <span className="text-3xl font-bold mb-5 block lg:pl-44 md:pl-20">
        Best offers for you ➪
      </span>
      <div className="flex flex-wrap justify-center lg:space-x-7">
        {data.map((imgId) => (
          <div
            key={imgId}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2 mb-5"
          >
            <img
              className="w-full h-auto object-cover hover:scale-105 duration-300 rounded-xl cursor-pointer"
              src={`${IMG_URL}${imgId}`}
              alt={`Image ${imgId}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
