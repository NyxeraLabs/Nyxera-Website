import { type Metadata } from 'next';
import { ContactMailtoForm } from '@/components/contact-mailto-form';
import { SectionCard } from '@/components/section-card';
import { SiteFooter } from '@/components/site-footer';
import { SiteShell } from '@/components/site-shell';
import { buildMetadata } from '@/lib/metadata';

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: 'Contact',
    description: 'Contact Nyxera Labs for general inquiries and technical collaboration.',
    path: '/contact',
  });
}

export default function ContactPage() {
  return (
    <SiteShell>
      <div className="page-container grid gap-4 sm:gap-6 3xl:gap-8">
        <SectionCard title="General Contact">
          <p>
            For all inquiries, email{' '}
            <a href="mailto:founder@nyxera.cloud" className="break-all text-nyxera-electric hover:text-nyxera-text">
              founder@nyxera.cloud
            </a>{' '}
            or use the form below.
          </p>
        </SectionCard>

        <SectionCard title="Contact Form">
          <p className="text-xs text-nyxera-subtext sm:text-sm">
            This static form opens your email client and prepares a message addressed to info@nyxera.cloud.
          </p>
          <div className="mt-4">
            <ContactMailtoForm />
          </div>
        </SectionCard>
      </div>
      <SiteFooter />
    </SiteShell>
  );
}
