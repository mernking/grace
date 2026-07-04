import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: {
    default: 'Boundless Bolt | High-Performance Software Engineering & Automation',
    template: "%s | Boundless Bolt",
  },
  description: 'We optimize cross-platform software performance for web, mobile, and desktop apps. Eliminate system lag and build custom process automation engines.',
  keywords: [
    "AI automation",
    "agentic AI",
    "intelligent agents",
    "full-stack development",
    "web development",
    "blockchain development",
    "mobile app development",
    "Desktop app development",
    "Next.js development",
    "React development",
    "AI solutions",
    "business automation",
    "custom software development",
  ],
  authors: [{ name: "Boundless Bolt" }],
  creator: "Boundless Bolt",
  publisher: "Boundless Bolt",
  metadataBase: new URL("https://boundlessbolt.netlify.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://boundlessbolt.netlify.app",
    title: "Boundless Bolt | Full-Stack Development & AI Solutions",
    description:
      "Expert full-stack development, AI automation, intelligent agents, blockchain, and modern web solutions. Transform your business with cutting-edge technology.",
    siteName: "Boundless Bolt",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Boundless Bolt - Full-Stack Development & AI Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boundless Bolt | Full-Stack Development & AI Solutions",
    description:
      "Expert full-stack development, AI automation, intelligent agents, blockchain, and modern web solutions.",
    creator: "@davidchidev",
    images: ["/og-image.png"],
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
  verification: {
    google: "a0d16c7316dcc5d5",
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "icon",
        url: "/favicon.ico",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <meta
          name="google-site-verification"
          content="qtNIeFzTQ3iGZbUZ3RWoq-xqDhrn7bUogAdbhgeh7CM"
        />
        <link rel="icon" href="/image/image.png" type="image/png" />

        {/* Structured Data for LLM/AI Optimization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Boundless Bolt",
              url: "https://boundlessbolt.netlify.app",
              description:
                "Expert full-stack development, AI automation, intelligent agents, blockchain, and modern web solutions.",
              email: "contact@boundlessbolt.com",
              telephone: "+234-903-585-3253",
              sameAs: [
                "https://x.com/davidchidev",
                "https://github.com/mernking",
                "https://gitlab.com/Godswork",
                "https://www.instagram.com/davidchidev",
                "https://www.facebook.com/david.chiboy.92798/",
                "https://www.youtube.com/@boundlessbolt",
              ],
              serviceType: [
                "AI Automation",
                "Agentic AI Development",
                "AI Agents Development",
                "Full-Stack Web Development",
                "Mobile App Development",
                "Blockchain Development",
                "Website Optimization",
              ],
            }),
          }}
        />
      </head>
      <body className="bg-black text-white font-sans antialiased">
        <div className="flex flex-col items-center justify-center">
          {children}
        </div>
      </body>
    </html>
  );
}
