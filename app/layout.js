import "./globals.css";
import MobileMenu from "../components/fragments/MobileMenu";
import Footer from "@/components/fragments/Footer";

export const metadata = {
  title: "Boundless Bolt | Web & Automation Development Agency",
  description:
    "Boundless Bolt is a results-driven web development agency specializing in bot development, automation systems, SaaS, Web3 solutions, APIs, and SEO. We build scalable digital solutions that drive growth and deliver measurable ROI.",
  openGraph: {
    title: "Boundless Bolt | Web & Automation Development Agency",
    description:
      "Boundless Bolt is a results-driven web development agency specializing in bot development, automation systems, SaaS, Web3 solutions, APIs, and SEO. We build scalable digital solutions that drive growth and deliver measurable ROI.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="qtNIeFzTQ3iGZbUZ3RWoq-xqDhrn7bUogAdbhgeh7CM"
        />
      </head>
      <body className="flex flex-col bg-background text-text lg:px-40">
        <MobileMenu />
        <main className="flex-1 flex flex-col items-center w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
