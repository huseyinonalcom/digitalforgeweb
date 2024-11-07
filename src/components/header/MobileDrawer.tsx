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

  return (
    <>
      <button name="open nav menu" aria-label="open nav menu" className="lg:hidden" type="button" onClick={() => setDrawerOpen(!drawerOpen)}>
        <GiHamburgerMenu size={32} />
      </button>
      <div className={`fixed duration-300 top-0 w-screen h-screen flex-col gap-2 ease-in ${drawerOpen ? "right-0" : "-right-[100%]"}`}>
        <button
          className={`w-full h-full ease-in bg-black/30 ${drawerOpen ? "opacity-100 duration-1000" : "opacity-0"}`}
          onClick={() => setDrawerOpen(false)}
        />
        <div className={`absolute right-0 top-0 h-screen flex flex-col gap-6 bg-white py-6 pl-8 pr-16`}>
          <LanguageSwitcher />
          {links.map((link) => (
            <HeaderLink key={link.href + "m"} href={link.href} text={link.text} />
          ))}
        </div>
      </div>
    </>
  );
};
