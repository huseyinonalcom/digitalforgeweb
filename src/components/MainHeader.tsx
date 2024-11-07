import Image from "next/image";
import { NavLink } from "./navigation/NavLink";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LangSwitcher";
import dflogo from "../../public/assets/logos/dflogo.svg";
import { MobileDrawer } from "./header/MobileDrawer";

const HeaderLink = ({ href, text }: { href: string; text: string }) => {
  return (
    <NavLink href={href}>
      <p className="text-2xl font-bold">{text}</p>
    </NavLink>
  );
};

export const MainHeader = () => {
  const t = useTranslations();

  const links1 = [
    { href: "hotpress", text: t("hot-press") },
    { href: "projects", text: t("projects") },
    { href: "services", text: t("services") },
  ];

  const links2 = [
    { href: "about", text: t("about-us") },
    { href: "contact", text: t("contact") },
  ];

  return (
    <header className="shadow px-6 py-1 min-h-20 w-full items-center z-50 sticky top-0 bg-white flex flex-row justify-around lg:grid grid-cols-3">
      <div className="w-full hidden lg:flex flex-row items-center justify-around">
        {links1.map((link1) => (
          <HeaderLink key={link1.href} href={link1.href} text={link1.text} />
        ))}
      </div>
      <div className="w-full flex flex-row items-center justify-start lg:justify-center">
        <NavLink href={`/`}>
          <Image priority src={dflogo} alt="Digital Forge Logo" className="w-48" />
        </NavLink>
      </div>
      <div className="w-full hidden lg:flex flex-row items-center justify-around">
        {links2.map((link2) => (
          <HeaderLink key={link2.href} href={link2.href} text={link2.text} />
        ))}
        <LanguageSwitcher />
      </div>
      <MobileDrawer links={[...links1, ...links2]} />
    </header>
  );
};
