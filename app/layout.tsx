import type { Metadata } from "next";
import "./globals.css";
import SideNav from "./components/nav/sideNav";
export const metadata: Metadata = {
  title: "Evora",
  description: "fun and easy component-esk lib",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className="bg-gray-800 items-center justify-items-center">
        <SideNav />
        {children}
      </body>
    </html>
  );
}
