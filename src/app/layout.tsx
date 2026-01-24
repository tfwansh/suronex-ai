import type { Metadata } from "next";
import { Outfit } from "next/font/google"; 
import "./globals.css";

const outfit = Outfit({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Suronex",
  description: "Secure your Cloud Future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* FIX: Added 'font-sans' to the className list. 
         This connects the variable (--font-outfit) to the actual page styles.
      */}
      <body className={`${outfit.variable} font-sans antialiased bg-black`}>
        {children}
      </body>
    </html>
  );
}
