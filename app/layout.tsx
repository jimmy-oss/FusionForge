import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <ul className="flex gap-2 justify-between px-4 bg-blue-700">
            <a href={"/"} ><li>Home</li></a> 
         <a href="/about"><li>About</li></a>    
          </ul>
        </nav>
        {children}</body>
    </html>
  );
}
