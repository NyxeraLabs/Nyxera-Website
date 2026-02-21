import { type Metadata } from 'next';
import { SectionCard } from '@/components/section-card';
import { SiteFooter } from '@/components/site-footer';
import { SiteShell } from '@/components/site-shell';
import { buildMetadata } from '@/lib/metadata';

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: 'About',
    description: 'Learn about Nyxera Labs mission, vision, and founder leadership.',
    path: '/about',
  });
}

export default function AboutPage() {
  return (
    <SiteShell>
      <div className="page-container grid gap-4 sm:gap-6 3xl:gap-8">
        <SectionCard title="Mission">
          <p>
            Build durable security and software infrastructure that can be trusted under pressure, audited with confidence, and
            sustained across long operational lifecycles.
          </p>
          <p>
            We engineer systems designed to operate in real environments — not theoretical ones.
          </p>
        </SectionCard>

        <SectionCard title="Vision">
          <p>
            A future where high-assurance systems are easier to design, validate, and evolve through infrastructure-first
            security engineering.
          </p>
          <p>
            Security should be measurable, structurally embedded, and continuously verifiable.
          </p>
        </SectionCard>

        <SectionCard title="Founder">
          <p className="text-nyxera-text">Jose Maria Micoli</p>
          <p>Founder &amp; Principal Offensive Security Engineer</p>
          <p>Creator of VectorVue</p>
          <p>
            Jose Maria Micoli is an offensive security engineer and infrastructure-focused builder working at the intersection of
            adversary emulation and security validation.
          </p>
          <p>
            He founded Nyxera Labs to transform offensive security from report-driven engagements into structured,
            infrastructure-backed assurance systems.
          </p>
          <p>
            His work centers on building durable validation mechanisms that scale — not one-off assessments.
          </p>
        </SectionCard>
      </div>
      <SiteFooter />
    </SiteShell>
  );
}
