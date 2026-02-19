"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { FormatDashboard } from "@/components/format-dashboard"
import { FormatRequirements } from "@/components/format-requirements"

interface FormatImage {
  src: string
  location: string
}

const formats = [
  {
    id: "foodcourt",
    name: "Фудкорт / Фудхолл",
    images: [
      { src: "/images/formats/foodcourt-aviapark.jpg", location: "Ходынский б-р, 4, ТЦ «Авиапарк», 4 этаж" },
      { src: "/images/formats/foodcourt-atrium-1.jpg", location: "ул. Земляной Вал, 33, ТРК «Атриум»" },
      { src: "/images/formats/foodcourt-atrium-2.jpg", location: "ул. Земляной Вал, 33, ТРК «Атриум»" },
      { src: "/images/formats/foodmall-arkhangelsk.jpg", location: "Троицкий пр-т, 17, ТЦ «ЕвроПарк», фудмолл «Рестопорт»" },
      { src: "/images/formats/foodmall-yugozapadnaya.jpg", location: "пр-т Вернадского, 86В, ПАРК Фудхолл" },
    ] as FormatImage[],
    investment: { min: 8, max: 8 },
    profit: 25,
    roi: 9,
    revenue: { min: 4, max: 4 },
    breakeven: { min: 2, max: 2 },
    royalty: 6,
    pauschal: 1.2,
    requirements: {
      area: "25-60 м²",
      power: "от 40 кВт",
      ventilation: "3500-5000 м³/час",
      utilities: "Водоотведение и канализация",
    },
  },
  {
    id: "street",
    name: "Стрит-ритейл",
    images: [
      { src: "/images/formats/street-novoslobodskaya-1.jpg", location: "ул. Чаянова, 22, стр. 4, Москва" },
      { src: "/images/formats/street-novoslobodskaya-2.jpg", location: "ул. Чаянова, 22, стр. 4, Москва" },
      { src: "/images/formats/street-novoslobodskaya-3.jpg", location: "ул. Чаянова, 22, стр. 4, Москва" },
    ] as FormatImage[],
    investment: { min: 9, max: 12 },
    profit: 25,
    roi: 14,
    revenue: { min: 3, max: 4 },
    breakeven: { min: 3, max: 5 },
    royalty: 6,
    pauschal: 1.2,
    requirements: {
      area: "60-100 м²",
      power: "от 60 кВт",
      ventilation: "5000-7000 м³/час",
      utilities: "Водоотведение и канализация",
    },
  },
]

function FormatExamples({ format }: { format: (typeof formats)[0] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = useCallback(
    (index: number) => {
      setCurrentIndex((index + format.images.length) % format.images.length)
    },
    [format.images.length],
  )

  // Auto-slide every 4 seconds, pause on hover
  useEffect(() => {
    if (isPaused || format.images.length <= 1) return
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % format.images.length)
    }, 4000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isPaused, format.images.length])

  const currentImage = format.images[currentIndex]

  return (
    <div className="bg-background rounded-3xl p-6 sm:p-8 shadow-xl border border-forest/10">
      <h3 className="text-2xl font-bold text-foreground mb-6">Примеры {format.name}</h3>
      <div
        className="relative rounded-2xl overflow-hidden h-64 sm:h-72 group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${currentImage.src}')` }}
          />
        </AnimatePresence>

        {/* Navigation arrows */}
        {format.images.length > 1 && (
          <>
            <button
              onClick={() => goTo(currentIndex - 1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50"
              aria-label="Предыдущее фото"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => goTo(currentIndex + 1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50"
              aria-label="Следующее фото"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Glass address card */}
        {currentImage.location && (
          <div
            className="absolute bottom-5 left-4 right-4 bg-white/20 backdrop-blur-2xl rounded-2xl px-5 py-4 border border-white/30 shadow-lg"
            style={{
              WebkitBackdropFilter: "blur(40px) saturate(200%)",
              backdropFilter: "blur(40px) saturate(200%)",
            }}
          >
            <div className="flex items-center gap-4 text-white">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-white/80">Адрес заведения</p>
                <p className="text-sm font-semibold">{currentImage.location}</p>
              </div>
            </div>
          </div>
        )}

        {/* Carousel dots + progress */}
        {format.images.length > 1 && (
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-2">
            {format.images.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all ${i === currentIndex ? "w-6 h-2 bg-white" : "w-2 h-2 bg-white/50 hover:bg-white/70"}`}
                aria-label={`Фото ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function FormatKeyMetrics({ format }: { format: (typeof formats)[0] }) {
  const keyMetrics = [
    { label: "Инвестиции", value: `от ${format.investment.min} млн ₽` },
    { label: "Чистая прибыль", value: `до ${format.profit}%` },
    { label: "Возврат инвестиций", value: `от ${format.roi} мес` },
    { label: "Оборот", value: `от ${format.revenue.min} млн ₽/мес` },
    { label: "Точка безубыточности", value: `${format.breakeven.min}-${format.breakeven.max} мес` },
    { label: "Паушальный взнос", value: `${format.pauschal} млн ₽` },
    { label: "Роялти", value: `${format.royalty}%` },
  ]

  return (
    <div className="bg-gradient-to-br from-forest to-forest-dark rounded-3xl p-6 sm:p-8 text-white">
      <h3 className="text-2xl font-bold mb-6">Ключевые показатели {format.name}</h3>
      <div className="grid grid-cols-2 gap-4">
        {keyMetrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`${index === 0 ? "col-span-2" : ""}`}
          >
            <p className="text-white/80 text-sm mb-1">{metric.label}</p>
            <p className={`font-bold ${index === 0 ? "text-3xl" : "text-xl"}`}>{metric.value}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export function FormatsSection() {
  const [activeFormat, setActiveFormat] = useState("foodcourt")

  return (
    <section id="formats" className="py-24 lg:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="ФОРМАТЫ ЗАВЕДЕНИЙ"
          title="Выберите формат франшизы"
          subtitle="Два готовых формата на любой бюджет и локацию"
        />

        <Tabs value={activeFormat} onValueChange={setActiveFormat} className="w-full">
          <TabsList className="mx-auto mb-12 p-1.5 bg-background shadow-lg rounded-xl border border-border h-auto flex-wrap">
            {formats.map((format) => (
              <TabsTrigger
                key={format.id}
                value={format.id}
                className="px-6 sm:px-10 py-3 text-base font-semibold rounded-lg data-[state=active]:bg-forest data-[state=active]:text-white data-[state=active]:shadow-md transition-all"
              >
                {format.name}
              </TabsTrigger>
            ))}
          </TabsList>

          <AnimatePresence mode="wait">
            {formats.map((format) => (
              <TabsContent key={format.id} value={format.id} className="focus-visible:outline-none">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                >
                  {/* Top-left: Photo Examples */}
                  <FormatExamples format={format} />
                  {/* Top-right: ROI Chart */}
                  <FormatDashboard format={format} />
                  {/* Bottom-left: Key Metrics */}
                  <FormatKeyMetrics format={format} />
                  {/* Bottom-right: Requirements */}
                  <FormatRequirements format={format} />
                </motion.div>
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  )
}
