'use client';

import { FormEvent } from 'react';
import { InputField, TextareaField } from '@/components/form-fields';

export function ContactMailtoForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();

    const subject = encodeURIComponent(`Nyxera Contact - ${name || 'New Inquiry'}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:founder@nyxera.cloud?subject=${subject}&body=${body}`;
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <InputField id="name" label="Name" required placeholder="Your full name" autoComplete="name" />
      <InputField id="email" label="Email" type="email" required placeholder="you@company.com" autoComplete="email" />
      <TextareaField id="message" label="Message" required placeholder="How can we help?" autoComplete="off" />
      <button
        type="submit"
        className="rounded border border-nyxera-electric/60 bg-nyxera-electric/10 px-5 py-3 text-sm font-medium uppercase tracking-[0.12em] text-nyxera-electric transition hover:bg-nyxera-electric/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-nyxera-electric"
      >
        Send To founder@nyxera.cloud
      </button>
    </form>
  );
}
