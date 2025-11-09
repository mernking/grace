// import { Inter } from "next/font/google";
// import { Courier_Prime } from "next/font/google"; // Import Courier Prime
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
// const courierPrime = Courier_Prime({ weight: "400", subsets: ["latin"] }); // Define Courier Prime

// ${inter.className} ${courierPrime.className}

export const metadata = {
  title: "Boundless Bolt | PORTFOLIO",
  description: "Boundless Bolt | PORTFOLIO, learn more about me",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="qtNIeFzTQ3iGZbUZ3RWoq-xqDhrn7bUogAdbhgeh7CM"
        />
      </head>
      <body className={`w-full h-fit flex justify-center items-center`}>
        {children}
      </body>
    </html>
  );
}
