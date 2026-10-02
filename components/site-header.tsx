"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { SITE } from "@/lib/site-config"

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Verify License", href: "#verify" },
  { label: "License Details", href: "#license-details" },
  { label: "About", href: "#about" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-[#2b82cf] text-white">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4">
        <img
          src={SITE.emblem || "/placeholder.svg"}
          alt="Official emblem of the Food Safety and Drug Control Commissionerate, Rajasthan"
          className="h-14 w-14 shrink-0 rounded-full border-2 border-white/80 bg-white object-cover sm:h-16 sm:w-16"
        />

        <div className="min-w-0 flex-1">
          <h1 className="text-balance text-base font-bold leading-tight sm:text-xl md:text-2xl">{SITE.title}</h1>
          <p className="mt-0.5 text-xs text-blue-50 sm:text-sm md:text-base">{SITE.subtitle}</p>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="shrink-0 rounded-md p-2 transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav aria-label="Main navigation" className="border-t border-white/15 bg-[#2069ab]">
          <ul className="mx-auto max-w-6xl px-4 py-2 sm:px-6">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2.5 text-sm text-blue-100 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
