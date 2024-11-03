import { ReactNode } from "react";
import "./globals.css";
import { routing } from "@/i18n/routing";

type Props = {
  children: ReactNode;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function RootLayout({ children }: Props) {
  return children;
}
