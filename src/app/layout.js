import { Inter } from "next/font/google";
import { UI } from "./components/ui";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import "./globals.css";
import "./ui.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Copy for Testing",
  description:
    "Copy for testing & revision.",
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
