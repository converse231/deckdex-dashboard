import React from "react";
import pokemonTcgLogo from "@/assets/pokemon-tcg-logo.png";
import onepieceTcgLogo from "@/assets/one-piece-tcg-logo.webp";
import Image from "next/image";
import CollectionsSelect from "./components/CollectionsSelect";
import CollectionCard from "./components/CollectionCard";
import { COLLECTIONS } from "@/lib/constants";

function CollectionsPage() {
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
        {COLLECTIONS.map((col, index) => (
          <CollectionCard key={index} data={col} />
        ))}
      </div>
    </section>
  );
}

export default CollectionsPage;
