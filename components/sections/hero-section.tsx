"use client"

import { motion } from "framer-motion"
import { TrendingUp, DollarSign, Calendar, ChevronDown, Download, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedCounter } from "@/components/animated-counter"

const metrics = [
  {
    icon: TrendingUp,
    value: 25,
    prefix: "до ",
    suffix: "%",
    label: "Рентабельность",
  },
  {
    icon: DollarSign,
    value: 4,
    prefix: "от ",
    suffix: " млн ₽",
    label: "Оборот в месяц",
  },
  {
    icon: Calendar,
    value: 9,
    prefix: "от ",
    suffix: " мес",
    label: "Окупаемость",
  },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-top bg-no-repeat"
          style={{
            backgroundImage: `url('/hero-phobo.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Франшиза сети кафе
            <br />
            <span className="text-red-500">PhởBò</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-12"
        >
          Откройте своё успешное кафе вьетнамской кухни с проверенной бизнес-моделью и поддержкой на каждом этапе
        </motion.p>

        {/* Metrics Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 max-w-4xl mx-auto mb-12"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group bg-white/20 backdrop-blur-lg rounded-2xl p-4 sm:p-8 border border-white/30 hover:border-forest/50 hover:bg-white/30 transition-all duration-300"
            >
              <metric.icon className="w-8 h-8 sm:w-12 sm:h-12 text-forest-light mx-auto mb-2 sm:mb-4 stroke-[1.5]" />
              <div className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">
                {metric.prefix}<AnimatedCounter end={metric.value} suffix={metric.suffix} />
              </div>
              <p className="text-sm sm:text-base font-medium text-white/80">{metric.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-forest hover:bg-forest-dark text-white text-lg px-8 py-6 rounded-xl gap-2 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            <a href="/presentation.pdf" download>
              <Download className="w-5 h-5" />
              Скачать презентацию
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-2 border-red-500 text-white hover:bg-red-500 text-lg px-8 py-6 rounded-xl gap-2 transition-all hover:scale-105 bg-transparent"
          >
            <a href="/#contact">
              Оставить заявку
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
