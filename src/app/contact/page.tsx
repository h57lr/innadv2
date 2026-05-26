import { CTA } from "@/components/CTA";
import { ContactForm } from "@/components/ContactForm";
import { SectionShell } from "@/components/SectionShell";
import {
  contactCta,
  contactDetails,
  hasLiveInquiryInbox,
  inquiryChecklist,
  inquiryPathways,
} from "@/data/contact";

export const metadata = {
  title: "Contact | Enad Al-Shneikat",
  description:
    "Use the contact page to outline a project inquiry, collaboration request, or advisory conversation around performance marketing, tracking, reporting, and automation.",
};

const borderStyle = "1px solid var(--grid-grey)";

type ContactPageProps = {
  searchParams: Promise<{ service?: string | string[] }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const resolvedSearchParams = await searchParams;
  const serviceParam = resolvedSearchParams.service;
  const initialService = Array.isArray(serviceParam)
    ? (serviceParam[0] ?? "")
    : (serviceParam ?? "");

  return (
    <>
      <SectionShell
        eyebrow="Contact"
        title="Start the conversation with enough context to assess fit quickly"
        description={contactCta}
      >
        <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 20 }} className="contact-grid-inner">
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <article style={{ borderRadius: 24, border: borderStyle, padding: 28 }}>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-secondary)", margin: 0 }}>
                How To Use This Page
              </p>
              <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: 22, lineHeight: 1.1, letterSpacing: "-0.01em", color: "var(--ink-black)", margin: "12px 0 0" }}>
                Bring the challenge, the systems involved, and the support you want to explore.
              </h3>
              <p style={{ marginTop: 12, fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.6, color: "var(--ink-secondary)" }}>
                This contact flow is meant to help potential clients, collaborators, and teams explain the real decision point before the next conversation.
              </p>

              <div style={{ marginTop: 20, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }} className="checklist-grid-inner">
                <div style={{ borderRadius: 14, border: borderStyle, padding: 14 }}>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: "0.10em", textTransform: "uppercase", color: "#999", margin: 0 }}>
                    Typical inquiry paths
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, margin: "10px 0 0", display: "flex", flexDirection: "column", gap: 6 }}>
                    {inquiryPathways.map((item) => (
                      <li key={item} style={{ fontFamily: "var(--font-sans)", fontSize: 12, lineHeight: 1.5, color: "var(--ink-secondary)" }}>
                        - {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ borderRadius: 14, border: borderStyle, padding: 14 }}>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: "0.10em", textTransform: "uppercase", color: "#999", margin: 0 }}>
                    Helpful context
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, margin: "10px 0 0", display: "flex", flexDirection: "column", gap: 6 }}>
                    {inquiryChecklist.map((item) => (
                      <li key={item} style={{ fontFamily: "var(--font-sans)", fontSize: 12, lineHeight: 1.5, color: "var(--ink-secondary)" }}>
                        - {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>

            <article style={{ borderRadius: 24, border: borderStyle, padding: 28 }}>
              <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: 22, lineHeight: 1.1, letterSpacing: "-0.01em", color: "var(--ink-black)", margin: 0 }}>
                Direct contact details
              </h3>
              <p style={{ marginTop: 12, fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.6, color: "var(--ink-secondary)" }}>
                {hasLiveInquiryInbox
                  ? "If direct email or LinkedIn outreach is the better fit for your process, use the approved details below."
                  : "Approved direct contact details are still being finalized. Placeholder links have been removed so the site does not point people to fake destinations."}
              </p>
              <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 10 }}>
                {contactDetails.map((item) => (
                  <div key={item.label} style={{ borderRadius: 14, border: borderStyle, padding: 14 }}>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: "0.10em", textTransform: "uppercase", color: "#999", margin: 0 }}>
                      {item.label}
                    </p>
                    {item.href ? (
                      <a href={item.href} style={{ marginTop: 4, display: "block", fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--ink-black)", textDecoration: "none" }}>
                        {item.value}
                      </a>
                    ) : (
                      <p style={{ marginTop: 4, fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--ink-black)" }}>{item.value}</p>
                    )}
                    {item.note ? (
                      <p style={{ marginTop: 4, fontFamily: "var(--font-sans)", fontSize: 11, lineHeight: 1.5, color: "#999" }}>{item.note}</p>
                    ) : null}
                  </div>
                ))}
              </div>
            </article>
          </div>

          <ContactForm initialService={initialService} />
        </div>
      </SectionShell>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 64px 96px" }} className="cta-section-inner">
        <CTA
          title="Need to clarify scope before reaching out?"
          description="Review the service pages or redacted case studies first, then return with the area you want to discuss, the systems involved, and the next step you want to explore."
          primaryLabel="Review Services"
          primaryHref="/services"
          secondaryLabel="Review Case Studies"
          secondaryHref="/case-studies"
        />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1024px) {
          .contact-grid-inner { grid-template-columns: 1fr !important; }
          .cta-section-inner { padding: 0 24px 64px !important; }
        }
        @media (max-width: 640px) {
          .checklist-grid-inner { grid-template-columns: 1fr !important; }
        }
      ` }} />
    </>
  );
}
