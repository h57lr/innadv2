export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  intro: string;
  focusAreas: string[];
  idealFor: string[];
  solves: string[];
  capabilities: string[];
  typicalProblems: string[];
  tools: string[];
  deliverables: string[];
  ctaDescription: string;
  relatedSlugs: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  clientLabel: string;
  summary: string;
  problem: string;
  role: string;
  approach: string[];
  tools: string[];
  outcomeType: string;
  proofPoints: string[];
  confidentiality: string;
};

export type ToolCategory =
  | "Paid Media Platforms"
  | "Tracking & Attribution"
  | "MMPs"
  | "Analytics & BI"
  | "Automation & Data Workflows"
  | "Ecommerce & CMS"
  | "AI & Development Tools";

export type Tool = {
  name: string;
  category: ToolCategory;
  description: string;
};

export type InsightArticle = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  status: string;
  readingTime: string;
  intent: string;
  sections: {
    heading: string;
    body: string;
    bullets?: string[];
    note?: string;
  }[];
};

export type ContactDetail = {
  label: string;
  value: string;
  href?: string;
  note?: string;
};
