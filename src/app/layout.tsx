import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { useGlobalState } from "@/contexts/globalVariable";

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
  return (
    <html lang={state.language}>
      <body className={`${inter.className} bg-white`}>{children}</body>
    </html>
  );
}
