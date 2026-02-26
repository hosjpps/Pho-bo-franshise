import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, phone, email, city, message } = await request.json()

    if (!name || !phone) {
      return NextResponse.json({ error: "Имя и телефон обязательны" }, { status: 400 })
    }

    // Telegram
    const telegramToken = process.env.TELEGRAM_BOT_TOKEN
    const telegramChatId = process.env.TELEGRAM_CHAT_ID

    if (telegramToken && telegramChatId) {
      const text = [
        `🔔 *Новая заявка с сайта франшизы*`,
        ``,
        `👤 *Имя:* ${name}`,
        `📞 *Телефон:* ${phone}`,
        email ? `📧 *Email:* ${email}` : null,
        city ? `🏙 *Город:* ${city}` : null,
        message ? `💬 *Сообщение:* ${message}` : null,
        ``,
        `📅 ${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })}`,
      ]
        .filter(Boolean)
        .join("\n")

      await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text,
          parse_mode: "Markdown",
        }),
      })
    }

    // Bitrix24 (заполнить BITRIX_WEBHOOK_URL после деплоя)
    const bitrixWebhook = process.env.BITRIX_WEBHOOK_URL

    if (bitrixWebhook) {
      await fetch(`${bitrixWebhook}/crm.lead.add.json`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fields: {
            TITLE: `Заявка с сайта: ${name}`,
            NAME: name,
            PHONE: [{ VALUE: phone, VALUE_TYPE: "WORK" }],
            EMAIL: email ? [{ VALUE: email, VALUE_TYPE: "WORK" }] : undefined,
            ADDRESS_CITY: city || undefined,
            COMMENTS: message || undefined,
            SOURCE_ID: "WEB",
          },
        }),
      })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Ошибка отправки" }, { status: 500 })
  }
}
