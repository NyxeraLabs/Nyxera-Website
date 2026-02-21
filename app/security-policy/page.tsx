import { type Metadata } from 'next';
import { SectionCard } from '@/components/section-card';
import { SiteFooter } from '@/components/site-footer';
import { SiteShell } from '@/components/site-shell';
import { buildMetadata } from '@/lib/metadata';

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: 'Security Policy',
    description: 'Nyxera Labs security policy with disclosure process and reporting guidelines.',
    path: '/security-policy',
  });
}

export default function SecurityPolicyPage() {
  return (
    <SiteShell>
      <div className="page-container grid gap-4 sm:gap-6 3xl:gap-8">
        <SectionCard title="Scope">
          <p>
            This policy applies to Nyxera Labs web properties and cloud-hosted services that are explicitly identified as owned and
            operated by Nyxera Labs.
          </p>
        </SectionCard>

        <SectionCard title="Safe Harbor">
          <p>
            Nyxera Labs will not pursue legal action against security researchers who act in good faith, avoid service disruption,
            and follow this policy while testing systems in scope.
          </p>
        </SectionCard>

        <SectionCard title="Reporting Guidelines">
          <p>Provide concise reproduction steps, impact summary, and potential remediation direction where possible.</p>
          <p>Use encrypted communication for sensitive findings or exploit material.</p>
        </SectionCard>

        <SectionCard title="Response Timeline">
          <p>Receipt acknowledgment: target within 72 hours.</p>
          <p>Triage and severity classification: target within 5 business days.</p>
          <p>Remediation timing depends on impact, exploitability, and deployment constraints.</p>
        </SectionCard>

        <SectionCard title="Disclosure Process">
          <p>
            We coordinate disclosure with reporters and affected stakeholders. Public disclosure is expected after a fix is available
            or when risk can be responsibly communicated.
          </p>
        </SectionCard>

        <SectionCard title="Non-Legal Disclaimer">
          <p>
            This policy is provided for operational guidance and does not create contractual rights or modify legal obligations.
          </p>
        </SectionCard>
      </div>
      <SiteFooter />
    </SiteShell>
  );
}
