import Link from 'next/link';
import Image from 'next/image';
import logoTransp from '@/assets/images/NyxeraLogo-transp.png';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/security', label: 'Security' },
  { href: '/security-policy', label: 'Security Policy' },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="border-b border-nyxera-subtext/20 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-3">
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="Nyxera Labs Home"
          >
            <Image src={logoTransp} alt="Nyxera Labs logo" priority className="h-12 w-auto sm:h-14" />
            <span className="font-orbitron text-base font-bold uppercase tracking-[0.22em] text-nyxera-text">Nyxera Labs</span>
          </Link>
          <nav aria-label="Primary" className="flex flex-wrap items-center gap-3 text-sm text-nyxera-subtext">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="rounded px-2 py-1 hover:text-nyxera-electric focus:outline-none focus-visible:ring-2 focus-visible:ring-nyxera-electric">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
}
