import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import { ThemeScript } from "@/components/theme-script";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Asif Amin | Full Stack Web Developer",
    template: "%s | Asif Amin",
  },
  description:
    "Portfolio of Asif Amin, a full stack web developer crafting clean, responsive, and high-performing experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${sora.variable} min-h-screen bg-[color:var(--bg)] text-[color:var(--text)] antialiased`}
      >
        <ThemeScript />
        {children}
      </body>
    </html>
  );
}
