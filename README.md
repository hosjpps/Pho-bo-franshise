# PhoBo Franchise — Сайт франшизы

Лендинг франшизы сети вьетнамской кухни PhoBo.

**Production:** [franchise.phobo.cafe](https://franchise.phobo.cafe)

## Стек

- Next.js 16 (App Router, Turbopack)
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- shadcn/ui

## Структура

```
app/              — Страницы и API-роуты
components/       — UI-компоненты и секции сайта
public/images/    — Изображения (форматы, партнёры, иконки)
```

## Секции сайта

- **Hero** — главный экран с ключевыми цифрами
- **Концепция** — о бренде PhoBo
- **Сеть** — география присутствия
- **Форматы** — фудкорт/фудхолл и стрит-ритейл с каруселями фото
- **Меню** — позиции меню
- **Преимущества** — что даёт франшиза
- **Результаты франчайзи** — карточки партнёров с фото, выручкой и видео-отзывами
- **Отзывы гостей** — рейтинги на платформах и карточки отзывов
- **Этапы запуска** — шаги открытия точки
- **Контакты** — форма заявки, телефон, email, Telegram

## Разработка

```bash
npm install
npm run dev
```

Сайт доступен на `http://localhost:3000`

## Деплой

Сервер: Ubuntu + nginx + PM2

```bash
git pull origin main
npm run build
pm2 restart franchise
```
