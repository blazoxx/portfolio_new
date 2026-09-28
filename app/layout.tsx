import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/layout/SIteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import CustomCursor from "@/components/cursor/CustomCursor";

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
        <CustomCursor />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
