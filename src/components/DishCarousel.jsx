import React from "react";
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";
import Skeleton from "react-loading-skeleton";

const IMG_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

const DishCarousel = ({ images, status, error }) => {
  const responsiveSettings = [
    {
      breakpoint: "1024px",
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: "768px",
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: "560px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  if (status === "loading") {
    return (
      <div className="w-3/4 overflow-hidden mt-20 h-56 mx-auto mb-20 bg-gray-50">
        <span className="text-3xl font-bold mb-5 block">
          What's on your mind?
        </span>
        <div className=" flex gap-28">
          {Array.from({ length: 5 }, (_, index) => (
            <div key={index} className="p-m-2 ">
              <Skeleton width={130} height={130} circle={true} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  if (status === "succeeded") {
    return (
      <>
        <div className="w-3/4 overflow-hidden mt-20 h-48 mx-auto mb-20">
          <span className="text-3xl font-bold mb-5 block">
            What's on your mind?
          </span>
          <Carousel
            value={images}
            itemTemplate={(imgSrc) => (
              <div className="p-m-2">
                <img
                  src={`${IMG_URL}${imgSrc}`}
                  alt={`Slide`}
                  className="w-full h-36 object-cover bg-gray-50"
                />
              </div>
            )}
            numVisible={5}
            numScroll={1}
            responsiveOptions={responsiveSettings}
          />
        </div>
        <div className="w-4/5 h-[1px] bg-gray-300" />
      </>
    );
  }
};

export default DishCarousel;
