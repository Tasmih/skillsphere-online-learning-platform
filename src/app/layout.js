import dns from "node:dns";
dns.setServers(['8.8.8.8', '8.8.4.4']);

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SkillSphere",
  description: "Online learning platform to upgrade your skills",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">

        <Navbar />

        <main className="max-w-7xl mx-auto w-full flex-1 px-4">
          {children}
        </main>
             <ToastContainer position="top-right" autoClose={2000} />
        <Footer />

      </body>
    </html>
  );
}