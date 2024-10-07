"use client";

import React from "react";
import CardComponent from "./CardComponent";
import { useQuery } from "@tanstack/react-query";
import { fetchCards } from "../lib/data";

function CardFeed({ cards = [] }) {
  return (
    <div className="grid lg:grid-cols-5 grid-cols-4 gap-5">
      {cards &&
        cards?.map((card, index) => (
          <CardComponent key={card.id || index} card={card} />
        ))}
    </div>
  );
}

export default CardFeed;
