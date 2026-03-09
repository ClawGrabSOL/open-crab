import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpenKrab — Personal AI Assistant",
  description: "The AI that actually does things. Runs on your Windows PC. You control everything.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
