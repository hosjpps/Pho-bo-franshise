"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

const COOKIE_CONSENT_KEY = "phobo_cookie_consent"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!consent) {
      setVisible(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted")
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
        >
          <div className="max-w-4xl mx-auto bg-white border border-border rounded-2xl shadow-xl p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-sm text-muted-foreground flex-1">
              Мы используем cookie-файлы для улучшения работы сайта и анализа трафика.
              Продолжая использовать сайт, вы соглашаетесь с{" "}
              <Link href="/cookies" className="text-forest underline hover:text-forest-dark">
                политикой использования cookie
              </Link>{" "}
              и{" "}
              <Link href="/privacy" className="text-forest underline hover:text-forest-dark">
                политикой конфиденциальности
              </Link>.
            </p>
            <button
              onClick={accept}
              className="shrink-0 px-6 py-2.5 bg-forest text-white text-sm font-semibold rounded-full hover:bg-forest-dark transition-colors"
            >
              Принять
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
