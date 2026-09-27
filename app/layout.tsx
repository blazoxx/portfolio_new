import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/layout/SIteHeader";

export const metadata: Metadata = {
  title: "CASII",
  description: "CASII — Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}