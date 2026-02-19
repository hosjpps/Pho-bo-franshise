"use client"

import { motion } from "framer-motion"

interface SectionHeaderProps {
  badge: string
  title: string
  subtitle?: string
  light?: boolean
}

export function SectionHeader({ badge, title, subtitle, light = false }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <span
        className={`inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full mb-4 ${
          light ? "bg-white/10 text-white/90" : "bg-forest/10 text-forest"
        }`}
      >
        {badge}
      </span>
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${light ? "text-white" : "text-foreground"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl mx-auto ${light ? "text-white/80" : "text-muted-foreground"}`}>{subtitle}</p>
      )}
    </motion.div>
  )
}
