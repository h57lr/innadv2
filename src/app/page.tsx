import Link from "next/link";

import { BrandLogoMarquee, type BrandLogoItem } from "@/components/BrandLogoMarquee";
import { CTA } from "@/components/CTA";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { ProfileImage } from "@/components/ProfileImage";
import { ScoreCard } from "@/components/ScoreCard";
import { SectionShell } from "@/components/SectionShell";
import { ServiceCard } from "@/components/ServiceCard";
import { ToolCard } from "@/components/ToolCard";
import { caseStudies } from "@/data/caseStudies";
import { services } from "@/data/services";
import { tools } from "@/data/tools";

const borderStyle = "1px solid var(--grid-grey)";

const expertiseBadges = [
  "Performance Marketing",
  "Marketing Technology",
  "Tracking Architecture",
  "Attribution Validation",
  "BI Dashboards",
  "Workflow Automation",
  "Marketing Analytics",
];

const scorecards = [
  {
    label: "AD SPEND",
    value: 10,
    prefix: "$",
    suffix: "M+",
    finalDisplay: "$10M+",
    description:
      "Managed across Meta, Google, TikTok, Snapchat, LinkedIn, and programmatic campaigns for regional and global brands.",
  },
  {
    label: "PERFORMANCE",
    value: 83,
    suffix: "%+",
    finalDisplay: "83%+",
    description:
      "Reduction in cost per registration through full-funnel restructuring, audience testing, and platform optimization.",
  },
  {
    label: "AUTOMATION",
    value: 10,
    suffix: "K+",
    finalDisplay: "10K+",
    description:
      "Reporting rows, formulas, dashboards, and tracking workflows streamlined through marketing automation and analytics systems.",
  },
  {
    label: "EXPERIENCE",
    value: 9,
    suffix: "+",
    finalDisplay: "9+",
    description:
      "Years working across performance marketing, martech, tracking, analytics, automation, and BI execution.",
  },
  {
    label: "PLATFORMS",
    value: 50,
    suffix: "+",
    finalDisplay: "50+",
    description:
      "Hands-on operating range across acquisition platforms, analytics tools, MMPs, BI systems, automation tools, and ecommerce stacks.",
  },
  {
    label: "BRANDS",
    value: 10,
    suffix: "+",
    finalDisplay: "10+",
    description:
      "Experience across global and regional brand environments spanning financial services, automotive, hospitality, ecommerce, and healthcare.",
  },
  {
    label: "MARKETS",
    value: 6,
    suffix: "+",
    finalDisplay: "6+",
    description:
      "Campaigns and growth work managed across KSA, UAE, Kuwait, Qatar, Bahrain, Jordan, and adjacent regional markets.",
  },
];

const focusAreas = [
  {
    title: "Performance marketing leadership",
    description:
      "Multi-market paid media support across major platforms, with attention to structure, funnel logic, testing, and budget decisions.",
  },
  {
    title: "Martech, tracking, and attribution clarity",
    description:
      "Measurement systems built around GTM, GA4, pixels, CAPI, MMPs, and validation workflows that improve confidence in reporting.",
  },
  {
    title: "Automation and BI enablement",
    description:
      "Dashboard planning, reporting automation, and workflow improvement that reduce manual friction and help teams act faster.",
  },
];

const methodologySteps = [
  { title: "Diagnose", description: "Review campaigns, tracking, reporting logic, and operational friction to surface what is limiting clarity or growth." },
  { title: "Validate", description: "Cross-check platform, analytics, MMP, and reporting signals before performance assumptions turn into decisions." },
  { title: "Design", description: "Prioritize the tracking, reporting, automation, or campaign structure changes that will have the most practical value." },
  { title: "Implement", description: "Support cleaner measurement, dashboards, automations, and execution frameworks across the systems involved." },
  { title: "Optimize", description: "Use stronger signals and better operational visibility to improve decision quality, prioritization, and scaling discipline." },
];

const brandExperience: BrandLogoItem[] = [
  { name: "Western Union", logoSrc: "/assets/brands/western-union.png", tone: "western-union" },
  { name: "BMW Group", logoSrc: "/assets/brands/bmw.webp", tone: "bmw" },
  { name: "Beiersdorf NIVEA", logoSrc: "/assets/brands/nivea.svg", tone: "nivea" },
  { name: "Accor", logoSrc: "/assets/brands/accor.png", tone: "accor" },
  { name: "Fairmont Luxury Hotels & Resorts", logoSrc: "/assets/brands/fairmont.jpg", tone: "fairmont" },
  { name: "Rixos", logoSrc: "/assets/brands/rixos.png", tone: "rixos" },
  { name: "Nestle", logoSrc: "/assets/brands/nestle.jpg", tone: "nestle" },
  { name: "MINI Cooper", logoSrc: "/assets/brands/mini.jpg", tone: "mini" },
  { name: "Rolls-Royce Motor Cars", logoSrc: "/assets/brands/rolls-royce.jpg", tone: "rolls-royce" },
];

const featuredServiceSlugs = new Set([
  "performance-marketing", "tracking-attribution", "bi-reporting-automation", "workflow-automation-rpa",
]);

const featuredToolNames = new Set([
  "Meta Ads", "Google Analytics 4", "AppsFlyer", "Power BI", "Microsoft Power Automate", "Google Tag Manager",
]);

export default function HomePage() {
  const featuredServices = services.filter((s) => featuredServiceSlugs.has(s.slug));
  const featuredTools = tools.filter((t) => featuredToolNames.has(t.name));

  return (
    <>
      <section style={{ borderBottom: borderStyle }}>
        <div className="hero-profile-mobile" style={{ display: "none", maxWidth: 1280, margin: "0 auto", padding: "48px 24px 0", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, alignItems: "start" }}>
            <ProfileImage src="/assets/images/profile.jpg" alt="Enad Al-Shneikat" />
            <div style={{ borderRadius: 24, border: borderStyle, padding: "16px", textAlign: "center", alignSelf: "stretch", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: 16, color: "var(--ink-black)", margin: 0 }}>
                Enad Al-Shneikat
              </p>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.08em", color: "var(--ink-secondary)", margin: "3px 0 0", textTransform: "uppercase" }}>
                Full-Stack Digital Marketer
              </p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 10, color: "var(--signal-orange)", margin: "2px 0 0" }}>
                API & Integration Engineer
              </p>
              <div style={{ marginTop: 10, display: "flex", justifyContent: "center", gap: 8 }}>
                <a href="mailto:es@trilogytradingllc.com" style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: "var(--ink-secondary)", textDecoration: "underline", textUnderlineOffset: 2 }}>Email</a>
                <span style={{ color: "var(--grid-grey)" }}>/</span>
                <a href="https://www.linkedin.com/in/enad-abbsc/" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: "var(--ink-secondary)", textDecoration: "underline", textUnderlineOffset: 2 }}>LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "80px 64px",
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 56,
          }}
          className="hero-grid-inner"
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--ink-black)",
                margin: 0,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--signal-orange)", display: "inline-block" }} />
              Enad Al-Shneikat
            </p>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 700,
                fontSize: 48,
                lineHeight: 1.06,
                letterSpacing: "-0.022em",
                color: "var(--ink-black)",
                margin: "20px 0 0",
                maxWidth: 700,
              }}
            >
              Full-stack digital marketing, automation, and BI expertise for brands scaling with data.
            </h1>
            <p
              className="hero-description"
              style={{
                marginTop: 20,
                fontFamily: "var(--font-sans)",
                fontSize: 17,
                lineHeight: 1.55,
                color: "var(--ink-secondary)",
                maxWidth: 600,
              }}
            >
              I work at the intersection of paid media, marketing technology, measurement, and reporting to help teams scale with cleaner data and more reliable attribution.
            </p>
            <div
              style={{
                marginTop: 34,
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              }}
              className="scorecards-grid-inner"
            >
              {scorecards.map((sc) => (
                <ScoreCard key={sc.label} {...sc} />
              ))}
            </div>
            <div className="hero-buttons" style={{ marginTop: 24, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-edit btn-edit--primary">
                Start Your Inquiry
              </Link>
              <Link href="/services" className="btn-edit btn-edit--outline">
                Explore Services
              </Link>
              <Link href="/case-studies" className="btn-edit btn-edit--outline">
                Review Case Studies
              </Link>
            </div>
            <div style={{ marginTop: 24, display: "flex", flexWrap: "wrap", gap: 8 }}>
              {expertiseBadges.map((badge) => (
                <span
                  key={badge}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 9.5,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: "4px 10px",
                    border: borderStyle,
                    borderRadius: 9999,
                    color: "var(--ink-secondary)",
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <ProfileImage src="/assets/images/profile.jpg" alt="Enad Al-Shneikat" />
            <div
              style={{
                borderRadius: 24,
                border: borderStyle,
                padding: "20px 20px 16px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 700,
                  fontSize: 18,
                  color: "var(--ink-black)",
                  margin: 0,
                }}
              >
                Enad Al-Shneikat
              </p>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.08em",
                  color: "var(--ink-secondary)",
                  margin: "4px 0 0",
                  textTransform: "uppercase",
                }}
              >
                Full-Stack Digital Marketer
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 11,
                  color: "var(--signal-orange)",
                  margin: "2px 0 0",
                }}
              >
                API & Integration Engineer
              </p>
              <div style={{ marginTop: 14, display: "flex", justifyContent: "center", gap: 10 }}>
                <a
                  href="mailto:es@trilogytradingllc.com"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 12,
                    color: "var(--ink-secondary)",
                    textDecoration: "underline",
                    textUnderlineOffset: 3,
                  }}
                >
                  Email
                </a>
                <span style={{ color: "var(--grid-grey)" }}>/</span>
                <a
                  href="https://www.linkedin.com/in/enad-abbsc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 12,
                    color: "var(--ink-secondary)",
                    textDecoration: "underline",
                    textUnderlineOffset: 3,
                  }}
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionShell
        eyebrow="Skills & Expertise"
        title="RPA, BI, data analytics, and full-stack marketing infrastructure"
        description=""
      >
        <div className="skills-cards" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              borderRadius: 24,
              border: borderStyle,
              padding: 28,
              fontFamily: "var(--font-sans)",
              fontSize: 15,
              lineHeight: 1.7,
              color: "var(--ink-secondary)",
            }}
          >
            <p style={{ margin: 0 }}>
              With deep experience in RPA and workflow automation, business intelligence, and data analyst practices, and hands-on expertise with Supermetrics, Looker Studio, Microstrategy, Microsoft Power BI, and advanced Excel, I build a wide range of automations. These range from automated workflows to scalable, visualized, automated reporting systems that eliminate manual work, reduce errors, and surface meaningful insights that support decision making.
            </p>
          </div>
          <div
            style={{
              borderRadius: 24,
              border: borderStyle,
              padding: 28,
              fontFamily: "var(--font-sans)",
              fontSize: 15,
              lineHeight: 1.7,
              color: "var(--ink-secondary)",
            }}
          >
            <p style={{ margin: 0 }}>
              I work closely with performance and growth teams to design clean measurement systems, troubleshoot tracking issues, validate data accuracy, and support strategic planning and scaling. I focus on executional excellence while enabling teams to take fast, data-driven decisions with confidence.
            </p>
          </div>
          <div
            style={{
              borderRadius: 24,
              border: borderStyle,
              padding: 28,
              fontFamily: "var(--font-sans)",
              fontSize: 15,
              lineHeight: 1.7,
              color: "var(--ink-secondary)",
            }}
          >
            <p style={{ margin: 0 }}>
              My technical background covers digital marketing infrastructure and market research using NetBase and eMarketer. I work extensively with business intelligence and data analysis for mobile and web applications through MMP analytics integrations including Kochava, AppFlyer, Adjust, GA4, and Google Firebase. I design reporting data automation and interactive dashboards to analyze KPIs based on objectives, track performance, and enable data-driven decision-making using Excel, Power Query, Supermetrics, and Looker Studio.
            </p>
          </div>
          <div
            style={{
              borderRadius: 24,
              border: borderStyle,
              padding: 28,
              fontFamily: "var(--font-sans)",
              fontSize: 15,
              lineHeight: 1.7,
              color: "var(--ink-secondary)",
            }}
          >
            <p style={{ margin: 0 }}>
              I build workflow automations using Marketo and Zapier, and apply RPA software including IBM RPA and Power Automate to improve efficiency. I manage API callbacks setups and tracker integrations across Google Tag Manager, Google Analytics 4, Meta Developer, WhatsApp Business Cloud Accounts (WABA), social pixels, search pixels, Conversion API, Events Manager, and Google App Scripts.
            </p>
          </div>
          <div
            style={{
              borderRadius: 24,
              border: borderStyle,
              padding: 28,
              fontFamily: "var(--font-sans)",
              fontSize: 15,
              lineHeight: 1.7,
              color: "var(--ink-secondary)",
            }}
          >
            <p style={{ margin: 0 }}>
              I also work across paid media and media buying with strong expertise in traffic analysis and PPC. My experience includes email marketing and automation using GetResponse and MailChimp, WordPress development, and e-commerce platforms such as Shopify, Wix, and Squarespace, with hands-on work in lead magnets, SEO, conversions, CRO, automated retargeting campaigns, project management, and both B2B and B2C models.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Brand Experience"
        title="Experience across global and regional brand environments"
        description="Enad's background spans performance marketing, tracking, analytics, automation, and reporting work across established brand ecosystems."
      >
        <BrandLogoMarquee brands={brandExperience} />
      </SectionShell>

      <SectionShell
        eyebrow="Positioning"
        title="Where performance marketing meets martech, measurement, and operational clarity"
        description="The focus is not just running campaigns. It is strengthening the systems that shape performance decisions, reporting confidence, and execution discipline."
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="area-grid-inner">
          {focusAreas.map((area) => (
            <article key={area.title} style={{ borderRadius: 24, border: borderStyle, padding: 24 }}>
              <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: 20, lineHeight: 1.15, letterSpacing: "-0.01em", color: "var(--ink-black)", margin: 0 }}>
                {area.title}
              </h3>
              <p style={{ marginTop: 12, fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.6, color: "var(--ink-secondary)" }}>
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Services"
        title="Specialist support across media, tracking, automation, and reporting"
        description="From campaign structure to reporting automation, the featured service areas focus on the parts of the stack that most influence growth execution and measurement confidence."
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }} className="services-grid-inner">
          {featuredServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="How I Work"
        title="A practical working model built around diagnosis, validation, and scalable execution"
        description="The process is structured to reduce ambiguity first, then improve the systems behind marketing performance."
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12 }} className="method-grid-inner">
          {methodologySteps.map((step, index) => (
            <article key={step.title} style={{ borderRadius: 20, border: borderStyle, padding: 20 }}>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--signal-orange)", margin: 0 }}>
                Step {index + 1}
              </p>
              <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: 18, lineHeight: 1.15, letterSpacing: "-0.01em", color: "var(--ink-black)", margin: "8px 0 0" }}>
                {step.title}
              </h3>
              <p style={{ marginTop: 8, fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: 1.6, color: "var(--ink-secondary)" }}>
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Case-Study Thinking"
        title="Featured projects across performance, healthcare lead generation, tracking, and reporting"
        description="Representative case studies show how Enad connects strategy, media execution, measurement, funnel logic, and reporting discipline without inventing unsupported numbers."
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="case-grid-inner">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Platforms & Systems"
        title="Hands-on across the platforms behind acquisition, measurement, and reporting"
        description="A representative mix of tools already reflected across the wider service structure, covering paid media, tracking, app analytics, BI, and automation."
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }} className="tools-grid-inner">
          {featuredTools.map((tool) => (
            <ToolCard key={tool.name} tool={tool} />
          ))}
        </div>
      </SectionShell>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 64px 96px" }} className="cta-section-inner">
        <CTA
          title="Need clearer visibility before you scale further?"
          description="If acquisition, tracking, reporting, or automation are no longer aligned, Enad can help bring structure to the systems behind growth."
          primaryLabel="Start Your Inquiry"
          primaryHref="/contact"
          secondaryLabel="Review Services"
          secondaryHref="/services"
        />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 1025px) {
          .hero-profile-mobile { display: none !important; }
        }
        @media (max-width: 1024px) {
          .hero-grid-inner { grid-template-columns: 1fr !important; padding: 24px 24px 48px !important; }
          .hero-grid-inner > div:first-child { padding-top: 8px; }
          .hero-grid-inner > div:last-child { display: none !important; }
          .hero-profile-mobile { display: flex !important; }
          .scorecards-grid-inner { grid-template-columns: repeat(2, 1fr) !important; }
          .brand-grid-inner { grid-template-columns: repeat(2, 1fr) !important; }
          .area-grid-inner { grid-template-columns: 1fr !important; }
          .services-grid-inner { grid-template-columns: repeat(2, 1fr) !important; }
          .method-grid-inner { grid-template-columns: 1fr !important; }
          .case-grid-inner { grid-template-columns: 1fr !important; }
          .tools-grid-inner { grid-template-columns: repeat(2, 1fr) !important; }
          .cta-section-inner { padding: 0 24px 64px !important; }
        }
        @media (max-width: 640px) {
          .hero-grid-inner h1 { font-size: 32px !important; }
          .hero-description { font-size: 15px !important; }
          .scorecards-grid-inner { grid-template-columns: 1fr !important; }
          .brand-grid-inner { grid-template-columns: 1fr !important; }
          .services-grid-inner { grid-template-columns: 1fr !important; }
          .tools-grid-inner { grid-template-columns: 1fr !important; }
          .hero-buttons { flex-direction: column !important; }
          .hero-buttons a { width: 100% !important; text-align: center !important; }
          .skills-cards > div { padding: 20px 16px !important; font-size: 14px !important; }
        }
        @media (max-width: 480px) {
          .hero-profile-mobile > div { grid-template-columns: 1fr !important; }
          .hero-grid-inner h1 { font-size: 28px !important; }
          .hero-grid-inner { padding: 16px 16px 40px !important; }
          .hero-profile-mobile { padding: 32px 16px 0 !important; }
        }
      ` }} />
    </>
  );
}
