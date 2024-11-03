import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./i18n/routing";

export default getRequestConfig(async ({ locale }) => {
  if (routing.locales.includes(locale as any)) notFound();

  return {
    messages: (await (locale === "en" ? import("../messages/en.json") : import(`../messages/${locale}.json`))).common,
  };
});
