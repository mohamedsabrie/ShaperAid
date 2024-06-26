import type { Metadata } from "next";
import {Source_Sans_3 } from "next/font/google";
import "./globals.css";
import HomeBackground from "@/components/Home/HomeBackground";

const appFont = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IHSANAID",
  description: "IHSANAID demo app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${appFont.className}`}>
        {" "}
        <HomeBackground />
       <div className="min-h-screen flex items-center justify-center">{children}</div> 
      </body>
    </html>
  );
}
