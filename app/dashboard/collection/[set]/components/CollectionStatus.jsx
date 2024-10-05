import { Badge } from "@/components/ui/badge";
import { Blocks } from "lucide-react";
import React from "react";

function CollectionStatus() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2">
        <Blocks className="h-5 w-5" />
        <span className="text-xl font-semibold">2/36</span>
      </div>
      <Badge>20% Completed</Badge>
    </div>
  );
}

export default CollectionStatus;
