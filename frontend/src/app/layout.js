import localFont from 'next/font/local';
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const varelaRound = localFont({
  src: './fonts/VarelaRound-Regular.ttf',
  weight: '400',
  style: 'normal',
  variable: '--font-varela-round',
});

export const metadata = {
  title: "SnapTix",
  description: "An Online Ticketing System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={varelaRound.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
