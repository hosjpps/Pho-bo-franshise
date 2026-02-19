"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { SectionHeader } from "@/components/section-header"

const menuItems = [
  {
    name: "Фо Бо",
    description: "Суп с говядиной, бульон для которого готовится по классическим рецептам 8 часов",
    image: "/Фо Бо.jpg",
    featured: true,
  },
  {
    name: "Бань Бао",
    description: "Паровые булочки с мясной начинкой по традиционному вьетнамскому рецепту",
    image: "/Бань Бао.jpg",
    featured: true,
  },
  {
    name: "Блинчики Нэмы",
    description: "Завернутые в рисовую бумагу обжаренные блинчики с различной начинкой",
    image: "/Нэм.jpg",
    featured: true,
  },
  {
    name: "Том Ям",
    description: "Популярный тайский суп с морепродуктами",
    image: "/Том Ям.jpg",
    featured: true,
  },
]

export function MenuSection() {
  return (
    <section id="menu" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="МЕНЮ"
          title="Популярные блюда"
          subtitle="Аутентичная вьетнамская кухня, которую полюбят ваши гости"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Featured Item */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="group relative h-[400px] lg:h-full lg:row-span-2 rounded-3xl overflow-hidden"
          >
            <Image
              src={menuItems[0].image}
              alt={menuItems[0].name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded-full mb-4">
                Хит продаж
              </span>
              <h3 className="text-3xl font-bold text-white mb-3">{menuItems[0].name}</h3>
              <p className="text-white/80 text-lg">{menuItems[0].description}</p>
            </div>
          </motion.div>

          {/* Other Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {menuItems.slice(1).map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group flex gap-6 bg-background rounded-2xl p-4 shadow-lg border border-forest/10 hover:border-forest/30 transition-all"
              >
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden flex-shrink-0 bg-muted relative">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                  {item.featured && (
                    <span className="absolute bottom-1.5 right-1.5 z-10 px-2 py-0.5 bg-red-600 text-white text-[10px] font-semibold rounded-full">
                      Хит продаж
                    </span>
                  )}
                </div>
                <div className="flex flex-col justify-center min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-foreground">{item.name}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View Full Menu Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <a
            href="/menu"
            className="inline-flex items-center gap-2 text-forest font-semibold text-lg hover:text-forest-dark transition-colors underline underline-offset-4"
          >
            Посмотреть всё меню
          </a>
        </motion.div>
      </div>
    </section>
  )
}
