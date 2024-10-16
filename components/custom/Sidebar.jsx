"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/logo-icon.png";
import { Input } from "../ui/input";
import { SIDEBAR_LINKS } from "@/lib/constants";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Settings, HelpCircle, User, Menu, X } from "lucide-react";
import { Separator } from "../ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile menu button */}
      <div className="flex w-full justify-between items-center fixed px-5 z-10 top-0 py-5 border-b bg-background lg:hidden">
        <h3 className="text-heading-3">Deckdex</h3>
        <Button
          variant="ghost"
          size="icon"
          className=" "
          onClick={toggleSidebar}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-[300px] h-full bg-card border-r border-border px-8 py-10 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 z-40`}
      >
        <div className="flex items-center justify-start h-fit gap-3 mb-10">
          <Image
            src={logo}
            alt="logo"
            height={32}
            width={32}
            className="w-6 h-6"
          />
          <span className="text-heading-3">Deckdex</span>
        </div>
        <Input className="bg-secondary mb-6" placeholder="Search..." />
        <Accordion
          type="single"
          className="w-full flex-grow"
          defaultValue={["item-0"]}
        >
          {SIDEBAR_LINKS.map((group, index) => (
            <AccordionItem
              value={`item-${index}`}
              key={group.group}
              className="border-none"
            >
              <AccordionTrigger className="text-sm font-semibold text-muted-foreground hover:no-underline">
                <div className="flex items-center gap-3">
                  <group.icon className="w-5 h-5" />
                  <span>{group.group}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-1 pl-2">
                  {group.links.map((link) => {
                    const isActive = pathname.includes(link.href);
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        className={`flex items-center gap-3 text-foreground hover:bg-accent hover:text-primary transition-colors duration-200 py-2 px-4 rounded ${
                          isActive
                            ? "border-l-4 border-primary bg-accent text-primary"
                            : "border-l-4 border-transparent"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <link.icon className="w-5 h-5" />
                        <span>{link.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Separator className="my-4" />
        <div className="mt-auto flex flex-col gap-2">
          <Link
            href="/settings"
            className="flex items-center gap-3 text-foreground hover:bg-accent hover:text-primary transition-colors duration-200 py-2 px-2 rounded"
            onClick={() => setIsOpen(false)}
          >
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </Link>
          <Link
            href="/help"
            className="flex items-center gap-3 text-foreground hover:bg-accent hover:text-primary transition-colors duration-200 py-2 px-2 rounded"
            onClick={() => setIsOpen(false)}
          >
            <HelpCircle className="w-5 h-5" />
            <span>Help</span>
          </Link>
          <div className="flex items-center gap-3 py-2 px-2">
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-muted-foreground">john@example.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}

export default Sidebar;
