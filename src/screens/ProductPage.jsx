import React, { useState, useEffect } from "react";
import BannerSlider from "../components/BannerSlider";
import HeroProductPage from "../components/HeroProductPage";
import axios from "axios";
// import { Disclosure } from "@headlessui/react";
import DishCarousel from "../components/DishCarousel";
import Card from "../beta/Card";

const ProductPage = () => {
  const [bannerData, setBannerData] = useState([]);
  const [bannerStatus, setBannerStatus] = useState("idle");
  const [bannerError, setBannerError] = useState(null);
  const [sliderData, setSliderData] = useState([]);
  const [sliderStatus, setSliderStatus] = useState("idle");
  const [sliderError, setSliderError] = useState(null);
  const [restroData, setRestroData] = useState([]);
  console.log("restroData", restroData);
  const [restroStatus, setRestroStatus] = useState("idle");
  const [restroError, setRestroError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setBannerStatus("loading");
      setSliderStatus("loading");
      setRestroStatus("loading");
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
        const restaurants =
          response.data.data.cards[5].card.card.gridElements.infoWithStyle.restaurants.map(
            (restaurants) => restaurants.info
          );

        setBannerData(bannerimageIds);
        setSliderData(sliderImgIds);
        setRestroData(restaurants);
        setRestroStatus("succeeded");
        setBannerStatus("succeeded");
        setSliderStatus("succeeded");
      } catch (error) {
        setBannerError(error.message);
        setBannerStatus("failed");
        setSliderError(error.message);
        setSliderStatus("failed");
        setRestroError(error.message);
        setRestroStatus("failed");
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

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:p-40 md:p-30 p-16">
        <Card resdata={restroData} status={restroStatus} error={restroError} />
      </div>
    </>
  );
};

export default ProductPage;
