"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SectionHeader } from "@/components/section-header"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    alert("Спасибо! Мы свяжемся с вами в ближайшее время.")
  }

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url('/vietnamese-restaurant-interior-modern-design.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-forest/5 via-transparent to-red-500/5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="КОНТАКТЫ"
          title="Начните свой путь с PhoBo"
          subtitle="Заполните форму заявки и мы свяжемся с вами в течение 24 часов"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-background rounded-3xl p-8 shadow-2xl border border-forest/10"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Оставить заявку</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-foreground mb-2">Имя *</label>
                  <Input
                    id="contact-name"
                    placeholder="Ваше имя"
                    required
                    className="h-12 rounded-xl border-border focus:border-forest focus:ring-forest"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-medium text-foreground mb-2">Телефон *</label>
                  <Input
                    id="contact-phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    required
                    className="h-12 rounded-xl border-border focus:border-forest focus:ring-forest"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="email@example.com"
                  className="h-12 rounded-xl border-border focus:border-forest focus:ring-forest"
                />
              </div>
              <div>
                <label htmlFor="contact-city" className="block text-sm font-medium text-foreground mb-2">Город</label>
                <Input
                  id="contact-city"
                  placeholder="Ваш город"
                  className="h-12 rounded-xl border-border focus:border-forest focus:ring-forest"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-foreground mb-2">Сообщение</label>
                <Textarea
                  id="contact-message"
                  placeholder="Расскажите о вашем опыте и планах..."
                  rows={4}
                  className="rounded-xl border-border focus:border-forest focus:ring-forest resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full h-14 bg-forest hover:bg-forest-dark text-white text-lg rounded-xl gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Отправка..."
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Отправить заявку
                  </>
                )}
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-3">
                Нажимая на кнопку «Отправить», вы соглашаетесь с{" "}
                <a href="/privacy" className="text-forest underline hover:no-underline">
                  Политикой обработки персональных данных
                </a>
              </p>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="bg-gradient-to-br from-forest to-forest-dark rounded-3xl p-8 text-white mb-8">
              <h3 className="text-2xl font-bold mb-6">Свяжитесь с нами</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm">Телефон</p>
                    <a href="tel:+74951234567" className="text-lg font-semibold text-white hover:underline">+7 (495) 123-45-67</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm">Email</p>
                    <a href="mailto:franchise@phobo.cafe" className="text-lg font-semibold text-white hover:underline">franchise@phobo.cafe</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm">Адрес</p>
                    <p className="text-lg font-semibold">Москва, Россия</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "75", label: "Кафе" },
                { value: "20+", label: "Лет опыта" },
                { value: "46", label: "Франшиз" },
              ].map((badge) => (
                <div key={badge.label} className="text-center p-4 bg-muted/50 rounded-2xl">
                  <p className="text-2xl font-bold text-forest">{badge.value}</p>
                  <p className="text-sm text-muted-foreground">{badge.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
