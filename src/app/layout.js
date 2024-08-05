import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const futuraPTBook = localFont({
  src: "./futuraPTBook.otf",
  variable: "--font-futura",
});

const graceFont = localFont({
  src: "./ethnocentric.otf",
  variable: "--font-grace",
});

export const metadata = {
  title: "GRACE AGENCY",
  description: "a digital agency driven by quality and not quantity",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`dark bg-background text-[20px] font-futura flex flex-col justify-center items-center text-text ${futuraPTBook.variable} ${graceFont.variable}`}
    >
      <body className="max-w-[1080px] overflow-x-hidden">
        <div className="w-full flex flex-col justify-center items-center">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
