"use client";
import React from "react";
import { HomeIcon, GlobeAmericasIcon, WrenchIcon, MapPinIcon, SquaresPlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link.js";
import { usePathname } from "next/navigation.js";

const links = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon },
  {
    name: "Manager",
    href: "/manager",
    icon: WrenchIcon,
    subLink: [
      { name: "Countries", href: "/manager/countires", icon: GlobeAmericasIcon },
      { name: "Bases", href: "/manager/bases", icon: MapPinIcon },
      { name: "Boat Types", href: "/manager/boat-type", icon: SquaresPlusIcon },
    ],
  },
  { name: "Profile", href: "/profile", icon: HomeIcon },
];

const NavBar = () => {
  const pathName = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link className={pathName === link.href ? "nav-item nav-item--active" : "nav-item"} key={link.name} href={link.href}>
            {link.name}
          </Link>
        );
      })}
    </>
  );
};

export default NavBar;
