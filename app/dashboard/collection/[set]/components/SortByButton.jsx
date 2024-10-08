"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export default function SortByButton() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSort = searchParams.get("sort") || "none";
  const currentOrder = searchParams.get("order") || "desc";

  const handleSort = (sortOption, order) => {
    const params = new URLSearchParams(searchParams);
    if (sortOption === "none") {
      params.delete("sort");
      params.delete("order");
    } else {
      params.set("sort", sortOption);
      params.set("order", order);
    }
    router.push(`?${params.toString()}`);
  };

  const getSortLabel = (sort, order) => {
    switch (sort) {
      case "price":
        return `Price (${order === "asc" ? "Low to High" : "High to Low"})`;
      case "rarity":
        return `Rarity (${order === "asc" ? "Common First" : "Rarest First"})`;
      default:
        return "Sort By";
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-[200px] justify-between">
          {getSortLabel(currentSort, currentOrder)}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => handleSort("none", "desc")}>
          None
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleSort("price", "desc")}>
          Price (High to Low)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleSort("price", "asc")}>
          Price (Low to High)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleSort("rarity", "asc")}>
          Rarity (Rarest First)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleSort("rarity", "desc")}>
          Rarity (Common First)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
