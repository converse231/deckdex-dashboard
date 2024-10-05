import React from "react";
import CardComponent from "./CardComponent";

function CardFeed() {
  return (
    <div className="grid lg:grid-cols-5 grid-cols-4 gap-5">
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
    </div>
  );
}

export default CardFeed;
