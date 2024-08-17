"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { Fragment, startTransition } from "react";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/navigation";
import { Locale } from "@/types";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations();
  const params = useParams();

  const flags = [
    { image: "assets/flags/en.svg", code: "en" },
    { image: "assets/flags/tr.svg", code: "tr" },
    { image: "assets/flags/fr.svg", code: "fr" },
    { image: "assets/flags/nl.svg", code: "nl" },
  ];

  function changeLocale(locale: Locale) {
    startTransition(() => {
      router.replace(
        {
          pathname,
          // @ts-expect-error
          params,
        },
        { locale: locale }
      );
    });
  }

  return (
    <div className="group relative hidden text-black lg:flex">
      <Image src={flags.find((flg) => flg.code == t("locale"))!.image} alt={t("locale")} height={50} width={50} />
      <div className="hidden group-hover:flex flex-col gap-4 absolute items-center py-3 -top-3 -right-[50%] w-[96px] bg-gray-300">
        {flags
          .filter((flg) => flg.code != t("locale"))
          .map((flag) => (
            <Fragment key={flag.code}>
              <button type="button" onClick={() => changeLocale(flag.code as Locale)}>
                <Image src={flag.image} alt={flag.code} height={50} width={50} />
              </button>
            </Fragment>
          ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
