"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"
import { SectionHeader } from "@/components/section-header"

const partners = [
  {
    name: "Алексей",
    city: "Москва",
    image: "/russian-man-business-owner-restaurant-smiling-port.jpg",
    revenue: "2 450 000",
    openingDayRevenue: "156 800",
    quote:
      "Выбрал PhoBo, потому что видел их рост на рынке. Команда помогла с выбором локации, обучением персонала и запуском. Окупился за 5 месяцев — это даже быстрее, чем планировал.",
  },
  {
    name: "Марина",
    city: "Санкт-Петербург",
    image: "/russian-woman-business-owner-cafe-smiling-portrait.jpg",
    revenue: "1 890 000",
    openingDayRevenue: "142 350",
    quote:
      "Для меня это первый бизнес в общепите. PhoBo дали полную поддержку — от выбора помещения до первого дня работы. Сейчас уже планирую вторую точку.",
  },
  {
    name: "Дмитрий",
    city: "Казань",
    image: "/russian-man-entrepreneur-restaurant-owner-confiden.jpg",
    revenue: "2 780 000",
    openingDayRevenue: "189 450",
    quote:
      "Открыл точку на фудкорте в ТЦ. Качество продукта и узнаваемость бренда сразу дали поток гостей. Очень доволен поддержкой команды PhoBo на всех этапах.",
  },
]

export function PartnersSection() {
  return (
    <section id="partners" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="НАШИ ПАРТНЕРЫ"
          title="Отзывы владельцев франшиз"
          subtitle="Реальные истории успеха наших партнеров по всей России"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Photo */}
              <div className="relative rounded-2xl overflow-hidden mb-5 aspect-[3/4]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${partner.image}')` }}
                />
                {/* Play button */}
                <button
                  aria-label={`Воспроизвести видео-отзыв ${partner.name}`}
                  className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-red-500 flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors"
                >
                  <Play className="w-5 h-5 text-white fill-white ml-0.5" aria-hidden="true" />
                </button>
              </div>

              {/* Name & City */}
              <div className="flex items-baseline gap-3 mb-4">
                <h3 className="text-2xl font-bold text-foreground">{partner.name}</h3>
                <span className="text-muted-foreground">{partner.city}</span>
              </div>

              {/* Revenue */}
              <div className="mb-4">
                <p className="text-3xl sm:text-4xl font-bold text-foreground">
                  {partner.revenue} <span className="text-base font-medium text-muted-foreground">руб/мес</span>
                </p>
                <p className="text-sm text-muted-foreground mt-1">Выручка за 1-й месяц работы</p>
              </div>

              {/* Red separator */}
              <div className="w-12 h-0.5 bg-red-500 mb-4" />

              {/* Opening day revenue */}
              <p className="text-sm text-muted-foreground mb-4">
                В день торжественного открытия выручка {partner.openingDayRevenue} руб.
              </p>

              {/* Quote */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                &ldquo;{partner.quote}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
