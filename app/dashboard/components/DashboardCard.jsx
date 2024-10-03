import { Card } from "@/components/ui/card";
import { User } from "lucide-react";
import React from "react";

function DashboardCard({ title, Icon = User, value, change }) {
  const isPositive = change >= 0;
  const changeColor = isPositive ? "text-green-500" : "text-red-500";
  const changeIcon = isPositive ? "↑" : "↓";
  return (
    <Card className="p-4">
      <div className="flex justify-between items-center">
        <h3 className="text-p text-muted-foreground flex items-center gap-2">
          <Icon className="icon-button" />
          {title}
        </h3>
        <svg
          className="h-5 w-5 text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
      </div>
      <div className="mt-2 flex items-center">
        <p className="text-3xl font-semibold">{value}</p>
        <span className={`ml-2 text-sm font-medium ${changeColor}`}>
          {changeIcon} {Math.abs(change)}%
        </span>
      </div>
    </Card>
  );
}

export default DashboardCard;
