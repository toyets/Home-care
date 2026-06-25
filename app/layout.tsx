import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home Care Management App",
  description: "UK-compliant care management platform for staff and care planning",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 font-sans">
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
