"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Download, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/#concept", label: "Концепция" },
  { href: "/#network", label: "Сеть" },
  { href: "/#formats", label: "Форматы" },
  { href: "/#menu", label: "Меню" },
  { href: "/#advantages", label: "Преимущества" },
  { href: "/#steps", label: "Этапы" },
  { href: "/#contact", label: "Контакты" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section
      const sections = navLinks.map((link) => link.href.split('#')[1])
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          "bg-white shadow-md border-b border-forest/10",
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 lg:h-20">
            {/* Logo */}
            <motion.a
              href="/"
              aria-label="PhoBo — Главная страница"
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src="/images/phobo-logo.png"
                alt="PhoBo — франшиза вьетнамской кухни"
                width={400}
                height={144}
                className="h-9 lg:h-12 w-auto"
              />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-[15px] font-medium transition-colors duration-300",
                    "text-muted-foreground hover:text-forest",
                    activeSection === link.href.split('#')[1] && "text-forest",
                  )}
                >
                  {link.label}
                  {activeSection === link.href.split('#')[1] && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-forest"
                    />
                  )}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button asChild variant="default" className="bg-forest hover:bg-forest-dark text-white gap-2">
                <a href="/Франшиза PhoBo от 04.06.2025 (2).pdf" download>
                  <Download className="w-4 h-4" />
                  Скачать презентацию
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white gap-2 bg-transparent"
              >
                <a href="/#contact">
                  Оставить заявку
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Открыть меню"
              aria-expanded={isMobileMenuOpen}
              className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
            >
              <Menu className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm bg-white z-50 lg:hidden shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-border/50">
                <img
                  src="/images/phobo-logo.png"
                  alt="PhoBo"
                  width={400}
                  height={144}
                  className="h-8 w-auto"
                />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Закрыть меню"
                  className="p-2 -mr-2 rounded-lg hover:bg-muted transition-colors"
                >
                  <X className="w-5 h-5 text-foreground" aria-hidden="true" />
                </button>
              </div>

              {/* Nav links */}
              <div className="flex-1 overflow-y-auto px-5 py-4">
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.href.split('#')[1]
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "py-3 px-3 rounded-xl text-[15px] font-medium transition-colors",
                          isActive
                            ? "bg-forest/10 text-forest"
                            : "text-foreground hover:bg-muted",
                        )}
                      >
                        {link.label}
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* CTA buttons */}
              <div className="px-5 py-4 border-t border-border/50 flex flex-col gap-2.5">
                <Button asChild className="w-full bg-forest hover:bg-forest-dark text-white gap-2">
                  <a href="/Франшиза PhoBo от 04.06.2025 (2).pdf" download>
                    <Download className="w-4 h-4" />
                    Презентация
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white gap-2 bg-transparent"
                >
                  <a href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Оставить заявку
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
