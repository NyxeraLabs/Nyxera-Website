'use client';

import { FormEvent } from 'react';
import { InputField, TextareaField } from '@/components/form-fields';

export function SecurityMailtoForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('reporter-name') ?? '').trim();
    const email = String(formData.get('reporter-email') ?? '').trim();
    const summary = String(formData.get('summary') ?? '').trim();
    const details = String(formData.get('details') ?? '').trim();
    const steps = String(formData.get('steps') ?? '').trim();

    const subject = encodeURIComponent(`Security Report - ${summary || 'New Submission'}`);
    const body = encodeURIComponent(
      `Reporter: ${name}\nEmail: ${email}\n\nVulnerability Summary:\n${summary}\n\nDetailed Description:\n${details}\n\nSteps To Reproduce:\n${steps}\n\nOptional attachments note: share supporting files through an encrypted channel.`
    );

    window.location.href = `mailto:security@nyxera.cloud?subject=${subject}&body=${body}`;
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <InputField id="reporter-name" label="Name" required placeholder="Your name" autoComplete="name" />
      <InputField id="reporter-email" label="Email" type="email" required placeholder="you@domain.com" autoComplete="email" />
      <InputField id="summary" label="Vulnerability summary" required placeholder="One-line summary" autoComplete="off" />
      <TextareaField
        id="details"
        label="Detailed description"
        required
        rows={6}
        placeholder="Describe the vulnerability, impact, and observed behavior"
        autoComplete="off"
      />
      <TextareaField id="steps" label="Steps to reproduce" required rows={5} placeholder="1. Navigate to..." autoComplete="off" />
      <p className="text-xs text-nyxera-subtext sm:text-sm">
        Optional attachments note: share supporting files through an encrypted channel.
      </p>
      <button
        type="submit"
        className="w-full rounded border border-nyxera-electric/60 bg-nyxera-electric/10 px-5 py-3 text-center text-xs font-medium uppercase tracking-[0.12em] text-nyxera-electric transition hover:bg-nyxera-electric/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-nyxera-electric sm:w-auto sm:text-sm 3xl:text-base"
      >
        Send To security@nyxera.cloud
      </button>
    </form>
  );
}
