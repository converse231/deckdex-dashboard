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
import { fetchUniqueSubtypes } from "../lib/data";
import { Skeleton } from "@/components/ui/skeleton";

export default function SubtypeDropdown({ setId }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSubType = searchParams.get("subType") || "";

  const {
    data: subtypes,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["subtypes", setId],
    queryFn: () => fetchUniqueSubtypes(setId),
  });

  if (isLoading) return <Skeleton className="w-[140px] h-9 bg-secondary" />;
  if (error) return <div>An error occurred: {error.message}</div>;

  const filters = ["all", ...subtypes];

  const handleValueChange = (value) => {
    const params = new URLSearchParams(searchParams);
    if (value.toLowerCase() === "all") {
      params.delete("subType");
    } else {
      params.set("subType", value.toLowerCase());
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <Select value={currentSubType} onValueChange={handleValueChange}>
      <SelectTrigger className="w-[140px]">
        <SelectValue placeholder="Subtype" />
      </SelectTrigger>
      <SelectContent>
        {filters.map((filter, index) => (
          <SelectItem key={index} value={filter.toLowerCase()}>
            {filter === "all" ? "See all" : filter || "Filter Name"}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
