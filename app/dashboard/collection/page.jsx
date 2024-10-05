import React from "react";
import collectionLogo from "@/assets/pokemon-tcg-logo.png";
import Image from "next/image";
import CollectionsSelect from "./components/CollectionsSelect";

function page() {
  return (
    <div>
      <div className="flex items-center justify-between pb-10">
        <Image
          src={collectionLogo}
          height={100}
          width={300}
          alt="Pokemon tcg logo"
          className="h-20 w-auto"
        />
        <CollectionsSelect />
      </div>
      <div className="h-[300px] w-full bg-gradient-to-t from-cyan-500 to-blue-500 rounded-2xl p-8 flex flex-col justify-between">
        <div className="flex flex-col gap-5">
          <h1 className="text-heading-1">Scarlet & Violet—Stellar Crown</h1>
          <p className="text-p max-w-3xl">
            Meet some of the new Pokémon from Area Zero as they make their
            Pokémon TCG debut. Pokémon like Iron Boulder and Raging Bolt are
            powering their way into the compelling and competitive world of the
            Pokémon TCG courtesy of the Pokémon TCG: Scarlet & Violet—Stellar
            Crown expansion.
          </p>
        </div>
        <CollectionsSelect />
      </div>
    </div>
  );
}

export default page;
