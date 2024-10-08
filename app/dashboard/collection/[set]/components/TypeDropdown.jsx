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
import { fetchUniqueTypes } from "../lib/data";
import { Skeleton } from "@/components/ui/skeleton";

export default function TypeDropdown({ setId }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentType = searchParams.get("type") || "";

  const {
    data: types,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["types", setId],
    queryFn: () => fetchUniqueTypes(setId),
  });

  if (isLoading) return <Skeleton className="w-[140px] h-9 bg-secondary" />;
  if (error) return <div>An error occurred: {error.message}</div>;

  const filters = ["all", ...types];

  const handleValueChange = (value) => {
    const params = new URLSearchParams(searchParams);
    if (value.toLowerCase() === "all") {
      params.delete("type");
    } else {
      params.set("type", value.toLowerCase());
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <Select value={currentType} onValueChange={handleValueChange}>
      <SelectTrigger className="w-[140px]">
        <SelectValue placeholder="Type" />
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
