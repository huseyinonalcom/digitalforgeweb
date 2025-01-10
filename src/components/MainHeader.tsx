import dflogo from "../../public/assets/logos/dflogo.svg";
import Image from "next/image";
import { NavLink } from "./navigation/NavLink";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LangSwitcher";
import { MobileDrawer } from "./header/MobileDrawer";
import { BiChevronUp } from "react-icons/bi";

const HeaderLink = ({ href, text }: { href: string; text: string }) => {
  return (
    <NavLink href={href}>
      <p className="font-semibold text-[15px] hover:underline text-white">{text}</p>
    </NavLink>
  );
};

export const MainHeader = () => {
  const t = useTranslations();

  const AccordionTop = ({ title, children }: { title: string; children: React.ReactNode }) => {
    return (
      <div className={`flex relative flex-col group items-start`}>
        <div className={`flex flex-row items-center cursor-pointer`}>
          <p className="font-semibold text-[15px] text-white">{title}</p>
          <div className={`duration-300 ease-in group-hover:rotate-180 rotate-0 text-white`}>
            <BiChevronUp size={24} />
          </div>
        </div>
        <div
          className={`absolute top-6 flex-col bg-black w-[300px] pl-6 py-2 group-hover:flex hidden gap-2 items-start transition-all duration-300 ease-in-out`}
        >
          {children}
        </div>
      </div>
    );
  };

  const Accordion = ({ title, children }: { title: string; children: React.ReactNode }) => {
    return (
      <div className={`flex duration-300 ease-in hover:text-gray-300 text-white relative flex-col group items-start`}>
        <div className={`flex flex-row peer items-center cursor-pointer`}>
          <p className="font-semibold text-[15px]">{title}</p>
          <div className={`duration-300 ease-in group-hover:rotate-180 rotate-0`}>
            <BiChevronUp size={24} />
          </div>
        </div>
        <div
          className={`z-10 absolute left-[100%] flex-col bg-gray-500 w-[300px] px-6 py-1 peer-hover:flex hover:flex hidden gap-2 items-start transition-all duration-300 ease-in-out`}
        >
          {children}
        </div>
      </div>
    );
  };

  return (
    <header className="shadow px-6 z-50 sticky top-0 bg-black/20">
      <div className="max-w-[1920px] min-h-20 py-1 mx-auto items-center flex flex-row justify-center gap-12">
        <div className="flex flex-row items-center justify-start lg:justify-center">
          <NavLink href={`/`}>
            <Image priority src={dflogo} alt="Digital Forge Logo" className="w-48" />
          </NavLink>
        </div>
        <div className="hidden lg:flex flex-row items-center justify-around gap-12 2xl:gap-20">
          <HeaderLink href={"/"} text={t("homepage")} />
          <HeaderLink href={"/projects"} text={t("projects")} />
          <AccordionTop title={t("services")}>
            <Accordion title={t("marketing")}>
              <HeaderLink href={"/services/marketing/social-media"} text={t("social-media")} />
              <HeaderLink href={"/services/marketing/seo"} text="SEO" />
              <HeaderLink href={"/services/marketing/adwords"} text="Google AdWords" />
            </Accordion>
            <Accordion title={t("web-services")}>
              <HeaderLink href={"/services/web/e-commerce"} text={t("e-commerce-title")} />
              <HeaderLink href={"/services/web/web-design"} text={t("web-design-title")} />
            </Accordion>
            <Accordion title={t("mobile-services")}>
              <HeaderLink href={"/services/mobile/android"} text="Android" />
              <HeaderLink href={"/services/mobile/ios"} text="iOS" />
            </Accordion>
            <Accordion title={t("brand-identity")}>
              <HeaderLink href={"/services/brand-identity/design"} text={t("design-title")} />
              <HeaderLink href={"/services/brand-identity/catalogue"} text={t("catalogue-title")} />
            </Accordion>
          </AccordionTop>
          <HeaderLink href={"/references"} text={t("references")} />
          <HeaderLink href={"/about"} text={t("about-us")} />
          <HeaderLink href={"/contact"} text={t("contact")} />
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
