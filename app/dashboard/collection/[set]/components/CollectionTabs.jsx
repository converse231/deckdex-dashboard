"use client";

import { Card } from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation"; // Next.js hook to get query params

const CARD_TYPE = [
  { name: "See All", href: "?filter=all" },
  { name: "Ace Spec", href: "?filter=ace_spec" },
  { name: "Special Art", href: "?filter=special_art" },
  { name: "Pokemon Ex", href: "?filter=pokemon_ex" },
  { name: "Hyper Rare", href: "?filter=hyper_rare" },
];

function CollectionTabs() {
  const searchParams = useSearchParams(); // Get current query parameters
  const currentFilter = searchParams.get("filter"); // Get the current filter from the URL

  return (
    <Card className="flex w-fit border py-2 px-3 items-center gap-4 rounded-xl">
      {CARD_TYPE.map((filter, index) => {
        // Set the default filter to the first filter if currentFilter is empty or null
        const defaultFilter = currentFilter || CARD_TYPE[0].href.split("=")[1];
        const isActive = defaultFilter === filter.href.split("=")[1]; // Check if the filter is active

        return (
          <Link
            key={index}
            href={filter.href} // Updated to use the correct href
            className={`text-md uppercase tracking-widest text-sm font-semibold px-4 py-2 rounded-lg ${
              isActive ? "bg-secondary-foreground text-secondary" : ""
            }`}
          >
            {filter.name || "Filter Name"}
          </Link>
        );
      })}
    </Card>
  );
}

export default CollectionTabs;
