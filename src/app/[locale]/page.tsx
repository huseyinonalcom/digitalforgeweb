import { ButtonColorOut } from "@/components/ButtonColorOut";
import { BoxDiv } from "@/components/containers/box-div";
import AnimatedBackground from "@/components/fluff/AnimatedBackground";
import { NavLink } from "@/components/navigation/NavLink";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaChartLine, FaCode, FaPaintBrush } from "react-icons/fa";
import dflogo from "../../../public/assets/logos/dflogo.svg";
import imageAdvertisement from "../../../public/assets/images/advertisement.jpg";
import Contact from "./contact/page";

export default function Home() {
  const t = useTranslations();

  return (
    <div className="flex flex-col w-full items-center bg-black">
      <AnimatedBackground />
      <BoxDiv className="bg-slate-400/90 min-h-[60vh]">
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
        <div className="flex flex-col gap-6 items-center justify-center max-w-[1500px] mx-auto">
          <h1 className="text-4xl font-bold">{t("who-are-we-title")}</h1>
          <p className="text-lg text-center">{t("who-are-we-text")}</p>
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
      <BoxDiv className="relative h-[200px] lg:h-[400px]">
        <Image
          src={imageAdvertisement}
          className="absolute"
          fill
          style={{
            objectFit: "cover",
          }}
          alt={"background"}
        />
      </BoxDiv>
      <BoxDiv className="bg-white">
        <div className="flex flex-col gap-6 items-center justify-center max-w-[1500px] mx-auto">
          <h1 className="text-4xl font-bold">{t("why-us-title")}</h1>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 w-full">
            <div className="flex flex-col gap-2 items-start rounded-md p-4 border-2 border-black min-h-52">
              <div className="flex flex-row items-center justify-between w-full">
                <h1 className="text-xl font-bold">{t("why-us-1-title")}</h1>
              </div>
              <p className="text-justify">{t("why-us-1-text")}</p>
            </div>
            <div className="flex flex-col gap-2 items-start rounded-md p-4 border-2 border-black min-h-52">
              <div className="flex flex-row items-center justify-between w-full">
                <h1 className="text-xl font-bold">{t("why-us-2-title")}</h1>
              </div>
              <p className="text-justify">{t("why-us-2-text")}</p>
            </div>
            <div className="flex flex-col gap-2 items-start rounded-md p-4 border-2 border-black min-h-52">
              <div className="flex flex-row items-center justify-between w-full">
                <h1 className="text-xl font-bold">{t("why-us-3-title")}</h1>
              </div>
              <p className="text-justify">{t("why-us-3-text")}</p>
            </div>
            <div className="flex flex-col gap-2 items-start rounded-md p-4 border-2 border-black min-h-52">
              <div className="flex flex-row items-center justify-between w-full">
                <h1 className="text-xl font-bold">{t("why-us-4-title")}</h1>
              </div>
              <p className="text-justify">{t("why-us-4-text")}</p>
            </div>
          </div>
        </div>
      </BoxDiv>
      <BoxDiv className="bg-white">
        <div className="flex flex-col gap-6 items-center justify-center max-w-[1500px] mx-auto">
          <h1 className="text-4xl font-bold">{t("our-partners")}</h1>
        </div>
      </BoxDiv>
      <BoxDiv className="bg-white">
        <Contact />
      </BoxDiv>
    </div>
  );
}
