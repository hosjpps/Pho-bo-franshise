import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Меню PhoBo | Вьетнамская кухня",
  description:
    "Полное меню кафе PhoBo: супы Фо Бо и Том Ям, блинчики Нэмы, горячие блюда, напитки. Аутентичная вьетнамская кухня.",
  alternates: {
    canonical: "https://phobo.cafe/menu",
  },
}

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return children
}
