import "./globals.css";
import React from "react";
import ToasterProvider from "../components/general/ToasterProvider";

export const metadata = {
  title: "TradeFlow",
  description: "TradeFlow RWA Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <ToasterProvider />
      </body>
    </html>
  );
}
