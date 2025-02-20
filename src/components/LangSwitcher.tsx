"use client";

import Image from "next/image";
import { Fragment, startTransition } from "react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations();
  const params = useParams();

  const flags = [
    { image: "/assets/flags/en.svg", code: "en" },
    { image: "/assets/flags/tr.svg", code: "tr" },
    { image: "/assets/flags/fr.svg", code: "fr" },
    { image: "/assets/flags/nl.svg", code: "nl" },
  ];

  function changeLocale(locale: "en" | "tr" | "nl" | "fr") {
    const newParams = params;
    delete newParams.locale;
    startTransition(() => {
      router.replace(
        {
          pathname,
          query: newParams,
        },
        { locale: locale }
      );
    });
  }

  let currentLocale = t("locale");

  if (currentLocale == "locale") {
    currentLocale = "en";
  }

  return (
    <div className="group relative text-black pb-1">
      <Image src={flags.find((flg) => flg.code == currentLocale)!.image} alt={t("locale")} height={50} width={50} />
      <div className="hidden group-hover:flex flex-col gap-4 absolute items-center py-3 z-20 top-9 -left-5 w-[96px] bg-gray-300">
        {flags
          .filter((flg) => flg.code != t("locale"))
          .map((flag) => (
            <Fragment key={flag.code}>
              <button type="button" onClick={() => changeLocale(flag.code as "en" | "tr" | "nl" | "fr")}>
                <Image src={flag.image} alt={flag.code} height={50} width={50} />
              </button>
            </Fragment>
          ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
