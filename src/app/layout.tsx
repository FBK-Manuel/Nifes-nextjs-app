import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NIFES Atani Family",
  description: "NIFES Atani Family Leadership Camping Retreat",
  applicationName: "NIFES Atani Family",
  publisher: "NIFES Atani Family",
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  keywords: [
    "NIFES",
    "NIFES Atani Family",
    "NIFES Leadership Camping Retreat",
    "NIFES Retreat",
    "Christian Retreat",
    "Spiritual Growth",
    "Fellowship",
    "Community",
  ],
  authors: [
    {
      name: "NIFES Atani Family",
      url: "https://nifes.org.ng",
    },
  ],
  creator: "NIFES Atani Family",
  openGraph: {
    title: "NIFES Atani Family",
    description: "NIFES Atani Family Leadership Camping Retreat",
    url: "https://nifes.org.ng",
    siteName: "NIFES Atani Family",
    images: [
      {
        url: "https://nifes.org.ng/logo.png",
        width: 1200,
        height: 630,
        alt: "NIFES Atani Family Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
