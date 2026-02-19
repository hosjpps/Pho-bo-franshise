"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function OfferPage() {
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
            Договор оферты
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/80"
          >
            Условия предоставления услуг
          </motion.p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="prose prose-neutral max-w-none space-y-10 text-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Общие положения</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Настоящий документ является публичной офертой ООО «Ванлизингэкспозито»
              (ИНН: 7715336153, ОГРН: 1027739508103), именуемого в дальнейшем «Исполнитель»,
              адресованной любому физическому или юридическому лицу, именуемому в дальнейшем
              «Заказчик», на заключение договора на условиях, изложенных ниже.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-3">
              В соответствии с пунктом 2 статьи 437 Гражданского кодекса Российской Федерации
              данный документ является публичной офертой. Полным и безоговорочным акцептом
              настоящей оферты является отправка заявки через форму обратной связи на сайте
              phobo.cafe/franchise.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Предмет договора</h2>
            <p className="text-muted-foreground leading-relaxed">
              Исполнитель обязуется предоставить Заказчику информационные и консультационные
              услуги в области франчайзинга сети кафе вьетнамской кухни PhoBo, а Заказчик
              обязуется принять и оплатить эти услуги в порядке и на условиях, предусмотренных
              настоящей офертой и отдельными соглашениями.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Контактная информация</h2>
            <ul className="list-none space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Организация:</strong> ООО «Ванлизингэкспозито»</li>
              <li><strong className="text-foreground">Адрес:</strong> г. Москва, переулок Газетный, дом 3-5, строение 1</li>
              <li>
                <strong className="text-foreground">Email:</strong>{" "}
                <a href="mailto:franch@phobo.cafe" className="text-forest hover:text-forest-dark underline">franch@phobo.cafe</a>
              </li>
              <li>
                <strong className="text-foreground">Телефон:</strong>{" "}
                <a href="tel:+74952151199" className="text-forest hover:text-forest-dark underline">+7 (495) 215-11-99</a>
              </li>
            </ul>
          </section>

          <section className="border border-border rounded-2xl p-6 bg-muted/30">
            <p className="text-muted-foreground leading-relaxed text-center">
              Полный текст договора оферты предоставляется по запросу.
              Для получения подробной информации свяжитесь с нами по телефону{" "}
              <a href="tel:+74952151199" className="text-forest hover:text-forest-dark underline font-semibold">
                +7 (495) 215-11-99
              </a>{" "}
              или по электронной почте{" "}
              <a href="mailto:franch@phobo.cafe" className="text-forest hover:text-forest-dark underline font-semibold">
                franch@phobo.cafe
              </a>.
            </p>
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
