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
            Nyxera Labs welcomes coordinated vulnerability disclosure that strengthens the security of our systems, products, and
            users.
          </p>
          <p>
            We support responsible research conducted in good faith and in accordance with applicable laws and industry best
            practices.
          </p>
          <p>We ask researchers to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Avoid privacy-impacting actions</li>
            <li>Avoid service disruption or denial-of-service testing</li>
            <li>Avoid accessing or modifying data beyond minimal proof-of-concept validation</li>
            <li>Refrain from public disclosure prior to coordinated resolution</li>
          </ul>
        </SectionCard>

        <SectionCard title="How to Report a Vulnerability">
          <p>Please submit security reports to:</p>
          <p>
            <a href="mailto:security@nyxera.cloud" className="break-all text-nyxera-electric hover:text-nyxera-text">
              security@nyxera.cloud
            </a>
          </p>
          <p>Include the following details:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Affected asset or component</li>
            <li>Severity assessment (if available)</li>
            <li>Potential impact</li>
            <li>Clear reproduction steps</li>
            <li>Supporting technical evidence</li>
          </ul>
          <p>For urgent escalation matters, you may also contact:</p>
          <p>
            <a href="mailto:founder@nyxera.cloud" className="break-all text-nyxera-electric hover:text-nyxera-text">
              founder@nyxera.cloud
            </a>
          </p>
        </SectionCard>

        <SectionCard title="Encryption &amp; Secure Communication">
          <p>
            If your report contains sensitive technical details, we strongly recommend encrypting your message using our
            published PGP key before transmission.
          </p>
          <p>
            PGP Public Key:{' '}
            <Link href="/.well-known/pgp-key.txt" className="text-nyxera-electric hover:text-nyxera-text">
              /.well-known/pgp-key.txt
            </Link>
          </p>
          <p>Researchers may request an alternate encrypted communication channel if required.</p>
        </SectionCard>

        <SectionCard title="Security Response Expectations">
          <p>We are committed to transparent and timely communication.</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Initial acknowledgment target: within 72 hours</li>
            <li>Validation and triage: typically within 5 business days</li>
            <li>Status updates: provided as material progress is made</li>
            <li>Resolution disclosure: coordinated upon remediation</li>
          </ul>
          <p>Complex cases may require extended timelines depending on scope and system impact.</p>
        </SectionCard>

        <SectionCard title="Security Resources">
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
              Privacy Policy
            </Link>
          </p>
        </SectionCard>

        <SectionCard title="Security Contact Form">
          <p className="text-xs text-nyxera-subtext sm:text-sm">
            This static form opens your email client and prepares a pre-addressed message to:
          </p>
          <p>
            <a href="mailto:security@nyxera.cloud" className="break-all text-nyxera-electric hover:text-nyxera-text">
              security@nyxera.cloud
            </a>
          </p>
          <p className="text-xs text-nyxera-subtext sm:text-sm">
            The template includes structured reporting fields to assist triage.
          </p>
          <p className="text-xs text-nyxera-subtext sm:text-sm">Attachments:</p>
          <p className="text-xs text-nyxera-subtext sm:text-sm">
            If supporting files are required, please share them through an encrypted channel.
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
