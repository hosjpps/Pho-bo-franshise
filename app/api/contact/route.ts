import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, phone, email, city, message } = await request.json()

    if (!name || !phone) {
      return NextResponse.json({ error: "Имя и телефон обязательны" }, { status: 400 })
    }

    // Bitrix24 — создаёт лид, робот сам шлёт уведомление в Telegram
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
            UF_CRM_GORODOTKRITIY: city || undefined,
            COMMENTS: message || undefined,
            SOURCE_ID: "20",
          },
        }),
      })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Ошибка отправки" }, { status: 500 })
  }
}
