import React, { useState, useEffect } from "react";
import axios from "axios";

const IMG_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

const BannerSlider = () => {
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setStatus("loading");
      try {
        const response = await axios.get(
          "https://abhishek-06-singh.github.io/restro_api/resdata.json"
        );
        const imageIds =
          response.data.data.cards[0].card.card.imageGridCards.info.map(
            (info) => info.imageId
          );
        setImages(imageIds);
        setStatus("succeeded");
      } catch (error) {
        setError(error.message);
        setStatus("failed");
      }
    };

    fetchData();
  }, []);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="flex flex-wrap justify-center lg:space-x-7 mt-10">
      {images.map((imgId) => (
        <div
          key={imgId}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2"
        >
          <img
            className="w-full h-auto object-cover"
            src={`${IMG_URL}${imgId}`}
            alt={`Image ${imgId}`}
          />
        </div>
      ))}
    </div>
  );
};

export default BannerSlider;
