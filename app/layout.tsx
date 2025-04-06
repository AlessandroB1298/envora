import type { Metadata } from "next";
import "./globals.css";
import SideNav from "./components/ui/sideNav";

export const metadata: Metadata = {
  title: "Evora",
  description: "fun and easy component-esk lib",
  icons: {
    icon: "icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <SideNav />
        {children}
      </body>
    </html>
  );
}
