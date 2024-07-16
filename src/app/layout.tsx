import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React Server Components",
  description: "Created by Praveen Pal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <body className={inter.className}>
        {children}
        </body>
    </html>
  );
}
