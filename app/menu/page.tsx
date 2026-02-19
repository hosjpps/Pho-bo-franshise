"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ImageIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const menuCategories = [
  {
    name: "Супы",
    items: [
      { name: "Фо Бо", price: "640₽", description: "Суп Фо с говядиной, лапшой и зеленью", weight: "800 мл", image: "/Фо Бо.jpg" },
      { name: "Фо Тай Лан", price: "690₽", description: "Суп Фо с обжаренной говядиной, лапшой и зеленью", weight: "800 мл", image: "/Фо Тай Лан.jpg" },
      { name: "Фо Га", price: "640₽", description: "Суп Фо с курицей, лапшой и зеленью", weight: "800 мл", image: "/Фо Га.jpg" },
      { name: "Бун Том", price: "750₽", description: "Суп с креветками, лапшой и зеленью в тайском стиле", weight: "550/20 г", image: "/Бун Том.jpg" },
      { name: "Том Ям", price: "790₽", description: "Тайский суп с морепродуктами. Подаётся с рисом", weight: "480/130 г", image: "/Том Ям.jpg" },
      { name: "Фо Шот Ванг", price: "690₽", description: "Суп Фо с говядиной, тушеной в красном вине и специях, с лапшой и зеленью", weight: "800 мл", image: "/Фо Шот Ванг.jpg" },
    ],
  },
  {
    name: "Закуски и салаты",
    items: [
      { name: "Бань Куон", price: "590₽", description: "Паровые блинчики с древесными грибами, с луком и морковью. На выбор: креветки / свинина", weight: "200/30 г", image: "/Бань Куон.jpg" },
      { name: "Нэм Га", price: "550₽", description: "Обжаренные блинчики с овощами. На выбор: курица (3 шт, 150/30 г) / морепродукты со свининой (4 шт, 180/30 г)", weight: "", image: "/Нэм.jpg" },
      { name: "Бань Бао", price: "260₽", description: "Паровая булочка с курицей и сыром", weight: "180 г", image: "/Бань Бао.jpg" },
      { name: "Гой Куон", price: "580₽", description: "Спринг-роллы с овощами и манго. На выбор: утка / креветки", weight: "190/30 г", image: "/Гой Куон.jpg" },
      { name: "Том Ньюнг", price: "730₽", description: "Креветки на гриле. Подаются с лимоном и специями", weight: "120/30 г", image: "/Том Ньюнг.jpg" },
      { name: "Том Там Бот (5 шт)", price: "550₽", description: "Креветки темпура с соусом «сладкий чили»", weight: "90/30 г", image: "/Том Там Бот (5 шт).jpg" },
      { name: "Том Там Бот (7 шт)", price: "730₽", description: "Креветки темпура с соусом «сладкий чили»", weight: "130/30 г", image: "/Том Там Бот (7 шт).jpg" },
      { name: "Фонг Том", price: "250₽", description: "Креветочные чипсы", weight: "50 г", image: "/Фонг Том.jpg" },
      { name: "Ном Вьет", price: "530₽", description: "Салат с овощами, красным луком, арахисом и кинзой. На выбор: креветки / говядина", weight: "230 г", image: "/Ном Вьет.jpg" },
    ],
  },
  {
    name: "Горячие блюда",
    items: [
      { name: "Мьен Сао", price: "от 620₽", description: "Стеклянная лапша, обжаренная с овощами, грибами, яйцом, кунжутом в соевом соусе. На выбор: морепродукты / говядина / курица / вегетарианская", weight: "300–380 г", image: "/Мьен Сао.jpg" },
      { name: "Ком Ранг", price: "от 620₽", description: "Рис, обжаренный с овощами и яйцом в соевом соусе. На выбор: морепродукты / говядина / курица / вегетарианский", weight: "290–310 г", image: "/Ком Ранг.jpg" },
      { name: "Фо Сао", price: "от 620₽", description: "Рисовая лапша, обжаренная с овощами, грибами, яйцом и кунжутом в соевом соусе. На выбор: морепродукты / говядина / курица / вегетарианская", weight: "350–390 г", image: "/Фо Сао.jpg" },
      { name: "Бун Бо Нам Бо", price: "690₽", description: "Лапша Бун с говядиной и овощами, арахисом и рыбным соусом", weight: "390 г", image: "/Бун Бо Нам Бо.jpg" },
      { name: "Га Чуа Нгот", price: "590₽", description: "Курица в кисло-сладком соусе с имбирём и чесноком. Подаётся с рисом", weight: "160/130 г", image: "/Га Чуа Нгот.jpg" },
      { name: "Вит Шот Тиеу", price: "790₽", description: "Филе утиной грудки с перечным соусом и лёгким салатом. Подаётся с рисом", weight: "170/130 г", image: "/Вит Шот Тиеу.jpg" },
      { name: "Том Ранг Тхит Лэн", price: "760₽", description: "Свинина с креветками под карамельным соусом. Подаётся с рисом", weight: "190/150 г", image: "/Том Ранг Тхит Лэн.png" },
      { name: "Лэн Ранг", price: "640₽", description: "Свинина с карамельным соусом. Подаётся с рисом", weight: "150/150 г", image: "/Лэн Ранг.jpg" },
    ],
  },
  {
    name: "Десерты",
    items: [
      { name: "Чуой Там Бот", price: "430₽", description: "Бананы темпура с карамелью, арахисом, кокосовой стружкой", weight: "170 г", image: "/Чуой Там Бот.jpg" },
      { name: "Бань Бао Ким Са", price: "240₽", description: "Паровая булочка с манговым кремом", weight: "110 г", image: "/Бань Бао Ким Са.jpg" },
    ],
  },
  {
    name: "Лимонады и шейки",
    items: [
      { name: "Манго Шейк", price: "490₽", description: "На выбор: классический / на кокосовом молоке", weight: "400 мл", image: "/шейк манго.jpg" },
      { name: "Манго-Маракуйя Шейк", price: "490₽", description: "Тропический шейк с манго и маракуйей", weight: "400 мл", image: "/Шейк манго-маракуйя .jpg" },
      { name: "Драгон Шейк", price: "490₽", description: "Шейк с драконьим фруктом", weight: "400 мл", image: "/драгон шейк (1).jpg" },
      { name: "Ньюк Чань Лео", price: "от 350₽", description: "Лимонад из маракуйи. 400 мл — 350₽, 1000 мл — 590₽", weight: "400 мл", image: "/Ньюк Чань Лео.jpg" },
      { name: "Ньюк Чань Да", price: "от 300₽", description: "Лимонад из лайма. 400 мл — 300₽, 1000 мл — 550₽", weight: "400 мл", image: "/Ньюк Чань Да.jpg" },
      { name: "Craft Лимонад", price: "от 390₽", description: "Манго-лайм, ананас-клубника, малина-лайм, маракуйя-клюква, апельсин-имбирь, мохито, пина колада. 400 мл — 390₽, 1000 мл — 790₽", weight: "400 мл", image: "/Craft Лимонад.jpg" },
    ],
  },
  {
    name: "Чай и кофе",
    items: [
      { name: "Вьетнамский чай", price: "390₽", description: "Зелёный классический, с лотосом, с жасмином, молочный улун", weight: "600 мл", image: "/Вьетнамский чай.jpg" },
      { name: "Кофе по-вьетнамски", price: "290₽", description: "Горячий / холодный", weight: "100 мл", image: "/Кофе по-вьетнамски.jpg" },
    ],
  },
  {
    name: "Напитки",
    items: [
      { name: "Вода Бонаква", price: "150₽", description: "С газом / без газа", weight: "500 мл", image: "/напитки_бонква газ.jpg" },
      { name: "Вода Черноголовка", price: "150₽", description: "С газом / без газа", weight: "500 мл", image: "/Черноголовка вода без газа 0,5 ПЭТ.jpg" },
      { name: "Сок Добрый", price: "230₽", description: "Яблоко, Апельсин", weight: "300 мл", image: "/напитки_добрый сок апельсин.jpg" },
      { name: "Газированные напитки Добрый", price: "210₽", description: "Кола классика, Кола ваниль, Кола карамель, Кола малина, Кола Zero, Апельсин, Лимон-лайм", weight: "500 мл", image: "/напитки_добрый кола.jpg" },
      { name: "Холодный чай Rich", price: "210₽", description: "Зелёный манго, Зелёный малина, Зелёный чай, Чёрный персик, Чёрный лимон", weight: "500 мл", image: "/напитки_рич лимон.jpg" },
      { name: "Лимонады Черноголовка", price: "210₽", description: "Тархун, Дюшес, Мандарин, Дикий апельсин, Кола, Кола Zero, Кола лайм-мята", weight: "500 мл", image: "/Черноголовка Кола Классик (ПЭТ, 0.5).jpg" },
      { name: "Лимонады Черноголовка 0.33", price: "210₽", description: "Дикий апельсин, Бодрый цитрус, Лайм-мята", weight: "330 мл", image: "/Черноголовка Mixes Лимон Лайм (ЖБ 0,33).jpg" },
      { name: "Вьетнамский лимонад", price: "от 210₽", description: "Личи, Кокос, Гуава, Манго, Маракуйя", weight: "330 мл", image: "/Вьетнамский лимонад.jpg" },
    ],
  },
  {
    name: "Фреши",
    items: [
      { name: "Фреш Апельсин-Маракуйя", price: "390₽", description: "Свежевыжатый сок из апельсина и маракуйи", weight: "400 мл", image: "/Сок Апельсин-Маракуйя.jpg" },
      { name: "Фреш Микс", price: "390₽", description: "Морковь, сельдерей, яблоко", weight: "400 мл", image: "/Микс соков.jpg" },
      { name: "Фреш Ананас", price: "390₽", description: "Свежевыжатый ананасовый сок", weight: "400 мл", image: "/ананасовый фреш.jpg" },
      { name: "Фреш Апельсин", price: "390₽", description: "Свежевыжатый апельсиновый сок", weight: "400 мл", image: "/сок апельсин.jpg" },
    ],
  },
  {
    name: "Bubble Tea",
    items: [
      { name: "Улун", price: "490₽", description: "Bubble Tea на основе улуна", weight: "400 мл", image: "/улун.jpg" },
      { name: "Таро", price: "590₽", description: "Bubble Tea с таро", weight: "400 мл", image: "/таро.jpg" },
      { name: "Карамельный", price: "550₽", description: "Bubble Tea с карамельным сиропом", weight: "400 мл", image: "/карамельный.jpg" },
      { name: "Тайская Матча", price: "490₽", description: "Bubble Tea с тайской матчей", weight: "400 мл", image: "/матча.jpg" },
      { name: "Каштан", price: "550₽", description: "Bubble Tea с каштановым сиропом и сырной пенкой", weight: "400 мл", image: "/каштан.jpg" },
    ],
  },
  {
    name: "Fruit Tea",
    items: [
      { name: "Гуанабана", price: "490₽", description: "Фруктовый чай с гуанабаной", weight: "400 мл", image: "/гуанабана.jpg" },
      { name: "Личи", price: "550₽", description: "Фруктовый чай с личи", weight: "400 мл", image: "/личи.jpg" },
      { name: "Гуава", price: "490₽", description: "Фруктовый чай с гуавой", weight: "400 мл", image: "/гуава.jpg" },
      { name: "Фруктовый Микс", price: "490₽", description: "Фруктовый чай с ассортиментом тропических фруктов", weight: "400 мл", image: "/фрукт микс.jpg" },
      { name: "Карамбола", price: "550₽", description: "Фруктовый чай с карамболой", weight: "400 мл", image: "/Карамбола.jpg" },
    ],
  },
]

function DishImage({ src, alt }: { src: string; alt: string }) {
  if (!src) {
    return (
      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
        <ImageIcon className="w-9 h-9 text-muted-foreground/40" />
      </div>
    )
  }
  return (
    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden flex-shrink-0 relative bg-muted">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="112px"
      />
    </div>
  )
}

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-b from-forest to-forest-dark text-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="text-4xl sm:text-5xl font-extrabold mb-4"
          >
            Полное меню PhoBo
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/80"
          >
            Аутентичная вьетнамская кухня с традиционными рецептами
          </motion.p>
        </div>
      </div>

      {/* Menu Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="space-y-14">
          {menuCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.05 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                {category.name}
              </h2>
              <div className="h-px bg-border mb-8" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex gap-3 border border-border rounded-2xl p-2.5 sm:p-3"
                  >
                    <DishImage src={item.image} alt={item.name} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3 mb-1">
                        <h3 className="text-lg font-bold text-foreground">{item.name}</h3>
                        <span className="text-lg font-bold text-forest whitespace-nowrap">{item.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{item.description}</p>
                      {item.weight && (
                        <p className="text-xs text-muted-foreground/70">{item.weight}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-muted/50 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground text-sm">
            Цены могут отличаться в зависимости от региона. Актуальное меню уточняйте в кафе.
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
