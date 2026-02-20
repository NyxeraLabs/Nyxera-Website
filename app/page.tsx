import { type Metadata } from 'next';
import Image from 'next/image';
import { SecondaryLinkButton } from '@/components/buttons';
import { SectionCard } from '@/components/section-card';
import { SiteFooter } from '@/components/site-footer';
import { SiteShell } from '@/components/site-shell';
import heroBanner from '@/assets/images/NyxeraHero.png';
import { buildMetadata } from '@/lib/metadata';

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: 'Home',
    description: 'Nyxera Labs builds robust software infrastructure for mission-critical systems.',
    path: '/',
  });
}

export default function HomePage() {
  return (
    <SiteShell>
      <div className="mx-auto w-full max-w-6xl px-6 pb-8 pt-16 sm:pt-20">
        <section className="relative overflow-hidden rounded-lg border border-nyxera-subtext/20 shadow-glow">
          <Image
            src={heroBanner}
            alt="Nyxera Labs infrastructure hero banner"
            priority
            className="h-[26rem] w-full object-cover sm:h-[30rem]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f2d]/95 via-[#0a0f2d]/85 to-[#0a0f2d]/55" />
          <div className="absolute inset-0 p-8 sm:p-12">
            <p className="mb-4 text-xs uppercase tracking-[0.24em] text-nyxera-electric">Nyxera Labs</p>
            <h1 className="max-w-4xl font-orbitron text-3xl font-bold uppercase leading-tight text-nyxera-text sm:text-5xl">
              ENGINEERING THE NEXT LAYER OF SOFTWARE INFRASTRUCTURE
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-nyxera-subtext sm:text-lg">
              We design resilient digital foundations for products that demand reliability, security, and operational clarity.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://vectorvue.nyxera.cloud"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded border border-nyxera-electric/60 bg-nyxera-electric/10 px-5 py-3 text-sm font-medium uppercase tracking-[0.12em] text-nyxera-electric transition hover:bg-nyxera-electric/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-nyxera-electric"
              >
                Explore VectorVue
              </a>
              <SecondaryLinkButton href="/contact" label="Contact" />
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <SectionCard title="Company Overview">
            <p>
              Nyxera Labs is focused on building technical platforms that support infrastructure-heavy organizations.
            </p>
            <p>
              Our work emphasizes deterministic behavior, transparent architecture, and secure engineering practices.
            </p>
          </SectionCard>

          <SectionCard title="Product Highlight">
            <p>
              <span className="text-nyxera-text">VectorVue</span> is our flagship platform for infrastructure observability and
              system intelligence.
            </p>
            <p>
              It brings a clear operational layer over complex systems, helping teams identify risk, bottlenecks, and service
              anomalies early.
            </p>
          </SectionCard>
        </section>
      </div>
      <SiteFooter />
    </SiteShell>
  );
}
