import { type Metadata } from 'next';
import Image from 'next/image';
import { SecondaryLinkButton } from '@/components/buttons';
import { SectionCard } from '@/components/section-card';
import { SiteFooter } from '@/components/site-footer';
import { SiteShell } from '@/components/site-shell';
import heroBanner from '@/assets/images/NyxeraHero.png';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Home',
  description: 'Enterprise security validation infrastructure for continuous assurance, detection engineering, and defensible evidence.',
  path: '/',
});

export default function HomePage() {
  return (
    <SiteShell>
      <div className="mx-auto w-full max-w-6xl px-4 pb-8 pt-4 sm:px-6 sm:pt-6 lg:px-8 lg:pt-8 3xl:max-w-[1800px] 3xl:px-12 4xl:max-w-[2200px] 4xl:px-16">
        <section className="relative overflow-hidden rounded-xl border border-nyxera-subtext/20 shadow-glow">
          <Image
            src={heroBanner}
            alt="Nyxera Labs security assurance hero banner"
            priority
            className="h-[clamp(22rem,66svh,40rem)] w-full object-cover object-center lg:h-[clamp(24rem,70svh,42rem)]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f2d]/95 via-[#0a0f2d]/85 to-[#0a0f2d]/55" />
          <div className="absolute inset-0 flex flex-col justify-center p-5 sm:p-8 lg:p-12 3xl:p-16">
            <h1 className="max-w-5xl font-orbitron text-2xl font-bold uppercase leading-tight text-nyxera-text sm:text-4xl lg:text-5xl 3xl:text-6xl">
              Enterprise Security Validation Infrastructure
            </h1>
            <p className="mt-4 max-w-4xl text-sm leading-relaxed text-nyxera-subtext sm:mt-6 sm:text-base lg:text-lg 3xl:text-xl">
              Nyxera Labs engineers infrastructure-grade security validation across offensive execution, telemetry intelligence,
              and federated assurance workflows, producing measurable evidence for engineering leadership, security operations, and
              audit stakeholders.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
              <SecondaryLinkButton href="/contact" label="Request Executive Briefing" />
              <SecondaryLinkButton href="/contact#validation-program" label="Initiate Validation Program" />
            </div>
          </div>
        </section>

        <section id="products" className="mt-8 sm:mt-10 3xl:mt-12">
          <h2 className="text-xl font-semibold uppercase tracking-[0.12em] text-nyxera-text sm:text-2xl">Three Core Products</h2>
          <div className="mt-4 grid gap-4 sm:gap-6 lg:grid-cols-3 3xl:gap-8">
            <SectionCard title="SpectraStrike">
              <p>Operational execution fabric for policy-bound offensive validation with attested wrappers, cryptographic provenance, and deterministic control enforcement.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="https://spectrastrike.nyxera.cloud" className="rounded border border-nyxera-electric/50 px-3 py-2 text-xs uppercase tracking-[0.1em] text-nyxera-electric">Product</a>
                <a href="https://docs.spectrastrike.nyxera.cloud" className="rounded border border-nyxera-electric/50 px-3 py-2 text-xs uppercase tracking-[0.1em] text-nyxera-electric">Docs</a>
              </div>
            </SectionCard>
            <SectionCard title="VectorVue">
              <p>Evidence intelligence platform for telemetry normalization, correlation analytics, and lifecycle governance across continuous validation programs.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="https://vectorvue.nyxera.cloud" className="rounded border border-nyxera-electric/50 px-3 py-2 text-xs uppercase tracking-[0.1em] text-nyxera-electric">Product</a>
                <a href="https://docs.vectorvue.nyxera.cloud" className="rounded border border-nyxera-electric/50 px-3 py-2 text-xs uppercase tracking-[0.1em] text-nyxera-electric">Docs</a>
              </div>
            </SectionCard>
            <SectionCard title="Nyxera Nexus">
              <p>Federation control plane that unifies execution evidence and validation analytics into a single enterprise assurance operating model.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="https://nexus.nyxera.cloud" className="rounded border border-nyxera-electric/50 px-3 py-2 text-xs uppercase tracking-[0.1em] text-nyxera-electric">Product</a>
                <a href="https://docs.nexus.nyxera.cloud" className="rounded border border-nyxera-electric/50 px-3 py-2 text-xs uppercase tracking-[0.1em] text-nyxera-electric">Docs</a>
              </div>
            </SectionCard>
          </div>
        </section>

        <section id="solutions" className="mt-8 sm:mt-10 3xl:mt-12">
          <h2 className="text-xl font-semibold uppercase tracking-[0.12em] text-nyxera-text sm:text-2xl">Platform-Backed Validation</h2>
          <div className="mt-4 grid gap-4 sm:gap-6 lg:grid-cols-3 3xl:gap-8">
            <SectionCard title="Continuous Adversary Validation">
              <p>
                Execute threat-realistic adversary paths through SpectraStrike, validate detections in VectorVue, and operationalize corrective action through Nexus.
              </p>
            </SectionCard>
            <SectionCard title="Detection Engineering Infrastructure">
              <p>
                Convert execution telemetry into governed detection improvement loops, coverage scoring, and repeatable assurance quality gates.
              </p>
            </SectionCard>
            <SectionCard title="Evidence-Grade Governance Reporting">
              <p>
                Produce auditable evidence streams aligned to NIST, ISO 27001, and SOC 2 with executive-facing reporting and defensible chain of custody.
              </p>
            </SectionCard>
          </div>
        </section>

        <section id="what-we-do" className="mt-8 sm:mt-10 3xl:mt-12">
          <h2 className="text-xl font-semibold uppercase tracking-[0.12em] text-nyxera-text sm:text-2xl">Security Infrastructure Engineering Outcomes</h2>
          <div className="mt-4 grid gap-4 sm:gap-6 lg:grid-cols-3 3xl:gap-8">
            <SectionCard title="1. Adversary Path Validation">
              <p>
                We emulate relevant threat actors across realistic attack paths to measure control performance under operational pressure, not theoretical checklists.
              </p>
            </SectionCard>
            <SectionCard title="2. Detection &amp; Response Effectiveness Engineering">
              <p>
                We validate telemetry coverage, detection logic, escalation workflows, and response performance to quantify enterprise operational readiness.
              </p>
            </SectionCard>
            <SectionCard title="3. Evidence-Grade Assurance &amp; Compliance Alignment">
              <p>
                We convert adversary activity into defensible assurance evidence mapped to NIST, ISO 27001, and SOC 2 control frameworks.
              </p>
            </SectionCard>
          </div>
        </section>

        <section className="mt-8 sm:mt-10 3xl:mt-12">
          <SectionCard title="Why Nyxera">
            <p>
              Nyxera Labs is an enterprise security infrastructure engineering company focused on deterministic validation, measurable outcomes, and defensible assurance.
            </p>
            <p>We do not deliver commodity pentest outputs or one-off engagement artifacts.</p>
            <p>
              We design platform-backed validation programs that measure detection effectiveness, control reliability, and organizational response under controlled adversarial conditions.
            </p>
            <p className="font-medium uppercase tracking-[0.12em] text-nyxera-text">What differentiates us:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Threat-realistic adversary path modeling at infrastructure scale</li>
              <li>Detection effectiveness scoring with iterative assurance loops</li>
              <li>Executive-ready security posture articulation</li>
              <li>Compliance-aligned technical evidence with provenance</li>
              <li>Structured continuous validation cycles instead of one-off engagements</li>
            </ul>
          </SectionCard>
        </section>

        <section className="mt-8 sm:mt-10 3xl:mt-12">
          <h2 className="text-xl font-semibold uppercase tracking-[0.12em] text-nyxera-text sm:text-2xl">
            How We Deliver Assurance
          </h2>
          <div className="mt-4 grid gap-4 sm:gap-6 md:grid-cols-2 3xl:gap-8">
            <SectionCard title="1. Threat &amp; Business Alignment">
              <p>
                We identify business-critical assets, realistic threat actors, and assurance objectives in coordination with security, engineering, and compliance leadership.
              </p>
            </SectionCard>
            <SectionCard title="2. Structured Adversary Emulation">
              <p>We execute mapped adversary paths under controlled operational parameters with policy-bound instrumentation.</p>
            </SectionCard>
            <SectionCard title="3. Detection Engineering &amp; Iteration">
              <p>
                We validate detection logic, improve telemetry coverage, and measure improvement cycles through iterative testing and evidence scoring.
              </p>
            </SectionCard>
            <SectionCard title="4. Executive &amp; Audit-Ready Reporting">
              <p>
                We deliver defensible documentation, measurable validation outcomes, and structured compliance mapping for governance and audit workflows.
              </p>
            </SectionCard>
          </div>
        </section>

        <section className="mt-8 sm:mt-10 3xl:mt-12">
          <SectionCard title="Powered by VectorVue™">
            <p>
              Every Nyxera validation program is executed on VectorVue™, our proprietary enterprise validation infrastructure platform.
            </p>
            <p className="font-medium uppercase tracking-[0.12em] text-nyxera-text">VectorVue enables:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Adversary-path modeling</li>
              <li>Detection effectiveness tracking</li>
              <li>Multi-cycle validation management</li>
              <li>Evidence lifecycle documentation</li>
              <li>Signed audit-ready exports</li>
              <li>Multi-tenant client portals</li>
            </ul>
            <p>This ensures consistency, repeatability, and defensible assurance across multi-cycle enterprise engagements.</p>
            <a
              href="https://vectorvue.nyxera.cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded border border-nyxera-electric/60 bg-nyxera-electric/10 px-5 py-3 text-center text-xs font-medium uppercase tracking-[0.12em] text-nyxera-electric transition hover:bg-nyxera-electric/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-nyxera-electric sm:w-auto sm:text-sm 3xl:text-base"
            >
              Explore VectorVue →
            </a>
          </SectionCard>
        </section>

        <section className="mt-8 sm:mt-10 3xl:mt-12">
          <SectionCard title="Move beyond activity-based security.">
            <p>
              Validate what your defenses can detect, contain, and prove with infrastructure-backed, measurable, and defensible assurance.
            </p>
            <SecondaryLinkButton href="/contact" label="Book a Confidential Consultation" />
          </SectionCard>
        </section>
      </div>
      <SiteFooter />
    </SiteShell>
  );
}
