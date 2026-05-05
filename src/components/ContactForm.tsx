"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  service: "",
  message: "",
};

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!formState.name || !formState.email || !formState.message) {
      setError("Please fill in your name, email, and message.");
      return;
    }

    const isEmailValid = /\S+@\S+\.\S+/.test(formState.email);
    if (!isEmailValid) {
      setError("Please provide a valid email address.");
      return;
    }

    setSuccess(
      "Frontend validation is working. Replace this placeholder submission flow with the preferred backend or inbox workflow later.",
    );
    setFormState(initialState);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-white/10 bg-slate-950/65 p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-200">Name</span>
          <input
            value={formState.name}
            onChange={(event) =>
              setFormState((current) => ({ ...current, name: event.target.value }))
            }
            className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-300"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-200">Email</span>
          <input
            type="email"
            value={formState.email}
            onChange={(event) =>
              setFormState((current) => ({ ...current, email: event.target.value }))
            }
            className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-300"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-200">Company</span>
          <input
            value={formState.company}
            onChange={(event) =>
              setFormState((current) => ({
                ...current,
                company: event.target.value,
              }))
            }
            className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-300"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-200">
            Service needed
          </span>
          <input
            value={formState.service}
            onChange={(event) =>
              setFormState((current) => ({
                ...current,
                service: event.target.value,
              }))
            }
            className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-300"
          />
        </label>
      </div>
      <label className="mt-5 block">
        <span className="mb-2 block text-sm font-medium text-slate-200">Message</span>
        <textarea
          value={formState.message}
          onChange={(event) =>
            setFormState((current) => ({ ...current, message: event.target.value }))
          }
          rows={6}
          className="w-full rounded-3xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-300"
        />
      </label>
      {error ? <p className="mt-4 text-sm text-rose-300">{error}</p> : null}
      {success ? <p className="mt-4 text-sm text-emerald-300">{success}</p> : null}
      <button
        type="submit"
        className="mt-6 inline-flex items-center justify-center rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
      >
        Submit inquiry
      </button>
    </form>
  );
}

