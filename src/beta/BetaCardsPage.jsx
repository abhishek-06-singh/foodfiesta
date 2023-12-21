import React from "react";
import Card from "../beta/Card";

const BetaCardsPage = () => {
  return (
    <div className="bg-gray-50">
      <h1 className="text-4xl mb-10 pt-10">
        {" "}
        This is how our cards gonna look !{" "}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:p-40 md:p-30 p-16">
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
    </div>
  );
};

export default BetaCardsPage;
