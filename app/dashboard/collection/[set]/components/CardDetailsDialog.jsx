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
import { motion, useMotionValue, useTransform } from "framer-motion";
import typeFire from "@/assets/pokemon-types/type-fire.png";
import typeWater from "@/assets/pokemon-types/type-water.png";
import typeGrass from "@/assets/pokemon-types/type-grass.png";
import typeElectric from "@/assets/pokemon-types/type-electric.png";
import typePsychic from "@/assets/pokemon-types/type-psychic.png";
import typeFighting from "@/assets/pokemon-types/type-fighting.png";
import typeSteel from "@/assets/pokemon-types/type-steel.png";
import typeDark from "@/assets/pokemon-types/type-dark.png";
import typeFairy from "@/assets/pokemon-types/type-fairy.png";
import typeDragon from "@/assets/pokemon-types/type-dragon.png";
import typeGhost from "@/assets/pokemon-types/type-ghost.png";
import typeIce from "@/assets/pokemon-types/type-ice.png";
import typeNormal from "@/assets/pokemon-types/type-normal.png";
import typePoison from "@/assets/pokemon-types/type-poison.png";
import typeRock from "@/assets/pokemon-types/type-rock.png";
import CardDetailItem from "./CardDetailItem";

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

const typeImages = {
  Fire: typeFire,
  Water: typeWater,
  Grass: typeGrass,
  Electric: typeElectric, // Changed from Lightning to Electric
  Psychic: typePsychic,
  Fighting: typeFighting,
  Steel: typeSteel, // Changed from Metal to Steel
  Darkness: typeDark,
  Fairy: typeFairy,
  Dragon: typeDragon,
  Ghost: typeGhost,
  Ice: typeIce,
  Normal: typeNormal,
  Poison: typePoison,
  Rock: typeRock,
  Colorless: typeNormal,
};

function CardDetailsDialog({ card }) {
  const starCount = getRarityStars(card.rarity);

  // Motion values for 3D effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-300, 300], [15, -15]);
  const rotateY = useTransform(x, [-300, 300], [-15, 15]);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <Dialog>
      <DialogTrigger>
        <div>
          <ScanEye className="h-6 w-6 hover:opacity-50 transition-all duration-200" />
        </div>
      </DialogTrigger>
      <DialogContent className="bg-transparent border-none p-4 sm:p-6 max-w-[95vw] sm:max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] xl:max-w-[60vw] max-h-[90vh] overflow-y-auto">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <motion.div
            className="perspective-700 w-full sm:w-1/2 aspect-[1/1.4] grid place-items-center"
            style={{
              perspective: 700,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              className="w-full h-full"
              style={{
                rotateX,
                rotateY,
                transition: "all 0.1s ease-out",
              }}
            >
              <Image
                src={card.images.large}
                alt={card.name}
                width={400}
                height={560}
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>

          <div className="w-full sm:w-1/2 overflow-y-auto space-y-3 sm:space-y-4 bg-muted md:bg-card p-4 sm:p-5 h-fit rounded-2xl">
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <h2 className="text-2xl sm:text-3xl font-bold">{card.name}</h2>
              {card.set.images.symbol && (
                <img
                  src={card.set.images.symbol}
                  alt={card.name}
                  className="h-6 sm:h-8 w-auto"
                />
              )}
            </div>
            <div className="flex flex-col gap-1 text-sm sm:text-base">
              <CardDetailItem label="Rarity" value={card.rarity}>
                <RarityStars starCount={starCount} />
              </CardDetailItem>
              {card.types && (
                <CardDetailItem label="Type(s)">
                  <div className="flex gap-1">
                    {card.types.map((type) => (
                      <Image
                        key={type}
                        src={typeImages[type]}
                        alt={type}
                        width={20}
                        height={20}
                        className="w-4 h-4 sm:w-5 sm:h-5"
                      />
                    ))}
                  </div>
                </CardDetailItem>
              )}
              {card.supertype && (
                <CardDetailItem label="Supertype" value={card.supertype} />
              )}
              {card.subtypes && card.subtypes.length > 0 && (
                <CardDetailItem
                  label="Subtype(s)"
                  value={card.subtypes.join(", ")}
                />
              )}
              {card.evolvesTo && (
                <CardDetailItem label="Evolves to" value={card.evolvesTo} />
              )}
              {card.artist && (
                <CardDetailItem label="Artist" value={card.artist} />
              )}
            </div>
            <h3 className="text-lg text-muted-foreground font-semibold">
              Market Prices
            </h3>
            {card.tcgplayer && card.tcgplayer.prices && (
              <div className="space-y-4">
                {Object.entries(card.tcgplayer.prices).map(
                  ([priceType, priceData]) => (
                    <div key={priceType} className="space-y-2">
                      <h4 className="font-semibold text-sm">
                        {priceType.charAt(0).toUpperCase() + priceType.slice(1)}
                      </h4>
                      <div className="grid grid-cols-2">
                        {priceData.low && (
                          <span>
                            Low: ${priceData.low?.toFixed(2) ?? "N/A"}
                          </span>
                        )}
                        {priceData.high && (
                          <span>
                            High: ${priceData.high?.toFixed(2) ?? "N/A"}
                          </span>
                        )}
                        {priceData.market && (
                          <span>
                            Market: ${priceData.market?.toFixed(2) ?? "N/A"}
                          </span>
                        )}
                        {priceData.directLow && (
                          <span>
                            Direct Low: $
                            {priceData.directLow?.toFixed(2) ?? "N/A"}
                          </span>
                        )}
                      </div>
                      {priceData.market && (
                        <div className="grid grid-cols-2">
                          <div className="col-span-2 mt-1 font-medium">
                            Buy Price:{" "}
                            <span className="text-green-500">
                              ${(priceData.market * 0.8).toFixed(2)}
                            </span>
                          </div>
                          <div className="col-span-2 mt-1 font-medium">
                            Sell Price:{" "}
                            <span className="text-red-500">
                              ${(priceData.market * 1.1).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                )}
                <p className="text-xs text-muted-foreground">
                  Last updated:{" "}
                  {new Date(card.tcgplayer.updatedAt).toLocaleDateString()}
                </p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CardDetailsDialog;
