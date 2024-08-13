import type { Metadata } from "next";
import { Inter } from "next/font/google";

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
  
  return (
    <html lang={"en"}>
      <body className={`${inter.className} bg-white`}>{children}</body>
    </html>
  );
}
