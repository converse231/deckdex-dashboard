"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bookmark, Check, Forward, Heart, Plus } from "lucide-react";
import CardDetailsDialog from "./CardDetailsDialog";

export default function CardComponent({ card }) {
  const [isOwned, setIsOwned] = useState(false);

  return (
    <Card
      className={`${
        isOwned ? "border-none" : "border"
      } w-full max-w-[250px] md:max-w-[280px] lg:max-w-[200px] xl:max-w-[300px] h-[220px] lg:h-[220px] xl:h-[250px] 2xl:h-[420px] flex justify-center items-center relative group lg:rounded-2xl rounded-xl mx-auto`}
    >
      <Image
        src={card?.images?.large}
        alt="sample-card"
        height={400}
        width={320}
        className={`w-auto transition-all duration-150 rounded-xl ${
          isOwned
            ? "opacity-100 border-none h-full"
            : "opacity-40 border-dashed border-4 h-[80%] lg:h-[80%]"
        }`}
      />

      <div className="flex absolute flex-col items-center justify-between gap-1 sm:gap-8 h-full py-4 sm:py-6 right-1 sm:right-2 transition-all duration-300 opacity-100 sm:opacity-0 translate-x-0 sm:translate-x-10 sm:group-hover:translate-x-0 sm:group-hover:opacity-100">
        <CardDetailsDialog card={card} />
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col gap-1">
            <Heart className="h-5 w-5" strokeWidth={2.5} />

            <Forward className="h-5 w-5" strokeWidth={2.5} />

            <Bookmark className="h-5 w-5" strokeWidth={2.5} />
          </div>
          <Button
            onClick={() => setIsOwned(!isOwned)}
            className="rounded-full text-white h-8 w-8 p-0"
          >
            {isOwned ? (
              <Check className="h-3 w-3" />
            ) : (
              <Plus className="h-3 w-3" />
            )}
          </Button>
        </div>
      </div>
    </Card>
  );
}
