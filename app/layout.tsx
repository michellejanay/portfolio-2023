import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Michelle Janay | Portfolio",
  description: "A Full Stack Developer specialising in Frontend",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}, bg-violet-950 text-white`}>
        {children}
      </body>
      <div className="bg-violet-700 absolute -z-10 top-[-8rem] right-[0] h-[32rem] w-[32rem] rounded-full blur-[10rem]"></div>
      <div className="bg-violet-700 absolute -z-10 bottom-[-8rem] left-[-11rem] h-[32rem] w-[32rem] rounded-full blur-[10rem] sm:w-[32rem] sm:h-[32rem]overflow-hidden"></div>
    </html>
  );
}
