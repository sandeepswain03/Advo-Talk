import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const circularStd = localFont({
  src: "./fonts/circular-std-medium-500.woff",
  variable: "--font-circular-std",
  weight: "400 700",
});

export const metadata: Metadata = {
  title: "Advotalk - Free Online Legal Advice From The Best Lawyers In India",
  description: "Free Online Legal Advice From The Best Lawyers In India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${circularStd.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
