import type { Metadata } from "next";
import { MainHeader } from "@/components/MainHeader";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "DigitalForge",
  description: "Digital Forge: International Digital Marketing and Development Agency",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();
  return (
    <html lang={locale}>
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
      <body className="bg-white">
        <NextIntlClientProvider messages={messages}>
          <MainHeader />
          <main className="flex flex-col items-center p-24">{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
