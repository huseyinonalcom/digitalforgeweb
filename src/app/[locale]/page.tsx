import { ButtonColorOut } from "@/components/ButtonColorOut";
import { NavLink } from "@/components/navigation/NavLink";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: { locale: string };
};

export default function Home({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();
  return (
    <main className="flex min-h-90vh flex-col items-center p-24">
      <div className="w-full flex flex-row justify-around gap-5">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">{t("intro_title")}</h1>
          <p className="text-lg text-center">{t("intro_text")}</p>
          <div className="flex flex-row gap-4">
            <NavLink href="projects">
              <ButtonColorOut>{t("intro_projects")}</ButtonColorOut>
            </NavLink>
            <NavLink href="contact">
              <ButtonColorOut>{t("intro_contact")}</ButtonColorOut>
            </NavLink>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image src="/assets/logos/dflogo.svg" alt="Digital Forge Logo" width={400} height={400} />
        </div>
      </div>
    </main>
  );
}
