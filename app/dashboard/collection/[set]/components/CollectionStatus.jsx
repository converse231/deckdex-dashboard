import { Badge } from "@/components/ui/badge";
import { Blocks } from "lucide-react";
import React from "react";

function CollectionStatus({ cards }) {
  const totalCards = cards?.length || 0; // Get the total number of cards
  // const collectedCards = cards?.filter((card) => card.collected).length || 0; // Assuming `card.collected` is a boolean to track collected cards
  // const completionPercentage =
  //   totalCards > 0 ? Math.round((collectedCards / totalCards) * 100) : 0; // Calculate percentage

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2">
        <Blocks className="h-5 w-5" />
        <span className="text-xl font-semibold">10/{totalCards}</span>
      </div>
      <Badge>25% Completed</Badge>
    </div>
  );
}

export default CollectionStatus;
