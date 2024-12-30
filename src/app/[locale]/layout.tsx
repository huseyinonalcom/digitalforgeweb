import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Link, routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { MainHeader } from "@/components/MainHeader";
import { ReactNode } from "react";
import { BoxDiv } from "@/components/containers/box-div";
import Contact from "./contact/page";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata() {
  return {
    title: "DigitalForge",
    description: "Digital Forge: International Digital Marketing and Development Agency",
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout(props: Props) {
  const params = await props.params;
  if (!routing.locales.includes(params.locale as "tr" | "en" | "fr" | "nl")) {
    notFound();
  }
  setRequestLocale(params.locale);
  const messages = await getMessages(); // Enable static rendering
  return (
    <html lang={params.locale}>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="apple-mobile-web-app-title" content="Digital Forge" />
        <meta name="application-name" content="Digital Forge" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="bg-black">
        <NextIntlClientProvider messages={messages}>
          <MainHeader />
          <main className="h-[calc(100vh-80px)] overflow-y-auto flex flex-col items-center">
            {props.children}
            <footer className="flex w-full flex-col items-center justify-center bg-black">
              <BoxDiv className="bg-white">
                <Contact />
              </BoxDiv>
              <div className="text-center text-sm text-white py-4">
                © {new Date().getFullYear()} Digital Forge. All rights reserved. - <Link href="/tc">Terms and Conditions</Link> -{" "}
                <Link href="/privacy">Privacy Policy</Link>
              </div>
            </footer>
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
