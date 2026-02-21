import { type Metadata } from 'next';
import Link from 'next/link';
import { SecurityMailtoForm } from '@/components/security-mailto-form';
import { SectionCard } from '@/components/section-card';
import { SiteFooter } from '@/components/site-footer';
import { SiteShell } from '@/components/site-shell';
import { buildMetadata } from '@/lib/metadata';

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: 'Security',
    description: 'Responsible disclosure channel and security reporting workflow for Nyxera Labs.',
    path: '/security',
  });
}

export default function SecurityPage() {
  return (
    <SiteShell>
      <div className="page-container grid gap-4 sm:gap-6 3xl:gap-8">
        <SectionCard title="Responsible Disclosure">
          <p>
            Nyxera Labs welcomes coordinated vulnerability disclosure that improves user and platform security.
          </p>
          <p>
            We ask researchers to avoid privacy-impacting actions, service disruption, and any data exfiltration beyond minimal proof.
          </p>
        </SectionCard>

        <SectionCard title="How To Report Vulnerabilities">
          <p>
            Send security reports to{' '}
            <a href="mailto:security@nyxera.cloud" className="break-all text-nyxera-electric hover:text-nyxera-text">
              security@nyxera.cloud
            </a>{' '}
            and include affected asset, severity estimate, impact, and reproducibility details.
          </p>
          <p>
            You can also contact{' '}
            <a href="mailto:founder@nyxera.cloud" className="break-all text-nyxera-electric hover:text-nyxera-text">
              founder@nyxera.cloud
            </a>{' '}
            when urgent escalation is required.
          </p>
        </SectionCard>

        <SectionCard title="Encryption Instructions">
          <p>
            If your report contains sensitive details, encrypt your message with our published PGP key before transmission.
          </p>
          <p>
            PGP Public Key: <Link href="/.well-known/pgp-key.txt" className="text-nyxera-electric hover:text-nyxera-text">/.well-known/pgp-key.txt</Link>
          </p>
        </SectionCard>

        <SectionCard title="Security Response Expectations">
          <p>Initial acknowledgment target: within 72 hours.</p>
          <p>Validation and triage: typically within 5 business days.</p>
          <p>Status updates: provided as material progress is made.</p>
        </SectionCard>

        <SectionCard title="Security Links">
          <p>
            <Link href="/.well-known/pgp-key.txt" className="text-nyxera-electric hover:text-nyxera-text">
              PGP Public Key
            </Link>
          </p>
          <p>
            <Link href="/.well-known/security.txt" className="text-nyxera-electric hover:text-nyxera-text">
              security.txt
            </Link>
          </p>
          <p>
            <Link href="/security-policy" className="text-nyxera-electric hover:text-nyxera-text">
              Security Policy
            </Link>
          </p>
        </SectionCard>

        <SectionCard title="Security Contact Form">
          <p className="text-xs text-nyxera-subtext sm:text-sm">
            This static form opens your email client and prepares an encrypted-report-ready message to security@nyxera.cloud.
          </p>
          <div className="mt-4">
            <SecurityMailtoForm />
          </div>
        </SectionCard>
      </div>
      <SiteFooter />
    </SiteShell>
  );
}
