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
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 pb-8 pt-16 sm:pt-20">
        <SectionCard title="General Contact">
          <p>
            For all inquiries, email{' '}
            <a href="mailto:founder@nyxera.cloud" className="text-nyxera-electric hover:text-nyxera-text">
              founder@nyxera.cloud
            </a>{' '}
            or use the form below.
          </p>
        </SectionCard>

        <SectionCard title="Contact Form">
          <p className="text-sm text-nyxera-subtext">
            This static form opens your email client and prepares a message addressed to founder@nyxera.cloud.
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
