import { SiteHeader } from "@/components/site-header"
import { VerifyLicense } from "@/components/verify-license"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="flex min-h-dvh flex-col bg-slate-100">
      <SiteHeader />
      <main className="flex-1">
        <VerifyLicense />
      </main>
      <SiteFooter />
    </div>
  )
}
