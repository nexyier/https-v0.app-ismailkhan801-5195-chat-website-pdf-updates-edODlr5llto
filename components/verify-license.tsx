"use client"

import { FileDown } from "lucide-react"
import { VERIFY, LICENSES, type License } from "@/lib/site-config"

export function VerifyLicense() {
  // Opens the row's own PDF directly in the browser (new tab). No intermediate
  // viewer, and a single call guarantees only one PDF is ever opened.
  function openPdf(license: License) {
    window.open(license.pdfUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
        {/* Title */}
        <div id="verify" className="text-center">
          <h2 className="text-balance text-lg font-bold text-[#2b82cf] sm:text-2xl">
            {`Verify License (License No: ${VERIFY.licenseNo})`}
          </h2>
          <p className="mt-1 text-base text-slate-600 sm:text-lg">{VERIFY.hindiTitle}</p>
        </div>

        {/* License Details heading pill */}
        <div id="license-details" className="mt-8 scroll-mt-24">
          <div className="inline-block rounded-full bg-[#2b82cf] px-5 py-2 text-sm font-semibold text-white sm:text-base">
            License Details / लाइसेंस विवरण
          </div>
        </div>

        {/* Table (scrolls horizontally on small screens) */}
        <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-[#2b82cf] text-white">
                <Th>Sl. No.</Th>
                <Th>Application ID</Th>
                <Th>Establishment Name</Th>
                <Th>License Type</Th>
                <Th>Status</Th>
                <Th className="text-center">Action</Th>
              </tr>
            </thead>
            <tbody>
              {LICENSES.map((l, i) => (
                <tr key={`${l.slNo}-${l.applicationId}`} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <Td>{l.slNo}</Td>
                  <Td className="font-medium text-slate-800">{l.applicationId}</Td>
                  <Td>{l.establishmentName}</Td>
                  <Td>{l.licenseType}</Td>
                  <Td>
                    <StatusBadge status={l.status} />
                  </Td>
                  <Td className="text-center">
                    <button
                      type="button"
                      onClick={() => openPdf(l)}
                      className="inline-flex items-center gap-1.5 rounded-md bg-[#2b82cf] px-3.5 py-1.5 text-xs font-medium text-white transition-colors hover:bg-[#2069ab] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2b82cf]/40 sm:text-sm"
                    >
                      <FileDown className="h-4 w-4" />
                      Download
                    </button>
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

function Th({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <th className={`whitespace-nowrap px-4 py-3 text-xs font-semibold uppercase tracking-wide sm:text-sm ${className}`}>{children}</th>
}

function Td({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <td className={`whitespace-nowrap border-t border-slate-200 px-4 py-3 text-slate-700 ${className}`}>{children}</td>
}

function StatusBadge({ status }: { status: License["status"] }) {
  const styles: Record<License["status"], string> = {
    ACTIVE: "bg-green-100 text-green-800 ring-green-600/20",
    INACTIVE: "bg-slate-100 text-slate-700 ring-slate-500/20",
    SUSPENDED: "bg-amber-100 text-amber-800 ring-amber-600/20",
    EXPIRED: "bg-red-100 text-red-800 ring-red-600/20",
  }
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${styles[status]}`}>
      {status}
    </span>
  )
}
