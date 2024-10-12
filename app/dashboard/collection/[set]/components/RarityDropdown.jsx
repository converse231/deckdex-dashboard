"use client";

import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUniqueRarities } from "../lib/data";
import { Skeleton } from "@/components/ui/skeleton";

export default function RarityDropdown({ setId }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentRarity = searchParams.get("rarity") || "";

  const {
    data: rarities,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["rarities", setId],
    queryFn: () => fetchUniqueRarities(setId),
  });

  if (isLoading) return <Skeleton className="w-[140px] h-9 bg-secondary" />;
  if (error) return <div>An error occurred: {error.message}</div>;

  const filters = ["all", ...rarities];

  const handleValueChange = (value) => {
    const params = new URLSearchParams(searchParams);
    if (value.toLowerCase() === "all") {
      params.delete("rarity");
    } else {
      params.set("rarity", value?.toLowerCase());
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <Select value={currentRarity} onValueChange={handleValueChange}>
      <SelectTrigger className="w-[140px]">
        <SelectValue placeholder="Rarity" />
      </SelectTrigger>
      <SelectContent>
        {filters.map((filter, index) => (
          <SelectItem key={index} value={filter?.toLowerCase()}>
            {filter === "all" ? "See all" : filter || "Filter Name"}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
