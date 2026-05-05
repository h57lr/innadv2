import { CTA } from "@/components/CTA";
import { ContactForm } from "@/components/ContactForm";
import { SectionShell } from "@/components/SectionShell";
import { contactCta, contactPlaceholders } from "@/data/contact";

export const metadata = {
  title: "Contact | Enad Al-Shneikat",
  description:
    "Contact page scaffold with frontend form validation and editable contact placeholders.",
};

export default function ContactPage() {
  return (
    <>
      <SectionShell
        eyebrow="Contact"
        title="A functional contact structure with editable placeholders"
        description={contactCta}
      >
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <h3 className="text-2xl font-semibold text-white">Contact details</h3>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              These are placeholder values intended to be replaced once approved
              contact details are provided.
            </p>
            <div className="mt-6 space-y-4">
              {contactPlaceholders.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-slate-950/55 p-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-2 block text-sm text-white transition hover:text-sky-300"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-sm text-white">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </article>

          <ContactForm />
        </div>
      </SectionShell>

      <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <CTA
          title="This flow is ready for real contact endpoints later"
          description="The form validates on the frontend today and can be connected to email, API, or CRM handling in a later phase."
          primaryLabel="Explore Services"
          primaryHref="/services"
          secondaryLabel="View Insights"
          secondaryHref="/insights"
        />
      </div>
    </>
  );
}

