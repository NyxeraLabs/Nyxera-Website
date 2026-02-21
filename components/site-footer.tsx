import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="mt-14 border-t border-nyxera-subtext/20 bg-[#0b0f14] sm:mt-16 lg:mt-20">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 text-sm text-nyxera-subtext sm:px-6 lg:max-w-[1800px] lg:px-8 3xl:px-12 4xl:max-w-[2200px] 4xl:px-16">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          <section className="space-y-3" aria-labelledby="footer-brand">
            <h2 id="footer-brand" className="font-orbitron text-sm font-bold uppercase tracking-[0.14em] text-nyxera-text">
              Nyxera Labs
            </h2>
            <p className="text-nyxera-text">Security Infrastructure Engineering</p>
            <p>Building durable security systems and infrastructure-backed assurance.</p>
          </section>

          <section className="space-y-3" aria-labelledby="footer-company">
            <h2 id="footer-company" className="text-xs font-semibold uppercase tracking-[0.12em] text-nyxera-text">
              Company
            </h2>
            <ul className="space-y-2">
              <li>
                <Link className="hover:text-nyxera-electric hover:underline" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:text-nyxera-electric hover:underline" href="/#what-we-do">
                  Services
                </Link>
              </li>
              <li>
                <a
                  className="hover:text-nyxera-electric hover:underline"
                  href="https://vectorvue.nyxera.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VectorVue
                </a>
              </li>
              <li>
                <Link className="hover:text-nyxera-electric hover:underline" href="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="hover:text-nyxera-electric hover:underline" href="/security">
                  Security
                </Link>
              </li>
            </ul>
          </section>

          <section className="space-y-3" aria-labelledby="footer-contact">
            <h2 id="footer-contact" className="text-xs font-semibold uppercase tracking-[0.12em] text-nyxera-text">
              Contact
            </h2>
            <p>
              <span className="text-nyxera-text">Founder:</span>{' '}
              <a className="break-all hover:text-nyxera-electric hover:underline" href="mailto:founder@nyxera.cloud">
                founder@nyxera.cloud
              </a>
            </p>
            <p>
              <span className="text-nyxera-text">Security:</span>{' '}
              <a className="break-all hover:text-nyxera-electric hover:underline" href="mailto:security@nyxera.cloud">
                security@nyxera.cloud
              </a>
            </p>
            <Link className="inline-block hover:text-nyxera-electric hover:underline" href="/security">
              View Security Page
            </Link>
          </section>

          <section className="space-y-3" aria-labelledby="footer-legal">
            <h2 id="footer-legal" className="text-xs font-semibold uppercase tracking-[0.12em] text-nyxera-text">
              Legal
            </h2>
            <ul className="space-y-2">
              <li>
                <Link className="hover:text-nyxera-electric hover:underline" href="/security-policy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="hover:text-nyxera-electric hover:underline" href="/terms-of-service">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </section>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-nyxera-subtext/20 pt-4 text-xs text-nyxera-subtext md:flex-row md:items-center md:justify-between">
          <p>© 2026 Nyxera Labs. All rights reserved.</p>
          <p>VectorVue is a product of Nyxera Labs.</p>
        </div>
      </div>
    </footer>
  );
}
