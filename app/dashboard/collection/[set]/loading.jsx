import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col gap-10">
      <div className="h-[300px] w-full bg-gradient-to-t from-cyan-500 to-blue-500 rounded-2xl p-8 flex flex-col justify-between relative">
        <div className="flex flex-col gap-5">
          <Skeleton className="h-10 w-[70%] bg-white/20" />
          <div className="flex flex-col gap-2">
            <Skeleton className="h-6 w-1/4 bg-white/20" />
            <Skeleton className="h-6 w-1/3 bg-white/20" />
            <Skeleton className="h-6 w-1/2 bg-white/20" />
          </div>
        </div>
        <Skeleton className="h-10 w-32 bg-white/20" />
        <Skeleton className="absolute right-10 top-16 w-[350px] h-[180px] bg-white/20" />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-10 w-24 bg-gray-500" />
          ))}
        </div>
        <Skeleton className="h-10 w-48 bg-gray-500" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-5 justify-items-center">
        {[...Array(12)].map((_, i) => (
          <Skeleton
            key={i}
            className="h-[380px] w-full bg-gray-200 rounded-2xl opacity-50"
          />
        ))}
      </div>
    </div>
  );
}
