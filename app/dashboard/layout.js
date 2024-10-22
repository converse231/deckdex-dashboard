import AppSidebar from "@/components/custom/AppSidebar";
import Sidebar from "@/components/custom/Sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Image from "next/image";
import React from "react";
import logo from "@/assets/logo-icon.png";

function layout({ children }) {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <AppSidebar />
        <main className="mx-auto w-full">
          <div className="fixed top-0 left-0 z-50 w-full px-5 py-4 border-b border-border bg-background lg:hidden block">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2">
                <Image src={logo} alt="Deckdex" width={24} height={24} />
                <p className="text-xl font-semibold">Deckdex</p>
              </div>
              <SidebarTrigger />
            </div>
          </div>

          <section className="bg-background md:mt-20 mt-12 lg:mt-0 md:px-10 px-5 py-12 min-h-screen">
            {children}
            <Toaster />
          </section>
        </main>
      </SidebarProvider>
    </TooltipProvider>
  );
}

export default layout;
