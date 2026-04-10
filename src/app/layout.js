import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { PropertyProvider } from "@/contextapi/propertycontext"; // ✅ ADD THIS
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { BlogProvider } from "@/contextapi/BlogContext";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
title: "House for Sale in Faridabad | Independent Houses, Villas & Floors",

description:
"Find verified houses for sale in Faridabad including independent houses, builder floors, and villas at best prices. Explore ready to move and new residential projects in prime locations of Faridabad.",

keywords: [
  "house for sale faridabad",
  "independent house for sale faridabad",
  "villa for sale faridabad",
  "builder floor for sale faridabad",
  "buy house in faridabad",
  "residential property for sale faridabad",
  "ready to move house faridabad",
  "new houses in faridabad",
  "luxury house faridabad",
  "property for sale faridabad"
],

  alternates: {
    canonical: "https://www.flatforsaleinfaridabad.com/",
  },
  verification: {
    google: "qEQA5ym54a67R2c2BGTGm04-sUm__OS7txES7rB9Rz4",
  },
   icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
    },
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        {/* ✅ Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-M79QZSB3');
            `,
          }}
        />

        {/* ✅ Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XP5YLVK2EE"
          strategy="afterInteractive"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XP5YLVK2EE');
          `}
        </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✅ GTM NoScript */}
        
<noscript>
  <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M79QZSB3"
height="0" width="0" style="display:none;visibility:hidden">
  
</iframe>
</noscript>


        {/* ✅ Providers */}
        <PropertyProvider>
          <BlogProvider>
            <Navbar />
            {children}
            <ScrollToTop />
            <Footer />
            <Toaster position="top-right" reverseOrder={false} />
          </BlogProvider>
        </PropertyProvider>
      </body>
    </html>
  );
}