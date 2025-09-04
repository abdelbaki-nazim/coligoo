import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import FooterClean from "@/components/FooterClean";
import Header from "@/components/Header";
import FloatingButton from "@/components/FloatingButton";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ColiGoo",
  description: "ColiGoo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={roboto.className}>
        <Header />
        {children}
        <FloatingButton />
        <FooterClean />
      </body>
    </html>
  );
}
