import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <meta
          name="google-site-verification"
          content="qtNIeFzTQ3iGZbUZ3RWoq-xqDhrn7bUogAdbhgeh7CM"
        />
      </head>
      <body className="bg-[#040505] text-[#c9d1d4] min-h-screen flex flex-col font-sans">
        <nav className="flex items-center justify-between w-full px-6 py-4">
          {/* Placeholder logo */}
          <div className="flex items-center text-2xl font-bold tracking-tight">
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center mr-2">
              {/* Replace with real logo later */}
              <span className="text-[#39aeb9] font-bold text-lg">BB</span>
            </div>
            <span className="hidden sm:inline text-white">BoundlessBolt</span>
          </div>
          <div className="flex items-center space-x-6 text-base">
            <a href="/" className="hover:text-[#39aeb9] transition">
              Home
            </a>
            <a href="/services" className="hover:text-[#39aeb9] transition">
              Services
            </a>
            <a href="/portfolio" className="hover:text-[#39aeb9] transition">
              Portfolio
            </a>
            <a href="/blog" className="hover:text-[#39aeb9] transition">
              Blog
            </a>
            <a href="/contact" className="hover:text-[#39aeb9] transition">
              Contact
            </a>
          </div>
        </nav>
        <main className="flex-1 flex flex-col items-center w-full">
          {children}
        </main>
        <footer className="py-6 text-center text-xs text-gray-500 w-full border-t border-gray-800 flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-6 mb-2">
            {/* Social Icons */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:scale-110 transition"
            >
              <svg
                height="24"
                width="24"
                fill="#1877F3"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.326 24H12.82v-9.294H9.692V11.01h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.311h3.588l-.467 3.696h-3.121V24h6.116c.73 0 1.323-.593 1.323-1.326V1.326C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:scale-110 transition"
            >
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient
                    id="ig-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#f09433" />
                    <stop offset="25%" stopColor="#e6683c" />
                    <stop offset="50%" stopColor="#dc2743" />
                    <stop offset="75%" stopColor="#cc2366" />
                    <stop offset="100%" stopColor="#bc1888" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#ig-gradient)"
                  d="M12,2.2c3.2,0,3.6,0,4.9,0.1c1.2,0.1,1.9,0.2,2.4,0.4c0.6,0.2,1,0.4,1.5,0.9c0.4,0.4,0.7,0.9,0.9,1.5c0.2,0.5,0.3,1.2,0.4,2.4C21.8,8.4,21.8,8.8,21.8,12s0,3.6-0.1,4.9c-0.1,1.2-0.2,1.9-0.4,2.4c-0.2,0.6-0.4,1-0.9,1.5c-0.4,0.4-0.9,0.7-1.5,0.9c-0.5,0.2-1.2,0.3-2.4,0.4C15.6,21.8,15.2,21.8,12,21.8s-3.6,0-4.9-0.1c-1.2-0.1-1.9-0.2-2.4-0.4c-0.6-0.2-1-0.4-1.5-0.9c-0.4-0.4-0.7-0.9-0.9-1.5c-0.2-0.5-0.3-1.2-0.4-2.4C2.2,15.6,2.2,15.2,2.2,12s0-3.6,0.1-4.9c0.1-1.2,0.2-1.9,0.4-2.4c0.2-0.6,0.4-1,0.9-1.5c0.4-0.4,0.9-0.7,1.5-0.9c0.5-0.2,1.2-0.3,2.4-0.4C8.4,2.2,8.8,2.2,12,2.2z M12,0C8.7,0,8.3,0,7.1,0.1C5.8,0.2,4.8,0.4,4,0.7C3.1,1,2.3,1.4,1.6,2.1C1,2.8,0.6,3.6,0.3,4.5C0,5.3-0.2,6.3,0,7.6C0,8.8,0,9.2,0,12s0,3.2,0.1,4.4c0.2,1.3,0.4,2.3,0.7,3.1c0.3,0.9,0.7,1.7,1.4,2.4c0.7,0.7,1.5,1.1,2.4,1.4c0.9,0.3,1.9,0.5,3.1,0.7c1.2,0.1,1.6,0.1,4.4,0.1s3.2,0,4.4-0.1c1.3-0.2,2.3-0.4,3.1-0.7c0.9-0.3,1.7-0.7,2.4-1.4c0.7-0.7,1.1-1.5,1.4-2.4c0.3-0.9,0.5-1.9,0.7-3.1c0.1-1.2,0.1-1.6,0.1-4.4s0-3.2-0.1-4.4c-0.2-1.3-0.4-2.3-0.7-3.1c-0.3-0.9-0.7-1.7-1.4-2.4c-0.7-0.7-1.5-1.1-2.4-1.4c-0.9-0.3-1.9-0.5-3.1-0.7C15.2,0.1,14.8,0,12,0z M12,5.8c-3.4,0-6.2,2.8-6.2,6.2s2.8,6.2,6.2,6.2s6.2-2.8,6.2-6.2S15.4,5.8,12,5.8z M12,15.8c-2.1,0-3.8-1.7-3.8-3.8s1.7-3.8,3.8-3.8s3.8,1.7,3.8,3.8S14.1,15.8,12,15.8z M18.5,4.9c0,0.8-0.6,1.4-1.4,1.4s-1.4-0.6-1.4-1.4S16.3,3.5,17.1,3.5S18.5,4.1,18.5,4.9z"
                />
              </svg>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:scale-110 transition"
            >
              <svg
                height="24"
                width="24"
                fill="#FF0000"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M23.498 6.186a3.005 3.005 0 0 0-2.115-2.128C19.19 3.494 12 3.494 12 3.494s-7.19 0-9.383.564A3.005 3.005 0 0 0 .502 6.186C0 8.381 0 12 0 12s0 3.619.502 5.814a3.005 3.005 0 0 0 2.115 2.128C4.81 20.506 12 20.506 12 20.506s7.19 0 9.383-.564a3.005 3.005 0 0 0 2.115-2.128C24 15.619 24 12 24 12s0-3.619-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:scale-110 transition"
            >
              <svg
                width="24"
                height="24"
                fill="#25D366"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.521.151-.175.2-.298.3-.497.099-.199.05-.373-.025-.521-.074-.148-.669-1.612-.917-2.216-.242-.58-.487-.502-.669-.51-.172-.008-.373-.01-.573-.01-.198 0-.521.075-.793.373-.272.298-1.04 1.016-1.04 2.479s1.064 2.875 1.213 3.074c.149.199 2.095 3.199 5.077 4.184.709.189 1.262.303 1.694.388.712.135 1.362.116 1.875.07.573-.054 1.758-.719 2.006-1.414.248-.695.248-1.289.174-1.414-.073-.125-.271-.198-.567-.347m-5.421 5.591h-.001a10.054 10.054 0 0 1-5.096-1.4l-.365-.217-3.781 1.048 1.012-3.687-.237-.378a10.075 10.075 0 0 1 6.555-15.477C12.29 0 13.109.006 13.839.026c5.13.149 9.147 4.31 8.998 9.439a9.957 9.957 0 0 1-9.983 9.977" />
              </svg>
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-5 mb-2 text-sm">
            <a href="/" className="hover:text-[#39aeb9] transition">
              Home
            </a>
            <a href="/services" className="hover:text-[#39aeb9] transition">
              Services
            </a>
            <a href="/portfolio" className="hover:text-[#39aeb9] transition">
              Portfolio
            </a>
            <a href="/blog" className="hover:text-[#39aeb9] transition">
              Blog
            </a>
            <a href="/contact" className="hover:text-[#39aeb9] transition">
              Contact
            </a>
          </div>
          <div>
            © {new Date().getFullYear()} BoundlessBolt. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
