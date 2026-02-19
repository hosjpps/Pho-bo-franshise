"use client"

import { motion } from "framer-motion"
import { Store, Soup, Leaf, BadgeCheck } from "lucide-react"
import { SectionHeader } from "@/components/section-header"

const concepts = [
  {
    icon: Store,
    title: "Вьетнамский стрит-фуд",
    description:
      "Непринужденная атмосфера небольшого уличного кафе, которое можно легко представить на узких улочках Ханоя",
    image: "/images/concept/street-food.jpg",
  },
  {
    icon: Soup,
    title: "Главное блюдо",
    description: "Легендарный национальный суп Фо Бо – визитная карточка Вьетнама во всем мире",
    image: "/images/concept/main-dish.jpg",
  },
  {
    icon: Leaf,
    title: "Полезная кухня",
    description: "По праву считается одной из самых полезных в мире. Традиционные блюда по классическим рецептам",
    image: "/images/concept/healthy-cuisine.jpg",
  },
  {
    icon: BadgeCheck,
    title: "Качественное сырье",
    description: "Свежие и качественные продукты от проверенных поставщиков. Оригинальные ингредиенты",
    image: "/images/concept/quality-ingredients.jpg",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export function ConceptSection() {
  return (
    <section id="concept" className="py-24 lg:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="О БРЕНДЕ"
          title="Концепция бренда"
          subtitle="Вьетнамская кухня с 20-летним опытом и современным подходом"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {concepts.map((concept) => (
            <motion.div
              key={concept.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative bg-background rounded-3xl overflow-hidden border-2 border-transparent hover:border-forest shadow-sm hover:shadow-xl transition-all duration-400"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-cover transition-transform duration-500 group-hover:scale-110 ${concept.imagePosition === "top" ? "bg-top" : "bg-center"}`}
                  style={{ backgroundImage: `url('${concept.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 pt-4">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-forest to-forest-light mb-4 -mt-10 relative z-10 shadow-lg">
                  <concept.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{concept.title}</h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed">{concept.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
