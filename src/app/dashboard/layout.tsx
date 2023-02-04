import Navbar from "@/components/Navbar";
import { Inter } from "@next/font/google";

import './globals.scss'

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head />
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
