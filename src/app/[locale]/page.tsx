import AnimatedBackground from "@/components/fluff/AnimatedBackground";
import { FaChartLine, FaCode, FaPaintBrush, FaWhatsapp } from "react-icons/fa";
import { ButtonColorOut } from "@/components/ButtonColorOut";
import dflogo from "../../../public/assets/logos/dflogo.svg";
import { NavLink } from "@/components/navigation/NavLink";
import { BoxDiv } from "@/components/containers/box-div";
import { useTranslations } from "next-intl";
import Contact from "./contact/page";
import Image from "next/image";
import InfiniteCarousel from "@/components/fluff/AutoCarousel";
import { BiMailSend } from "react-icons/bi";

export default function Home() {
  const t = useTranslations();

  return (
    <div className="flex flex-col w-full items-center bg-[#d15742]">
      <AnimatedBackground />
      <BoxDiv className="min-h-[60vh] relative">
        <div className="text-white flex flex-col-reverse lg:flex-row justify-around gap-5 h-full max-w-[1500px] mx-auto">
          <div className="flex flex-col gap-2 items-center justify-center">
            <h2 className="text-xl lg:text-3xl font-bold w-full text-center">{t("intro-title")}</h2>
            <p className="text-lg text-center">{t("intro-text")}</p>
            <div className="flex flex-row gap-4">
              <NavLink href="projects">
                <ButtonColorOut>{t("intro-projects")}</ButtonColorOut>
              </NavLink>
              <NavLink href="contact">
                <ButtonColorOut>{t("intro-contact")}</ButtonColorOut>
              </NavLink>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image priority src={dflogo} alt="Digital Forge Logo" />
          </div>
        </div>
      </BoxDiv>
      <BoxDiv className="bg-white">
        <div className="flex flex-col gap-6 items-center justify-center max-w-[1200px] mx-auto">
          <h1 className="text-4xl font-bold mx-auto">{t("who-are-we-title")}</h1>
          <p className="text-lg text-center">{t("who-are-we-text")}</p>
        </div>
      </BoxDiv>
      <BoxDiv>
        <div className="flex flex-col gap-6 items-center text-white justify-center max-w-[1500px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 w-full">
            <div className="flex flex-col gap-2 items-start rounded-md text-white p-4">
              <div className="flex flex-row items-center justify-between w-full">
                <h1 className="text-3xl font-bold">{t("services-1-title")}</h1>
                <FaChartLine color="yellow" size={64} />
              </div>
              <p>{t("services-1-text")}</p>
            </div>
            <div className="flex flex-col gap-2 items-start rounded-md text-white p-4">
              <div className="flex flex-row items-center justify-between w-full">
                <h1 className="text-3xl font-bold">{t("services-2-title")}</h1>
                <FaPaintBrush color="red" size={64} />
              </div>
              <p>{t("services-2-text")}</p>
            </div>
            <div className="flex flex-col gap-2 items-start rounded-md text-white p-4">
              <div className="flex flex-row items-center justify-between w-full">
                <h1 className="text-3xl font-bold">{t("services-3-title")}</h1>
                <FaCode color="#1fa800" size={64} />
              </div>
              <p>{t("services-3-text")}</p>
            </div>
          </div>
        </div>
      </BoxDiv>
      <BoxDiv className="bg-white">
        <div className="flex flex-col gap-6 items-center justify-center max-w-[1500px] mx-auto">
          <h1 className="text-4xl font-bold">{t("our-partners")}</h1>
          <InfiniteCarousel />
        </div>
      </BoxDiv>
      <BoxDiv className="bg-white">
        <div className="grid max-w-[1500px] grid-cols-1 lg:grid-cols-3 mx-auto">
          <div className="col-span-1">
            <h1 className="text-5xl font-black ml-auto">{t("why-us-title")}</h1>
          </div>
          <div className="col-span-2">
            <div className="flex flex-col gap-2 items-start rounded-md p-4 min-h-36">
              <div className="flex flex-row items-center justify-between w-full">
                <h1 className="text-2xl font-black">{t("why-us-4-title")}</h1>
              </div>
              <p>{t("why-us-4-text")}</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 w-full">
              <div className="flex flex-col gap-2 items-start rounded-md p-4 min-h-36">
                <div className="flex flex-row items-center justify-between w-full">
                  <h1 className="text-lg font-bold">{t("why-us-1-title")}</h1>
                </div>
                <p>{t("why-us-1-text")}</p>
              </div>
              <div className="flex flex-col gap-2 items-start rounded-md p-4 min-h-36">
                <div className="flex flex-row items-center justify-between w-full">
                  <h1 className="text-lg font-bold">{t("why-us-2-title")}</h1>
                </div>
                <p>{t("why-us-2-text")}</p>
              </div>
              <div className="flex flex-col gap-2 items-start rounded-md p-4 min-h-36">
                <div className="flex flex-row items-center justify-between w-full">
                  <h1 className="text-lg font-bold">{t("why-us-3-title")}</h1>
                </div>
                <p>{t("why-us-3-text")}</p>
              </div>
            </div>
          </div>
        </div>
      </BoxDiv>
      <BoxDiv className="relative w-full">
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-center max-w-[1200px] mx-auto">
          <a href="https://api.whatsapp.com/send?phone=32494550687" target="_blank" rel="noreferrer" className="flex flex-row gap-2 items-center">
            <FaWhatsapp size={128} className="h-12 w-12 lg:h-24 lg:w-24" color="#25d366" />
            <p className="bg-gradient-to-r blur-xs from-[#25d366] py-2 to-teal-500 bg-clip-text text-xl lg:text-4xl box-content font-extrabold text-transparent text-center select-none">
              {t("contact-whatsapp")}
            </p>
          </a>
          <a href="mailto:info@digitalforge.be" rel="noreferrer" className="flex flex-row gap-2 items-center">
            <BiMailSend size={128} className="h-12 w-12 lg:h-24 lg:w-24" color="#3963ed" />
            <p className="bg-gradient-to-r blur-xs from-[#3963ed] to-blue-400 py-2 bg-clip-text overflow-visible text-xl lg:text-4xl box-content font-extrabold text-transparent text-center select-none">
              {t("contact-mail")}
            </p>
          </a>
        </div>
      </BoxDiv>
      <BoxDiv className="bg-white">
        <Contact />
      </BoxDiv>
    </div>
  );
}
