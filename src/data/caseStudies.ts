import type { CaseStudy } from "@/types/content";
import { medicalAestheticsCaseStudy } from "@/data/medicalAestheticsCaseStudy";

export const caseStudies: CaseStudy[] = [
  {
    slug: medicalAestheticsCaseStudy.slug,
    title: medicalAestheticsCaseStudy.title,
    category: "Performance Marketing",
    subCategories: medicalAestheticsCaseStudy.categories,
    clientLabel: "Medical aesthetics center",
    summary: medicalAestheticsCaseStudy.summary,
    problem: medicalAestheticsCaseStudy.challenge,
    role: medicalAestheticsCaseStudy.role,
    approach: [
      "Planned campaigns at procedure level so each service had its own audience logic, creative angle, messaging style, funnel objective, and conversion path.",
      "Structured Meta Ads activity around WhatsApp inquiries, qualified lead quality, consultation intent, and sales feedback rather than cheap lead volume alone.",
      "Built a creative system across tutorials, testimonials, UGC-style content, employee-generated content, educational videos, and trust-building medical content.",
      "Used sales feedback, pricing objections, competitive context, and demand signals to recommend which procedures should be scaled.",
    ],
    tools: ["Meta Ads", "WhatsApp", "Arabic Ad Copy", "Creative Strategy", "Lead Quality Analysis"],
    outcomeType: "$50K estimated media spend, $300K estimated revenue generated, 6x estimated ROAS, and $1.5 to $2.5 qualified interested lead cost.",
    proofPoints: [
      "Reported figures are shown as estimated or reported values only: $50K spend, $300K revenue, 6x ROAS, and $1.5 to $2.5 qualified interested lead cost.",
      "Procedure-level leads, CPL, bookings, and revenue are intentionally data-ready fields and are not presented as confirmed facts.",
      "The public version avoids exaggerated medical claims and keeps the tone educational, premium, and consultation-led.",
    ],
    confidentiality:
      "Internal sales conversations, patient data, detailed campaign screenshots, and procedure-level commercial reporting remain excluded from the public version.",
  },
  {
    slug: "tracking-audit-ecommerce",
    title: "Tracking Audit & Event Validation for E-commerce",
    category: "Tracking & Attribution",
    clientLabel: "Redacted e-commerce business",
    summary:
      "A redacted audit structure for restoring confidence in how purchase-funnel events are defined, fired, and compared across marketing and analytics systems.",
    problem:
      "Conversion and remarketing events could not be trusted consistently enough to support reporting, optimization, or troubleshooting.",
    role:
      "Led the diagnostic structure, validation logic, and implementation review across the measurement setup.",
    approach: [
      "Mapped core funnel events across on-site actions, platform pixels, and analytics destinations.",
      "Reviewed tag logic, duplicate firing risk, naming consistency, and parameter coverage.",
      "Compared platform and analytics behavior before recommending any optimization or budget decisions.",
    ],
    tools: [
      "Google Tag Manager",
      "Google Analytics 4",
      "Meta Pixel",
      "Conversions API",
      "Browser debugging tools",
    ],
    outcomeType: "Measurement confidence and clearer implementation priorities",
    proofPoints: [
      "Proof is grounded in event maps, tag reviews, and validation checklists rather than unsupported growth claims.",
      "Recommended fixes are tied to observed firing behavior, missing parameters, or inconsistent event definitions.",
      "Any commercial impact would only be published later if approved documentation confirms it.",
    ],
    confidentiality:
      "Client identity, store details, spend levels, screenshots, and raw reporting remain excluded from the public version.",
  },
  {
    slug: "attribution-mismatch-platforms",
    title: "Attribution Mismatch Between Ad Platforms and Analytics",
    category: "Measurement Diagnostics",
    clientLabel: "Redacted multi-channel acquisition program",
    summary:
      "A structured diagnostic case study for explaining why platform-reported conversions and analytics-reported conversions do not align cleanly.",
    problem:
      "Decision-makers needed a credible explanation for cross-system reporting gaps without defaulting to assumptions or inflated narratives.",
    role:
      "Owned the diagnostic framework across attribution settings, conversion definitions, and source-to-source comparison.",
    approach: [
      "Documented how each system counted conversions, attribution windows, and reporting scope.",
      "Checked tracking consistency across paid media platforms, analytics, and landing-page measurement.",
      "Separated expected model differences from actual implementation or governance issues.",
    ],
    tools: [
      "Google Analytics 4",
      "Meta Ads",
      "Google Ads",
      "Looker Studio",
      "Power BI",
    ],
    outcomeType: "Clearer reporting interpretation and stronger stakeholder alignment",
    proofPoints: [
      "The main proof comes from reconciled definitions, comparison tables, and documented causes of variance.",
      "Outputs support decision quality by clarifying what can and cannot be compared directly.",
      "No performance uplift is claimed unless a later approved version includes verified reporting evidence.",
    ],
    confidentiality:
      "Brand names, campaign data, attribution settings tied to proprietary strategy, and platform screenshots are intentionally redacted.",
  },
  {
    slug: "dashboard-automation-multichannel",
    title: "Automated Dashboard System for Multi-Channel Reporting",
    category: "BI & Reporting",
    clientLabel: "Redacted regional marketing team",
    summary:
      "A redacted case-study structure for turning fragmented reporting inputs into a more repeatable dashboard and reporting workflow.",
    problem:
      "Stakeholders were relying on manual exports and disconnected files, which slowed reporting and introduced interpretation risk.",
    role:
      "Defined the reporting logic, KPI structure, and automation priorities needed to reduce manual handling.",
    approach: [
      "Aligned reporting questions with a smaller set of decision-ready KPIs.",
      "Reviewed available data sources, freshness needs, and naming consistency before dashboard build decisions.",
      "Structured the workflow around repeatable refreshes, clearer ownership, and simpler stakeholder views.",
    ],
    tools: [
      "Power BI",
      "Google Sheets",
      "Meta Ads",
      "Google Ads",
      "Google Analytics 4",
    ],
    outcomeType: "Faster reporting workflows and better decision visibility",
    proofPoints: [
      "Credible proof comes from the dashboard logic, KPI definitions, refresh rules, and reduction of manual reporting steps.",
      "Outcome claims stay focused on reporting consistency and operational clarity unless measured time savings are documented.",
      "Any quantified efficiency gain should only be published after verified stakeholder approval.",
    ],
    confidentiality:
      "Data source credentials, reporting views, naming conventions tied to internal processes, and stakeholder materials are kept private.",
  },
];
