import dflogo from "../../public/assets/logos/dflogo.svg";
import Image from "next/image";
import { NavLink } from "./navigation/NavLink";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LangSwitcher";
import { MobileDrawer } from "./header/MobileDrawer";

const HeaderLink = ({ href, text }: { href: string; text: string }) => {
  return (
    <NavLink href={href}>
      <p className="font-semibold text-[15px] text-white">{text}</p>
    </NavLink>
  );
};

export const MainHeader = () => {
  const t = useTranslations();

  const links1 = [
    { href: "/", text: t("homepage") },
    { href: "projects", text: t("projects") },
    { href: "services", text: t("services") },
  ];

  const links2 = [
    { href: "references", text: t("references") },
    { href: "about", text: t("about-us") },
    { href: "contact", text: t("contact") },
  ];

  return (
    <header className="shadow px-6 z-50 sticky top-0 bg-black/20">
      <div className="max-w-[1920px] min-h-20 py-1 mx-auto items-center flex flex-row justify-center gap-12">
        <div className="flex flex-row items-center justify-start lg:justify-center">
          <NavLink href={`/`}>
            <Image priority src={dflogo} alt="Digital Forge Logo" className="w-48" />
          </NavLink>
        </div>
        <div className="hidden lg:flex flex-row items-center justify-around gap-12 2xl:gap-20">
          {links1.map((link1) => (
            <HeaderLink key={link1.href} href={link1.href} text={link1.text} />
          ))}
          {links2.map((link2) => (
            <HeaderLink key={link2.href} href={link2.href} text={link2.text} />
          ))}
          <a className="text-white flex flex-col items-end text-[15px]" href="tel:+32494550687">
            <p>{t("reach-us")}</p>
            <strong className="h-[27px]">+32 494 55 06 87</strong>
          </a>
          <LanguageSwitcher />
        </div>
        <MobileDrawer />
      </div>
    </header>
  );
};
