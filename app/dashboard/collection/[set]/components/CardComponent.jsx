"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import React, { useState } from "react";
import sampleCard from "@/assets/sample-card.png";
import { Button } from "@/components/ui/button";
import { Bookmark, Check, Forward, Heart, Plus, Share } from "lucide-react";

function CardComponent({ card }) {
  const [isOwned, setIsOwned] = useState(false);
  return (
    <Card
      className={`${
        isOwned ? "border-none" : "border"
      } h-[400px] w-72 flex justify-center items-center relative group rounded-3xl`}
    >
      <Image
        src={card?.images?.large}
        alt="sample-card"
        height={400}
        width={320}
        className={`w-auto transition-all duration-150 rounded-2xl ${
          isOwned
            ? "opacity-100 border-none h-full"
            : "opacity-40 border-dashed border-4 h-[330px]"
        }`}
      />

      <div className="flex absolute flex-col items-center justify-end gap-8 h-full py-6 right-6 transition-all duration-300 opacity-0 translate-x-10 group-hover:translate-x-0 group-hover:opacity-100">
        <div className="flex flex-col gap-2">
          <Heart className="h-5 w-5" strokeWidth={2.5} />
          <Forward className="h-5 w-5" strokeWidth={2.5} />
          <Bookmark className="h-5 w-5" strokeWidth={2.5} />
        </div>
        <Button
          onClick={() => setIsOwned(!isOwned)}
          className="rounded-full h-12 w-12 right-10 bottom-10 text-white"
        >
          {isOwned ? (
            <Check className="h-full w-full" />
          ) : (
            <Plus className="h-full w-full" />
          )}
        </Button>
      </div>
    </Card>
  );
}

export default CardComponent;
