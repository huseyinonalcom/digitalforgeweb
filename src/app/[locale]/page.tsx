import { ButtonColorOut } from "@/components/ButtonColorOut";
import { BoxDiv } from "@/components/containers/box-div";
import AnimatedBackground from "@/components/fluff/AnimatedBackground";
import { NavLink } from "@/components/navigation/NavLink";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaChartLine, FaCode, FaPaintBrush } from "react-icons/fa";
import dflogo from "../../../public/assets/logos/dflogo.svg";

export default function Home() {
  const t = useTranslations();

  return (
    <div className="flex flex-col w-full items-center bg-black">
      <AnimatedBackground />
      <BoxDiv className="bg-white/90 min-h-[60vh]">
        <div className="flex flex-col-reverse lg:flex-row justify-around gap-5 h-full">
          <div className="flex flex-col gap-2 items-center justify-center">
            <h2 className="text-xl font-bold w-full text-center">{t("intro-title")}</h2>
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
      <BoxDiv className="bg-blue-200/90">
        <div className="flex flex-col gap-2 items-center justify-center">
          <h1 className="text-4xl font-bold">{t("who-are-we-title")}</h1>
          <p className="text-lg text-center">{t("who-are-we-text")}</p>
        </div>
      </BoxDiv>
      <BoxDiv className="bg-white/90">
        <div className="flex flex-col gap-6 items-center justify-center">
          <h1 className="text-4xl font-bold">{t("services-title")}</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 w-full">
            <div className="flex flex-col gap-2 items-start rounded-md text-white p-4 bg-black">
              <div className="flex flex-row items-center justify-between w-full">
                <h1 className="text-3xl font-bold">{t("services-1-title")}</h1>
                <FaChartLine color="yellow" size={64} />
              </div>
              <p className="text-justify">{t("services-1-text")}</p>
            </div>
            <div className="flex flex-col gap-2 items-start rounded-md text-white p-4 bg-black">
              <div className="flex flex-row items-center justify-between w-full">
                <h1 className="text-3xl font-bold">{t("services-2-title")}</h1>
                <FaPaintBrush color="red" size={64} />
              </div>
              <p className="text-justify">{t("services-2-text")}</p>
            </div>
            <div className="flex flex-col gap-2 items-start rounded-md text-white p-4 bg-black">
              <div className="flex flex-row items-center justify-between w-full">
                <h1 className="text-3xl font-bold">{t("services-3-title")}</h1>
                <FaCode color="#1fa800" size={64} />
              </div>
              <p className="text-justify">{t("services-3-text")}</p>
            </div>
          </div>
        </div>
      </BoxDiv>
      <BoxDiv className="bg-green-200/90">
        <div className="flex flex-col gap-6 items-center justify-center">
          <h1 className="text-4xl font-bold">{t("why-us-title")}</h1>
          <div className="flex flex-col gap-2 items-start justify-center">
            <h1 className="text-2xl font-bold">{t("why-us-1-title")}</h1>
            <p className="text-justify">{t("why-us-1-text")}</p>
            <h1 className="text-2xl font-bold">{t("why-us-2-title")}</h1>
            <p className="text-justify">{t("why-us-2-text")}</p>
            <h1 className="text-2xl font-bold">{t("why-us-3-title")}</h1>
            <p className="text-justify">{t("why-us-3-text")}</p>
            <h1 className="text-2xl font-bold">{t("why-us-4-title")}</h1>
            <p className="text-justify">{t("why-us-4-text")}</p>
            <p className="text-justify font-bold">{t("why-us-5-text")}</p>
          </div>
        </div>
      </BoxDiv>
    </div>
  );
}
