import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const erbaum = localFont({
  src: [
    {
      path: "../../public/fonts/Erbaum-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-erbaum",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dev Paulo Dias | Portfolio",
  description: "Desenvolvedor Front-end & UX/UI Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${erbaum.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary/30">
        {children}
      </body>
    </html>
  );
}
