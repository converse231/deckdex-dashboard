"use client";

import React from "react";
import CardComponent from "./CardComponent";

function CardFeed({ cards = [] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-3">
      {cards &&
        cards?.map((card, index) => (
          <CardComponent key={card.id || index} card={card} />
        ))}
    </div>
  );
}

export default CardFeed;
