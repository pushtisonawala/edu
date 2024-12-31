import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
// import ResponsiveNav from "../components/Home/Navbar/ResponsiveNav";

const font = Space_Grotesk({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Learning",
  description: "E-learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} ${geistSans.variable} ${geistMono.variable}`}>
        {/* <ResponsiveNav /> */}
        {children}
      </body>
    </html>
  );
}