import React from "react";
import { FaStar } from "react-icons/fa";
import { FaMapMarkerAlt, FaUtensils } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const IMG_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

const ProductCard = ({ resdata, status, error }) => {
  if (status === "failed") {
    <div>failed</div>;
  }
  if (status === "loading") {
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
    </div>;
  }

  if (status === "succeeded") {
    return (
      <>
        {resdata.map((data) => (
          <div
            key={data.id}
            className="max-w-sm bg-white rounded-lg w-72 h-fit hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out"
          >
            <a href="#">
              <img
                className="rounded-lg w-72 h-40 object-cover"
                src={`${IMG_URL}${data.cloudinaryImageId}`}
                alt={data.name}
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h4 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                  {data.name.length > 20
                    ? `${data.name.substring(0, 20)}...`
                    : data.name}
                </h4>
              </a>
              <p className="flex mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm">
                <FaMapMarkerAlt className="text-xl text-center mt-1 mr-2 text-amber-400" />{" "}
                {data.locality}, {data.areaName}
              </p>
              {data.cuisines && (
                <p className="flex mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm">
                  <FaUtensils className="text-xl text-center mt-1 mr-2 text-rose-300" />{" "}
                  Cuisines: {data.cuisines.join(", ").substring(0, 30)}
                  {data.cuisines.join(", ").length > 30 ? "..." : ""}
                </p>
              )}
              <p className="flex mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm">
                <FaStar
                  className={`text-xl text-center mr-2 ${
                    parseFloat(data.avgRatingString) > 4.0
                      ? "text-green-500"
                      : "text-yellow-500"
                  }`}
                />
                Avg Rating: {data.avgRatingString} ({data.totalRatingsString})
              </p>
            </div>
          </div>
        ))}
      </>
    );
  }
};

export default ProductCard;
