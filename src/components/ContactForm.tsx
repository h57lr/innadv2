"use client";

import { FormEvent, useState } from "react";

import { hasLiveInquiryInbox, primaryContactEmail } from "@/data/contact";

type FormState = {
  name: string;
  email: string;
  inquiryType: string;
  company: string;
  service: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  inquiryType: "",
  company: "",
  service: "",
  message: "",
};

function createInitialState(service = ""): FormState {
  return { ...initialState, service };
}

type ContactFormProps = {
  initialService?: string;
};

export function ContactForm({ initialService = "" }: ContactFormProps) {
  const [formState, setFormState] = useState<FormState>(() =>
    createInitialState(initialService),
  );
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const submitLabel = hasLiveInquiryInbox
    ? "Prepare inquiry email"
    : "Check inquiry details";

  function updateField<Key extends keyof FormState>(
    key: Key,
    value: FormState[Key],
  ) {
    setFormState((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess("");

    const trimmedName = formState.name.trim();
    const trimmedEmail = formState.email.trim();
    const trimmedCompany = formState.company.trim();
    const trimmedService = formState.service.trim();
    const trimmedMessage = formState.message.trim();

    if (!trimmedName || !trimmedEmail || !formState.inquiryType || !trimmedMessage) {
      setError("Please fill in your name, email, inquiry type, and a short message.");
      return;
    }

    const isEmailValid = /\S+@\S+\.\S+/.test(trimmedEmail);
    if (!isEmailValid) {
      setError("Please provide a valid email address.");
      return;
    }

    if (trimmedMessage.length < 20) {
      setError("Please add a little more context so the inquiry is easier to assess.");
      return;
    }

    if (!primaryContactEmail) {
      setSuccess(
        "Your inquiry details are complete, but the site is not connected to a live inbox yet. Add an approved business email before this page can receive real inquiries.",
      );
      return;
    }

    const subjectParts = ["Portfolio inquiry", formState.inquiryType, trimmedService || trimmedCompany].filter(Boolean);

    const bodyLines = [
      `Name: ${trimmedName}`,
      `Email: ${trimmedEmail}`,
      `Inquiry type: ${formState.inquiryType}`,
      trimmedCompany ? `Company / team: ${trimmedCompany}` : "",
      trimmedService ? `Related service: ${trimmedService}` : "",
      "",
      "Inquiry details:",
      trimmedMessage,
    ].filter(Boolean);

    const mailtoHref = `mailto:${primaryContactEmail}?subject=${encodeURIComponent(subjectParts.join(" | "))}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    window.location.href = mailtoHref;
    setSuccess("Your default mail app should open with a prefilled inquiry draft.");
  }

  const borderStyle = "1px solid var(--grid-grey)";

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        borderRadius: 24,
        border: borderStyle,
        padding: 32,
      }}
    >
      <div style={{ maxWidth: 560 }}>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--ink-secondary)",
            margin: 0,
          }}
        >
          Inquiry Form
        </p>
        <h3
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 700,
            fontSize: 24,
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            color: "var(--ink-black)",
            margin: "12px 0 0",
          }}
        >
          Outline the challenge clearly
        </h3>
        <p
          style={{
            marginTop: 14,
            fontFamily: "var(--font-sans)",
            fontSize: 14,
            lineHeight: 1.6,
            color: "var(--ink-secondary)",
          }}
        >
          Share the core issue, the systems involved, and the kind of support or collaboration you want to explore.
        </p>
        {initialService ? (
          <p
            style={{
              marginTop: 14,
              borderRadius: 16,
              border: `1px solid rgba(230,95,46,0.2)`,
              background: "rgba(230,95,46,0.06)",
              padding: "12px 16px",
              fontFamily: "var(--font-sans)",
              fontSize: 13,
              lineHeight: 1.5,
              color: "var(--ink-secondary)",
            }}
          >
            Related service prefilled:{" "}
            <span style={{ fontWeight: 600, color: "var(--ink-black)" }}>{initialService}</span>
          </p>
        ) : null}
      </div>

      <div style={{ marginTop: 28, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        <label style={{ display: "block" }}>
          <span style={{ display: "block", marginBottom: 6, fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500, color: "var(--ink-black)" }}>
            Name
          </span>
          <input
            value={formState.name}
            onChange={(event) => updateField("name", event.target.value)}
            autoComplete="name"
            style={{
              width: "100%",
              borderRadius: 14,
              border: borderStyle,
              background: "transparent",
              padding: "10px 14px",
              fontFamily: "var(--font-sans)",
              fontSize: 13,
              color: "var(--ink-black)",
              outline: "none",
              transition: "border-color 160ms ease",
            }}
          />
        </label>
        <label style={{ display: "block" }}>
          <span style={{ display: "block", marginBottom: 6, fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500, color: "var(--ink-black)" }}>
            Email
          </span>
          <input
            type="email"
            value={formState.email}
            onChange={(event) => updateField("email", event.target.value)}
            autoComplete="email"
            inputMode="email"
            style={{
              width: "100%",
              borderRadius: 14,
              border: borderStyle,
              background: "transparent",
              padding: "10px 14px",
              fontFamily: "var(--font-sans)",
              fontSize: 13,
              color: "var(--ink-black)",
              outline: "none",
              transition: "border-color 160ms ease",
            }}
          />
        </label>
        <label style={{ display: "block" }}>
          <span style={{ display: "block", marginBottom: 6, fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500, color: "var(--ink-black)" }}>
            Inquiry type
          </span>
          <select
            value={formState.inquiryType}
            onChange={(event) => updateField("inquiryType", event.target.value)}
            style={{
              width: "100%",
              borderRadius: 14,
              border: borderStyle,
              background: "transparent",
              padding: "10px 14px",
              fontFamily: "var(--font-sans)",
              fontSize: 13,
              color: "var(--ink-black)",
              outline: "none",
              transition: "border-color 160ms ease",
            }}
          >
            <option value="">Select type</option>
            <option value="Project or audit support">Project or audit support</option>
            <option value="Collaboration or embedded support">Collaboration or embedded support</option>
            <option value="Advisory or strategy conversation">Advisory or strategy conversation</option>
            <option value="Workshop or enablement">Workshop or enablement</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label style={{ display: "block" }}>
          <span style={{ display: "block", marginBottom: 6, fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500, color: "var(--ink-black)" }}>
            Company / team
          </span>
          <input
            value={formState.company}
            onChange={(event) => updateField("company", event.target.value)}
            autoComplete="organization"
            style={{
              width: "100%",
              borderRadius: 14,
              border: borderStyle,
              background: "transparent",
              padding: "10px 14px",
              fontFamily: "var(--font-sans)",
              fontSize: 13,
              color: "var(--ink-black)",
              outline: "none",
              transition: "border-color 160ms ease",
            }}
          />
        </label>
        <label style={{ display: "block", gridColumn: "span 2" }}>
          <span style={{ display: "block", marginBottom: 6, fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500, color: "var(--ink-black)" }}>
            Related service (optional)
          </span>
          <input
            value={formState.service}
            onChange={(event) => updateField("service", event.target.value)}
            style={{
              width: "100%",
              borderRadius: 14,
              border: borderStyle,
              background: "transparent",
              padding: "10px 14px",
              fontFamily: "var(--font-sans)",
              fontSize: 13,
              color: "var(--ink-black)",
              outline: "none",
              transition: "border-color 160ms ease",
            }}
          />
        </label>
      </div>

      <label style={{ marginTop: 20, display: "block" }}>
        <span style={{ display: "block", marginBottom: 6, fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500, color: "var(--ink-black)" }}>
          What do you need help with?
        </span>
        <textarea
          value={formState.message}
          onChange={(event) => updateField("message", event.target.value)}
          rows={5}
          placeholder="Briefly describe the challenge, the platforms or systems involved, and the next step you want to explore."
          style={{
            width: "100%",
            borderRadius: 16,
            border: borderStyle,
            background: "transparent",
            padding: "12px 14px",
            fontFamily: "var(--font-sans)",
            fontSize: 13,
            color: "var(--ink-black)",
            outline: "none",
            transition: "border-color 160ms ease",
            resize: "vertical",
          }}
        />
      </label>

      {error ? (
        <p style={{ marginTop: 16, fontFamily: "var(--font-sans)", fontSize: 13, color: "#d32f2f" }}>{error}</p>
      ) : null}
      {success ? (
        <p style={{ marginTop: 16, fontFamily: "var(--font-sans)", fontSize: 13, color: "#2e7d32" }}>{success}</p>
      ) : null}

      <p
        style={{
          marginTop: 14,
          fontFamily: "var(--font-sans)",
          fontSize: 12,
          lineHeight: 1.5,
          color: "#999",
        }}
      >
        {hasLiveInquiryInbox
          ? "Submitting prepares a prefilled inquiry email in the default mail app."
          : "A live inbox has not been configured yet, so the current form validates inquiry details but does not send them anywhere."}
      </p>

      <button
        type="submit"
        className="btn-edit btn-edit--primary"
        style={{ marginTop: 20 }}
      >
        {submitLabel}
      </button>
    </form>
  );
}
