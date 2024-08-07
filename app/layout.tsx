import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarBackground from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nitin Suryapally",
  description: "Nitin Suryapally Full-Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black-bg  overflow-x-hidden`}>
        <StarBackground />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
