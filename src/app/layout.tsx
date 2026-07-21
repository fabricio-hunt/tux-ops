import type { Metadata } from "next";
import { Inter, Teko } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const teko = Teko({
  variable: "--font-teko",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TuxOps | Automating Operations, Accelerating Growth",
  description: "Engenharia de plataformas, DevOps, automação e IA aplicada aos negócios.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${inter.variable} ${teko.variable} antialiased bg-black text-white selection:bg-primary/30`}
      >
        {children}
      </body>
    </html>
  );
}
