import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeToggle from "../components/ThemeToggle";
import ThemeProvider from "../components/ThemeProvider";
import ParallaxBackground from "../components/ParallaxBackground";
import Logo from "../components/Logo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stock Tracker",
  description: "Real-time stock tracking application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200`}>
        <ThemeProvider>
          <div className="min-h-screen relative">
            <ParallaxBackground />
            
            <div className="relative z-10">
              <header className="bg-white/80 dark:bg-[#000042]/80 backdrop-blur-sm shadow-sm sticky top-0 z-20">
                <div className="container mx-auto px-4 py-4">
                  <div className="flex items-center">
                    <Logo />
                  </div>
                </div>
              </header>

              <div className="fixed top-4 right-4 z-50">
                <ThemeToggle />
              </div>
              
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
} 