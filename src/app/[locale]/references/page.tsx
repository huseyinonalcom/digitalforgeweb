import { ButtonColorOut } from "@/components/ButtonColorOut";
import { NavLink } from "@/components/navigation/NavLink";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function References() {
  const t = useTranslations();

  return (
    <div className="w-full flex flex-row justify-around gap-5 p-12">
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
  );
}
