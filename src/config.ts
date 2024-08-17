import { LocalePrefix, Pathnames } from "next-intl/routing";

export const defaultLocale = "en" as const;
export const locales = ["en", "fr", "nl", "tr"] as const;
export const pathnames: Pathnames<typeof locales> = {
  "/": "/",
  "about": "/about",
  "contact": "/contact",
  "services": "/services",
  "projects": "/projects",
  "hotpress": "/hotpress",
};

export const localePrefix: LocalePrefix<typeof locales> = "always";
