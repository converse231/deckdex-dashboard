import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";
import React from "react";
import collectionLogo from "@/assets/pokemon-tcg-logo.png";

function DashboardHeading() {
  return (
    <div className="flex justify-between md:items-center items-start flex-col md:flex-row">
      <div>
        <h2 className="text-heading-2">Hello, John Doe</h2>
        <p className="text-p text-muted-foreground">
          Track, manage, and optimize your card collection with ease.
        </p>
      </div>
      <div className="flex gap-4">
        <Image
          src={collectionLogo}
          height={100}
          width={300}
          alt="Pokemon tcg logo"
          className="h-20 w-full"
        />
      </div>
    </div>
  );
}

export default DashboardHeading;
