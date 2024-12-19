import type { Metadata } from "next";
import { Noto_Sans_JP } from 'next/font/google'
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import clsx from 'clsx'
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
})


export const metadata: Metadata = {
  title: "Leo's Photo",
  description: "Follow me on my journey to make greater pictures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja' className={clsx(notoSansJP.variable, 'font-sans')}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <style>
          writing-mode: horizontal-tb; 
        </style>
      </head>
      <body className="  md:mx-20 relative">
      <Header />
        {children}
      <Footer />
      </body>
    </html>
  );
}