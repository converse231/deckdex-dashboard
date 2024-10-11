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
      } w-full max-w-[280px] sm:max-w-[320px] md:max-w-[280px] lg:max-w-[320px] h-[350px] sm:h-[400px] flex justify-center items-center relative group rounded-2xl sm:rounded-3xl mx-auto`}
    >
      <Image
        src={card?.images?.small}
        alt="sample-card"
        height={400}
        width={320}
        className={`w-auto transition-all duration-150 rounded-xl sm:rounded-2xl ${
          isOwned
            ? "opacity-100 border-none h-full"
            : "opacity-40 border-dashed border-4 h-[290px] sm:h-[330px]"
        }`}
      />

      <div className="flex absolute flex-col items-center justify-between gap-4 sm:gap-8 h-full py-4 sm:py-6 right-1 sm:right-2 transition-all duration-300 opacity-100 sm:opacity-0 translate-x-0 sm:translate-x-10 sm:group-hover:translate-x-0 sm:group-hover:opacity-100">
        <CardDetailsDialog card={card} />
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          <div className="flex flex-col gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 sm:h-10 sm:w-10"
            >
              <Heart className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2.5} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 sm:h-10 sm:w-10"
            >
              <Forward className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2.5} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 sm:h-10 sm:w-10"
            >
              <Bookmark className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2.5} />
            </Button>
          </div>
          <Button
            onClick={() => setIsOwned(!isOwned)}
            className="rounded-full h-10 w-10 sm:h-12 sm:w-12 text-white"
          >
            {isOwned ? (
              <Check className="h-5 w-5 sm:h-6 sm:w-6" />
            ) : (
              <Plus className="h-5 w-5 sm:h-6 sm:w-6" />
            )}
          </Button>
        </div>
      </div>
    </Card>
  );
}
