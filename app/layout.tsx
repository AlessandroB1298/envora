import type { Metadata } from "next";
import "./globals.css";
import SideNav from "./components/nav/sideNav";



export const metadata: Metadata = {
  title: "Evora",
  description: "fun and easy component-esk lib",
  icons: {
    icon: "icon.svg"
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

      </head>
      <body className={`  h-full w-full items-center justify-items-center`}>
        <SideNav />
        {children}

      </body>
    </html>
  );
}
