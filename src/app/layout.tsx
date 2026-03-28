import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-satoshi",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BusyNotify - AI-Powered Notification Infrastructure",
    template: "%s | BusyNotify",
  },
  description:
    "Never miss a critical business moment. BusyNotify monitors your workflows and fires intelligent alerts the moment something needs your attention. No noise. Just signal.",
  keywords: [
    "notification infrastructure",
    "AI notifications",
    "workflow automation",
    "alert management",
    "Slack notifications",
    "email notifications",
    "webhook triggers",
    "business alerts",
    "DevOps",
    "incident management",
  ],
  authors: [{ name: "BusyNotify Team" }],
  creator: "BusyNotify",
  metadataBase: new URL("https://busynotify.in"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://busynotify.in",
    siteName: "BusyNotify",
    title: "BusyNotify - AI-Powered Notification Infrastructure",
    description:
      "Never miss a critical business moment. Intelligent alerts powered by AI.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BusyNotify - AI-Powered Notifications",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BusyNotify - AI-Powered Notification Infrastructure",
    description:
      "Never miss a critical business moment. Intelligent alerts powered by AI.",
    images: ["/og-image.png"],
    creator: "@busynotify",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${playfair.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
