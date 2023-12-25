import React from "react";

export default function PrivacyPolicy() {
  return (
    <>
      <main className="relative min-h-full bg-gray-900 text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75"
          alt=""
          className="absolute inset-0 z-0 object-cover w-full h-full filter blur-sm"
        />
        <div className="relative pt-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-left mt-8">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 sm:mb-8">
                Privacy Policy 🛡️
              </h1>

              <p className="text-base sm:text-lg leading-6 mb-3 sm:mb-4">
                Last updated: [Insert Date] ⌛
              </p>

              <p className="mb-4">
                Hello, I'm Abhishek Singh Chauhan, the developer of Food Fiesta.
                This Privacy Policy is meant to inform you about how your
                personal information is handled and used when you use Food
                Fiesta. 🍔🌮
              </p>

              <h2 className="text-lg sm:text-2xl font-bold mt-6 mb-4">
                Information We Collect 📝
              </h2>
              <p className="mb-4">
                Food Fiesta may collect the following types of information:
                <ul className="list-disc list-inside">
                  <li>Your name: Abhishek Singh Chauhan</li>
                  <li>Contact information: [Your Email Address] 📧</li>
                  <li>Location data 🗺️</li>
                  <li>Device information 📱</li>
                </ul>
              </p>

              <h2 className="text-lg sm:text-2xl font-bold mt-6 mb-4">
                How We Use Your Information 🤔
              </h2>
              <p className="mb-4">
                The information collected is used for various purposes,
                including:
                <ul className="list-disc list-inside">
                  <li>Providing personalized services 🌟</li>
                  <li>Improving our website and services 🚀</li>
                  <li>Responding to inquiries and requests 💬</li>
                </ul>
              </p>

              <h2 className="text-lg sm:text-2xl font-bold mt-6 mb-4">
                Your Choices 🤗
              </h2>
              <p className="mb-4">
                As a user, you have the right to:
                <ul className="list-disc list-inside">
                  <li>Access your personal information 🔍</li>
                  <li>Rectify inaccurate information ✏️</li>
                  <li>Withdraw consent 🚫</li>
                </ul>
              </p>

              <p className="text-gray-50 mb-0">
                We respect your privacy and are committed to ensuring the
                security of your information. 🔒 Feel free to explore and enjoy
                Food Fiesta with confidence! If you have any questions or
                concerns, please don't hesitate to reach out to us. 💌
              </p>

              <div className="mt-8"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
