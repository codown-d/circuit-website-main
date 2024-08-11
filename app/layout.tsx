import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import "./common.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Circuit",
  description:
    "Circuit is the first thesis-driven DEX on Zircuit. Besides from usual Dex features, we have unique liquid asset curve which is born for assets on Zircuit.",
  keywords:
    "circuit,zircuit,zircuit swap,zircuit dex,circuit.money,circuit website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:url" content="https://www.circuit.money/" />
        <meta property="og:title" content="Circuit" />
        <meta
          property="og:description"
          content="Circuit is the first thesis-driven DEX on Zircuit. Besides from usual Dex features, we have unique liquid asset curve which is born for assets on Zircuit."
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-WLHFTGCH1V`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WLHFTGCH1V', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className={(inter.className, "bg-[#f6f6f6]")}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
