"use client"

import { motion } from "framer-motion"
import { Award, Users, Truck, Headphones, Target, Package } from "lucide-react"
import { SectionHeader } from "@/components/section-header"

const advantages = [
  {
    icon: Award,
    title: "Репутация бренда",
    description: "Доступ в лучшие ТЦ и проверенная репутация с 2006 года",
  },
  {
    icon: Target,
    title: "Маркетинговая программа",
    description: "База гостей и программа лояльности с первого дня",
  },
  {
    icon: Users,
    title: "Обучение персонала",
    description: "Обучаем ваш персонал на уже работающих точках",
  },
  {
    icon: Package,
    title: "Собственное производство",
    description: "Система закупок и логистики от проверенных поставщиков",
  },
  {
    icon: Headphones,
    title: "Команда запуска",
    description: "Полная поддержка на этапе открытия и запуска",
  },
  {
    icon: Truck,
    title: "Помощь в закупке оборудования",
    description: "Подбор и поставка оборудования от проверенных поставщиков",
  },
]

export function AdvantagesSection() {
  return (
    <section
      id="advantages"
      className="py-24 lg:py-32 bg-gradient-to-br from-forest via-forest-dark to-forest relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="ПРЕИМУЩЕСТВА"
          title="Что вы получаете с франшизой"
          subtitle="Полная поддержка на каждом этапе развития вашего бизнеса"
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6 group-hover:bg-white/30 transition-colors">
                <advantage.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{advantage.title}</h3>
              <p className="text-white/80 leading-relaxed">{advantage.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
