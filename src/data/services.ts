import type { Service } from "@/types/content";

export const services: Service[] = [
  {
    slug: "performance-marketing",
    title: "Performance Marketing & Paid Media",
    category: "Performance Marketing",
    summary:
      "Paid media planning and optimization support for teams that need stronger channel structure, clearer budget logic, and more disciplined full-funnel execution.",
    intro:
      "Performance marketing support for brands and growth teams that want paid media to run with clearer structure, sharper testing discipline, and better alignment between spend, audiences, creative, and conversion goals.",
    focusAreas: [
      "Paid media strategy",
      "Channel mix planning",
      "Funnel structure",
      "Budget allocation",
    ],
    idealFor: [
      "Growth teams managing multiple paid channels or markets.",
      "Brands that need a clearer media plan before scaling budget or expanding activity.",
      "Teams that want campaign structure, testing, and reporting decisions to support each other.",
    ],
    solves: [
      "Campaign structures that have become fragmented across platforms or markets.",
      "Budget decisions being made without a clear funnel model or channel role definition.",
      "Scaling issues caused by weak creative testing, unclear audience logic, or inconsistent optimization routines.",
      "Healthcare and medical aesthetics campaigns that need compliant, consultation-led demand generation instead of discount-only lead volume.",
    ],
    capabilities: [
      "Multi-market campaign planning and account structure support",
      "Platform mix strategy across Meta, TikTok, Snapchat, Google, YouTube, and LinkedIn",
      "Audience, retargeting, budget allocation, and testing framework design",
      "Performance reviews focused on what needs to change operationally, not just what happened",
      "Procedure-level growth planning for medical aesthetics, healthcare lead generation, WhatsApp funnels, and paid social acquisition",
    ],
    typicalProblems: [
      "Prospecting, retargeting, and creative testing are all blended together, making learning slower.",
      "Channels are being judged in isolation without enough visibility into their role in the wider funnel.",
      "Scaling decisions are happening before tracking, landing pages, or reporting are stable enough to support them.",
    ],
    tools: ["Meta Ads", "TikTok Ads", "Snapchat Ads", "Google Ads", "LinkedIn Ads", "WhatsApp"],
    deliverables: [
      "Channel strategy and prioritization recommendations",
      "Campaign structure blueprint or review summary",
      "Testing and optimization framework",
      "Decision notes on budget allocation, audience logic, and next-step priorities",
      "Lead generation and WhatsApp funnel recommendations for consultation-led services",
    ],
    ctaDescription:
      "Useful when paid media needs a stronger operating model before the next growth push, platform expansion, or account restructure.",
    relatedSlugs: [
      "tracking-attribution",
      "website-cro-ecommerce",
      "martech-consulting",
    ],
  },
  {
    slug: "tracking-attribution",
    title: "Tracking, Attribution & Measurement Architecture",
    category: "Tracking & Attribution",
    summary:
      "Measurement setup, event validation, attribution troubleshooting, and cleaner cross-platform data foundations for web and app environments.",
    intro:
      "Tracking and attribution support focused on reducing ambiguity, improving data trust, and giving teams a cleaner measurement foundation for optimization and reporting.",
    focusAreas: [
      "GTM and GA4 architecture",
      "Pixel validation",
      "Attribution troubleshooting",
      "Web and app measurement",
    ],
    idealFor: [
      "Teams that no longer trust the numbers they are seeing across platforms and analytics tools.",
      "Brands preparing to scale, restructure, or audit measurement before bigger media decisions are made.",
      "Growth environments where web, app, CRM, and ad platform data need to align more cleanly.",
    ],
    solves: [
      "Mismatched numbers between ad platforms and analytics tools.",
      "Unclear conversion paths caused by incomplete event setups.",
      "Tracking issues that reduce confidence in reporting, optimization, and attribution decisions.",
    ],
    capabilities: [
      "GTM and GA4 event architecture support",
      "Pixel and conversion tracking audits",
      "CAPI, deduplication, and diagnostics support",
      "MMP and app measurement alignment across tools such as Adjust, AppsFlyer, Kochava, Firebase, and GA4",
    ],
    typicalProblems: [
      "Conversions are firing inconsistently, duplicated, or with missing parameters.",
      "Platform-reported performance and analytics-reported performance tell different stories with no clear explanation.",
      "App and web measurement setups have drifted apart, making validation and decision-making harder.",
    ],
    tools: [
      "GTM",
      "GA4",
      "Meta Pixel",
      "TikTok Pixel",
      "Snapchat Pixel",
      "Google Ads Conversion Tracking",
      "Conversion API",
      "Adjust",
      "AppsFlyer",
      "Kochava",
      "Firebase",
    ],
    deliverables: [
      "Tracking audit findings",
      "Event map or measurement framework",
      "Validation checklist and QA notes",
      "Implementation priorities for web, app, or platform teams",
    ],
    ctaDescription:
      "Useful when reporting numbers are being questioned, events need validation, or attribution confidence needs to improve before optimization continues.",
    relatedSlugs: [
      "bi-reporting-automation",
      "martech-consulting",
      "performance-marketing",
    ],
  },
  {
    slug: "bi-reporting-automation",
    title: "Analytics Dashboards, BI & Reporting Automation",
    category: "Analytics Dashboards & BI",
    summary:
      "Dashboard and reporting support that turns marketing data into clearer operating visibility across channels, spend, pacing, and decision-making.",
    intro:
      "Analytics dashboard and BI work for teams that need cleaner reporting logic, more reliable KPI visibility, and less time lost to manual spreadsheet wrangling.",
    focusAreas: [
      "Looker Studio dashboards",
      "Power BI reporting",
      "KPI frameworks",
      "Reporting automation",
    ],
    idealFor: [
      "Marketing leaders who need reporting that supports action, not just observation.",
      "Teams managing multiple channels, markets, or stakeholders with different visibility needs.",
      "Growth environments where manual reporting cycles are slowing down decision-making.",
    ],
    solves: [
      "Reporting processes that are too manual or too slow.",
      "Dashboards that show numbers but do not support decisions.",
      "Multi-channel views that are difficult to reconcile.",
    ],
    capabilities: [
      "Dashboard planning and KPI alignment",
      "Looker Studio, Power BI, MicroStrategy, and spreadsheet reporting support",
      "Automated reporting workflows",
      "Budget pacing and channel performance views",
    ],
    typicalProblems: [
      "Channel data is exported and reworked manually every reporting cycle.",
      "Different teams are looking at different definitions of the same KPI.",
      "Dashboards explain what happened, but not where attention or action should go next.",
    ],
    tools: [
      "Looker Studio",
      "Power BI",
      "MicroStrategy",
      "Supermetrics",
      "Power Query",
      "Excel",
    ],
    deliverables: [
      "Dashboard structure proposal",
      "Reporting logic and KPI definition documentation",
      "Automation opportunities list",
      "Decision-oriented views or build priorities",
    ],
    ctaDescription:
      "Useful when the reporting layer needs to become faster, cleaner, and more useful for budget, pacing, and performance conversations.",
    relatedSlugs: [
      "tracking-attribution",
      "workflow-automation-rpa",
      "martech-consulting",
    ],
  },
  {
    slug: "workflow-automation-rpa",
    category: "Automation & Operations",
    title: "Workflow Automation & RPA",
    summary:
      "Workflow automation and RPA support that reduces manual repetition, strengthens process reliability, and helps marketing operations move faster with fewer avoidable errors.",
    intro:
      "Operational automation work for teams whose reporting, lead handling, or recurring execution tasks are too dependent on manual copying, handoffs, or spreadsheet-heavy routines.",
    focusAreas: [
      "Workflow mapping",
      "RPA and no-code automation",
      "API callbacks",
      "Process reliability",
    ],
    idealFor: [
      "Teams with repeatable marketing operations that are still being handled manually.",
      "Environments where handoffs, callbacks, or spreadsheet workflows introduce delays or errors.",
      "Leads and operations owners who want clearer process logic before automations are implemented.",
    ],
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
    typicalProblems: [
      "The same data is being moved between tools by hand every week or every campaign cycle.",
      "Notifications, callbacks, or routing steps break because the logic is spread across too many places.",
      "Process knowledge lives with individuals instead of being translated into a repeatable operating flow.",
    ],
    tools: ["Power Automate", "Zapier", "IBM RPA", "Google Apps Script", "Marketo"],
    deliverables: [
      "Automation opportunity map",
      "Workflow logic outline",
      "Implementation notes",
      "Process improvement recommendations",
    ],
    ctaDescription:
      "Useful when repeated operational work is costing too much time, introducing too many mistakes, or blocking the team from focusing on higher-value analysis and execution.",
    relatedSlugs: [
      "bi-reporting-automation",
      "martech-consulting",
      "tracking-attribution",
    ],
  },
  {
    slug: "martech-consulting",
    title: "Martech & Growth Consulting",
    category: "Growth Consulting",
    summary:
      "Consulting support for aligning marketing systems, measurement governance, integrations, and growth operations before execution complexity becomes expensive.",
    intro:
      "A consulting layer for teams that need a clearer view of how platforms, lead flows, tracking, and reporting should work together before they keep adding spend, tools, or manual fixes.",
    focusAreas: [
      "Stack planning",
      "Integration logic",
      "Measurement governance",
      "Lead flow design",
    ],
    idealFor: [
      "Founders, CMOs, and growth leads revisiting how their marketing systems fit together.",
      "Teams where ownership across CRM, tracking, media, and reporting has become blurred.",
      "Brands preparing new lead flows, platform integrations, or operating changes that need cleaner governance.",
    ],
    solves: [
      "Stack decisions made without clear measurement logic.",
      "Platform integrations that create operational blind spots.",
      "Unclear governance around tracking, CRM, and attribution systems.",
      "Lead generation systems where Meta Ads, WhatsApp conversations, qualification, and sales feedback are not connected clearly enough for scaling decisions.",
    ],
    capabilities: [
      "Stack planning support",
      "Platform integration reviews",
      "Lead flow and callback logic mapping",
      "Measurement governance recommendations",
      "Growth system design for paid social, WhatsApp funnels, creative testing, lead quality feedback, and sales operations",
    ],
    typicalProblems: [
      "New tools are added without a clear role in the wider operating model.",
      "Lead flow logic between ads, forms, CRM, and messaging channels is inconsistent or difficult to trace.",
      "Measurement governance depends on ad hoc fixes instead of clear ownership and process.",
    ],
    tools: [
      "Meta Developer",
      "WhatsApp Business API",
      "CRM workflows",
      "GA4",
      "Pixels",
    ],
    deliverables: [
      "Integration review notes",
      "Stack and operating model recommendation summary",
      "Measurement governance outline",
      "Implementation priorities across teams, tools, or vendors",
      "Healthcare lead generation and growth-system recommendations where compliance, trust, and qualification matter",
    ],
    ctaDescription:
      "Useful when the challenge is broader than one channel and the real need is a clearer operating model for growth, data, and platform coordination.",
    relatedSlugs: [
      "tracking-attribution",
      "workflow-automation-rpa",
      "performance-marketing",
    ],
  },
  {
    slug: "website-cro-ecommerce",
    category: "Conversion & E-commerce",
    title: "Website, CRO & E-commerce Support",
    summary:
      "Landing page, funnel, and measurement support to improve on-site readiness for paid acquisition, conversion tracking, and e-commerce decision-making.",
    intro:
      "Useful when media performance is being judged without enough attention to what happens after the click, or when conversion journeys need clearer alignment with tracking and campaign intent.",
    focusAreas: [
      "Landing pages",
      "Conversion journey review",
      "E-commerce tracking",
      "Retargeting readiness",
    ],
    idealFor: [
      "Brands driving paid traffic into landing pages, lead funnels, or e-commerce journeys.",
      "Teams that need a clearer view of where users are dropping off after acquisition.",
      "Growth environments where on-site conversion logic and event tracking need to support each other better.",
    ],
    solves: [
      "Landing pages that are not aligned with campaign intent.",
      "Funnels with unclear drop-off points.",
      "E-commerce journeys lacking reliable event visibility.",
      "WhatsApp inquiry journeys where users need clearer education, qualification, pricing context, and consultation next steps before revenue can be created.",
    ],
    capabilities: [
      "Landing page and funnel review",
      "CRO support and journey analysis",
      "E-commerce event tracking support",
      "Retargeting and conversion path alignment",
      "WhatsApp funnel optimization for healthcare lead generation, consultation booking, and sales feedback loops",
    ],
    typicalProblems: [
      "The landing page experience does not continue the promise made in the ad or campaign.",
      "Drop-off points are visible in aggregate, but the journey issues behind them are still unclear.",
      "Checkout, add-to-cart, or lead events are incomplete, making funnel decisions harder to trust.",
    ],
    tools: ["Shopify", "WordPress", "Wix", "Squarespace", "GA4"],
    deliverables: [
      "Conversion journey review",
      "Tracking observations",
      "CRO opportunity notes",
      "Funnel alignment recommendations",
      "WhatsApp inquiry and consultation-flow optimization notes",
    ],
    ctaDescription:
      "Useful when acquisition, site experience, and measurement need to be looked at together instead of as separate problems.",
    relatedSlugs: [
      "performance-marketing",
      "tracking-attribution",
      "martech-consulting",
    ],
  },
  {
    slug: "market-research-insights",
    category: "Research & Planning",
    title: "Market Research & Insights",
    summary:
      "Research and insight support that gives teams better market context, competitive perspective, and audience understanding before strategic decisions are locked in.",
    intro:
      "A practical research layer for brands and growth teams that need stronger context behind market entry, messaging, channel choices, or planning conversations.",
    focusAreas: [
      "Category research",
      "Competitor review",
      "Audience context",
      "Planning support",
    ],
    idealFor: [
      "Teams preparing new campaigns, new markets, or a strategic reset.",
      "Brands that need more structured competitive and audience context before acting.",
      "Leads who want research translated into clearer planning conversations, not left as a slide deck.",
    ],
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
    typicalProblems: [
      "Audience assumptions are guiding channel or message decisions without enough validation.",
      "Competitor activity is reviewed inconsistently, making the signal hard to trust.",
      "Research outputs exist, but the connection to channel, campaign, or planning decisions is weak.",
    ],
    tools: ["NetBase", "eMarketer", "Audience research", "Category analysis"],
    deliverables: [
      "Research summary",
      "Insight themes",
      "Competitor note structure",
      "Planning recommendations",
    ],
    ctaDescription:
      "Useful when the team needs stronger market context before making decisions on positioning, channels, audiences, or growth priorities.",
    relatedSlugs: [
      "performance-marketing",
      "martech-consulting",
      "website-cro-ecommerce",
    ],
  },
];

export const serviceSlugSet = new Set(services.map((service) => service.slug));
