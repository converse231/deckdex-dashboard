import AppSidebar from "@/components/custom/AppSidebar";
import Sidebar from "@/components/custom/Sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import React from "react";

function layout({ children }) {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <AppSidebar />
        <main className="mx-auto w-full">
          <section className="bg-background md:mt-16 mt-12 lg:mt-0 md:px-10 px-5 py-12 min-h-screen">
            {children}
            <Toaster />
          </section>
        </main>
      </SidebarProvider>
    </TooltipProvider>
  );
}

export default layout;
