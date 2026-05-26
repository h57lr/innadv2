import type { InsightArticle } from "@/types/content";

export const insights: InsightArticle[] = [
  {
    slug: "why-roas-can-mislead-without-attribution-validation",
    title: "Why ROAS Breaks Down When Attribution Has Not Been Validated",
    category: "Attribution",
    summary:
      "A draft outline on how to pressure-test platform-reported efficiency before using ROAS as the main signal for budget moves.",
    status: "Draft placeholder",
    readingTime: "6 min draft",
    intent:
      "This draft is meant to become a practical article for growth teams that need a more disciplined way to interpret platform efficiency claims.",
    sections: [
      {
        heading: "What This Draft Will Cover",
        body:
          "ROAS is often treated as a clean decision metric, but it becomes unreliable when attribution windows, conversion rules, and event quality have not been challenged against broader business reporting.",
        bullets: [
          "Why platform-reported return is useful but incomplete",
          "Where self-attributing bias can distort campaign comparisons",
          "How validation changes confidence in scaling decisions",
        ],
      },
      {
        heading: "Validation Checks Before Budget Decisions",
        body:
          "Before using ROAS as the basis for aggressive spend shifts, the article should walk through a short validation layer that compares platform numbers with analytics, CRM, and finance-facing outcomes.",
        bullets: [
          "Review attribution settings and lookback windows",
          "Compare conversion counts across ad platforms and analytics tools",
          "Check whether offline or delayed conversions are missing from the picture",
        ],
      },
      {
        heading: "Likely Takeaway",
        body:
          "The finished version should help readers separate optimization metrics from business-truth metrics so ROAS can be used responsibly instead of blindly.",
        note:
          "Placeholder note: final article should include a simple decision framework rather than broad thought-leadership language.",
      },
    ],
  },
  {
    slug: "tracking-qa-before-you-scale-paid-media",
    title: "Tracking QA Before You Scale Paid Media Budgets",
    category: "Tracking",
    summary:
      "A draft outline for a practical article about the tracking checks that should happen before paid media budgets are increased.",
    status: "Draft placeholder",
    readingTime: "5 min draft",
    intent:
      "This draft is designed to turn a technical topic into an operational checklist for marketers, analysts, and founders.",
    sections: [
      {
        heading: "Why Tracking QA Comes First",
        body:
          "Teams move faster when they trust the events feeding campaign optimization, reporting, and internal reviews. Without that trust, scale decisions start from noise instead of signal.",
        bullets: [
          "Event duplication and missing parameters change optimization behavior",
          "Broken post-purchase signals create false confidence",
          "Naming inconsistency makes trend analysis harder than it should be",
        ],
      },
      {
        heading: "What A Useful QA Pass Should Include",
        body:
          "The finished article should frame QA as a recurring operating habit rather than a one-time implementation task.",
        bullets: [
          "Confirm critical events fire once and in the correct order",
          "Check campaign parameters, landing-page continuity, and consent impacts",
          "Verify platform pixels, server-side events, and analytics destination rules",
        ],
      },
      {
        heading: "Expected Reader Outcome",
        body:
          "Readers should leave with a clearer view of how better tracking improves diagnosis speed, budget confidence, and communication between marketing and data teams.",
      },
    ],
  },
  {
    slug: "why-marketing-dashboards-should-support-decisions",
    title: "Dashboards Should Make Marketing Decisions Easier, Not Just Look Complete",
    category: "BI & Reporting",
    summary:
      "A draft outline on how to design dashboard views that reduce interpretation time and highlight the decisions a team actually needs to make.",
    status: "Draft placeholder",
    readingTime: "7 min draft",
    intent:
      "This draft is intended to become a practical piece on dashboard design for operators, managers, and founders who need fast, reliable readouts.",
    sections: [
      {
        heading: "The Core Problem With Many Dashboards",
        body:
          "Many dashboards succeed at displaying data but fail at helping someone decide what changed, why it changed, and what to do next.",
        bullets: [
          "Too many charts without hierarchy slows down review meetings",
          "Missing context forces teams to debate definitions instead of actions",
          "Reporting views often ignore the exceptions leaders actually care about",
        ],
      },
      {
        heading: "What Decision-Oriented Reporting Looks Like",
        body:
          "The finished article should show how to organize views around performance questions, anomalies, pacing, and next-step ownership rather than around disconnected widgets.",
        bullets: [
          "Lead with business questions, not chart inventory",
          "Use comparison periods and targets where decisions depend on them",
          "Highlight actions, thresholds, and exceptions directly in the reporting layer",
        ],
      },
      {
        heading: "What This Placeholder Still Needs",
        body:
          "A final version should include examples of dashboard sections for channel reviews, leadership summaries, and anomaly monitoring.",
        note:
          "Placeholder note: examples should be original and operational, without invented client stories or unsupported claims.",
      },
    ],
  },
  {
    slug: "automation-that-reduces-reporting-friction",
    title: "Marketing Automation That Reduces Reporting Friction Without Hiding the Logic",
    category: "Automation",
    summary:
      "A draft outline about using automation to remove repetitive reporting work while keeping the underlying rules transparent to the team.",
    status: "Draft placeholder",
    readingTime: "5 min draft",
    intent:
      "This draft is aimed at teams that want cleaner reporting workflows without creating brittle black-box processes.",
    sections: [
      {
        heading: "Where Automation Actually Helps",
        body:
          "Good automation removes repetitive export, cleanup, and alerting work so teams can spend more time on interpretation and follow-through.",
        bullets: [
          "Recurring data preparation steps are usually the first win",
          "Alerts and pacing checks can reduce manual monitoring overhead",
          "Automation is most useful when the business rule is explicit and reviewable",
        ],
      },
      {
        heading: "Common Failure Modes",
        body:
          "Automation creates risk when the logic is undocumented, ownership is unclear, or the workflow silently fails without anyone noticing.",
        bullets: [
          "No one knows where a metric is transformed",
          "A broken connector goes unnoticed for too long",
          "Teams trust outputs they can no longer explain",
        ],
      },
      {
        heading: "Direction For The Final Article",
        body:
          "The published version should give readers a simple way to judge whether a task should stay manual, become semi-automated, or move into a more formal data workflow.",
      },
    ],
  },
  {
    slug: "ai-adoption-in-marketing-ops-needs-governance",
    title: "AI Adoption in Marketing Operations Needs Governance Before It Needs More Prompts",
    category: "AI Adoption",
    summary:
      "A draft outline on adopting AI inside marketing workflows without creating inconsistent outputs, compliance risk, or process confusion.",
    status: "Draft placeholder",
    readingTime: "6 min draft",
    intent:
      "This draft is intended to become a grounded operations article about where AI can help and where process design matters more than experimentation speed.",
    sections: [
      {
        heading: "Why Adoption Gets Messy",
        body:
          "Teams often start with isolated wins, but those wins become hard to scale when prompts, approvals, and data boundaries are not documented.",
        bullets: [
          "Different people create different standards for the same task",
          "Sensitive data may be handled inconsistently across tools",
          "There is no shared way to evaluate quality or risk",
        ],
      },
      {
        heading: "What Good Governance Looks Like",
        body:
          "The final article should focus on practical guardrails that help AI become part of a repeatable operating system instead of a set of disconnected experiments.",
        bullets: [
          "Define approved use cases and clear owners",
          "Separate ideation workflows from sensitive data workflows",
          "Create review checkpoints for accuracy, brand fit, and compliance",
        ],
      },
      {
        heading: "Intended Reader Value",
        body:
          "Readers should come away with a clearer framework for deciding what to automate with AI, what to keep human-led, and how to avoid accidental process debt.",
      },
    ],
  },
  {
    slug: "blended-attribution-for-executive-reporting",
    title: "When Executive Reporting Needs Blended Attribution Instead of Platform Narratives",
    category: "Analytics",
    summary:
      "A draft outline about building leadership reporting that reflects multiple signals instead of repeating whichever channel platform looks strongest.",
    status: "Draft placeholder",
    readingTime: "7 min draft",
    intent:
      "This draft is meant to become a practical article about combining platform, analytics, and business-side signals for more credible performance summaries.",
    sections: [
      {
        heading: "Why Leadership Views Need A Different Standard",
        body:
          "Executive reporting usually requires a broader perspective than channel optimization views because it informs planning, budget confidence, and cross-functional trust.",
        bullets: [
          "Platform views are useful for optimization but narrow for board-level narratives",
          "Different systems capture different parts of the customer journey",
          "Leaders need directional truth, not just isolated platform performance",
        ],
      },
      {
        heading: "What A Blended View Should Combine",
        body:
          "A stronger reporting layer should reconcile channel-platform trends with analytics patterns, CRM outcomes, and commercial context where available.",
        bullets: [
          "Use common definitions for core business outcomes",
          "Show where signals agree and where they diverge",
          "Frame attribution as a decision aid, not a claim of perfect precision",
        ],
      },
      {
        heading: "Placeholder Boundaries",
        body:
          "A final version should stay practical and avoid overstating certainty. The value is in explaining how to communicate confidence levels and tradeoffs clearly.",
      },
    ],
  },
];
