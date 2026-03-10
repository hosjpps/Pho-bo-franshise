import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { Inter, Manrope } from "next/font/google"
import { CookieBanner } from "@/components/cookie-banner"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
})

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://franchise.phobo.cafe"),
  title: "PhoBo | Франшиза вьетнамской кухни",
  description:
    "Откройте своё кафе вьетнамской кухни PhoBo. Чистая прибыль до 25%, возврат инвестиций от 11 месяцев. 76 кафе по всему миру.",
  keywords: ["франшиза", "вьетнамская кухня", "PhoBo", "ресторанный бизнес", "фо бо", "кафе"],
  openGraph: {
    title: "PhoBo | Франшиза вьетнамской кухни",
    description: "Откройте своё кафе вьетнамской кухни PhoBo. Чистая прибыль до 25%.",
    type: "website",
    url: "https://franchise.phobo.cafe",
    locale: "ru_RU",
    siteName: "PhoBo Франшиза",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "PhoBo — франшиза вьетнамской кухни",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PhoBo | Франшиза вьетнамской кухни",
    description: "Откройте своё кафе вьетнамской кухни PhoBo. Чистая прибыль до 25%.",
    images: ["/pho-bo-vietnamese-beef-soup-in-ceramic-bowl-with-h.jpg"],
  },
  alternates: {
    canonical: "https://franchise.phobo.cafe",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${manrope.variable} font-sans antialiased`}>
        {children}
        <CookieBanner />
        <Script
          id="yandex-metrika"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=107072733', 'ym');
              ym(107072733, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
            `,
          }}
        />
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/107072733" style={{ position: "absolute", left: "-9999px" }} alt="" />
          </div>
        </noscript>
      </body>
    </html>
  )
}
