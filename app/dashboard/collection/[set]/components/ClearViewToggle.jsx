"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Toggle } from "@/components/ui/toggle";
import { Eye, EyeOff } from "lucide-react";

export default function ClearViewToggle() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isClearView = searchParams.get("clearView") === "true";

  const handleToggle = () => {
    const params = new URLSearchParams(searchParams);
    if (isClearView) {
      params.delete("clearView");
    } else {
      params.set("clearView", "true");
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <Toggle
      pressed={isClearView}
      onPressedChange={handleToggle}
      aria-label="Toggle clear view"
    >
      {isClearView ? (
        <Eye className="h-4 w-4 mr-2" />
      ) : (
        <EyeOff className="h-4 w-4 mr-2" />
      )}
      {isClearView ? "Clear View" : "Normal View"}
    </Toggle>
  );
}
