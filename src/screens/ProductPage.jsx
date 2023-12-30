import React, { useState, useEffect } from "react";
import BannerSlider from "../components/BannerSlider";
import HeroProductPage from "../components/HeroProductPage";
import axios from "axios";
// import { Disclosure } from "@headlessui/react";
import DishCarousel from "../components/DishCarousel";

const ProductPage = () => {
  const [bannerData, setBannerData] = useState([]);
  const [bannerStatus, setBannerStatus] = useState("idle");
  const [bannerError, setBannerError] = useState(null);
  const [sliderData, setSliderData] = useState([]);
  console.log(sliderData, "sliderData");
  const [sliderStatus, setSliderStatus] = useState("idle");
  const [sliderError, setSliderError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setBannerStatus("loading");
      setSliderStatus("loading");
      try {
        const response = await axios.get(
          "https://abhishek-06-singh.github.io/restro_api/resdata.json"
        );
        const bannerimageIds =
          response.data.data.cards[0].card.card.imageGridCards.info.map(
            (info) => info.imageId
          );
        const sliderImgIds =
          response.data.data.cards[1].card.card.imageGridCards.info.map(
            (info) => info.imageId
          );

        setBannerData(bannerimageIds);
        setSliderData(sliderImgIds);
        setBannerStatus("succeeded");
        setSliderStatus("succeeded");
      } catch (error) {
        setBannerError(error.message);
        setBannerStatus("failed");
        setSliderError(error.message);
        setSliderStatus("failed");
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <HeroProductPage />
      <div className="grid place-items-center">
        <BannerSlider
          data={bannerData}
          status={bannerStatus}
          error={bannerError}
        />
      </div>
      <div className="grid place-items-center">
        <DishCarousel
          images={sliderData}
          status={sliderStatus}
          error={sliderError}
        />
      </div>
    </>
  );
};

export default ProductPage;
