export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  intro: string;
  solves: string[];
  capabilities: string[];
  tools: string[];
  deliverables: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  context: string;
  challenge: string;
  solution: string;
  validation: string;
  impactNote: string;
};

export type ToolCategory =
  | "Paid Media"
  | "Tracking & Analytics"
  | "MMP & App Analytics"
  | "BI & Reporting"
  | "Automation & RPA"
  | "Email & CRM"
  | "Website & E-commerce"
  | "Research & Intelligence";

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
  sections: {
    heading: string;
    body: string;
  }[];
};

export type ContactPlaceholder = {
  label: string;
  value: string;
  href?: string;
};

