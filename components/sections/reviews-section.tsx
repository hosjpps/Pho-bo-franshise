"use client"

import { motion } from "framer-motion"
import { Star, ExternalLink } from "lucide-react"
import { SectionHeader } from "@/components/section-header"

const platforms = [
  {
    name: "Яндекс Карты",
    rating: 4.75,
    count: "5 335 отзывов",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#FF4433"/>
        <circle cx="12" cy="9" r="2.5" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: "Google",
    rating: 4.63,
    count: "122 отзыва",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
    ),
  },
  {
    name: "2ГИС",
    rating: 4.52,
    count: "361 отзыв",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7">
        <rect width="24" height="24" rx="4" fill="#1DAD52"/>
        <text x="12" y="17" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold" fontFamily="Arial">2G</text>
      </svg>
    ),
  },
  {
    name: "Яндекс Еда",
    rating: 4.9,
    count: "81 тыс. заказов",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7">
        <rect width="24" height="24" rx="4" fill="#FCE000"/>
        <circle cx="12" cy="12" r="6" fill="none" stroke="#21201F" strokeWidth="2"/>
        <path d="M12 8v4l3 2" stroke="#21201F" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Delivery Club",
    rating: 4.6,
    count: "47 тыс. заказов",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7">
        <rect width="24" height="24" rx="4" fill="#2CC84D"/>
        <path d="M7 12c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="1.5" fill="#fff"/>
      </svg>
    ),
  },
]

const reviews = [
  {
    name: "Анна К.",
    date: "2 недели назад",
    rating: 5,
    text: "Лучший Фо Бо в Москве! Хожу сюда уже несколько лет, и качество всегда на высоте. Очень вкусный бульон, свежие ингредиенты.",
  },
  {
    name: "Михаил В.",
    date: "1 неделю назад",
    rating: 5,
    text: "Отличное место для обеда! Быстрое обслуживание, большие порции. Том Ям просто божественный. Рекомендую всем!",
  },
  {
    name: "Елена С.",
    date: "3 дня назад",
    rating: 5,
    text: "Уютная атмосфера, приветливый персонал. Нэм Га — это что-то невероятное! Теперь это мое любимое место.",
  },
  {
    name: "Дмитрий П.",
    date: "5 дней назад",
    rating: 5,
    text: "Заказывал доставку — привезли быстро, всё горячее и вкусное. Упаковка аккуратная, порции щедрые.",
  },
]

function StarRating({ rating, size = "sm" }: { rating: number; size?: "sm" | "lg" }) {
  const s = size === "lg" ? "w-8 h-8" : "w-4 h-4"
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`${s} ${
            star <= Math.floor(rating)
              ? "text-yellow-400 fill-yellow-400"
              : star - 0.5 <= rating
                ? "text-yellow-400 fill-yellow-400/50"
                : "text-gray-300"
          }`}
        />
      ))}
    </div>
  )
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 lg:py-32 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="ОТЗЫВЫ"
          title="Что говорят наши гости"
        />

        {/* Rating hero block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 rounded-3xl p-8 sm:p-10 mb-12"
        >
          {/* Top row: big rating + platforms */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left: score */}
            <div className="flex items-center gap-5">
              <div className="flex flex-col items-center">
                <StarRating rating={4.77} size="lg" />
                <span className="text-6xl font-bold text-foreground mt-1">4.77</span>
              </div>
              <div className="h-16 w-px bg-gray-300 hidden sm:block" />
              <div className="hidden sm:block">
                <p className="text-3xl font-bold text-foreground">35 077</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">отзывов</p>
                <div className="flex items-center gap-1.5 mt-1.5 text-xs text-green-600">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Подтверждённые отзывы
                </div>
              </div>
            </div>

            {/* Right: platforms */}
            <div className="flex flex-wrap justify-center gap-5 sm:gap-7">
              {platforms.map((platform) => (
                <div key={platform.name} className="flex flex-col items-center gap-1.5">
                  <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-sm">
                    {platform.icon}
                  </div>
                  <span className="text-base font-bold text-foreground">{platform.rating}</span>
                  <span className="text-[10px] text-muted-foreground whitespace-nowrap">{platform.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: total count */}
          <div className="flex items-center justify-center gap-3 mt-6 sm:hidden">
            <p className="text-2xl font-bold text-foreground">35 077</p>
            <p className="text-sm text-muted-foreground">подтверждённых отзывов</p>
          </div>
        </motion.div>

        {/* Review cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col"
            >
              <div className="text-3xl text-yellow-400 font-serif leading-none mb-2">&ldquo;</div>
              <div className="mb-3">
                <StarRating rating={review.rating} />
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed mb-auto pb-5">{review.text}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-8 h-8 rounded-full bg-forest/10 flex items-center justify-center text-xs font-bold text-forest">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mt-10"
        >
          <a
            href="https://yandex.ru/maps/org/pho_bo_vyetnamskoye_kafe/1124622839/reviews/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 text-sm font-medium text-foreground hover:bg-gray-50 transition-colors"
          >
            Читать все отзывы на Яндекс Картах
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
