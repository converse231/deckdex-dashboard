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
import { ScanEye } from "lucide-react";

function CardDetailsDialog({ card }) {
  return (
    <Dialog>
      <DialogTrigger>
        <ScanEye className="h-5 w-5" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[900px]">
        <DialogHeader>
          <DialogTitle>{card.name || "Card Name"}</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex justify-center items-center">
            <img
              src={card.images.large}
              alt={card.name}
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <ScrollArea className="h-[600px] w-full rounded-md p-4">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Details</h3>
                <p>HP: {card.hp}</p>
                <p>Type: {card.types.join(", ")}</p>
                <p>Rarity: {card.rarity}</p>
                <p>Artist: {card.artist}</p>
              </div>
              <div>
                <h3 className="font-semibold">Rules</h3>
                <ul className="list-disc pl-5">
                  {card.rules.map((rule, index) => (
                    <li key={index}>{rule}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Attacks</h3>
                {card.attacks.map((attack, index) => (
                  <div key={index} className="mb-2">
                    <p className="font-medium">{attack.name}</p>
                    <p>Cost: {attack.cost.join(", ")}</p>
                    <p>Damage: {attack.damage}</p>
                    <p>{attack.text}</p>
                  </div>
                ))}
              </div>
              <div>
                <h3 className="font-semibold">Weaknesses</h3>
                {card.weaknesses.map((weakness, index) => (
                  <p key={index}>
                    {weakness.type}: {weakness.value}
                  </p>
                ))}
              </div>
              <div>
                <h3 className="font-semibold">Set Information</h3>
                <p>Set: {card.set.name}</p>
                <p>Series: {card.set.series}</p>
                <p>Release Date: {card.set.releaseDate}</p>
              </div>
              <div>
                <h3 className="font-semibold">Market Prices</h3>
                <p>Low: ${card.tcgplayer.prices.holofoil.low}</p>
                <p>Mid: ${card.tcgplayer.prices.holofoil.mid}</p>
                <p>High: ${card.tcgplayer.prices.holofoil.high}</p>
                <p>Market: ${card.tcgplayer.prices.holofoil.market}</p>
              </div>
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CardDetailsDialog;
