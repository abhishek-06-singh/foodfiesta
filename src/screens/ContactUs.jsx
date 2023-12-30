import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dev from "../images/dev.jpeg";
import logo from "../images/logo2.png";

import { useNavigate } from "react-router-dom";

const quotes = [
  "Coding is like cooking. Sometimes all you need is a missing semicolon to ruin everything.",
  "I’m not lazy, I’m on energy-saving mode.",
  "Why do programmers prefer dark mode? Because light attracts bugs!",
];
const ContactUs = () => {
  const navigate = useNavigate();
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    company: "",
    designation: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    firstName: "",
    email: "",
    company: "",
    designation: "",
    message: "",
  });
  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    }

    if (!formData.company.trim()) {
      errors.company = "Company is required";
      isValid = false;
    }

    if (!formData.designation.trim()) {
      errors.designation = "Designation is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNo = "7000201383";

    const messageHeader = "🚀 Hello, I visited your app Abhishek 🚀";

    if (validateForm()) {
      console.log("Form data submitted:", formData);
      const formDataText =
        `Visitor Name: ${formData.firstName}\n` +
        `Email: ${formData.email}\n` +
        `Company: ${formData.company}\n` +
        `Designation: ${formData.designation}\n` +
        `Message: ${formData.message}\n`;

      const finalMessage = `${messageHeader}\n\n${formDataText}`;

      const encodedFormData = encodeURIComponent(finalMessage);

      window.location.replace(
        `https://api.whatsapp.com/send?phone=${phoneNo}&text=${encodedFormData}`
      );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative isolate bg-gradient-to-bl from-rose-50 via-indigo-50 to-white px-6 py-24 sm:py-32 lg:px-8">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-indigo-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
            width={200}
            height={200}
            x="50%"
            y={-64}
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-64} className="overflow-visible fill-gray-50">
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
        />
      </svg>
      <div className="mx-auto max-w-xl lg:max-w-4xl">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900">
          Let’s talk about This project
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          I made this as a side project implementing my learning throughout my
          web development journey , if you have any questions you can fill the
          contact form down below
        </p>
        <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
          <form
            action="#"
            method="POST"
            className="lg:flex-auto"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="firstName"
                    id="first-name"
                    autoComplete="given-name"
                    className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6 ${
                      formErrors.firstName && "border-red-500"
                    }`}
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {formErrors.firstName && (
                    <p className="text-sm text-red-500">
                      {formErrors.firstName}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="last-name"
                    autoComplete="family-name"
                    className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6 ${
                      formErrors.email && "border-red-500"
                    }`}
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {formErrors.email && (
                    <p className="text-sm text-red-500">{formErrors.email}</p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="budget"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Company
                </label>
                <div className="mt-2.5">
                  <input
                    id="budget"
                    name="company"
                    type="text"
                    className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6 ${
                      formErrors.company && "border-red-500"
                    }`}
                    value={formData.company}
                    onChange={handleChange}
                  />
                  {formErrors.company && (
                    <p className="text-sm text-red-500">{formErrors.company}</p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="website"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Designation
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="designation"
                    id="website"
                    className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6 ${
                      formErrors.designation && "border-red-500"
                    }`}
                    value={formData.designation}
                    onChange={handleChange}
                  />
                  {formErrors.designation && (
                    <p className="text-sm text-red-500">
                      {formErrors.designation}
                    </p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6 ${
                      formErrors.message && "border-red-500"
                    }`}
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {formErrors.message && (
                    <p className="text-sm text-red-500">{formErrors.message}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-full bg-rose-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
              >
                Let’s talk
              </button>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-500">
              By submitting this form, I agree to the{" "}
              <a
                onClick={() => navigate("/privacy")}
                className="font-semibold text-rose-600 cursor-pointer"
              >
                privacy&nbsp;policy
              </a>
              .
            </p>
          </form>
          <div className="lg:mt-6 lg:w-80 lg:flex-none">
            <img className="h-20 w-auto" src={logo} alt="" />
            <figure className="mt-10">
              <blockquote className="text-lg font-semibold leading-8 text-gray-900">
                <motion.p
                  key={quoteIndex}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 5 }}
                  transition={{ type: "spring", duration: 1 }}
                >
                  {quotes[quoteIndex]}
                </motion.p>
              </blockquote>
              <figcaption className="mt-10 flex gap-x-6">
                <img
                  src={dev}
                  alt=""
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                />
                <div>
                  <div className="text-base font-semibold text-gray-900">
                    Abhishek Singh Chauhan
                  </div>
                  <div className="text-sm leading-6 text-gray-600">
                    Developer of FoodFiesta
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
