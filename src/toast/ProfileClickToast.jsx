import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { IoPersonCircleSharp } from "react-icons/io5";
import { ImExit } from "react-icons/im";
import LoadingScreen from "../loading/LoadingScreen";
const ProfileClickToast = ({ open, onClose }) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(open);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    setIsVisible(open);
  }, [open]);

  const handleProfileClick = () => {
    console.log("Profile clicked!");
    setIsVisible(false);
    onClose();
  };

  const handleLogoutClick = () => {
    localStorage.clear();
    sessionStorage.clear();

    onClose();
    navigate("/");
  };
  return (
    <>
      <Transition.Root show={isVisible} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={() => {
            setIsVisible(false);
            onClose();
          }}
        >
          <div className="flex items-end justify-end min-h-screen">
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

            <Transition.Child
              as={motion.div}
              initial={{ y: -800, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 2 }}
              exit={{ opacity: 0, x: 20 }}
              className="absolute top-24 right-4 bg-white rounded p-1 max-w-sm shadow-lg z-10 w-52"
            >
              <div className="flex  flex-col ">
                <button
                  onClick={handleProfileClick}
                  className="flex items-center p-2 text-gray-600 hover:bg-rose-100 rounded border-none"
                >
                  <IoPersonCircleSharp className="text-rose-500 font-bold mr-2 text-3xl" />
                  Profile
                </button>
                <button
                  onClick={handleLogoutClick}
                  className="flex items-center p-2 text-gray-600 hover:bg-rose-100 rounded border-none"
                >
                  <ImExit className="text-rose-500 font-bold mr-2 ml-1 text-2xl" />
                  Logout
                </button>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      {showLoading && <LoadingScreen />}
    </>
  );
};

export default ProfileClickToast;
