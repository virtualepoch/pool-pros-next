import { Inter } from "next/font/google";
import { UI } from "./components/ui";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import "./globals.css";
import "./ui.css";
import "./_testing.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Testing - Boise Pool Pros",
  description: "Boise's Highly Rated Pool & Spa Professionals.",
  openGraph: {
    title: "Boise Pool Pros",
    description:
      "Boise's Highly Rated Pool & Spa Professionals",
    url: "/",
    siteName: "Boise Pool Pros",
    images: {
      url: "/og.jpg",
      width: 1200,
      height: 630,
    },
    locale: "en_US",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#f0f",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="app">
          <UI />

          <Header />

          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
