import "./globals.css";
import Header from "./components/layout/Header";
import { Inter } from "next/font/google";
import Footer from "./components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Store project",
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
        className={`${inter.className} flex flex-col  min-h-screen justify-between font-sans box-border bg-gray-100 text-gray-900`}
      >
        <Header />
        <main className="pt-16 flex-1 flex">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
