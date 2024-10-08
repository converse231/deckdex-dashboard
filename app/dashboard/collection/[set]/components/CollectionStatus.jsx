import { Badge } from "@/components/ui/badge";
import { Blocks } from "lucide-react";
import React from "react";

function CollectionStatus({ cards }) {
  const totalCards = cards?.length || 0; // Get the total number of cards

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2">
        <Blocks className="h-5 w-5" />
        <span className="text-lg font-semibold">10/{totalCards}</span>
      </div>
      <Badge variant="secondary">25% Completed</Badge>
    </div>
  );
}

export default CollectionStatus;
