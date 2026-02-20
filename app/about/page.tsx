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
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 pb-8 pt-16 sm:pt-20">
        <SectionCard title="Mission">
          <p>
            Build durable software infrastructure that can be trusted under pressure, audited with confidence, and maintained over
            long operational cycles.
          </p>
        </SectionCard>

        <SectionCard title="Vision">
          <p>
            A future where high-assurance systems are easier to design, operate, and evolve through infrastructure-first software
            engineering.
          </p>
        </SectionCard>

        <SectionCard title="Founder">
          <p className="text-nyxera-text">Jose Maria Micoli</p>
          <p>Founder &amp; Systems Architect</p>
        </SectionCard>
      </div>
      <SiteFooter />
    </SiteShell>
  );
}
