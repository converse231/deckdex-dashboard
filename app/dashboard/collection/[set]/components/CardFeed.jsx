"use client";

import React from "react";
import CardComponent from "./CardComponent";

function CardFeed({ cards = [] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
      {cards &&
        cards?.map((card, index) => (
          <CardComponent key={card.id || index} card={card} />
        ))}
    </div>
  );
}

export default CardFeed;
