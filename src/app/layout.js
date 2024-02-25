import { Inter } from "next/font/google";
import { UI } from "./components/ui";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import "./globals.css";
import "./components/ui/ui.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pool & Spa Service Professionals - Boise Pool Pros",
  description:
    "We provide Residential & Commercial Pool & Spa Cleaning, Maintenance, Technical Services, Openings, Closings, Water Treatment, and many other services.",
  generator: "Next.js",
  applicationName: "Boise Pool Pros Web App",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Boise Pool Pros",
    "IdaHomeServ",
    "pool",
    "spa",
    "openings",
    "closings",
    "pool openings",
    "pool closings",
  ],
  authors: [
    { name: "James Davis" },
    { name: "Paul Elie" },
    { name: "Craig Kaufman", url: "https://www.virtualepoch.com" },
  ],
  creator: "Craig Kaufman",
  publishers: [{ name: "James Davis" }, { name: "Paul Elie" }],

  metadataBase: new URL("https://www.boisepoolpros.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title: "Boise Pool Pros",
    description:
      "Your Pool & Spa Service Professionals - Residential & Commercial Services",
    url: "/",
    siteName: "Pool & Spa Service Professionals - Boise Pool Pros",
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
  themeColor: "#fff",
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
