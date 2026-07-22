import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "My Wedding",
  description: "We are happy to invite you at our wedding.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
 