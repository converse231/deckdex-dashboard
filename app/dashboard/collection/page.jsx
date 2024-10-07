import React from "react";
import pokemonTcgLogo from "@/assets/pokemon-tcg-logo.png";
import onepieceTcgLogo from "@/assets/one-piece-tcg-logo.webp";
import Image from "next/image";
import CollectionsSelect from "./components/CollectionsSelect";
import CollectionCard from "./components/CollectionCard";
import { COLLECTIONS } from "@/lib/constants";
import { fetchPokemonSets } from "./lib/data";

async function CollectionsPage() {
  const data = await fetchPokemonSets();
  const pokemonSets = data?.data || [];

  return (
    <section>
      <div className="flex justify-between items-center pb-10">
        <div>
          <h2 className="text-heading-2">Collection Library</h2>
          <p className="text-p text-muted-foreground">
            Track, manage, and optimize your card collection with ease.
          </p>
        </div>
      </div>
      <div>
        <CollectionCard
          title="Pokemon TCG"
          description={
            "The Pokémon TCG lets you collect, trade, and build powerful decks for thrilling battles! With rare cards, unique artwork, and special editions, it’s perfect for collectors who love discovering and showcasing their favorite Pokémon."
          }
          logo={pokemonTcgLogo}
          data={pokemonSets}
        />
      </div>
    </section>
  );
}

export default CollectionsPage;
