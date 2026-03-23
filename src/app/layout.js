import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { PropertyProvider } from "@/contextapi/propertycontext"; // ✅ ADD THIS
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { BlogProvider } from "@/contextapi/BlogContext";
import { Toaster } from "react-hot-toast";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "House for Sale Faridabad",
  description: "Find verified house for sale in Faridabad with best deals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✅ Provider Wrap Start */}
        <PropertyProvider>
          <BlogProvider>
          <Navbar />
          {children}
          <ScrollToTop />
          <Footer/>
                              <Toaster position="top-right" reverseOrder={false} />

          </BlogProvider>
        </PropertyProvider>
        {/* ✅ Provider Wrap End */}
      </body>
    </html>
  );
}