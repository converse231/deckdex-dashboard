import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import React from "react";
import DashboardHeading from "./components/DashboardHeading";
import DashboardFeed from "./components/DashboardFeed";

function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <DashboardHeading />
      <DashboardFeed />
    </div>
  );
}

export default DashboardPage;
