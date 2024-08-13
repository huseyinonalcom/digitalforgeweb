import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { useGlobalState } from "@/contexts/globalVariable";
import { getData } from "@/utils/localstorage";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DigitalForge",
  description:
    "Digital Forge: International Digital Marketing and Development Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { state, updateState } = useGlobalState();

  const chosenLanguage = getData("language");

  if (chosenLanguage) {
    if (state.language !== chosenLanguage) {
      updateState("language", chosenLanguage);
    }
  } else {
    updateState("language", navigator.language);
  }

  return (
    <html lang={state.language}>
      <body className={`${inter.className} bg-white`}>{children}</body>
    </html>
  );
}
