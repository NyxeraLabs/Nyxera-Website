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
      <div className="page-container">
        <section className="relative overflow-hidden rounded-xl border border-nyxera-subtext/20 shadow-glow">
          <Image
            src={heroBanner}
            alt="Nyxera Labs infrastructure hero banner"
            priority
            className="h-[clamp(22rem,56vw,46rem)] w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f2d]/95 via-[#0a0f2d]/85 to-[#0a0f2d]/55" />
          <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-8 lg:p-12 3xl:p-16">
            <p className="mb-3 text-xs uppercase tracking-[0.24em] text-nyxera-electric sm:mb-4 3xl:text-sm">Nyxera Labs</p>
            <h1 className="max-w-5xl font-orbitron text-2xl font-bold uppercase leading-tight text-nyxera-text sm:text-4xl lg:text-5xl 3xl:text-6xl 4xl:text-7xl">
              ENGINEERING THE NEXT LAYER OF SOFTWARE INFRASTRUCTURE
            </h1>
            <p className="mt-4 max-w-4xl text-sm leading-relaxed text-nyxera-subtext sm:mt-6 sm:text-base lg:text-lg 3xl:text-xl">
              We design resilient digital foundations for products that demand reliability, security, and operational clarity.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="https://vectorvue.nyxera.cloud"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded border border-nyxera-electric/60 bg-nyxera-electric/10 px-5 py-3 text-center text-xs font-medium uppercase tracking-[0.12em] text-nyxera-electric transition hover:bg-nyxera-electric/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-nyxera-electric sm:w-auto sm:text-sm 3xl:text-base"
              >
                Explore VectorVue
              </a>
              <SecondaryLinkButton href="/contact" label="Contact" />
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 md:grid-cols-2 3xl:mt-12 3xl:gap-8">
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
