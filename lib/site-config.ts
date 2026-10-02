// ============================================================================
// EDITABLE CONFIGURATION
// Everything you are likely to change lives in this file.
// ============================================================================

// --- HEADER TEXT ------------------------------------------------------------
export const SITE = {
  title: "Food Safety and Drug Control Commissionerate",
  subtitle: "Government of Rajasthan",
  emblem: "/emblem.jpg",
}

// --- PAGE HEADINGS ----------------------------------------------------------
export const VERIFY = {
  licenseNo: "DRUG/2025-26/153281",
  hindiTitle: "ड्रग लाइसेंस सत्यापन",
}

// --- FOOTER TEXT ------------------------------------------------------------
export const FOOTER = {
  text: "Site designed, developed & hosted by Department of Information Technology & Communication, Govt. of Rajasthan.",
}

// --- LICENSE TABLE DATA -----------------------------------------------------
// Add / edit rows here. Each row opens only its own `pdfUrl`.
export type License = {
  slNo: number
  applicationId: string
  establishmentName: string
  licenseType: string
  status: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "EXPIRED"
  pdfUrl: string
}

export const LICENSES: License[] = [
  {
    slNo: 1,
    applicationId: "DRGAPP/2025-26/77631",
    establishmentName: "M/S A K ENTERPRISES",
    licenseType: "WHOLESALE",
    status: "ACTIVE",
    pdfUrl: "/20.pdf",
  },
  {
    slNo: 2,
    applicationId: "DRGAPP/2025-26/77631",
    establishmentName: "M/S A K ENTERPRISES",
    licenseType: "WHOLESALE",
    status: "ACTIVE",
    pdfUrl: "/form_21.pdf",
  },
]
