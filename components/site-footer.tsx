import { FOOTER } from "@/lib/site-config"

export function SiteFooter() {
  return (
    <footer id="about" className="mt-auto bg-[#2b82cf] text-white">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
        <p className="text-center text-xs leading-relaxed text-blue-100 sm:text-sm">{FOOTER.text}</p>
        <div className="mt-4 flex items-center justify-center gap-6 text-sm">
          <a href="#about" className="text-blue-200 underline-offset-4 transition-colors hover:text-white hover:underline">
            About
          </a>
          <span aria-hidden className="text-white/25">
            |
          </span>
          <a
            href="#disclaimer"
            className="text-blue-200 underline-offset-4 transition-colors hover:text-white hover:underline"
          >
            Disclaimer
          </a>
        </div>
      </div>
    </footer>
  )
}
