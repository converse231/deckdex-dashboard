import React from "react";
import DashboardCard from "./DashboardCard";
import { Clock, SquareLibrary, Star, Target, TrendingUp } from "lucide-react";
import FeaturedCard from "./FeaturedCard";
import PriceTrackingChart from "./PriceTrackingChart";
import CollectionsCard from "./CollectionsCard";

function DashboardFeed() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <DashboardCard
        title="Total Cards"
        Icon={SquareLibrary}
        value={100}
        change={10}
      />
      <DashboardCard
        title="Completion Rate"
        Icon={Target}
        value="75%"
        change={3}
      />
      <DashboardCard
        title="Collection Value"
        Icon={TrendingUp}
        value="$25,000"
        change={12}
      />
      <DashboardCard
        title="Recent Additions"
        Icon={Clock}
        value={23}
        change={15}
      />
      <FeaturedCard />
      <PriceTrackingChart />
      <CollectionsCard />
    </div>
  );
}

export default DashboardFeed;
