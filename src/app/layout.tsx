import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = Nunito_Sans({subsets: ['latin'], variable:  "--font-sans"})
const fontTitle = Nunito({subsets: ['latin'], variable: "--font-title"})

export const metadata: Metadata = {
  title: "Make your Resume",
  description: "A personal resume generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(fontSans.variable, fontTitle.variable)}>{children}</body>
    </html>
  );
}
