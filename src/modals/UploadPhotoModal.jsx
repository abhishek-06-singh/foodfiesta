import React, { useState } from "react";
import { FaUser, FaCamera } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const UploadPhotoModal = ({ isOpen, onUpload, onClose }) => {
  const [file, setFile] = useState(null);
  const [avatar, setAvatar] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    const reader = new FileReader();
    reader.onload = (e) => {
      setAvatar(e.target.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleUpload = () => {
    onUpload(file);

    localStorage.setItem("customerAvatar", avatar);

    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center "
        >
          <motion.div
            initial={{ y: -350, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -450, opacity: 0 }}
            transition={{ duration: 1 }}
            className="bg-white p-8 rounded-3xl shadow-md w-[30rem]"
          >
            <h2 className="text-2xl font-semibold mb-4">
              Upload Profile Photo
            </h2>
            <div className="mb-4 flex items-center justify-center">
              {avatar ? (
                <img
                  src={avatar}
                  alt="Profile Preview"
                  className="h-40 w-40 rounded-full mb-2"
                />
              ) : (
                <div className=" rounded-full bg-gray-300 flex items-center justify-center h-40 w-40">
                  <FaUser className="text-white text-[6rem]" />
                </div>
              )}
            </div>

            <label
              htmlFor="file-input"
              className="flex items-center cursor-pointer mb-4"
            >
              <FaCamera className="mr-2" />
              Choose File
              <input
                type="file"
                id="file-input"
                className="hidden"
                accept="image/*"
                onChange={handleFileChange}
              />
            </label>

            <div className="flex justify-between mt-10">
              <button
                onClick={handleUpload}
                className="bg-rose-500 text-white px-4 py-2 rounded-full hover:bg-rose-600 w-1/2"
              >
                Upload
              </button>
              <button
                onClick={onClose}
                className="ml-2 text-gray-600 hover:text-gray-800 rounded-full w-1/2"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UploadPhotoModal;
