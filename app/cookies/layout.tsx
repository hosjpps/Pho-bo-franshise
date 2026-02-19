import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Политика cookies | PhoBo",
  description: "Политика использования файлов cookies на сайте сети кафе вьетнамской кухни PhoBo.",
  alternates: { canonical: "https://phobo.cafe/cookies" },
}

export default function CookiesLayout({ children }: { children: React.ReactNode }) {
  return children
}
