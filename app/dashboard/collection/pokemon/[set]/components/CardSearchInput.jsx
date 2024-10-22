"use client";

import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useDebounce } from "use-debounce";

export default function CardSearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [debouncedUpdateSearch] = useDebounce(updateSearch, 300);

  function updateSearch(term) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    router.push(`?${params.toString()}`);
  }

  return (
    <Input
      className="w-[200px]"
      placeholder="Search cards..."
      onChange={(e) => debouncedUpdateSearch(e.target.value)}
      defaultValue={searchParams.get("search") || ""}
    />
  );
}
