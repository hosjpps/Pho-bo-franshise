"use client"

import { motion } from "framer-motion"
import { FileText, MapPin, FolderOpen, Hammer, GraduationCap, Rocket } from "lucide-react"
import { SectionHeader } from "@/components/section-header"

const steps = [
  {
    icon: FileText,
    title: "Подписание договора",
    description: "Заключение договора и согласование условий",
  },
  {
    icon: MapPin,
    title: "Аренда помещения",
    description: "Подбор и аренда подходящего помещения",
  },
  {
    icon: FolderOpen,
    title: "Проектная документация",
    description: "Подготовка проекта и дизайна",
  },
  {
    icon: Hammer,
    title: "Строительно-монтажные работы",
    description: "Ремонт и установка оборудования",
  },
  {
    icon: GraduationCap,
    title: "Обучение сотрудников",
    description: "Подготовка команды к открытию",
  },
  {
    icon: Rocket,
    title: "Торжественное открытие",
    description: "Запуск кафе и первые гости",
  },
]

export function StepsSection() {
  return (
    <section id="steps" className="py-24 lg:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="ЭТАПЫ ЗАПУСКА"
          title="Путь к открытию"
          subtitle="Чёткий план запуска вашего кафе за 3 месяца"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-forest via-forest-light to-forest" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative lg:grid lg:grid-cols-2 lg:gap-8"
                >
                  {/* Timeline dot */}
                  <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className="w-12 h-12 rounded-full bg-forest flex items-center justify-center text-white font-bold shadow-lg shadow-forest/30"
                    >
                      {index + 1}
                    </motion.div>
                  </div>

                  {/* Content - alternating sides */}
                  {isEven ? (
                    <>
                      <div className="lg:pr-16">
                        <StepCard step={step} index={index} isEven={isEven} />
                      </div>
                      <div className="hidden lg:block" />
                    </>
                  ) : (
                    <>
                      <div className="hidden lg:block" />
                      <div className="lg:pl-16">
                        <StepCard step={step} index={index} isEven={isEven} />
                      </div>
                    </>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function StepCard({ step, index, isEven }: { step: (typeof steps)[0]; index: number; isEven: boolean }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-background rounded-2xl p-6 shadow-lg border border-forest/10 hover:border-forest/30 transition-all"
    >
      <div className={`flex items-center gap-4 mb-4 ${isEven ? "" : "lg:flex-row-reverse"}`}>
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-forest to-forest-light flex items-center justify-center flex-shrink-0">
          <step.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
        </div>
        <div className="lg:hidden w-10 h-10 rounded-full bg-forest flex items-center justify-center text-white font-bold text-sm">
          {index + 1}
        </div>

      </div>
      <h3 className={`text-xl font-semibold text-foreground mb-2 ${isEven ? "" : "lg:text-right"}`}>{step.title}</h3>
      <p className={`text-muted-foreground ${isEven ? "" : "lg:text-right"}`}>{step.description}</p>
    </motion.div>
  )
}
