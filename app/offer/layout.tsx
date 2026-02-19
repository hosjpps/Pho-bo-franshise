import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Договор оферты | PhoBo",
  description: "Публичный договор оферты сети кафе вьетнамской кухни PhoBo. Условия предоставления услуг.",
  alternates: { canonical: "https://phobo.cafe/offer" },
}

export default function OfferLayout({ children }: { children: React.ReactNode }) {
  return children
}
