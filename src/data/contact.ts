import type { ContactDetail } from "@/types/content";

export const primaryContactEmail: string | null = "es@trilogytradingllc.com";
export const primaryLinkedInUrl: string | null = "https://www.linkedin.com/in/enad-abbsc/";

export const hasLiveInquiryInbox = Boolean(primaryContactEmail);

export const contactDetails: ContactDetail[] = [
  {
    label: "Email",
    value: primaryContactEmail ?? "Business email pending approval",
    href: primaryContactEmail ? `mailto:${primaryContactEmail}` : undefined,
    note: primaryContactEmail
      ? "Direct email route"
      : "Add an approved business email to activate direct inquiries.",
  },
  {
    label: "LinkedIn",
    value: primaryLinkedInUrl ?? "LinkedIn profile pending approved URL",
    href: primaryLinkedInUrl ?? undefined,
    note: primaryLinkedInUrl
      ? "Direct LinkedIn route"
      : "Add an approved LinkedIn URL before showing this as a contact path.",
  },
  {
    label: "Location",
    value: "Amman, Jordan",
    note: "Timezone and market context can be clarified during the inquiry.",
  },
];

export const contactCta =
  "Use this page to outline a project inquiry, collaboration request, or advisory conversation around performance marketing, tracking, reporting, automation, and wider growth systems.";

export const inquiryPathways = [
  "Project, audit, or implementation support",
  "Collaboration with in-house, agency, or cross-functional teams",
  "Advisory conversations around paid media, measurement, dashboards, or automation",
];

export const inquiryChecklist = [
  "The main bottleneck, decision, or growth question that needs clarity",
  "The platforms, tools, or data sources currently involved",
  "The kind of support, timeline, or next step you want to explore",
];
