import Image from "next/image";
import React from "react";
import pokemonTcgLogo from "@/assets/pokemon-tcg-logo.png";
import { format } from "date-fns";
import { formatParams } from "@/lib/formatters";
import SetDialog from "../components/SetDialog";
import { COLLECTIONS } from "@/lib/constants";
import CollectionTabs from "./components/CollectionTabs";
import CardFeed from "./components/CardFeed";
import CollectionStatus from "./components/CollectionStatus";

function SetPage({ params }) {
  const setName = formatParams(params.set) || "Set Name";
  const sets = COLLECTIONS[0].sets;

  console.log(setName);

  return (
    <div className="flex flex-col gap-10">
      <div className="h-[300px] w-full bg-gradient-to-t from-cyan-500 to-blue-500 rounded-2xl p-8 flex flex-col justify-between relative">
        <div className="flex flex-col gap-5">
          <h1 className="text-heading-1">{setName}</h1>
          <p className="text-p max-w-3xl">
            Meet some of the new Pokémon from Area Zero as they make their
            Pokémon TCG debut. Pokémon like Iron Boulder and Raging Bolt are
            powering their way into the compelling and competitive world of the
            Pokémon TCG courtesy of the Pokémon TCG: Scarlet & Violet—Stellar
            Crown expansion.
          </p>
        </div>
        <SetDialog data={sets} />
        <Image
          src={
            "https://tcg.pokemon.com/assets/img/sv-expansions/stellar-crown/logo/en-us/sv7-logo.png"
          }
          alt="pokemon-logo"
          width={1000}
          height={600}
          quality={100}
          className="absolute right-10 top-16 w-[400px] h-auto"
        />
      </div>
      <div className="flex justify-between items-center">
        <CollectionTabs />
        <CollectionStatus />
      </div>
      <CardFeed />
    </div>
  );
}

export default SetPage;
