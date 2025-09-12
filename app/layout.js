import "./globals.css";
import Navbar from "../components/fragments/Navbar";
import Footer from "../components/fragments/Footer";

export const metadata = {
  metadataBase: new URL("https://boundlessbolt.com"),
  title: "Boundless Bolt | Professional Web Development & Automation Services",
  description: "We craft websites that win clients & grow your brand.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="w-full flex justify-center items-baseline">
          <div className="max-w-[1200px] w-full">
            <Navbar />
          </div>
        </div>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
