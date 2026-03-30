"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Play, X, TrendingUp, MapPin } from "lucide-react"
import { SectionHeader } from "@/components/section-header"

const partners: {
  name: string
  city: string
  image: string
  position?: string
  scale?: number
  revenue: string
  period: string
  payback: string
  comment: string
  hasVideo: boolean
  videoSrc?: string
}[] = [
  {
    name: "Егор",
    city: "Новокузнецк",
    image: "/images/partners/novokuznetsk.jpg",
    position: "center 50%",
    scale: 1.6,
    revenue: "2,8 млн",
    period: "руб/мес",
    payback: "6 мес",
    comment: "Открыл точку в торговом центре — поток гостей с первого дня. Команда PhoBo помогла с выбором локации, обучением персонала и запуском. Выручка в день открытия составила 187 000 руб., стабильный рост каждый месяц.",
    hasVideo: false,
  },
  {
    name: "Евгений",
    city: "Ереван, Армения",
    image: "/images/partners/erevan.jpg",
    revenue: "1,9 млн",
    period: "руб/мес",
    payback: "8 мес",
    comment: "Первая международная точка PhoBo. Запуск прошёл при полной поддержке команды — от адаптации меню до обучения персонала. Гости оценили качество с первого дня, выручка превзошла ожидания уже на старте.",
    hasVideo: true,
    videoSrc: "/images/partners/erevan.mp4",
  },
  {
    name: "Игорь",
    city: "Старый Оскол",
    image: "/images/partners/oskol.jpg",
    position: "left center",
    scale: 1.08,
    revenue: "3,2 млн",
    period: "руб/мес",
    payback: "5 мес",
    comment: "Удачная локация обеспечила стабильный поток гостей с первых дней. Узнаваемость бренда PhoBo и качество продукта работают — гости возвращаются. Самая быстрая окупаемость среди точек сети.",
    hasVideo: false,
  },
]

export function PartnersSection() {
  const [videoOpen, setVideoOpen] = useState(false)
  const [videoSrc, setVideoSrc] = useState("")

  const openVideo = (src: string) => {
    if (!src) return
    setVideoSrc(src)
    setVideoOpen(true)
  }

  return (
    <section id="partners" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="НАШИ ПАРТНЁРЫ"
          title="Результаты франчайзи"
          subtitle="Реальные показатели точек PhoBo по всей России и за рубежом"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              {/* Photo */}
              <div className="relative rounded-2xl overflow-hidden mb-5 aspect-[4/3]">
                <div
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${partner.image}')`,
                    backgroundPosition: partner.position || "center",
                    backgroundSize: partner.scale ? `${partner.scale * 100}%` : "cover",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                {/* Play button for video */}
                {partner.hasVideo && (
                  <button
                    onClick={() => openVideo(partner.videoSrc || "")}
                    aria-label="Смотреть видео-отзыв"
                    className="absolute bottom-3 right-3 w-12 h-12 rounded-full bg-red-500 flex items-center justify-center shadow-lg hover:bg-red-600 hover:scale-110 transition-all z-10"
                  >
                    <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                  </button>
                )}

                {/* City badge */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5">
                  <MapPin className="w-3.5 h-3.5 text-forest" />
                  <span className="text-xs font-medium text-foreground">{partner.city}</span>
                </div>
              </div>

              {/* Name & City */}
              <div className="flex items-baseline gap-3 mb-3">
                <h3 className="text-xl font-bold text-foreground">{partner.name}</h3>
                <span className="text-sm text-muted-foreground">{partner.city}</span>
              </div>

              {/* Revenue */}
              <div className="flex items-baseline gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-forest shrink-0" />
                <p className="text-3xl font-bold text-foreground">
                  {partner.revenue}
                  <span className="text-sm font-medium text-muted-foreground ml-2">{partner.period}</span>
                </p>
              </div>

              {/* Payback */}
              <p className="text-sm font-medium text-forest mb-3">
                Окупаемость: {partner.payback}
              </p>

              {/* Comment */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {partner.comment}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video modal */}
      {videoOpen && videoSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setVideoOpen(false)}
        >
          <div className="relative max-h-[85vh] aspect-[9/16]" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <video
              src={videoSrc}
              controls
              autoPlay
              className="w-full h-full rounded-xl object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}
