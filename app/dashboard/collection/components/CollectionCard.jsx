import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import React from "react";

import Image from "next/image";
import SetDialog from "./SetDialog";
import CollectionTabs from "../[set]/components/CollectionTabs";

function CollectionCard({ data }) {
  return (
    <Card className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl w-full min-h-[300px] p-10 shadow flex flex-col justify-between relative">
      <div className="flex flex-col gap-3">
        <h1 className="text-heading-1">{data.title || "Collection Name"}</h1>
        <p className="max-w-3xl">
          {data.description || "Collection description"}
        </p>
      </div>
      <SetDialog data={data.sets} />
      <Image
        src={data.logo}
        alt="pokemon-logo"
        width={1000}
        height={600}
        quality={100}
        className="absolute right-20 top-10 w-[350px] h-auto"
      />
    </Card>
  );
}

export default CollectionCard;
