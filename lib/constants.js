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

import pokemonTcgLogo from "@/assets/pokemon-tcg-logo.png";
import onepieceTcgLogo from "@/assets/one-piece-tcg-logo.webp";

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

export const COLLECTIONS = [
  {
    title: "Pokemon TCG",
    description:
      "The Pokémon TCG lets you collect, trade, and build powerful decks for thrilling battles! With rare cards, unique artwork, and special editions, it’s perfect for collectors who love discovering and showcasing their favorite Pokémon.",
    logo: pokemonTcgLogo,
    sets: [
      {
        name: "Stellar Crown (SCR)",
        logo: "https://tcg.pokemon.com/assets/img/sv-expansions/stellar-crown/logo/en-us/sv7-logo.png",
        set: "Scarlet & Violet",
      },
      {
        name: "Shrouded Fable (SFA)",
        logo: "https://tcg.pokemon.com/assets/img/sv-expansions/shrouded-fable/logo/en-us/sv6pt5-logo.png",
        set: "Scarlet & Violet",
      },
      {
        name: "Twilight Masquerade (TWM)",
        logo: "https://tcg.pokemon.com/assets/img/sv-expansions/twilight-masquerade/logo/en-us/sv6-logo.png",
        set: "Scarlet & Violet",
      },
      {
        name: "Temporal FOrces (TEF)",
        logo: "https://tcg.pokemon.com/assets/img/sv-expansions/temporal-forces/logo/en-us/sv5-logo.png",
        set: "Scarlet & Violet",
      },
      {
        name: "Paldean Fates (PAF)",
        logo: "https://tcg.pokemon.com/assets/img/sv-expansions/paldean-fates/logo/en-us/sv04pt5-logo.png",
        set: "Scarlet & Violet",
      },
      {
        name: "Paradox Rift (PAR)",
        logo: "https://tcg.pokemon.com/assets/img/sv-expansions/paradox-rift/logo/en-us/sv04-logo-cmyk.png",
        set: "Scarlet & Violet",
      },
      {
        name: "151 (MEW)",
        logo: "https://tcg.pokemon.com/assets/img/sv-expansions/151/logo/en-us/logo.png",
        set: "Scarlet & Violet",
      },
      {
        name: "Obsidian Flames (OBF)",
        logo: "https://tcg.pokemon.com/assets/img/sv-expansions/obsidian-flames/logo/en-us/sv03-header-logo.png",
        set: "Scarlet & Violet",
      },
      {
        name: "Paldea Evovled (PAL)",
        logo: "https://tcg.pokemon.com/assets/img/sv-expansions/paldea-evolved/logo/en-us/sv02-header-logo.png",
        set: "Scarlet & Violet",
      },
      {
        name: "Scarlet & Violet (SVI)",
        logo: "https://tcg.pokemon.com/assets/img/sv-expansions/scarlet-violet/logo/en-us/sv01-header-logo.png",
        set: "Scarlet & Violet",
      },
    ],
  },
];
