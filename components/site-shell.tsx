'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import logoTransp from '@/assets/images/NyxeraLogo-transp.png';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/security', label: 'Security' },
  { href: '/security-policy', label: 'Privacy Policy' },
  { href: 'https://spectrastrike.nyxera.cloud', label: 'SpectraStrike' },
  { href: 'https://vectorvue.nyxera.cloud', label: 'VectorVue' },
  { href: 'https://nyxera-nexus.nyxera.cloud', label: 'Nyxera Nexus' },
  { href: 'https://docs.spectrastrike.nyxera.cloud', label: 'Spectra Docs' },
  { href: 'https://docs.vectorvue.nyxera.cloud', label: 'VectorVue Docs' },
  { href: 'https://docs.nyxera-nexus.nyxera.cloud', label: 'Nexus Docs' },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="border-b border-nyxera-subtext/20 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-3 sm:px-6 lg:max-w-[1800px] lg:flex-row lg:items-center lg:justify-between lg:px-8 3xl:px-12 4xl:max-w-[2200px] 4xl:px-16">
          <Link
            href="/"
            className="flex items-center gap-3 self-start"
            aria-label="Nyxera Labs Home"
            onClick={() => setMenuOpen(false)}
          >
            <Image src={logoTransp} alt="Nyxera Labs logo" priority className="h-10 w-auto sm:h-12 lg:h-14 3xl:h-16" />
            <span className="font-orbitron text-sm font-bold uppercase tracking-[0.18em] text-nyxera-text sm:text-base 3xl:text-lg">
              Nyxera Labs
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="self-end rounded border border-nyxera-electric/40 bg-nyxera-bg/80 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.12em] text-nyxera-electric transition hover:border-nyxera-electric hover:bg-nyxera-electric/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-nyxera-electric lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="primary-nav"
          >
            Menu
          </button>
          <nav
            id="primary-nav"
            aria-label="Primary"
            className={`${menuOpen ? 'grid' : 'hidden'} w-full grid-cols-2 gap-2 text-xs text-nyxera-subtext xs:grid-cols-3 sm:text-sm lg:grid lg:w-auto lg:auto-cols-max lg:grid-flow-col lg:justify-end lg:gap-3 3xl:text-base`}
          >
            {navItems.map((item) => {
              const isExternal = item.href.startsWith('http');
              const className = `rounded border px-2 py-1.5 text-center transition focus:outline-none focus-visible:ring-2 focus-visible:ring-nyxera-electric ${
                pathname === item.href
                  ? 'border-nyxera-electric/50 bg-nyxera-electric/10 text-nyxera-electric'
                  : 'border-nyxera-subtext/20 text-nyxera-subtext hover:border-nyxera-electric/40 hover:bg-nyxera-electric/10 hover:text-nyxera-text'
              }`;
              if (isExternal) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className={className}
                  >
                    {item.label}
                  </a>
                );
              }
              return (
                <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className={className}>
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
}
