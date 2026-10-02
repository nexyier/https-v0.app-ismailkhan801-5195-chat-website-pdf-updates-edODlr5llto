import { notFound } from "next/navigation"
import HomePage from "@/app/page"
import { VERIFY } from "@/lib/site-config"

export const dynamic = "force-dynamic"

export default async function VerifyLicensePage({
  searchParams,
}: {
  searchParams: Promise<{ licno?: string | string[] }>
}) {
  const { licno } = await searchParams
  const requested = Array.isArray(licno) ? licno[0] : licno

  if (requested?.trim().toUpperCase() !== VERIFY.licenseNo.toUpperCase()) {
    notFound()
  }

  return <HomePage />
}
