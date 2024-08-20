import { Titillium_Web } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Container from "@/components/Container";

import { cn } from "@/lib/utils";

const titillium = Titillium_Web({ 
  subsets: ["latin"],
  weight: ["400", "600", "700"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={cn(
          titillium.className,
          "text-zinc-900 bg-zinc-100 min-h-screen"
        )}
      >
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
