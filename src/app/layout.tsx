import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Lora } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({ subsets: ["latin"], variable: '--font-cinzel' });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: '--font-cormorant' });
const lora = Lora({ subsets: ["latin"], variable: '--font-lora' });

export const metadata: Metadata = {
  title: "Menu Maker Booklet",
  description: "Create elegant restaurant menus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${lora.variable} ${cinzel.variable} ${cormorant.variable} antialiased bg-gray-100 text-[#1a1a1a]`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
