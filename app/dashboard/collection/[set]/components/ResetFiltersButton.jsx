"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";

export default function ResetFiltersButton() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleReset = () => {
    router.push(window.location.pathname);
  };

  // Check if there are any search params
  const hasFilters = Array.from(searchParams.keys()).length > 0;

  // Only render the button if there are filters
  if (!hasFilters) return null;

  return (
    <Button onClick={handleReset} variant="outline" className="w-[140px]">
      <RotateCcw className="icon-button mr-2" /> Reset Filters
    </Button>
  );
}
