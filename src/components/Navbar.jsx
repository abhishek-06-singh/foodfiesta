import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { FaBell } from "react-icons/fa";
import { BsThreeBars, BsX } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import logo from "../images/logo2.png";
import { Link } from "react-router-dom";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const googleLoginPicture = localStorage.getItem("GoogleLoginPicture");
  const customerAvatar = localStorage.getItem("customerAvatar");
  const Email = localStorage.getItem("GoogleLoginEmail");
  const userData = JSON.parse(localStorage.getItem("userData")) || {};
  const Mail = userData.email || "";
  const NAME = userData.name || "";

  const GoogleName = localStorage.getItem("GoogleLoginName");

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-14 w-auto lg:hidden"
                    src={logo}
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-14 w-auto lg:block"
                    src={logo}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link
                    to="/restaurants"
                    className="
                    hover:border-rose-500
                    inline-flex
                    items-center
                    border-b-2
                    border-transparent
                    px-1
                    pt-1
                    text-sm
                    font-medium
                    text-gray-900
                    hover:text-gray-700"
                  >
                    Restaurants
                  </Link>
                  <Link
                    to="/menu"
                    className="hover:border-rose-500 inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-900  hover:text-gray-700"
                  >
                    Menu
                  </Link>
                  <Link
                    to="/cart"
                    className="hover:border-rose-500 inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-900  hover:text-gray-700"
                  >
                    Cart
                  </Link>
                  <Link
                    to="/contact"
                    className="hover:border-rose-500 inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-900  hover:text-gray-700"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <button
                  type="button"
                  className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                >
                  <span className="sr-only">View notifications</span>
                  <FaBell className="h-6 w-6" />
                </button>

                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2">
                      <span className="sr-only">Open user menu</span>

                      <img
                        className="h-8 w-8 rounded-full"
                        src={
                          customerAvatar ||
                          googleLoginPicture ||
                          "default-avatar.jpg"
                        }
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <BsX className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <FaBarsStaggered
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              <Link
                to="/restaurants"
                href="#"
                className="block border-l-4 hover:border-rose-500 py-2 pl-3 pr-4 text-base font-medium text-gray-800"
              >
                Restaurants
              </Link>
              <Link
                to="/menu"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-800 hover:border-rose-500 hover:bg-rose-50 hover:text-gray-700"
              >
                Menu
              </Link>
              <Link
                to="/cart"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-800 hover:border-rose-500 hover:bg-rose-50 hover:text-gray-700"
              >
                Cart
              </Link>
              <Link
                to="/contact"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-800 hover:border-rose-500 hover:bg-rose-50 hover:text-gray-700"
              >
                Contact Us
              </Link>
            </div>
            <div className="border-t border-gray-200 pb-3 pt-4">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={
                      customerAvatar ||
                      googleLoginPicture ||
                      "default-avatar.jpg"
                    }
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">
                    {GoogleName || NAME}
                  </div>
                  <div className="text-sm font-medium text-gray-500">
                    {Email || Mail}
                  </div>
                </div>
                <button
                  type="button"
                  className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                >
                  <span className="sr-only">View notifications</span>
                  <FaBell className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-3 space-y-1">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  Your Profile
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  Settings
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  Sign out
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
export default Navbar;
