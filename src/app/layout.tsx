import { ReactNode } from "react";
import "./globals.css";
import { locales } from "@/config";

type Props = {
  children: ReactNode;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RootLayout({ children }: Props) {
  return children;
}
