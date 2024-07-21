import localFont from "next/font/local";
import "./globals.css";

const futuraPTBook = localFont({
  src: "./FuturaPTBook.otf",
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
      className={`dark bg-background flex flex-col justify-center items-center text-text ${futuraPTBook.variable} ${graceFont.variable}`}
    >
      <body className="max-w-[1080px] overflow-x-hidden">{children}</body>
    </html>
  );
}
