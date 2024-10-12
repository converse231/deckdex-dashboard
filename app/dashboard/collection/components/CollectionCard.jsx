import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import React from "react";

import Image from "next/image";
import SetDialog from "./SetDialog";

function CollectionCard({ title, description, logo, data }) {
  return (
    <Card className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl w-full min-h-[300px] md:p-10 p-6 shadow flex flex-col justify-between relative">
      <div className="flex flex-col md:gap-3 gap-1">
        <h1 className="text-heading-1">{title}</h1>
        <p className="2xl:max-w-3xl max-w-[600px]">{description}</p>
      </div>
      <SetDialog data={data} />
      <Image
        src={logo}
        alt="pokemon-logo"
        width={1000}
        height={600}
        quality={100}
        className="absolute 2xl:right-20 right-10 top-10 md:w-[350px] hidden xl:block h-auto"
      />
    </Card>
  );
}

export default CollectionCard;
