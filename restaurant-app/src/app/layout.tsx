import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./../../assets/css/fonts.css";
import "./../../assets/css/main.css";
import "./../../assets/css/transition.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "L'Olivo",
  description: "Ресторант с детски кът Neverland",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
