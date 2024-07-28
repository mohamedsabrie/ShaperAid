import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import HomeBackground from "@/components/Home/HomeBackground";
import { AppWrapper } from "./Providers";

const appFont = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SHAPERAID",
  description: "SHAPERAID app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${appFont.className}`}>
        <AppWrapper>
          <HomeBackground />
          <div className="min-h-screen grid items-center">{children}</div>
        </AppWrapper>
      </body>
    </html>
  );
}
