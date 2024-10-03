import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import sampleCard from "@/assets/sample-card.png";

function FeaturedCard() {
  // Dummy data representing the Venusaur EX card
  const cardData = {
    name: "Venusaur EX",
    image: "/images/venusaur-ex.png", // Adjust this path as needed
    rarity: "Ultra Rare",
    price: 89.99,
    grade: "PSA 9",
    demand: "High",
    set: "XY Promos",
    cardNumber: "XY123",
  };

  const { name, image, rarity, price, grade, demand, set, cardNumber } =
    cardData;

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-heading-3">Featured Card</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative aspect-[3/4] w-full">
          <Image
            src={sampleCard}
            alt={name}
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <span className="text-muted-foreground font-medium">Name:</span>{" "}
            {name}
          </div>
          <div>
            <span className="text-muted-foreground font-medium">Rarity:</span>{" "}
            {rarity}
          </div>
          <div>
            <span className="text-muted-foreground font-medium">Price:</span> $
            {price.toFixed(2)}
          </div>
          <div>
            <span className="text-muted-foreground font-medium">Grade:</span>{" "}
            {grade}
          </div>
          <div>
            <span className="text-muted-foreground font-medium">Demand:</span>{" "}
            <Badge variant={demand === "High" ? "default" : "secondary"}>
              {demand}
            </Badge>
          </div>
          <div>
            <span className="text-muted-foreground font-medium">Set:</span>{" "}
            {set}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default FeaturedCard;
