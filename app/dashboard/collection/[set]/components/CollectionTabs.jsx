"use client";

import { Card } from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation"; // Next.js hook to get query params
import { fetchUniqueSubtypes } from "../lib/data";
import { useQuery } from "@tanstack/react-query";

function CollectionTabs({ setId }) {
  const searchParams = useSearchParams(); // Get current query parameters
  const currentSubType = searchParams.get("subType") || "all"; // Get the current subType from the URL, default to "all" if not present

  const {
    data: subtypes,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["subtypes", setId],
    queryFn: () => fetchUniqueSubtypes(setId),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  // Insert "See All" as the first tab with the subType "all"
  const filters = ["all", ...subtypes];

  return (
    <Card className="flex w-fit border items-center gap-2 rounded-lg">
      {filters.map((filter, index) => {
        // Convert filter to lowercase for comparison
        const isActive = currentSubType?.toLowerCase() === filter.toLowerCase(); // Check if this tab is active

        return (
          <Link
            key={index}
            href={`?subType=${filter.toLowerCase()}`} // Updated to use the correct href
            className={`text-md uppercase tracking-widest text-xs font-semibold px-2 py-1 rounded-lg ${
              isActive ? "bg-secondary-foreground text-secondary" : ""
            }`}
          >
            {filter === "all" ? "See All" : filter || "Filter Name"}
          </Link>
        );
      })}
    </Card>
  );
}

export default CollectionTabs;
