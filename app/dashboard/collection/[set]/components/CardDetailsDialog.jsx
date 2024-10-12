"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ScanEye, Star, StarHalf } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { CardPriceLineChart } from "./CardPriceLineChart";

const getRarityStars = (rarity) => {
  switch (rarity) {
    case "Common":
      return 1;
    case "Uncommon":
      return 1.5;
    case "Rare":
      return 2;
    case "Double Rare":
      return 2.5;
    case "Promo":
    case "Rare Holo":
      return 3;
    case "Trainer Gallery Rare Holo":
    case "Rare Holo V":
    case "Rare Holo EX":
      return 3.5;
    case "Rare Holo VMAX":
      return 4;
    case "Rare Holo VSTAR":
    case "ACE SPEC Rare":
      return 4.5;
    case "Rare Ultra":
    case "Ultra Rare":
    case "Radiant Rare":
    case "Rare Secret":
    case "Illustration Rare":
    case "Rare Shining":
      return 5;
    case "Special Illustration Rare":
      return 5.5;
    case "Hyper Rare":
      return 6;
    default:
      return 0; // Default case for unrecognized rarity
  }
};

const RarityStars = ({ starCount }) => {
  const isMaxRarity = starCount >= 5.5;
  const fillColor = isMaxRarity ? "#8b5cf6" : "#eab308"; // Purple for 5 stars, Yellow for others
  const textColor = isMaxRarity ? "text-purple-500" : "text-yellow-500";

  return (
    <div className="flex gap-0.5">
      {Array.from({ length: Math.floor(starCount) }).map((_, index) => (
        <Star key={index} fill={fillColor} className={`${textColor} h-4 w-4`} />
      ))}
      {starCount % 1 !== 0 && (
        <StarHalf
          key="half"
          fill={fillColor}
          className={`${textColor} h-4 w-4`}
        />
      )}
    </div>
  );
};

function CardDetailsDialog({ card }) {
  const starCount = getRarityStars(card.rarity);
  return (
    <Dialog>
      <DialogTrigger>
        <div>
          <ScanEye className="h-6 w-6 hover:opacity-50 transition-all duration-200" />
        </div>
      </DialogTrigger>
      <DialogContent className="max-h-[80%] md:max-h-[80%] md:max-w-[90%] lg:max-w-[900px] overflow-y-auto px-8 md:p-0">
        <div className="grid grid-cols-1 md:flex gap-4 md:items-stretch">
          <div className="md:w-1/2 sm:self-center md:h-full">
            <img
              src={card.images.large}
              alt={card.name}
              className="md:h-full"
            />
          </div>

          <ScrollArea className="lg:max-h-[710px] md:h-[550px] lg:h-[620px] h-fit rounded-md px-0 md:px-3 md:py-8 py-2 md:w-1/2">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <h2 className="text-heading-2">{card.name || "Card name"}</h2>
                {card?.flavorText && (
                  <p className="text-xs w-3/4">
                    {card?.flavorText || "Card desc"}
                  </p>
                )}
              </div>
              <div
                className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2
              "
              >
                <div className="flex flex-col gap-2">
                  <div className="flex gap-1 items-center">
                    <p className="text-muted-foreground text-sm">Rarity:</p>
                    <RarityStars starCount={starCount} />
                  </div>

                  {card?.set?.images?.logo && (
                    <div className="flex items-center gap-1">
                      <p className="text-muted-foreground text-sm">Set:</p>
                      <Image
                        src={card?.set?.images?.logo || "#"}
                        alt={`${card?.set?.name} logo`}
                        height={100}
                        width={200}
                        className="h-4 w-auto"
                      />
                      {card?.set?.images?.symbol && (
                        <Image
                          src={card?.set?.images?.symbol || "#"}
                          alt={`${card?.set?.name} logo`}
                          height={100}
                          width={200}
                          className="h-7 w-auto"
                        />
                      )}
                    </div>
                  )}
                  {card?.set?.series && (
                    <div className="flex items-center gap-1">
                      <p className="text-muted-foreground text-sm">Series:</p>
                      <span className="text-sm">
                        {card?.set.series || "No set series details"}
                      </span>
                    </div>
                  )}
                  {card?.artist && (
                    <div className="flex items-center gap-1">
                      <p className="text-muted-foreground text-sm">Artist:</p>
                      <span className="text-sm">
                        {card?.artist || "No artist details"}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  {card?.supertype && (
                    <div className="flex items-center gap-1">
                      <p className="text-muted-foreground text-sm">
                        Supertype:
                      </p>
                      <span className="text-sm">
                        {card?.supertype || "No supertype details"}
                      </span>
                    </div>
                  )}

                  {card?.types && (
                    <div className="flex items-center gap-1">
                      <p className="text-muted-foreground text-sm">Type(s):</p>
                      <span className="text-sm">{card.types.join(", ")}</span>
                    </div>
                  )}
                  {card?.evolvesTo && (
                    <div className="flex items-center gap-1">
                      <p className="text-muted-foreground text-sm">
                        Evolves to:
                      </p>
                      <span className="text-sm">
                        {card?.evolvesTo || "No evolution"}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <Separator className="my-1" />
              <div className="flex flex-col gap-2">
                <h4 className="text-heading-4">Markets</h4>
                <div className="grid grid-cols-2 md:grid-cols-1 md:gap-3 lg:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    {card?.cardmarket?.prices?.averageSellPrice && (
                      <div className="flex items-center gap-1">
                        <p className="text-muted-foreground text-sm">
                          Market price:
                        </p>
                        <span className="text-sm">
                          $
                          {card?.cardmarket?.prices?.averageSellPrice ||
                            "No Market Price available"}
                        </span>
                      </div>
                    )}
                    {card?.cardmarket?.prices?.averageSellPrice && (
                      <div className="flex items-center gap-1">
                        <p className="text-muted-foreground text-sm">
                          Buy Price:
                        </p>
                        <span className="text-sm">
                          $
                          {(
                            card?.cardmarket?.prices?.averageSellPrice * 0.8
                          ).toFixed(2) || "No Buy Price available"}
                        </span>
                      </div>
                    )}
                    {card?.cardmarket?.updatedAt && (
                      <div className="flex items-center gap-1">
                        <p className="text-muted-foreground text-sm">
                          Last update:
                        </p>
                        <span className="text-sm font-semibold">
                          $
                          {card?.cardmarket?.updatedAt ||
                            "No update date available"}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    {card?.tcgplayer?.prices?.holofoil?.market && (
                      <div className="flex items-center gap-1">
                        <p className="text-muted-foreground text-sm">
                          TCG Player price:
                        </p>
                        <span className="text-sm">
                          $
                          {card?.tcgplayer?.prices?.holofoil?.market ||
                            "No TCG Player Market Price available"}
                        </span>
                      </div>
                    )}
                    {card?.tcgplayer?.prices?.holofoil?.market && (
                      <div className="flex items-center gap-1">
                        <p className="text-muted-foreground text-sm">
                          TCG Player Buy Price:
                        </p>
                        <span className="text-sm">
                          $
                          {(
                            card?.tcgplayer?.prices?.holofoil?.market * 0.8
                          ).toFixed(2) || "No Buy Price available"}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <CardPriceLineChart />
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CardDetailsDialog;
