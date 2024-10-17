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
import ClearViewToggle from "./components/ClearViewToggle";
import CardSearchInput from "./components/CardSearchInput";

async function SetPage({ params, searchParams }) {
  const setId = params.set || "Stellar Crown";
  const subType = searchParams.subType || null;
  const rarity = searchParams.rarity || null;
  const type = searchParams.type || null;
  const superType = searchParams.superType || null;
  const sort = searchParams.sort || null;
  const order = searchParams.order || null;
  const sets = COLLECTIONS[0].sets;
  const search = searchParams.search || "";
  const set = await fetchSetById(setId);
  const cards = await fetchCards(
    setId,
    subType,
    rarity,
    type,
    sort,
    order,
    search
  );

  return (
    <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
      <div className="h-auto sm:h-[300px] w-full bg-gradient-to-t from-cyan-500 to-blue-500 rounded-2xl p-4 sm:p-6 md:p-8 flex sm:flex-row flex-col-reverse sm:justify-between gap-5 sm:gap-0 items-center">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3 md:gap-2">
            <h1 className="text-3xl md:text-4xl lg:text-heading-1 font-bold">
              {set?.name || setName}
            </h1>
            <div className="flex flex-col gap-0 md:gap-1">
              <p className="text-sm sm:text-base">
                Series:{" "}
                <span className="font-semibold">{set?.series || "Series"}</span>
              </p>
              <div className="flex items-center gap-2">
                <p className="text-sm sm:text-base">Symbol: </p>
                <Image
                  src={set?.images.symbol}
                  alt={set?.ptcgoCode}
                  height={30}
                  width={50}
                  className="h-6 sm:h-8 w-auto"
                />
              </div>
              <p className="text-sm sm:text-base">
                Release Date: <span>{set?.releaseDate || "Release Date"}</span>
              </p>
              <CollectionStatus cards={cards} />
            </div>
          </div>
          <div className="mt-4 sm:mt-0">
            <SetDialog data={sets} />
          </div>
        </div>
        {set?.images?.logo && (
          <Image
            src={set.images.logo}
            alt={`${set.name} logo`}
            width={400}
            height={200}
            quality={100}
            className="lg:max-h-[80%] max-h-[60%] w-auto"
          />
        )}
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-2">
        <div className="flex flex-wrap gap-2 items-center">
          <CardSearchInput />
          <TypeDropdown setId={setId} />
          <SubtypeDropdown setId={setId} />
          <RarityDropdown setId={setId} />
          <ResetFiltersButton />
          <ClearViewToggle />
        </div>
        <SortByButton />
      </div>
      <CardFeed cards={cards} />
    </div>
  );
}

export default SetPage;
