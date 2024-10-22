"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";

const ClearViewToggle = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isClearView = searchParams.get("clearView") === "true";

  const handleToggle = (checked) => {
    const params = new URLSearchParams(searchParams);
    if (checked) {
      params.set("clearView", "true");
    } else {
      params.delete("clearView");
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex items-center space-x-2">
      <Switch
        checked={isClearView}
        onCheckedChange={handleToggle}
        id="clear-view-mode"
        aria-label="Toggle clear view"
      />
      <Label
        htmlFor="clear-view-mode"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        <div className="flex items-center">
          {isClearView ? (
            <Eye className="h-4 w-4 mr-2" />
          ) : (
            <EyeOff className="h-4 w-4 mr-2" />
          )}
          {isClearView ? "Clear View" : "Normal View"}
        </div>
      </Label>
    </div>
  );
};

export default ClearViewToggle;
