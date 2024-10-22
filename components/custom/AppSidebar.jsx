"use client";

import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  useSidebar,
} from "../ui/sidebar";
import Logo from "@/assets/logo-icon.png";
import {
  ArrowLeftToLine,
  ArrowRightToLine,
  ChevronRight,
  Home,
  LayoutDashboard,
  Settings,
  Sparkle,
  Users,
} from "lucide-react";
import Image from "next/image";
import SideBarFooter from "./SideBarFooter";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";

const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Collections",
    url: "/dashboard/collection",
    icon: LayoutDashboard,
    sub_items: [
      { title: "All Collections", url: "/dashboard/collection" },
      { title: "Pokemon", url: "/dashboard/collection/pokemon" },
      { title: "One Peice", url: "#" },
      { title: "Magic the Gathering", url: "#" },
      { title: "More coming soon...", url: "#" },
    ],
  },
  {
    title: "Professor Oak",
    url: "#",
    icon: Sparkle,
  },
];

const bottomItems = [
  {
    title: "Community",
    url: "#",
    icon: Users,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

function AppSidebar() {
  const { open, setOpen, toggleSidebar } = useSidebar();
  const pathname = usePathname();

  const renderMenuItem = (item) => {
    const isActive = pathname === item.url;
    const hasSubItems = item.sub_items && item.sub_items.length > 0;
    const isParentOfActive =
      hasSubItems && item.sub_items.some((subItem) => pathname === subItem.url);

    if (hasSubItems) {
      return (
        <Collapsible
          key={item.title}
          asChild
          defaultOpen={isActive || isParentOfActive}
          className="group/collapsible"
        >
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton
                className={`transition-colors ${
                  isActive || isParentOfActive
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                }`}
              >
                <item.icon
                  className={
                    isActive || isParentOfActive
                      ? "text-primary-foreground"
                      : ""
                  }
                />
                <span>{item.title}</span>
                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                {item.sub_items.map((subItem) => {
                  const isSubItemActive = pathname === subItem.url;
                  return (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton
                        asChild
                        className={`transition-colors ${
                          isSubItemActive
                            ? "bg-primary/80 text-primary-foreground"
                            : "hover:bg-muted"
                        }`}
                      >
                        <Link href={subItem.url}>
                          <span>{subItem.title}</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  );
                })}
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
      );
    }

    return (
      <SidebarMenuItem key={item.title}>
        <SidebarMenuButton
          asChild
          className={`transition-colors ${
            isActive ? "bg-primary text-primary-foreground" : "hover:bg-muted"
          }`}
        >
          <Link href={item.url} className="flex items-center gap-2">
            <item.icon className={isActive ? "text-primary-foreground" : ""} />
            <span>{item.title}</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="py-5 px-4">
        <div className="flex items-center gap-2">
          <Image src={Logo} alt="Logo" width={24} height={24} />
          {open && <p className="text-lg font-bold">Deckdex</p>}
        </div>
      </SidebarHeader>
      <SidebarContent className={`${open ? "px-2" : "px-0"}`}>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>{items.map(renderMenuItem)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup className="mt-auto">
          <SidebarMenu>
            {bottomItems.map(renderMenuItem)}
            <SidebarMenuItem>
              <SidebarMenuButton onClick={toggleSidebar}>
                {open ? <ArrowLeftToLine /> : <ArrowRightToLine />}
                <span>Collapse sidebar</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SideBarFooter />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
