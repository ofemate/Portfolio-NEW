"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type Props = {};

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const Header = (props: Props) => {
  const pathname = usePathname();

  return (
    <header
      className={cn(
        "w-full flex justify-center bg-transparent pt-4 lg:pt-14 z-[51]",
        pathname === "/portfolio" ? "bg-[#161519]" : ""
      )}
    >
      <Menubar className="border-none bg-transparent ">
        <MenubarMenu>
          <MenubarTrigger
            className={cn(
              "text-[#161519] font-normal lg:text-xl",
              pathname === "/portfolio" ? "text-white" : ""
            )}
          >
            <Link href={"/"}>Home</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger
            className={cn(
              "text-[#161519] font-normal lg:text-xl",
              pathname === "/portfolio" ? "text-white" : ""
            )}
          >
            <Link href={"/portfolio"} className="flex gap-1 items-center">
              Portfolio{" "}
              <ChevronDown size={16} className="text-[#9B9B9B] ml-1" />
            </Link>
          </MenubarTrigger>
          <MenubarContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <MenubarItem>
              <ChevronRight size={16} className="text-[#6100A5] mr-1" /> Reklam
              Çalışmaları
            </MenubarItem>
            <MenubarItem>
              <ChevronRight size={16} className="text-[#6100A5] mr-1" />{" "}
              Hareketli Çalışmalar
            </MenubarItem>
            <MenubarItem>
              <ChevronRight size={16} className="text-[#6100A5] mr-1" /> Logo
              Çalışmaları
            </MenubarItem>
            <MenubarItem>
              <ChevronRight size={16} className="text-[#6100A5] mr-1" /> Sosyal
              Medya Çalışmaları
            </MenubarItem>
            <MenubarItem>
              <ChevronRight size={16} className="text-[#6100A5] mr-1" />{" "}
              Fotoğraf Çalışmaları
            </MenubarItem>
            <MenubarItem>
              <ChevronRight size={16} className="text-[#6100A5] mr-1" /> Diğer
              Çalışmalar
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger
            className={cn(
              "text-[#161519] font-normal lg:text-xl",
              pathname === "/portfolio" ? "text-white" : ""
            )}
          >
            <Link href={"/about"}>About Me</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger
            className={cn(
              "text-[#161519] font-normal lg:text-xl",
              pathname === "/portfolio" ? "text-white" : ""
            )}
          >
            <Link href={"contact"}>Contact</Link>
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </header>
  );
};

export default Header;
