import type { Metadata } from "next";
import { Inter, Quicksand } from "next/font/google";
import "./globals.css";

const quickSand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web Houses",
  description: "Web creada para la venta y alquiler de casas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={quickSand.className}>{children}</body>
    </html>
  );
}
