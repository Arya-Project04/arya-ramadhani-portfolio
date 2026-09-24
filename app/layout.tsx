import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#800020",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Arya Ramadhani | Software Engineer",
  description:
    "Portfolio of Arya Ramadhani — Software Engineer specializing in Web & Mobile Development, IoT, Computer Vision, and UI/UX Design.",
  keywords: [
    "Full-Stack Developer",
    "Software Engineer",
    "Web Developer",
    "Mobile Developer",
    "IoT",
    "AI",
    "Computer Vision",
    "UI/UX",
    "Arya Ramadhani",
  ],
  authors: [{ name: "Arya Ramadhani" }],
  creator: "Arya Ramadhani",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Arya Ramadhani | Full-Stack Developer",
    description:
      "Portfolio of Arya Ramadhani — Software Engineer specializing in Web & Mobile Development, IoT, AI & Computer Vision, and UI/UX Design.",
    siteName: "Arya Ramadhani Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arya Ramadhani | Full-Stack Developer",
    description:
      "Portfolio of Arya Ramadhani — Software Engineer specializing in Web & Mobile Development, IoT, AI & Computer Vision, and UI/UX Design.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col antialiased selection:bg-accent/20 selection:text-accent">
        <ThemeProvider>
          <SmoothScroll>
            <CustomCursor />
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
