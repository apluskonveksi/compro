import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Nunito } from "next/font/google";
import AnimatedPresenceWrapper from "@/components/AnimatePresence";
import GoogleAdsense from "@/components/GoogleAdsense";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Aplus Konveksi Bandung",
  description: "Aplus Konveksi Bandung adalah mitra terpercaya dalam dunia konveksi yang berkomitmen tinggi untuk memberikan hasil produksi yang tidak hanya sesuai pesanan, tetapi juga unggul dalam hal kualitas dan ketepatan waktu. Kami memahami bahwa setiap produk yang kami hasilkan mencerminkan identitas brand klien, oleh karena itu kami selalu menjunjung tinggi standar mutu dalam setiap proses produksi.",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4091863714106054"
          crossOrigin="anonymous"></script>
      </head>
      <body
        className={`${nunito.variable} bg-white text-[#121212] antialiased`}>
        <Navbar />
        <AnimatedPresenceWrapper mode="wait">
          <div className="w-full px-2 md:px-12 lg:px-16 xl:px-24 2xl:px-32 ">
            {children}
          </div>
        </AnimatedPresenceWrapper>
        <GoogleAdsense />
        <Footer />
      </body>
    </html>
  );
}
