import Sidebar from "@/components/custom/Sidebar";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import React from "react";

function layout({ children }) {
  return (
    <TooltipProvider>
      <main>
        <Sidebar />
        <section className="flex-1 bg-background lg:ml-[300px] md:mt-16 mt-12 lg:mt-0 md:px-10 px-5 py-12 min-h-screen">
          {children}
          <Toaster />
        </section>
      </main>
    </TooltipProvider>
  );
}

export default layout;
