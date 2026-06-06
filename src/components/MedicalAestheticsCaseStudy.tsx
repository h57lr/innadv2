"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { growthBreakdownData, medicalAestheticsCaseStudy } from "@/data/medicalAestheticsCaseStudy";

const borderStyle = "1px solid rgba(210, 184, 162, 0.55)";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function MetricCard({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <article className="medical-metric-card">
      <p className="medical-label">{label}</p>
      <strong>{value}</strong>
      <span>{note}</span>
    </article>
  );
}

function TextPanel({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <article className="medical-panel">
      <p className="medical-label">{eyebrow}</p>
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
}

function DataReadyValue({ value, prefix = "" }: { value: string | number | null; prefix?: string }) {
  return <span>{value === null ? "Data-ready" : `${prefix}${value}`}</span>;
}

export function MedicalAestheticsCaseStudy() {
  const spendToRevenueData = [
    { name: "Ad Spend", value: medicalAestheticsCaseStudy.spend },
    { name: "Revenue Generated", value: medicalAestheticsCaseStudy.revenue },
  ];

  const snapshotMetrics = [
    { label: "Estimated Media Spend", value: "$50K", note: "Reported project figure" },
    { label: "Estimated Revenue", value: "$300K", note: "Reported project figure" },
    { label: "Estimated ROAS", value: "6x", note: "Spend-to-revenue return" },
    { label: "Qualified Lead Cost", value: "$1.5 - $2.5", note: "Interested WhatsApp inquiries" },
    { label: "Main Lead Channel", value: medicalAestheticsCaseStudy.leadChannel, note: "Conversation-led funnel" },
    { label: "Acquisition Platform", value: medicalAestheticsCaseStudy.acquisitionPlatform, note: "Paid social engine" },
  ];

  return (
    <section id={medicalAestheticsCaseStudy.slug} className="medical-case-study">
      <div className="medical-hero">
        <div>
          <p className="medical-kicker">Case Study / Medical Center Growth Systems</p>
          <h2>{medicalAestheticsCaseStudy.heroTitle}</h2>
          <p className="medical-subtitle">{medicalAestheticsCaseStudy.subtitle}</p>
          <div className="medical-tags">
            {medicalAestheticsCaseStudy.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="medical-hero-card">
          <p className="medical-label">Role</p>
          <h3>{medicalAestheticsCaseStudy.projectName}</h3>
          <p>{medicalAestheticsCaseStudy.role}</p>
          <div>
            <span>Primary funnel</span>
            <strong>Meta Ads to WhatsApp</strong>
          </div>
        </div>
      </div>

      <div className="medical-section-heading">
        <p className="medical-label">Performance Snapshot</p>
        <h3>Confirmed project figures shown as an analytical dashboard.</h3>
        <p>Only reported totals are presented as final. Procedure-level performance remains data-ready until verified numbers are available.</p>
      </div>
      <div className="medical-metrics-grid">
        {snapshotMetrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </div>

      <div className="medical-dashboard-grid">
        <article className="medical-chart-card medical-chart-card--large">
          <div className="medical-chart-heading">
            <div>
              <p className="medical-label">Spend To Revenue</p>
              <h3>Simple comparison of reported spend and revenue.</h3>
            </div>
            <span>6x estimated ROAS</span>
          </div>
          <div className="medical-chart-wrap">
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={spendToRevenueData} layout="vertical" margin={{ top: 8, right: 20, left: 10, bottom: 8 }}>
                <CartesianGrid stroke="rgba(42, 28, 20, 0.08)" horizontal={false} />
                <XAxis type="number" tickFormatter={(value) => `$${Number(value) / 1000}K`} stroke="#7b6b61" fontSize={12} />
                <YAxis dataKey="name" type="category" width={130} stroke="#7b6b61" fontSize={12} />
                <Tooltip formatter={(value) => formatCurrency(Number(value))} cursor={{ fill: "rgba(199, 146, 96, 0.08)" }} />
                <Bar dataKey="value" radius={[0, 14, 14, 0]}>
                  {spendToRevenueData.map((entry) => (
                    <Cell key={entry.name} fill={entry.name === "Revenue Generated" ? "#c27a48" : "#1f2f2b"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </article>

        <article className="medical-chart-card">
          <div className="medical-chart-heading">
            <div>
              <p className="medical-label">Growth Breakdown</p>
              <h3>Procedure categories prepared for future reporting.</h3>
            </div>
            <span>Data-ready</span>
          </div>
          <div className="medical-chart-wrap">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={growthBreakdownData} layout="vertical" margin={{ top: 8, right: 20, left: 0, bottom: 8 }}>
                <CartesianGrid stroke="rgba(42, 28, 20, 0.08)" horizontal={false} />
                <XAxis type="number" domain={[0, 1]} hide />
                <YAxis dataKey="service" type="category" width={150} stroke="#7b6b61" fontSize={11} />
                <Tooltip formatter={() => "Data-ready: not confirmed yet"} cursor={{ fill: "rgba(199, 146, 96, 0.08)" }} />
                <Bar dataKey="leads" fill="rgba(194, 122, 72, 0.35)" radius={[0, 10, 10, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="medical-data-note">Leads and revenue are intentionally set to 0 in the chart data until procedure-level numbers are confirmed.</p>
        </article>
      </div>

      <div className="medical-copy-grid">
        <TextPanel eyebrow="Challenge" title="More than basic ads" body={medicalAestheticsCaseStudy.challenge} />
        <TextPanel eyebrow="Strategy" title="Procedure-level campaign planning" body={medicalAestheticsCaseStudy.strategy} />
        <TextPanel eyebrow="Funnel" title="Meta Ads to WhatsApp" body={medicalAestheticsCaseStudy.funnel} />
        <TextPanel eyebrow="Strategic Value" title="Full-funnel growth execution" body={medicalAestheticsCaseStudy.strategicValue} />
      </div>

      <div className="medical-section-heading">
        <p className="medical-label">Funnel Journey</p>
        <h3>A consultation-led path from acquisition to revenue.</h3>
      </div>
      <div className="medical-funnel">
        {medicalAestheticsCaseStudy.funnelJourney.map((step, index) => (
          <div key={step} className="medical-funnel-step">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{step}</strong>
          </div>
        ))}
      </div>

      <div className="medical-section-heading">
        <p className="medical-label">Creative Engine</p>
        <h3>Content formats designed to educate, build trust, and pre-qualify intent.</h3>
        <p>Offer-based creatives were used carefully so demand generation did not damage premium positioning.</p>
      </div>
      <div className="medical-creative-grid">
        {medicalAestheticsCaseStudy.creativeFormats.map((format, index) => (
          <article key={format}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{format}</strong>
          </article>
        ))}
      </div>

      <div className="medical-section-heading">
        <p className="medical-label">Procedure Portfolio</p>
        <h3>Interactive service cards with centralized, update-ready performance fields.</h3>
      </div>
      <div className="medical-procedure-grid">
        {medicalAestheticsCaseStudy.services.map((service) => (
          <article key={service.name} className="medical-procedure-card">
            <p className="medical-label">Procedure</p>
            <h3>{service.name}</h3>
            <p>{service.angle}</p>
            <div>
              <span>Audience intent</span>
              <strong>{service.audienceIntent}</strong>
            </div>
            <div>
              <span>Funnel objective</span>
              <strong>{service.funnelObjective}</strong>
            </div>
            <dl>
              <div><dt>Leads</dt><dd><DataReadyValue value={service.leads} /></dd></div>
              <div><dt>CPL</dt><dd><DataReadyValue value={service.cpl} /></dd></div>
              <div><dt>Bookings</dt><dd><DataReadyValue value={service.bookings} /></dd></div>
              <div><dt>Revenue</dt><dd><DataReadyValue value={service.revenue} prefix="$" /></dd></div>
            </dl>
          </article>
        ))}
      </div>

      <div className="medical-responsibilities">
        <div>
          <p className="medical-label">Execution Responsibilities</p>
          <h3>What Enad led across strategy, media, creative, and funnel optimization.</h3>
        </div>
        <div>
          {medicalAestheticsCaseStudy.responsibilities.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>

      <style jsx>{`
        .medical-case-study {
          border: ${borderStyle};
          border-radius: 34px;
          padding: 34px;
          background:
            radial-gradient(circle at 12% 8%, rgba(218, 178, 143, 0.38), transparent 28%),
            linear-gradient(135deg, #fffaf6 0%, #f7efe8 48%, #eef5f2 100%);
          box-shadow: 0 28px 80px rgba(47, 33, 24, 0.08);
          overflow: hidden;
        }
        .medical-hero,
        .medical-dashboard-grid,
        .medical-copy-grid,
        .medical-responsibilities {
          display: grid;
          grid-template-columns: 1.35fr 0.85fr;
          gap: 20px;
        }
        .medical-hero { align-items: stretch; }
        .medical-kicker,
        .medical-label {
          margin: 0;
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #9d6a42;
        }
        .medical-hero h2 {
          margin: 16px 0 0;
          font-family: var(--font-serif);
          font-size: clamp(34px, 5vw, 62px);
          line-height: 0.98;
          letter-spacing: -0.035em;
          color: #16241f;
        }
        .medical-subtitle {
          max-width: 760px;
          margin: 18px 0 0;
          font-family: var(--font-sans);
          font-size: 17px;
          line-height: 1.7;
          color: #66574c;
        }
        .medical-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 24px;
        }
        .medical-tags span,
        .medical-chart-heading > span {
          border: ${borderStyle};
          border-radius: 999px;
          padding: 5px 10px;
          background: rgba(255, 255, 255, 0.55);
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #6f5e53;
        }
        .medical-hero-card,
        .medical-panel,
        .medical-chart-card,
        .medical-metric-card,
        .medical-procedure-card,
        .medical-creative-grid article,
        .medical-funnel-step {
          border: ${borderStyle};
          background: rgba(255, 255, 255, 0.7);
          box-shadow: 0 18px 48px rgba(61, 42, 28, 0.06);
          backdrop-filter: blur(12px);
        }
        .medical-hero-card {
          border-radius: 28px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 320px;
        }
        .medical-hero-card h3,
        .medical-panel h3,
        .medical-chart-heading h3,
        .medical-section-heading h3,
        .medical-procedure-card h3,
        .medical-responsibilities h3 {
          margin: 8px 0 0;
          font-family: var(--font-serif);
          font-size: 24px;
          line-height: 1.12;
          letter-spacing: -0.018em;
          color: #16241f;
        }
        .medical-hero-card p,
        .medical-panel p,
        .medical-section-heading p,
        .medical-procedure-card p,
        .medical-responsibilities p {
          font-family: var(--font-sans);
          font-size: 14px;
          line-height: 1.65;
          color: #66574c;
        }
        .medical-hero-card div,
        .medical-procedure-card div {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-top: 14px;
        }
        .medical-hero-card span,
        .medical-procedure-card span {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #9d6a42;
        }
        .medical-hero-card strong,
        .medical-procedure-card strong {
          font-family: var(--font-sans);
          font-size: 14px;
          line-height: 1.45;
          color: #16241f;
        }
        .medical-section-heading {
          max-width: 780px;
          margin-top: 46px;
        }
        .medical-metrics-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 12px;
          margin-top: 18px;
        }
        .medical-metric-card {
          border-radius: 22px;
          padding: 18px;
          transition: transform 180ms ease, box-shadow 180ms ease;
          animation: medicalRise 620ms ease both;
        }
        .medical-metric-card:hover,
        .medical-procedure-card:hover,
        .medical-creative-grid article:hover {
          transform: translateY(-4px);
          box-shadow: 0 26px 58px rgba(61, 42, 28, 0.12);
        }
        .medical-metric-card strong {
          display: block;
          margin-top: 12px;
          font-family: var(--font-serif);
          font-size: 28px;
          line-height: 1;
          color: #16241f;
        }
        .medical-metric-card span {
          display: block;
          margin-top: 8px;
          font-family: var(--font-sans);
          font-size: 12px;
          line-height: 1.45;
          color: #77675c;
        }
        .medical-dashboard-grid { margin-top: 22px; }
        .medical-chart-card {
          border-radius: 28px;
          padding: 22px;
        }
        .medical-chart-card--large { min-height: 380px; }
        .medical-chart-heading {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          align-items: flex-start;
        }
        .medical-chart-wrap { margin-top: 18px; width: 100%; }
        .medical-data-note {
          margin: 8px 0 0;
          font-family: var(--font-sans);
          font-size: 12px;
          line-height: 1.5;
          color: #77675c;
        }
        .medical-copy-grid {
          grid-template-columns: repeat(4, 1fr);
          margin-top: 22px;
        }
        .medical-panel {
          border-radius: 24px;
          padding: 20px;
        }
        .medical-funnel {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 10px;
          margin-top: 18px;
        }
        .medical-funnel-step {
          position: relative;
          border-radius: 18px;
          padding: 16px;
          min-height: 112px;
        }
        .medical-funnel-step span,
        .medical-creative-grid span {
          display: inline-flex;
          width: 28px;
          height: 28px;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: #16241f;
          color: #fffaf6;
          font-family: var(--font-mono);
          font-size: 10px;
        }
        .medical-funnel-step strong,
        .medical-creative-grid strong {
          display: block;
          margin-top: 16px;
          font-family: var(--font-sans);
          font-size: 13px;
          line-height: 1.35;
          color: #16241f;
        }
        .medical-creative-grid,
        .medical-procedure-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-top: 18px;
        }
        .medical-creative-grid article {
          border-radius: 22px;
          padding: 20px;
          transition: transform 180ms ease, box-shadow 180ms ease;
        }
        .medical-procedure-card {
          border-radius: 26px;
          padding: 22px;
          transition: transform 180ms ease, box-shadow 180ms ease;
        }
        .medical-procedure-card dl {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
          margin: 18px 0 0;
        }
        .medical-procedure-card dl div {
          margin: 0;
          padding: 10px;
          border: 1px solid rgba(210, 184, 162, 0.45);
          border-radius: 14px;
          background: rgba(255,255,255,0.58);
        }
        .medical-procedure-card dt {
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #9d6a42;
        }
        .medical-procedure-card dd {
          margin: 4px 0 0;
          font-family: var(--font-sans);
          font-size: 12px;
          color: #16241f;
        }
        .medical-responsibilities {
          margin-top: 28px;
          border-top: 1px solid rgba(210, 184, 162, 0.65);
          padding-top: 28px;
        }
        .medical-responsibilities > div:last-child {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }
        .medical-responsibilities > div:last-child p {
          margin: 0;
          padding: 14px;
          border-radius: 16px;
          background: rgba(255,255,255,0.55);
          border: 1px solid rgba(210, 184, 162, 0.45);
          font-size: 13px;
        }
        @keyframes medicalRise {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 1180px) {
          .medical-metrics-grid { grid-template-columns: repeat(3, 1fr); }
          .medical-copy-grid,
          .medical-creative-grid,
          .medical-procedure-grid { grid-template-columns: repeat(2, 1fr); }
          .medical-funnel { grid-template-columns: repeat(3, 1fr); }
          .medical-dashboard-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 760px) {
          .medical-case-study { padding: 20px; border-radius: 26px; }
          .medical-hero,
          .medical-copy-grid,
          .medical-responsibilities,
          .medical-responsibilities > div:last-child { grid-template-columns: 1fr; }
          .medical-metrics-grid,
          .medical-creative-grid,
          .medical-procedure-grid,
          .medical-funnel { grid-template-columns: 1fr; }
          .medical-chart-heading { flex-direction: column; }
        }
      `}</style>
    </section>
  );
}
