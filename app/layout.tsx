import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const soriaFont = localFont({
  src: "../public/soria-font.ttf",
  variable: "--font-soria",
});

const vercettiFont = localFont({
  src: "../public/Vercetti-Regular.woff",
  variable: "--font-vercetti",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com/'),
  title: "Rusyaidi Mohd Husni ✌️",
  description: "Computer Science student at IIUM KICT, builder of AI agents, self-hosted servers, and a frankly unreasonable number of student-life roles.",
  keywords: "Rusyaidi Mohd Husni, Computer Science, AI, Automation, IIUM, Web Development, Portfolio",
  authors: [{ name: "Rusyaidi Mohd Husni" }],
  creator: "Rusyaidi Mohd Husni",
  publisher: "Rusyaidi Mohd Husni",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Rusyaidi Mohd Husni",
    description: "Computer Science student at IIUM KICT, builder of AI agents, self-hosted servers, and a frankly unreasonable number of student-life roles.",
    siteName: "Rusyaidi Mohd Husni's Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rusyaidi Mohd Husni",
    description: "Computer Science student at IIUM KICT, builder of AI agents, self-hosted servers, and a frankly unreasonable number of student-life roles.",
  },
  verification: {
    google: "GsRYY-ivL0F_VKkfs5KAeToliqz0gCrRAJKKmFkAxBA",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overscroll-y-none">
      <body
        className={`${soriaFont.variable} ${vercettiFont.variable} font-sans antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''}/>
    </html>
  );
}
