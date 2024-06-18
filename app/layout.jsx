import "@/assets/styles/globals.css";
import AuthProvider from "@/components/AuthProvider";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dwelo - Bid to Dwell Well",
  description:
    "Discover your dream home and bid with confidence on Dwelo. Explore property listings, place bids, and find your perfect dwelling with ease.",
  keywords: "rental,find your dream property, homes",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={inter.className}>
          <Nav />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}
