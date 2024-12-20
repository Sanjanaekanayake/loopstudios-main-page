import type { Metadata } from "next";
import { Inter, Alata, Josefin_Sans } from "next/font/google";
import "./globals.scss";
import "font-awesome/css/font-awesome.min.css";

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
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale = 1.0, 
maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
