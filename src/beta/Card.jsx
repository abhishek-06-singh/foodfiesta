import React, { useState } from "react";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import Res from "../images/res.avif";
const ProductCard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const product = {
    img: "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Wellness shots smoothie",
    description:
      "Here are the biggest smoothie product Wellness shots smoothie",
    fulldescription:
      "Here are the biggest smoothie product Wellness shots smoothie. Dive into a world of delightful flavors and nourishing ingredients. Our Wellness Shots Smoothie is a perfect blend of fresh fruits, vibrant greens, and superfoods that not only tantalize your taste buds but also provide a boost of essential nutrients. Whether you're a fitness enthusiast or simply looking for a delicious and nutritious treat, this smoothie is designed to satisfy your cravings and support your well-being. Indulge in a wholesome experience with every sip, and elevate your wellness journey with our handcrafted Wellness Shots Smoothie.Don't miss out on the opportunity to treat yourself to a refreshing and revitalizing beverage that not only tastes amazing but also contributes to your overall health and vitality. Read more about the ingredients and benefits below.",
    price: 400,
    available: " In Stock",
    rating: 4,
  };
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="max-w-sm bg-white rounded-lg w-72 h-fit hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out">
      <a href="#">
        <img className="rounded-lg w-72 h-40 object-cover" src={Res} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
            {product.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm">
          {product.description}
        </p>
        <button
          //   onClick={openModal}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-rose-600 rounded-lg hover:bg-rose-700 focus:ring-4 focus:outline-none focus:ring-rose-300"
        >
          Read more
          <FaArrowRight className="ms-2" />
        </button>
      </div>

    
    </div>
  );
};

export default ProductCard;
