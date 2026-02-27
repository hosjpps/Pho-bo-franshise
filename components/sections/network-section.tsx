"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion } from "framer-motion"
import { MapPin, Globe } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { AnimatedCounter } from "@/components/animated-counter"

const stats = [
  { value: 76, label: "Кафе по всему миру", description: "Работают в нашей сети", suffix: "" },
  { value: 2006, label: "Год основания", description: "Первый ресторан в Москве", suffix: "" },
  { value: 20, label: "Лет опыта", description: "В управлении бизнесом", suffix: "+" },
  { value: 46, label: "Заведений", description: "Работают по франшизе", suffix: "" },
  { value: 5, label: "Стран", description: "ОАЭ, Армения, Грузия, Вьетнам, Кыргызстан", suffix: "" },
]

// PhoBo locations (76 точек: 71 РФ + 5 международных)
const locations = [
  // Москва и МО (38)
  { name: "PhoBo Авиапарк", coords: [55.7893, 37.5301], city: "Москва" },
  { name: "PhoBo Арма", coords: [55.7565, 37.6620], city: "Москва" },
  { name: "PhoBo ДЕПО Лесная", coords: [55.7830, 37.5880], city: "Москва" },
  { name: "PhoBo Новоспасская", coords: [55.7280, 37.6520], city: "Москва" },
  { name: "PhoBo Химки", coords: [55.8920, 37.4290], city: "Химки" },
  { name: "PhoBo Хорошо", coords: [55.7770, 37.5200], city: "Москва" },
  { name: "PhoBo Европейский", coords: [55.7440, 37.5670], city: "Москва" },
  { name: "PhoBo Метрополис", coords: [55.8233, 37.4975], city: "Москва" },
  { name: "PhoBo Остров Мечты", coords: [55.6920, 37.7230], city: "Москва" },
  { name: "PhoBo Ривьера", coords: [55.7060, 37.6440], city: "Москва" },
  { name: "PhoBo Колумбус", coords: [55.6100, 37.6050], city: "Москва" },
  { name: "ВьетКафе Колумбус", coords: [55.6100, 37.6050], city: "Москва" },
  { name: "PhoBo МЕГА Белая Дача", coords: [55.6530, 37.8430], city: "Котельники" },
  { name: "PhoBo МЕГА БД-2", coords: [55.6540, 37.8450], city: "Котельники" },
  { name: "PhoBo Котельники", coords: [55.6620, 37.8640], city: "Котельники" },
  { name: "PhoBo Привоз", coords: [55.6840, 37.8460], city: "Москва" },
  { name: "PhoBo Юго-Западная", coords: [55.6614, 37.4770], city: "Москва" },
  { name: "PhoBo Павелецкая", coords: [55.7222, 37.6516], city: "Москва" },
  { name: "PhoBo Щёлковский", coords: [55.8107, 37.7990], city: "Москва" },
  { name: "PhoBo Вернадского", coords: [55.6440, 37.5060], city: "Москва" },
  { name: "PhoBo Коммунарка", coords: [55.5620, 37.4900], city: "Москва" },
  { name: "PhoBo Намёткина", coords: [55.6650, 37.5730], city: "Москва" },

  { name: "PhoBo Подольск", coords: [55.4310, 37.5450], city: "Подольск" },
  { name: "PhoBo Профсоюзная", coords: [55.6530, 37.5400], city: "Москва" },
  { name: "PhoBo Саларис", coords: [55.6290, 37.5230], city: "Москва" },
  { name: "PhoBo Тёплый Стан", coords: [55.6115, 37.4730], city: "Москва" },
  { name: "PhoBo Газетный", coords: [55.7583, 37.6085], city: "Москва" },
  { name: "PhoBo Сити", coords: [55.7490, 37.5390], city: "Москва" },
  { name: "PhoBo Камергерский", coords: [55.7605, 37.6128], city: "Москва" },
  { name: "PhoBo Вокруг Света", coords: [55.7580, 37.6245], city: "Москва" },
  { name: "PhoBo Новослободская", coords: [55.7790, 37.5970], city: "Москва" },
  { name: "PhoBo Арбат", coords: [55.7510, 37.5910], city: "Москва" },
  { name: "PhoBo Атриум", coords: [55.7570, 37.6580], city: "Москва" },
  { name: "PhoBo Парк Горького", coords: [55.7283, 37.6010], city: "Москва" },
  { name: "PhoBo Сильвер Сити", coords: [55.7465, 37.6475], city: "Москва" },
  { name: "PhoBo Центральный рынок", coords: [55.7670, 37.6250], city: "Москва" },
  { name: "PhoBo Лужники", coords: [55.7155, 37.5536], city: "Москва" },

  { name: "PhoBo Королёв", coords: [55.9160, 37.8540], city: "Королёв" },
  // Санкт-Петербург (6)

  { name: "PhoBo Академ-Парк", coords: [60.0130, 30.3990], city: "Санкт-Петербург" },
  { name: "PhoBo Дыбенко", coords: [59.9070, 30.4800], city: "Кудрово" },
  { name: "PhoBo Жемчужная Плаза", coords: [59.8540, 30.1530], city: "Санкт-Петербург" },
  { name: "PhoBo Небо", coords: [60.0530, 30.4400], city: "Мурино" },
  { name: "PhoBo Родео Драйв", coords: [60.0350, 30.3660], city: "Санкт-Петербург" },
  { name: "PhoBo Галерея", coords: [59.9290, 30.3620], city: "Санкт-Петербург" },
  // Воронеж (3)
  { name: "PhoBo Галерея Чижова", coords: [51.6580, 39.2070], city: "Воронеж" },
  { name: "PhoBo Коммуна", coords: [51.6610, 39.2000], city: "Воронеж" },
  { name: "PhoBo Московский пр.", coords: [51.6780, 39.2110], city: "Воронеж" },
  // Казань
  { name: "PhoBo Казань", coords: [55.7920, 49.1280], city: "Казань" },
  // Самара
  { name: "PhoBo Самара", coords: [53.2590, 50.2340], city: "Самара" },
  // Владимир
  { name: "PhoBo Владимир", coords: [56.1290, 40.4070], city: "Владимир" },
  // Екатеринбург (3)
  { name: "PhoBo Веер Молл", coords: [56.8600, 60.6330], city: "Екатеринбург" },
  { name: "PhoBo МЕГА Екатеринбург", coords: [56.8340, 60.5850], city: "Екатеринбург" },
  { name: "PhoBo Екатеринбург", coords: [56.8380, 60.6020], city: "Екатеринбург" },
  // Краснодар
  { name: "PhoBo Краснодар", coords: [45.0690, 38.9530], city: "Краснодар" },
  // Нижний Новгород (2)
  { name: "PhoBo Нижний Новгород", coords: [56.3190, 44.0000], city: "Нижний Новгород" },
  { name: "PhoBo Небо НН", coords: [56.2830, 43.9530], city: "Нижний Новгород" },
  // Ростов-на-Дону (3)
  { name: "PhoBo Горизонт", coords: [47.2270, 39.7440], city: "Ростов-на-Дону" },
  { name: "PhoBo Большая Садовая", coords: [47.2310, 39.7130], city: "Ростов-на-Дону" },
  { name: "PhoBo Вавилон", coords: [47.2580, 39.6640], city: "Ростов-на-Дону" },
  // Рязань (3)
  { name: "PhoBo Рязань", coords: [54.6290, 39.7370], city: "Рязань" },
  { name: "PhoBo Рязань Краснорядская", coords: [54.6310, 39.7420], city: "Рязань" },
  { name: "PhoBo Рязань Энергия", coords: [54.6340, 39.7190], city: "Рязань" },
  // Другие города России
  { name: "PhoBo Новосибирск", coords: [55.0300, 82.9200], city: "Новосибирск" },
  { name: "PhoBo Пермь", coords: [58.0100, 56.2500], city: "Пермь" },
  { name: "PhoBo Красноярск", coords: [56.0090, 92.8520], city: "Красноярск" },
  { name: "PhoBo Архангельск", coords: [64.5390, 40.5150], city: "Архангельск" },
  { name: "PhoBo Старый Оскол", coords: [51.2960, 37.8420], city: "Старый Оскол" },
  { name: "PhoBo Сочи", coords: [43.5855, 39.7231], city: "Сочи" },
  { name: "PhoBo Лазаревское", coords: [43.9040, 39.3280], city: "Сочи" },
  { name: "PhoBo Грозный", coords: [43.3170, 45.6980], city: "Грозный" },
  { name: "PhoBo Новокузнецк", coords: [53.7570, 87.1360], city: "Новокузнецк" },
  // Международные (5)
  { name: "PhoBo Дубай", coords: [25.0760, 55.1380], city: "Дубай, ОАЭ", international: true },
  { name: "PhoBo Ереван", coords: [40.1792, 44.4991], city: "Ереван, Армения", international: true },
  { name: "PhoBo Тбилиси", coords: [41.7151, 44.8271], city: "Тбилиси, Грузия", international: true },
  { name: "PhoBo Фукуок", coords: [10.2270, 103.9570], city: "Фукуок, Вьетнам", international: true },
  { name: "PhoBo Бишкек", coords: [42.8762, 74.6147], city: "Бишкек, Кыргызстан", international: true },
]

declare global {
  interface Window {
    ymaps: any
  }
}

function YandexMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  const initMap = useCallback(() => {
    if (!mapRef.current || mapInstanceRef.current) return

    window.ymaps.ready(() => {
      if (!mapRef.current || mapInstanceRef.current) return

      const map = new window.ymaps.Map(mapRef.current, {
        center: [55.0, 50.0],
        zoom: 4,
        controls: ["zoomControl"],
      }, {
        suppressMapOpenBlock: true,
      })

      mapInstanceRef.current = map

      // Clusterer with pin-shaped icons (inverted = pin shape)
      const clusterer = new window.ymaps.Clusterer({
        preset: "islands#invertedRedClusterIcons",
        groupByCoordinates: false,
        clusterDisableClickZoom: false,
        clusterBalloonContentLayout: "cluster#balloonCarousel",
      })

      const placemarks = locations.map((loc) => {
        return new window.ymaps.Placemark(
          loc.coords,
          {
            balloonContentHeader: `<strong>${loc.name}</strong>`,
            balloonContentBody: loc.city,
            hintContent: loc.name,
            iconContent: "1",
          },
          {
            preset: "islands#redCircleIcon",
          }
        )
      })

      clusterer.add(placemarks)
      map.geoObjects.add(clusterer)

      setIsLoading(false)
    })
  }, [])

  useEffect(() => {
    // Check if ymaps is already loaded
    if (window.ymaps) {
      initMap()
      return
    }

    // Load Yandex Maps API script
    const script = document.createElement("script")
    script.src = "https://api-maps.yandex.ru/2.1/?apikey=none&lang=ru_RU"
    script.async = true
    script.onload = initMap
    document.head.appendChild(script)

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.destroy()
        mapInstanceRef.current = null
      }
    }
  }, [initMap])

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] rounded-3xl overflow-hidden border border-forest/10">
      <div ref={mapRef} className="w-full h-full" />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-forest/5">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-3 border-forest border-t-transparent rounded-full animate-spin" />
            <span className="text-sm text-muted-foreground">Загрузка карты...</span>
          </div>
        </div>
      )}
    </div>
  )
}

export function NetworkSection() {
  return (
    <section id="network" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-forest/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-radial from-red-500/5 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="НАША СЕТЬ"
          title="Развитие сети PhởBò"
          subtitle="20 лет успешной работы в ресторанном бизнесе"
        />

        {/* Geographic info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12"
        >
          <div className="flex items-center gap-2 px-5 py-3 bg-forest/10 rounded-full">
            <MapPin className="w-5 h-5 text-forest" />
            <span className="text-sm font-semibold text-foreground">76 точек по всему миру</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-3 bg-red-50 rounded-full">
            <Globe className="w-5 h-5 text-red-500" />
            <span className="text-sm font-semibold text-foreground">5 стран: ОАЭ, Армения, Грузия, Вьетнам, Кыргызстан</span>
          </div>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <YandexMap />
        </motion.div>

        {/* Stats */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[5%] right-[5%] h-0.5 bg-gradient-to-r from-forest via-forest-light to-forest" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: "backOut" }}
                className={`text-center ${index === stats.length - 1 ? "col-span-2 sm:col-span-1" : ""}`}
              >
                <div className="relative inline-block mb-6">
                  {/* Pulsing ring */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-forest to-forest-light"
                  />
                  {/* Main circle */}
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-forest to-forest-light flex items-center justify-center shadow-xl shadow-forest/20">
                    <span className="text-2xl sm:text-3xl font-extrabold text-white">
                      <AnimatedCounter end={stat.value} duration={2500} />{stat.suffix}
                    </span>
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1">{stat.label}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
