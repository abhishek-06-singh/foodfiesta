import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { FaArchive } from "react-icons/fa";
import FoodPng from "../images/food3.jpg";
import logo from "../images/logo2.png";
import { motion } from "framer-motion";
import Footer from "./BetaFooter";
import "./extra.css";
import ProfileClickToast from "../toast/ProfileClickToast";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const navigation = [
  { name: "Restaurants", href: "#" },
  { name: "Menu", href: "#" },
  { name: "Cart", href: "#" },
  { name: "Contact Us", href: "#" },
];

const LandingExample = () => {
  const navigate = useNavigate();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isToastOpen, setIsToastOpen] = useState(false);

  const openToast = () => {
    setIsToastOpen(true);
  };

  const closeToast = () => {
    setIsToastOpen(false);
  };

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <motion.img
                className="h-20 w-auto"
                initial={{ y: -800, opacity: 0 }}
                animate={{ y: 0, opacity: 5 }}
                transition={{ type: "spring", duration: 2 }}
                src={logo}
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <FaArchive className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end flex-row items-center">
            {localStorage.getItem("GoogleLoginPicture") &&
            localStorage.getItem("GoogleLoginName") ? (
              <>
                <img
                  src={localStorage.getItem("GoogleLoginPicture")}
                  alt="Google Profile"
                  className="h-10 rounded-full mr-2 shadow-xl"
                  onClick={() => openToast()}
                />
                <span className="text-sm font-semibold leading-6 text-gray-900">
                  {localStorage.getItem("GoogleLoginName")}{" "}
                  <span aria-hidden="true">&rarr;</span>
                </span>
              </>
            ) : (
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {localStorage.getItem("userData") ? (
                  <div className="flex items-center">
                    <img
                      src={localStorage.getItem("customerAvatar")}
                      alt="User Profile"
                      className="h-10 rounded-full mr-2 shadow-xl"
                      onClick={() => openToast()}
                    />
                    {JSON.parse(localStorage.getItem("userData")).name}
                  </div>
                ) : (
                  "Log in"
                )}
              </a>
            )}
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <motion.img
                  className="h-20 w-auto"
                  initial={{ y: -800, opacity: 0 }}
                  animate={{ y: 0, opacity: 5 }}
                  transition={{ type: "spring", duration: 2 }}
                  src={logo}
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <FaArchive className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  {localStorage.getItem("GoogleLoginPicture") &&
                  localStorage.getItem("GoogleLoginName") ? (
                    <>
                      <img
                        src={localStorage.getItem("GoogleLoginPicture")}
                        alt="Google Profile"
                        className="h-10 shadow-xl rounded-full"
                        onClick={() => openToast()}
                      />
                      <span className="text-sm font-semibold leading-6 text-gray-900">
                        {localStorage.getItem("GoogleLoginName")}{" "}
                        <span aria-hidden="true">&rarr;</span>
                      </span>
                    </>
                  ) : (
                    <a
                      href="#"
                      className="text-sm font-semibold leading-6 text-gray-900"
                    >
                      {localStorage.getItem("userData") ? (
                        <>
                          <img
                            src={localStorage.getItem("customerAvatar")}
                            alt="User Profile"
                            className="h-10 shadow-xl rounded-full"
                            onClick={() => openToast()}
                          />
                          {JSON.parse(localStorage.getItem("userData")).name}
                        </>
                      ) : (
                        "Log in"
                      )}{" "}
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
        {isToastOpen && (
          <ProfileClickToast open={isToastOpen} onClose={closeToast} />
        )}
      </header>

      <div className="relative isolate pt-14">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mt-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Indulge Your Senses at
                <motion.span
                  className="title"
                  initial={{ y: -800, opacity: 0 }}
                  animate={{ y: 0, opacity: 5 }}
                  transition={{ type: "spring", duration: 6 }}
                >
                  Food Fiesta
                </motion.span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                At Food Fiesta, we infuse passion into every flavor, crafting an
                unforgettable dining experience right at your doorstep. Let your
                taste buds waltz to the symphony of delightful culinary
                creations, delivered to you with love!
              </p>

              <div className="mt-10 flex items-center justify-center gap-x-6 cursor-pointer">
                <a
                  onClick={() => navigate("/BetaCardsPage")}
                  className="rounded-md bg-rose-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
                >
                  Start Eating
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="mt-20 flow-root sm:mt-10">
              <motion.img
                initial={{ y: +800, opacity: 0 }}
                animate={{ y: 0, opacity: 5 }}
                transition={{ type: "spring", duration: 1 }}
                src={FoodPng}
                alt="App screenshot"
                width={2432}
                height={1442}
                className="rounded-md shadow-2xl ring-1 ring-gray-900/10 rounded-t-full w-scree h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <Card /> */}
      <Footer />
    </div>
  );
};

export default LandingExample;
