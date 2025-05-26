import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["500"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "FGC Jamaica",
  description: "The official website of FIRST Global Jamaica",
  icons: {
    icon: "/favicon.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.className} antialiased`}
      >
          {children}
      </body>
    </html>
  );
}
