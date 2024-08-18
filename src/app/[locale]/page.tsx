import { ButtonColorOut } from "@/components/ButtonColorOut";
import { NavLink } from "@/components/navigation/NavLink";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { FaChartLine, FaCode, FaPaintBrush } from "react-icons/fa";

type Props = {
  params: { locale: string };
};

export default function Home({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();
  const maxWidth = "max-w-[1300px]";
  return (
    <div className="flex flex-col w-full gap-12 items-center">
      <div className="w-full flex flex-row justify-around gap-5">
        <div className="flex flex-col gap-2 items-center justify-center">
          <h1 className="text-4xl font-bold">{t("intro-title")}</h1>
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
          <Image src="/assets/logos/dflogo.svg" alt="Digital Forge Logo" width={400} height={400} />
        </div>
      </div>
      <div className={`w-full flex flex-row ${maxWidth} justify-around gap-5`}>
        <div className="flex flex-col gap-2 items-center justify-center">
          <h1 className="text-4xl font-bold">{t("who-are-we-title")}</h1>
          <p className="text-lg text-center">{t("who-are-we-text")}</p>
        </div>
      </div>
      <div className={`w-full flex flex-row ${maxWidth} justify-around gap-5`}>
        <div className="flex flex-col gap-6 items-center justify-center">
          <h1 className="text-4xl font-bold">{t("services-title")}</h1>
          <div className="grid grid-cols-3 gap-4 w-full">
            <div className="flex flex-col items-center">
              <FaChartLine size={64} />
              <h1 className="text-2xl font-bold">{t("services-1-title")}</h1>
              <p className="text-justify">{t("services-1-text")}</p>
            </div>
            <div className="flex flex-col items-center">
              <FaPaintBrush size={64} />
              <h1 className="text-2xl font-bold">{t("services-2-title")}</h1>
              <p className="text-justify">{t("services-2-text")}</p>
            </div>
            <div className="flex flex-col items-center">
              <FaCode size={64} />
              <h1 className="text-2xl font-bold">{t("services-3-title")}</h1>
              <p className="text-justify">{t("services-3-text")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`w-full flex flex-row ${maxWidth} justify-around gap-5`}>
        <div className="flex flex-col gap-2 items-center justify-center">
          <h1 className="text-4xl font-bold">{t("why-us-title")}</h1>
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
    </div>
  );
}
