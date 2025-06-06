import "./globals.css";
import Header from "./components/layout/Header";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Store project - Dreamlabs",
  description: "A simple store project built with Next.js and React",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} font-sans box-border bg-gray-100 text-gray-900`}
      >
        <Header />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
