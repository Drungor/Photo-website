import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_JP } from 'next/font/google'
import clsx from 'clsx'
import Header from "./Components/Header";
import Footer from "./Components/Footer";

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
        <title>{metadata.title}</title> 
        <style>
          writing-mode: horizontal-tb; 
        </style>
      </head>
      <body className="mx-20 relative">
      <Header className="sticky top-16" />
        {children}
      <Footer />
      </body>
    </html>
  );
}