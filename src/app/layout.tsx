import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Medical Imaging AI Portfolio | Amanda Qu Zhiyan",
  description:
    "Medical imaging AI portfolio for gastrointestinal lesion detection, gastric anatomy segmentation, case-level HP recognition, and 3D anatomy visualization."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
