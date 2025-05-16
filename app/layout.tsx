import Script from "next/script";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Nunito } from "next/font/google";
import AnimatedPresenceWrapper from "@/components/AnimatePresence";
import GoogleAdsense from "@/components/GoogleAdsense";
import PopUpPromotion from "@/components/shared/PopUpPromotion";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Konveksi Bandung | Aplus Konveksi",
  description:
    "Aplus Konveksi adalah mitra terpercaya dalam dunia konveksi yang berkomitmen tinggi untuk memberikan hasil produksi yang tidak hanya sesuai pesanan, tetapi juga unggul dalam hal kualitas dan ketepatan waktu. Kami memahami bahwa setiap produk yang kami hasilkan mencerminkan identitas brand klien, oleh karena itu kami selalu menjunjung tinggi standar mutu dalam setiap proses produksi.",
  keywords: [
    "konveksi bandung",
    "konveksi murah",
    "buat kaos bandung",
    "konveksi jaket bandung",
    "aplus konveksi",
    "konveksi aplus",
    "seragam kantor",
    "seragam sekolah",
    "konveksi sindanglaya",
    "konveksi kaos",
    "konveksi terpercaya"
  ],
  authors: [{ name: "Aplus Konveksi", url: "https://apluskonveksi.com" }],
  creator: "Aplus Konveksi",
  publisher: "Aplus Konveksi",
  openGraph: {
    title: "Konveksi Bandung | Aplus Konveksi",
    description:
      "Temukan layanan konveksi terpercaya di Bandung bersama Aplus Konveksi. Produksi berkualitas, tepat waktu, dan sesuai kebutuhan brand Anda.",
    url: "https://apluskonveksi.com",
    siteName: "Aplus Konveksi",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://apluskonveksi.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aplus Konveksi Bandung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Konveksi Bandung | Aplus Konveksi",
    description:
      "Aplus Konveksi menyediakan layanan konveksi berkualitas di Bandung untuk berbagai kebutuhan brand Anda.",
    creator: "@apluskonveksi",
    images: ["https://apluskonveksi.com/og-image.jpg"],
  },
  metadataBase: new URL("https://apluskonveksi.com"),
};


const schemaData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Aplus Konveksi",
  "url": "https://apluskonveksi.com",
  "logo": "https://apluskonveksi.com/logo-a.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analystic */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-SG7BM1B734" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SG7BM1B734');
          `}
        </Script>

        {/* Google Adsense */}
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4091863714106054"
          crossOrigin="anonymous" />
        {/* Google Tag Manager */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-${process.env.GTM}');
  `}
        </Script>

        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body
        className={`${nunito.variable} bg-white text-[#121212] antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WWP3CW2Q"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Navbar />
        <AnimatedPresenceWrapper mode="wait">
          <div className="w-full px-2 md:px-12 lg:px-16 xl:px-24 2xl:px-32 ">
            <PopUpPromotion />
            {children}
          </div>
        </AnimatedPresenceWrapper>
        <GoogleAdsense />
        <Footer />
      </body>
    </html>
  );
}
