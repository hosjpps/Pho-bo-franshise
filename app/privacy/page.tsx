"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
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
            Политика конфиденциальности и обработки персональных данных
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/80"
          >
            Действует с 1 января 2024 года
          </motion.p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="prose prose-neutral max-w-none space-y-10 text-foreground">

          {/* 1 */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Общие положения</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Настоящая Политика конфиденциальности и обработки персональных данных (далее — Политика)
              разработана в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных»
              и определяет порядок обработки и защиты информации о физических лицах (далее — Субъекты
              персональных данных), использующих сайт phobo.cafe/franchise (далее — Сайт).
            </p>
            <p className="text-muted-foreground leading-relaxed mb-3">
              <strong className="text-foreground">Оператор персональных данных:</strong><br />
              ООО «Ванлизингэкспозито»<br />
              ИНН: 7715336153, ОГРН: 1027739508103<br />
              Юридический адрес: г. Москва, переулок Газетный, дом 3-5, строение 1
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Использование Сайта означает безоговорочное согласие Пользователя с настоящей Политикой
              и указанными в ней условиями обработки его персональных данных. В случае несогласия
              Пользователь должен воздержаться от использования Сайта.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Категории собираемых данных</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Оператор может обрабатывать следующие персональные данные Пользователя:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Фамилия, имя, отчество</li>
              <li>Адрес электронной почты (e-mail)</li>
              <li>Номер телефона</li>
              <li>Название компании и должность (при заполнении формы на франшизу)</li>
              <li>Город проживания или предполагаемого открытия кафе</li>
              <li>
                Данные, автоматически передаваемые при посещении Сайта: IP-адрес, информация из cookies,
                информация о браузере и операционной системе, время доступа, адреса запрашиваемых страниц
              </li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Цели обработки персональных данных</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Персональные данные обрабатываются в следующих целях:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Обработка входящих запросов и заявок на приобретение франшизы</li>
              <li>Связь с Пользователем, включая направление уведомлений и информации</li>
              <li>Предоставление доступа к функциональности Сайта</li>
              <li>Улучшение качества Сайта и его содержимого</li>
              <li>Проведение статистических и иных исследований на основе обезличенных данных</li>
              <li>Направление маркетинговых и рекламных материалов (при наличии согласия)</li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Правовые основания обработки</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Обработка персональных данных осуществляется на следующих правовых основаниях:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Федеральный закон от 27.07.2006 № 152-ФЗ «О персональных данных»</li>
              <li>Федеральный закон от 27.07.2006 № 149-ФЗ «Об информации, информационных технологиях и о защите информации»</li>
              <li>Согласие Пользователя на обработку персональных данных</li>
              <li>Необходимость исполнения договора, стороной которого является Пользователь</li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Порядок и условия обработки</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Обработка персональных данных осуществляется с использованием средств автоматизации
              и без использования таких средств.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Обработка включает: сбор, запись, систематизацию, накопление, хранение, уточнение
              (обновление, изменение), извлечение, использование, передачу (предоставление, доступ),
              обезличивание, блокирование, удаление и уничтожение персональных данных.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Персональные данные хранятся не дольше, чем этого требуют цели обработки, если иной
              срок хранения не установлен федеральным законом или договором.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Права субъектов персональных данных</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Пользователь имеет право:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Получать информацию, касающуюся обработки его персональных данных</li>
              <li>Требовать уточнения, блокирования или уничтожения персональных данных, если они являются неполными, устаревшими, неточными или незаконно полученными</li>
              <li>Отозвать согласие на обработку персональных данных</li>
              <li>Требовать прекращения обработки персональных данных и их удаления</li>
              <li>Обжаловать действия или бездействие Оператора в уполномоченный орган по защите прав субъектов персональных данных (Роскомнадзор) или в судебном порядке</li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Передача данных третьим лицам</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Оператор не передаёт персональные данные третьим лицам, за исключением случаев:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Наличия явно выраженного согласия Пользователя</li>
              <li>Предусмотренных действующим законодательством Российской Федерации</li>
              <li>Необходимости использования сервисов аналитики (Яндекс.Метрика) для улучшения работы Сайта — в обезличенном виде</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Оператор не несёт ответственности за действия третьих лиц, получивших доступ к данным
              Пользователя по вине самого Пользователя (например, передача пароля третьему лицу).
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Меры по защите персональных данных</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Оператор принимает необходимые и достаточные организационные и технические меры
              для защиты персональных данных от неправомерного или случайного доступа, уничтожения,
              изменения, блокирования, копирования, распространения, а также от иных неправомерных
              действий с ними третьих лиц. В частности:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Использование защищённого протокола HTTPS для передачи данных</li>
              <li>Ограничение доступа к персональным данным уполномоченными сотрудниками</li>
              <li>Регулярный мониторинг и обновление систем безопасности</li>
            </ul>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Порядок отзыва согласия</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Пользователь может отозвать своё согласие на обработку персональных данных, направив
              соответствующее письменное уведомление Оператору по электронной почте:
            </p>
            <p className="text-muted-foreground leading-relaxed mb-3">
              <strong className="text-foreground">Email:</strong>{" "}
              <a href="mailto:info@vietcafe.ru" className="text-forest hover:text-forest-dark underline">
                info@vietcafe.ru
              </a>
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Тема письма: «Отзыв согласия на обработку персональных данных».
              Оператор обязан прекратить обработку и уничтожить персональные данные в течение 30 дней
              с момента получения уведомления.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Использование cookie-файлов</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Сайт использует cookie-файлы для обеспечения корректной работы и улучшения
              пользовательского опыта. Подробная информация об используемых cookie-файлах представлена в{" "}
              <Link href="/cookies" className="text-forest hover:text-forest-dark underline">
                Политике использования cookie-файлов
              </Link>.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Контактная информация</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              По вопросам, связанным с обработкой персональных данных, Пользователь может обратиться к Оператору:
            </p>
            <ul className="list-none space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Оператор:</strong> ООО «Ванлизингэкспозито»</li>
              <li><strong className="text-foreground">Адрес:</strong> г. Москва, переулок Газетный, дом 3-5, строение 1</li>
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

          {/* 12 */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">12. Заключительные положения</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Оператор вправе вносить изменения в настоящую Политику. Новая редакция Политики
              вступает в силу с момента её размещения на Сайте, если иное не предусмотрено
              новой редакцией.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Действующая редакция Политики доступна на Сайте по адресу:{" "}
              <Link href="/privacy" className="text-forest hover:text-forest-dark underline">
                phobo.cafe/franchise/privacy
              </Link>
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
