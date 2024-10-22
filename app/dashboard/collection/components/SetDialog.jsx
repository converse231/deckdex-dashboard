"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Move this function to a separate file (e.g., api.js) and import it
const fetchPokemonSets = async (order = "latest") => {
  const orderBy = order === "latest" ? "-releaseDate" : "releaseDate";
  const url = `https://api.pokemontcg.io/v2/sets?orderBy=${orderBy}`;

  const response = await fetch(url, {
    headers: {
      "X-Api-Key": process.env.NEXT_PUBLIC_POKEMON_TCG_API_KEY,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data from Pokémon TCG API");
  }

  const data = await response.json();
  return data.data; // Return only the sets data
};

function SetDialog() {
  const [searchTerm, setSearchTerm] = useState("");
  const {
    data: sets,
    isLoading,
    isError,
  } = useQuery(["pokemonSets"], () => fetchPokemonSets());

  const filteredSets =
    sets?.filter((set) =>
      set.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  return (
    <Dialog>
      <DialogTrigger className="w-fit bg-white font-semibold text-sm uppercase rounded-lg flex items-center text-primary py-2 px-4 hover:bg-primary hover:text-white duration-200 transition-all">
        See all sets <ArrowRight className="icon-button ml-2" />
      </DialogTrigger>
      <DialogContent className="max-w-[700px]">
        <DialogHeader>
          <DialogTitle>Collection Sets</DialogTitle>
        </DialogHeader>
        <div>
          <div className="relative">
            <Input
              className="bg-secondary"
              placeholder="Search for sets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="icon-button absolute right-3 top-0 translate-y-1/2" />
          </div>
          <div className="overflow-y-auto max-h-[520px] grid md:grid-cols-4 grid-cols-3 items-center justify-items-center md:gap-3 gap-2 md:py-10 py-6">
            {isLoading && <p>Loading sets...</p>}
            {isError && <p>Error loading sets. Please try again.</p>}
            {filteredSets.map((set) => (
              <Link
                href={`/dashboard/collection/pokemon/${set.id}`}
                key={set.id}
                className="hover:bg-muted p-2 transition-all rounded-lg"
              >
                <Image
                  src={set?.images?.logo || ""}
                  alt={set.name}
                  width={400}
                  height={300}
                  className="w-44 h-auto"
                />
              </Link>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default SetDialog;
