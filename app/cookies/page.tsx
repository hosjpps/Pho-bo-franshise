"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-b from-forest to-forest-dark text-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Назад к главной
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl font-extrabold mb-4"
          >
            Политика использования cookie-файлов
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/80"
          >
            Информация о том, как мы используем cookie на сайте phobo.cafe/franchise
          </motion.p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="prose prose-neutral max-w-none space-y-10 text-foreground">

          {/* 1 */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Что такое cookie-файлы</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Cookie-файлы (куки) — это небольшие текстовые файлы, которые сохраняются на вашем
              устройстве (компьютере, планшете, смартфоне) при посещении веб-сайтов. Они позволяют
              сайту запоминать ваши предпочтения, анализировать поведение пользователей и обеспечивать
              корректную работу функций сайта.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Cookie-файлы не содержат вирусов и не могут быть использованы для запуска программ
              на вашем устройстве.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Какие cookie мы используем</h2>

            <div className="space-y-6">
              <div className="border border-border rounded-2xl p-5">
                <h3 className="text-lg font-bold text-foreground mb-2">Необходимые cookie</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Обеспечивают базовую работу сайта. Без них сайт не может функционировать корректно.
                </p>
                <div className="text-xs text-muted-foreground/70">
                  Срок хранения: до закрытия браузера или до 1 года
                </div>
              </div>

              <div className="border border-border rounded-2xl p-5">
                <h3 className="text-lg font-bold text-foreground mb-2">Аналитические cookie</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Помогают нам понять, как пользователи взаимодействуют с сайтом, какие страницы
                  посещают чаще, какие функции используют. Данные собираются в обезличенном виде.
                </p>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1 mb-2">
                  <li><strong className="text-foreground">Яндекс.Метрика</strong> — сервис веб-аналитики от Яндекса</li>
                </ul>
                <div className="text-xs text-muted-foreground/70">
                  Срок хранения: до 2 лет
                </div>
              </div>

              <div className="border border-border rounded-2xl p-5">
                <h3 className="text-lg font-bold text-foreground mb-2">Функциональные cookie</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Сохраняют ваши предпочтения (например, согласие на использование cookie)
                  для более удобного взаимодействия с сайтом.
                </p>
                <div className="text-xs text-muted-foreground/70">
                  Срок хранения: до 1 года
                </div>
              </div>
            </div>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Как управлять cookie</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Вы можете управлять cookie-файлами через настройки вашего браузера. Большинство
              браузеров позволяют:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Просматривать сохранённые cookie-файлы</li>
              <li>Удалять все или отдельные cookie</li>
              <li>Блокировать cookie от определённых сайтов</li>
              <li>Блокировать все cookie</li>
              <li>Настроить уведомления при установке cookie</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Обратите внимание: отключение cookie может привести к ограничению функциональности
              сайта и ухудшению пользовательского опыта.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Настройки cookie в браузерах</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Инструкции по управлению cookie для популярных браузеров:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Google Chrome:</strong> Настройки → Конфиденциальность и безопасность → Файлы cookie</li>
              <li><strong className="text-foreground">Mozilla Firefox:</strong> Настройки → Приватность и защита → Куки и данные сайтов</li>
              <li><strong className="text-foreground">Safari:</strong> Настройки → Конфиденциальность → Управление данными веб-сайтов</li>
              <li><strong className="text-foreground">Microsoft Edge:</strong> Настройки → Конфиденциальность → Файлы cookie</li>
              <li><strong className="text-foreground">Яндекс Браузер:</strong> Настройки → Сайты → Расширенные настройки сайтов → Cookie-файлы</li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Изменения в политике</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Мы оставляем за собой право обновлять настоящую Политику использования cookie.
              Актуальная версия всегда доступна на данной странице.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Для получения дополнительной информации об обработке ваших данных ознакомьтесь
              с нашей{" "}
              <Link href="/privacy" className="text-forest hover:text-forest-dark underline">
                Политикой конфиденциальности
              </Link>.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Контакты</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Если у вас остались вопросы по использованию cookie-файлов, свяжитесь с нами:
            </p>
            <ul className="list-none space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">Email:</strong>{" "}
                <a href="mailto:info@vietcafe.ru" className="text-forest hover:text-forest-dark underline">info@vietcafe.ru</a>
              </li>
              <li>
                <strong className="text-foreground">Телефон:</strong>{" "}
                <a href="tel:+74952151199" className="text-forest hover:text-forest-dark underline">+7 (495) 215-11-99</a>
              </li>
            </ul>
          </section>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-muted/50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground text-sm">
            ООО «Ванлизингэкспозито» | ИНН 7715336153 | ОГРН 1027739508103
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-forest font-semibold mt-4 hover:text-forest-dark transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Вернуться на главную
          </Link>
        </div>
      </div>
    </main>
  )
}
