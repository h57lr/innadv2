import type { Service } from "@/types/content";

export const services: Service[] = [
  {
    slug: "performance-marketing",
    title: "Performance Marketing & Media Buying",
    summary:
      "Paid media strategy, campaign structure, audience planning, and full-funnel performance support across major ad platforms.",
    intro:
      "A structured approach to paid media planning and optimization for brands that need clearer growth execution without inflated claims.",
    solves: [
      "Campaign structures that have become fragmented across platforms.",
      "Budget decisions being made without clear funnel logic.",
      "Scaling issues caused by weak creative testing or audience planning.",
    ],
    capabilities: [
      "Multi-market campaign planning",
      "Platform mix strategy across Meta, TikTok, Snapchat, Google, YouTube, and LinkedIn",
      "Full-funnel campaign structure reviews",
      "Audience, retargeting, and budget allocation support",
    ],
    tools: ["Meta Ads", "TikTok Ads", "Snapchat Ads", "Google Ads", "LinkedIn Ads"],
    deliverables: [
      "Channel strategy recommendations",
      "Campaign structure blueprint",
      "Testing and optimization framework",
      "Performance review summary",
    ],
  },
  {
    slug: "tracking-attribution",
    title: "Tracking Architecture & Attribution",
    summary:
      "Measurement setup, event validation, attribution troubleshooting, and cleaner cross-platform data foundations.",
    intro:
      "Tracking and attribution work focused on reducing ambiguity, improving data trust, and supporting better decision quality.",
    solves: [
      "Mismatched numbers between ad platforms and analytics tools.",
      "Unclear conversion paths caused by incomplete event setups.",
      "Tracking issues that reduce confidence in reporting and optimization.",
    ],
    capabilities: [
      "GTM and GA4 event architecture support",
      "Pixel and conversion tracking audits",
      "CAPI, deduplication, and diagnostics support",
      "MMP and app measurement alignment",
    ],
    tools: ["GTM", "GA4", "Meta Pixel", "Conversion API", "AppsFlyer"],
    deliverables: [
      "Tracking audit findings",
      "Event map or measurement framework",
      "Validation checklist",
      "Implementation priorities",
    ],
  },
  {
    slug: "bi-reporting-automation",
    title: "Business Intelligence & Reporting Automation",
    summary:
      "Decision-oriented dashboards and reporting systems that turn marketing data into usable operational visibility.",
    intro:
      "Reporting and BI support for teams that need cleaner dashboards, faster visibility, and less manual spreadsheet overhead.",
    solves: [
      "Reporting processes that are too manual or too slow.",
      "Dashboards that show numbers but do not support decisions.",
      "Multi-channel views that are difficult to reconcile.",
    ],
    capabilities: [
      "Dashboard planning and KPI alignment",
      "Looker Studio, Power BI, and spreadsheet reporting support",
      "Automated reporting workflows",
      "Budget pacing and channel performance views",
    ],
    tools: ["Looker Studio", "Power BI", "Supermetrics", "Power Query", "Excel"],
    deliverables: [
      "Dashboard structure proposal",
      "Reporting logic documentation",
      "Automation opportunities list",
      "KPI framework",
    ],
  },
  {
    slug: "workflow-automation-rpa",
    title: "Workflow Automation & RPA",
    summary:
      "Process automation support to reduce repetitive manual marketing operations and improve execution consistency.",
    intro:
      "Automation work focused on reducing avoidable manual effort and tightening operational reliability.",
    solves: [
      "Repetitive manual workflows that slow down teams.",
      "Operational errors caused by handoffs or copy/paste processes.",
      "Disconnected systems that create avoidable rework.",
    ],
    capabilities: [
      "Workflow mapping",
      "RPA and no-code automation planning",
      "Callback and process integration support",
      "Manual task reduction opportunities",
    ],
    tools: ["Power Automate", "Zapier", "IBM RPA", "Google Apps Script", "Marketo"],
    deliverables: [
      "Automation opportunity map",
      "Workflow logic outline",
      "Implementation notes",
      "Process improvement recommendations",
    ],
  },
  {
    slug: "martech-consulting",
    title: "Marketing Technology Consulting",
    summary:
      "Support for stack planning, measurement governance, platform integration logic, and operational marketing infrastructure.",
    intro:
      "Martech consulting for teams that need technical marketing clarity across systems, integrations, and measurement layers.",
    solves: [
      "Stack decisions made without clear measurement logic.",
      "Platform integrations that create operational blind spots.",
      "Unclear governance around tracking, CRM, and attribution systems.",
    ],
    capabilities: [
      "Stack planning support",
      "Platform integration reviews",
      "Lead flow and callback logic mapping",
      "Measurement governance recommendations",
    ],
    tools: ["Meta Developer", "WhatsApp Business API", "CRM flows", "GA4", "Pixels"],
    deliverables: [
      "Integration review notes",
      "Stack recommendation summary",
      "Measurement governance outline",
      "Implementation priorities",
    ],
  },
  {
    slug: "website-cro-ecommerce",
    title: "Website, CRO & E-commerce Support",
    summary:
      "Website and funnel support focused on conversion journeys, event tracking, and front-end marketing performance readiness.",
    intro:
      "A practical layer between acquisition and on-site performance for brands that need cleaner conversion journeys and better measurement support.",
    solves: [
      "Landing pages that are not aligned with campaign intent.",
      "Funnels with unclear drop-off points.",
      "E-commerce journeys lacking reliable event visibility.",
    ],
    capabilities: [
      "Landing page and funnel review",
      "CRO support and journey analysis",
      "E-commerce event tracking support",
      "Retargeting and conversion path alignment",
    ],
    tools: ["Shopify", "WordPress", "Wix", "Squarespace", "GA4"],
    deliverables: [
      "Conversion journey review",
      "Tracking observations",
      "CRO opportunity notes",
      "Funnel alignment recommendations",
    ],
  },
  {
    slug: "market-research-insights",
    title: "Market Research & Insights",
    summary:
      "Research and insight support for planning, market context, audience understanding, and competitive perspective.",
    intro:
      "Research-driven support for teams that need better market context before making channel, audience, or growth decisions.",
    solves: [
      "Planning without enough audience or category context.",
      "Weak competitor visibility in fast-moving markets.",
      "Research findings that never get translated into action.",
    ],
    capabilities: [
      "Competitor review support",
      "Audience and market insight framing",
      "Consumer research interpretation",
      "Strategic planning support",
    ],
    tools: ["NetBase", "eMarketer", "Audience research", "Category analysis"],
    deliverables: [
      "Research summary",
      "Insight themes",
      "Competitor note structure",
      "Planning recommendations",
    ],
  },
];

export const serviceSlugSet = new Set(services.map((service) => service.slug));

