import Image from "next/image";
import { NavLink } from "./navigation/NavLink";
import { Fragment } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import useTranslation from "next-translate/useTranslation";

export const MainHeader = () => {
  const { t, lang } = useTranslation("common");
  const links1 = [
    { href: "hotpress", text: t("hot_press") },
    { href: "projects", text: t("projcets") },
    { href: "services", text: t("services") },
  ];

  const links2 = [
    { href: "about", text: t("about_us") },
    { href: "contact", text: t("contact") },
  ];

  const link = (href: string, text: string) => {
    return (
      <NavLink href={href}>
        <p className="text-2xl font-bold">{text}</p>
      </NavLink>
    );
  };

  return (
    <header className="shadow px-6 py-1 w-full items-center z-50 sticky top-0 bg-gray-300/20 backdrop-blur-md flex flex-row justify-around lg:grid grid-cols-3">
      <div className="w-full hidden lg:flex flex-row items-center justify-around">
        {links1.map((link1) => (
          <Fragment key={link1.href}>{link(link1.href, link1.text)}</Fragment>
        ))}
      </div>
      <div className="lg:w-full flex flex-row items-center justify-center">
        <NavLink href={`/${lang}`}>
          <Image src="/assets/logos/dflogo.svg" alt="Digital Forge Logo" width={100} height={100} />
        </NavLink>
      </div>
      <div className="w-full hidden lg:flex flex-row items-center justify-around">
        {links2.map((link2) => (
          <Fragment key={link2.href}>{link(link2.href, link2.text)}</Fragment>
        ))}
       
      </div>
      <button className="group relative lg:hidden">
        <GiHamburgerMenu size={32} />
        <div className="hidden group-hover:flex flex-col gap-2 absolute left-0 w-full bg-gray-300 p-4">
          {links1.map((link1) => (
            <Fragment key={link1.href}>{link(link1.href, link1.text)}</Fragment>
          ))}
          {links2.map((link2) => (
            <Fragment key={link2.href}>{link(link2.href, link2.text)}</Fragment>
          ))}
        </div>
      </button>
    </header>
  );
};
