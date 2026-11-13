
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BackgroundEffects from "../components/BackgroundEffects";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgress from "@/components/ScrollProgress";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atanu Bose | Portfolio",
   icons: {
    icon: "../icon.png",
  },
  description:
    "Personal portfolio showcasing my skills, projects, experience, and journey in software development.",
  keywords: [
    "Portfolio",
    "Computer Science",
    "Web Development",
    "Software Engineering",
    "Machine Learning",
  ],
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      
      <body className="min-h-full flex flex-col">
        <ScrollProgress />
        <BackgroundEffects/>
        <CursorGlow />
        <div className="relative z-10 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
