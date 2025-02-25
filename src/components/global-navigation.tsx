"use client";

import Link from "next/link";
import React, { useState } from "react";
import { BurgerMenuIcon } from "../icons/BurgerMenuIcon";

interface GlobalTailwindNavigationMenuProps {
  navItems?: { url: string; showInNavigation: boolean; id: string; name: string }[];
  navClasses: string;
}

// render a tailwind navigation menu
const GlobalTailwindNavigationMenu = ({ navItems, navClasses }: GlobalTailwindNavigationMenuProps) => {
  if (typeof navItems === "undefined") {
    return <></>;
  }

  navItems = navItems.filter(
    (x) => typeof x.url !== "undefined" && typeof x.showInNavigation !== "undefined" && x.showInNavigation === true,
  );

  const [isOpen, setOpen] = useState(false);

  return (
    <nav className={navClasses}>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          onClick={() => setOpen(!isOpen)}
        >
          <BurgerMenuIcon />
        </button>
      </div>
      <div className={`w-full block grow lg:flex lg:items-center lg:w-auto ${!isOpen ? "hidden" : ""}`}>
        <div className="text-sm lg:grow">
          {navItems.map((item: any) => {
            return (
              <Link key={item.id} href={item.url} className="home-text transition duration-300 mr-8 block mt-4 lg:inline-block lg:mt-0">
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export { GlobalTailwindNavigationMenu };
