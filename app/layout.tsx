import type { Metadata } from "next";
import { Poppins, Ubuntu } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
});

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: "Sakib Reza - Full Stack Developer | Portfolio Website",
  description: "Hi, I'm Sakib Reza, an experienced full-stack web and app developer specializing in creating dynamic, responsive, and user-friendly websites, mobile apps, and desktop applications with precision and creativity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${ubuntu.variable} font-primary font-normal antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
