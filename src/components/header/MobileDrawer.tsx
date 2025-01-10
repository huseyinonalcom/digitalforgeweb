"use client";

import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { NavLink } from "../navigation/NavLink";
import LanguageSwitcher from "../LangSwitcher";
import { useTranslations } from "next-intl";
import { BiChevronUp } from "react-icons/bi";

const Accordion = ({ title, children, expanded, onClick }: { title: string; children: React.ReactNode; expanded: boolean; onClick?: () => void }) => {
  return (
    <div className="flex flex-col gap-2 items-start">
      <div className={`flex flex-row items-center gap-3 cursor-pointer`} onClick={() => onClick && onClick()}>
        <p className="text-xl font-bold">{title}</p>
        <div className={`duration-300 ease-in ${expanded ? "rotate-180" : "rotate-0"}`}>
          <BiChevronUp size={24} />
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateRows: expanded ? "1fr" : "0fr",
          transition: "grid-template-rows 0.3s ease-in-out",
          marginLeft: "1rem",
        }}
      >
        <div className="flex flex-col gap-2 items-start overflow-hidden">{children}</div>
      </div>
    </div>
  );
};

export const MobileDrawer = () => {
  const t = useTranslations();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expanded, setExpanded] = useState<null | string>(null);
  const [expanded2, setExpanded2] = useState<null | string>(null);

  const HeaderLink = ({ href, text }: { href: string; text: string }) => {
    return (
      <NavLink href={href} onClick={() => setDrawerOpen(false)}>
        <p className="text-xl font-bold">{text}</p>
      </NavLink>
    );
  };

  return (
    <>
      <button name="open nav menu" aria-label="open nav menu" className="lg:hidden text-white" type="button" onClick={() => setDrawerOpen(!drawerOpen)}>
        <GiHamburgerMenu size={32} />
      </button>
      <div className={`fixed duration-500 top-0 w-screen h-screen flex-col gap-2 ease-in ${drawerOpen ? "right-0" : "-right-[100%]"}`}>
        <div className={`absolute right-0 w-full top-0 h-screen flex flex-col gap-6 bg-white py-6 pl-8 pr-16`}>
          <LanguageSwitcher />
          <button className={`absolute right-5 top-5 text-2xl font-black`} onClick={() => setDrawerOpen(false)}>
            X
          </button>
          <HeaderLink href={"/"} text={t("homepage")} />
          <HeaderLink href={"/projects"} text={t("projects")} />
          <Accordion title={t("services")} expanded={expanded === "services"} onClick={() => setExpanded((pe) => (pe === "services" ? null : "services"))}>
            <Accordion
              title={t("marketing")}
              expanded={expanded2 === "marketing"}
              onClick={() => setExpanded2((pe) => (pe === "marketing" ? null : "marketing"))}
            >
              <HeaderLink href={"/services/marketing/social-media"} text={t("social-media")} />
              <HeaderLink href={"/services/marketing/seo"} text="SEO" />
              <HeaderLink href={"/services/marketing/adwords"} text="Google AdWords" />
            </Accordion>
            <Accordion title={t("web-services")} expanded={expanded2 === "web"} onClick={() => setExpanded2((pe) => (pe === "web" ? null : "web"))}>
              <HeaderLink href={"/services/web/e-commerce"} text={t("e-commerce-title")} />
              <HeaderLink href={"/services/web/web-design"} text={t("web-design-title")} />
            </Accordion>
            <Accordion title={t("mobile-services")} expanded={expanded2 === "mobile"} onClick={() => setExpanded2((pe) => (pe === "mobile" ? null : "mobile"))}>
              <HeaderLink href={"/services/mobile/android"} text="Android" />
              <HeaderLink href={"/services/mobile/ios"} text="iOS" />
            </Accordion>
            <Accordion title={t("brand-identity")} expanded={expanded2 === "brand"} onClick={() => setExpanded2((pe) => (pe === "brand" ? null : "brand"))}>
              <HeaderLink href={"/services/brand-identity/design"} text={t("design-title")} />
              <HeaderLink href={"/services/brand-identity/catalogue"} text={t("catalogue-title")} />
            </Accordion>
          </Accordion>
          <HeaderLink href={"/references"} text={t("references")} />
          <HeaderLink href={"/about"} text={t("about-us")} />
          <HeaderLink href={"/contact"} text={t("contact")} />
        </div>
      </div>
    </>
  );
};
