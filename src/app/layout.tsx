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
    default: "BUSY Software Automation Tools | WhatsApp, Payment Reminder, API & Reports - BusyNotify",
    template: "%s | BusyNotify",
  },
  description:
    "Automate BUSY Accounting Software with WhatsApp integration, payment reminders, reporting dashboards, Google Sheets sync, and API tools. Built for Indian businesses - distributors, wholesalers, manufacturers using BUSY ERP.",
  keywords: [
    "BUSY Software Automation",
    "BUSY WhatsApp Integration",
    "BUSY Payment Reminder System",
    "BUSY API Integration",
    "BUSY Reporting Dashboard",
    "BUSY Google Sheets Integration",
    "BUSY ERP Automation",
    "BUSY Accounting Software Tools",
    "BUSY Chatbot",
    "BUSY Customer Portal",
    "Indian Business Automation",
    "MSME Accounting Automation",
    "WhatsApp Invoice Automation",
    "Payment Collection Software India",
    "BUSY Software Integration",
  ],
  authors: [{ name: "BusyNotify Team" }],
  creator: "BusyNotify",
  metadataBase: new URL("https://busynotify.in"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://busynotify.in",
    siteName: "BusyNotify",
    title: "BUSY Software Automation Tools | WhatsApp, Payment Reminder, API & Reports",
    description:
      "Automate BUSY Accounting Software with WhatsApp integration, payment reminders, reporting dashboards, and API tools. Built for Indian businesses.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BusyNotify - BUSY Software Automation for Indian Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BUSY Software Automation Tools | WhatsApp, Payment Reminder, API & Reports",
    description:
      "Automate BUSY Accounting Software with WhatsApp integration, payment reminders, and reporting dashboards. Built for Indian businesses.",
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
