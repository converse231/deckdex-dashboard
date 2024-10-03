import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import React from "react";

function DashboardHeading() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-heading-2">Hello, John Doe</h2>
        <p className="text-p text-muted-foreground">
          Track, manage, and optimize your card collection with ease.
        </p>
      </div>
      <div className="flex gap-4">
        <Button size="lg" variant="outline">
          Export Data{" "}
          <Download className="h-4 w-4 text-muted-foreground ml-2" />
        </Button>
        <Button size="lg">Create Report</Button>
      </div>
    </div>
  );
}

export default DashboardHeading;
