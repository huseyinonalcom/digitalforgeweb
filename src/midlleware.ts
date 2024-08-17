import createMiddleware from "next-intl/middleware";
import { defaultLocale, localePrefix, locales } from "./config";

export default createMiddleware({
  defaultLocale,
  locales,
  localePrefix,
});

export const config = {
  matcher: ["/", "/(en|tr|nl|fr)/:path*"],
};
