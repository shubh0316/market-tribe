import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Cursor from "./Cursor";

const jost = Jost({ subsets: ["latin"], variable: "--font-jost" });

export const metadata: Metadata = {
  title: "Marketing Tribe",
  description: "Generated by Marketing Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.variable} antialiased`}>{children}
      <Cursor />
      </body>
    </html>
  );
}
