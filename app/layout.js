import '@/assets/styles/globals.css'
import { Inter } from "next/font/google";
 
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dwelo - Bid to Dwell Well",
  description: "Discover your dream home and bid with confidence on Dwelo. Explore property listings, place bids, and find your perfect dwelling with ease.",
  keywords: 'rental,find your dream property, homes'
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
