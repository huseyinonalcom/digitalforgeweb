"use client";

import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { NavLink } from "../navigation/NavLink";
import LanguageSwitcher from "../LangSwitcher";

const HeaderLink = ({ href, text }: { href: string; text: string }) => {
  return (
    <NavLink href={href}>
      <p className="text-xl font-bold">{text}</p>
    </NavLink>
  );
};

export const MobileDrawer = ({
  links,
}: {
  links: {
    href: string;
    text: string;
  }[];
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  console.info("links", links);

  return (
    <>
      <button name="open nav menu" aria-label="open nav menu" className="lg:hidden" type="button" onClick={() => setDrawerOpen(!drawerOpen)}>
        <GiHamburgerMenu size={32} />
      </button>
      <button
        className={`fixed duration-300 top-0 w-screen h-screen flex-col gap-2 ease-in bg-black/30 ${
          drawerOpen ? "right-0 opacity-100" : "-right-[100%] opacity-0"
        }`}
        onClick={() => setDrawerOpen(false)}
      ></button>
      <div className={`fixed duration-300 top-0 h-screen flex flex-col gap-6 bg-white ease-in py-6 px-12 ${drawerOpen ? "right-0" : "-right-[100%]"}`}>
        <LanguageSwitcher />
        {links.map((link) => (
          <HeaderLink key={link.href + "m"} href={link.href} text={link.text} />
        ))}
      </div>
    </>
  );
};
