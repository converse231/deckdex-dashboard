import Image from "next/image";
import React from "react";

import SetDialog from "../components/SetDialog";
import { COLLECTIONS } from "@/lib/constants";
import CardFeed from "./components/CardFeed";
import CollectionStatus from "./components/CollectionStatus";
import { fetchCards, fetchSetAndCards, fetchSetById } from "./lib/data";
import { Skeleton } from "@/components/ui/skeleton";
import SubtypeDropdown from "./components/SubtypeDropdown";
import RarityDropdown from "./components/RarityDropdown";
import TypeDropdown from "./components/TypeDropdown";
import SortByButton from "./components/SortByButton";
import ResetFiltersButton from "./components/ResetFiltersButton";

async function SetPage({ params, searchParams }) {
  const setId = params.set || "Stellar Crown";
  const subType = searchParams.subType || null;
  const rarity = searchParams.rarity || null;
  const type = searchParams.type || null;
  const superType = searchParams.superType || null;
  const sort = searchParams.sort || null;
  const order = searchParams.order || null;
  const sets = COLLECTIONS[0].sets;
  const set = await fetchSetById(setId);
  const cards = await fetchCards(setId, subType, rarity, type, sort, order);

  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="h-[300px] w-full bg-gradient-to-t from-cyan-500 to-blue-500 rounded-2xl p-8 flex flex-col justify-between relative">
          <div className="flex flex-col gap-5">
            <h1 className="text-heading-1">{set?.name || setName}</h1>
            <div className="flex flex-col">
              <p>
                Series:{" "}
                <span className="font-semibold">{set?.series || "Series"}</span>
              </p>
              <div className="flex items-center gap-2">
                <p>Symbol: </p>
                <Image
                  src={set?.images.symbol}
                  alt={set?.ptcgoCode}
                  height={30}
                  width={50}
                  className="h-8 w-auto"
                />
              </div>
              <p>
                Release Date: <span>{set?.releaseDate || "Release Date"}</span>
              </p>
              <CollectionStatus cards={cards} />
            </div>
          </div>
          <SetDialog data={sets} />
          {set?.images?.logo && (
            <Image
              src={set.images.logo}
              alt={`${set.name} logo`}
              width={400}
              height={200}
              quality={100}
              className="absolute right-10 top-14 w-auto h-[200px]"
            />
          )}
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <TypeDropdown setId={setId} />
            <SubtypeDropdown setId={setId} />
            <RarityDropdown setId={setId} />
            <ResetFiltersButton />
          </div>
          <SortByButton />
        </div>
        <CardFeed cards={cards} />
      </div>
    </>
  );
}

export default SetPage;
