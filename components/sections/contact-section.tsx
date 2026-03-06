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
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem("contact-name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("contact-phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("contact-email") as HTMLInputElement).value,
      city: (form.elements.namedItem("contact-city") as HTMLInputElement).value,
      message: (form.elements.namedItem("contact-message") as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setIsSuccess(true)
        form.reset()
        if (typeof window !== "undefined" && typeof window.ym === "function") {
          window.ym(107072733, "reachGoal", "form_submit", { city: data.city })
        }
      } else {
        alert("Произошла ошибка. Попробуйте ещё раз или позвоните нам.")
      }
    } catch {
      alert("Произошла ошибка. Попробуйте ещё раз или позвоните нам.")
    } finally {
      setIsSubmitting(false)
    }
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
              {isSuccess ? (
                <div className="w-full h-14 flex items-center justify-center bg-green-600 text-white text-lg rounded-xl font-semibold">
                  Заявка отправлена! Мы скоро свяжемся с вами.
                </div>
              ) : (
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
              )}
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
                    <a href="tel:+74952151199" className="text-lg font-semibold text-white hover:underline" onClick={() => typeof window !== "undefined" && typeof window.ym === "function" && window.ym(107072733, "reachGoal", "phone_click")}>+7 (495) 215-11-99</a>
                    <p className="text-white/60 text-xs mt-0.5">(добавочный номер 2)</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm">Email</p>
                    <a href="mailto:franch@phobo.cafe" className="text-lg font-semibold text-white hover:underline" onClick={() => typeof window !== "undefined" && typeof window.ym === "function" && window.ym(107072733, "reachGoal", "email_click")}>franch@phobo.cafe</a>
                  </div>
                </div>
                <a
                  href="https://t.me/+79255644234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-3.5 rounded-xl bg-white/20 hover:bg-white/30 transition-colors text-white font-semibold"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  Написать в Telegram
                </a>
              </div>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "76", label: "Кафе" },
                { value: "20+", label: "Лет опыта" },
                { value: "14", label: "Франшиз" },
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
