import React from "react";
import Card from "../beta/Card";

const BetaCardsPage = () => {
  return (
    <>
      <h1 className="text-4xl mb-10 mt-10">
        {" "}
        This is how our cards gonna look !{" "}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-6">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default BetaCardsPage;
