
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers"; // <- importamos daqui

export const metadata: Metadata = {
  title: "Sweet Feet",
  description: "Making the world a bit more... sweet 🍭",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

