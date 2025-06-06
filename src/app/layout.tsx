import "./globals.css";
import Header from "./components/layout/Header";

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
      <body className="bg-gray-100 text-gray-900">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
