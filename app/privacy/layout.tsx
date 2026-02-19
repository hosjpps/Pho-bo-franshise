import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Политика конфиденциальности | PhoBo",
  description: "Политика конфиденциальности и обработки персональных данных сети кафе вьетнамской кухни PhoBo.",
  alternates: { canonical: "https://phobo.cafe/privacy" },
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children
}
