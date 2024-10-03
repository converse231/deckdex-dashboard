import {
  ArrowRightLeft,
  DollarSign,
  Home,
  Sparkle,
  SquareLibrary,
  Star,
  TrendingUp,
  Users,
  Settings,
  LayoutDashboard,
  Bell,
  FileText,
} from "lucide-react";

export const SIDEBAR_LINKS = [
  {
    group: "Main",
    icon: LayoutDashboard,
    links: [
      {
        name: "Dashboard",
        href: "/dashboard",
        icon: Home,
      },
      {
        name: "Notifications",
        href: "/dashboard/notifications",
        icon: Bell,
      },
      {
        name: "Reports",
        href: "/dashboard/reports",
        icon: FileText,
      },
      {
        name: "Settings",
        href: "/dashboard/settings",
        icon: Settings,
      },
    ],
  },
  {
    group: "Collection Management",
    icon: SquareLibrary,
    links: [
      {
        name: "Collection Tracker",
        href: "/dashboard/collection",
        icon: SquareLibrary,
      },
      {
        name: "AI Card Grading",
        href: "/dashboard/ai-grading",
        icon: Sparkle,
      },
      {
        name: "Wishlist",
        href: "/dashboard/wishlist",
        icon: Star,
      },
    ],
  },
  {
    group: "Market Insights",
    icon: TrendingUp,
    links: [
      {
        name: "Value Tracker",
        href: "/dashboard/value-tracker",
        icon: DollarSign,
      },
      {
        name: "Market Trends",
        href: "/dashboard/market-trends",
        icon: TrendingUp,
      },
    ],
  },
  {
    group: "Community",
    icon: Users,
    links: [
      {
        name: "Trade Hub",
        href: "/dashboard/trade-hub",
        icon: ArrowRightLeft,
      },
      {
        name: "Community",
        href: "/dashboard/community",
        icon: Users,
      },
    ],
  },
];
