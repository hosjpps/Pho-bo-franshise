import type React from "react"
import type { Metadata } from "next"
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
  metadataBase: new URL("https://phobo.cafe/franchise"),
  title: "PhoBo | Франшиза вьетнамской кухни",
  description:
    "Откройте своё кафе вьетнамской кухни PhoBo. Чистая прибыль до 25%, возврат инвестиций от 11 месяцев. 75 кафе по всему миру.",
  keywords: ["франшиза", "вьетнамская кухня", "PhoBo", "ресторанный бизнес", "фо бо", "кафе"],
  openGraph: {
    title: "PhoBo | Франшиза вьетнамской кухни",
    description: "Откройте своё кафе вьетнамской кухни PhoBo. Чистая прибыль до 25%.",
    type: "website",
  },
  alternates: {
    canonical: "https://phobo.cafe/franchise",
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
      </body>
    </html>
  )
}
