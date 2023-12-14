import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const userData = useSelector((state) => state.user);
  return (
    <div>
      <h1>Welcome to the Home Page, {userData.name}!</h1>
      <p>Your email: {userData.email}</p>
    </div>
  );
};

export default Home;
