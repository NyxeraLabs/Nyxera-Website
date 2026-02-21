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
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-3 sm:px-6 lg:max-w-[1800px] lg:flex-row lg:items-center lg:justify-between lg:px-8 3xl:px-12 4xl:max-w-[2200px] 4xl:px-16">
          <Link
            href="/"
            className="flex items-center gap-3 self-start"
            aria-label="Nyxera Labs Home"
          >
            <Image src={logoTransp} alt="Nyxera Labs logo" priority className="h-10 w-auto sm:h-12 lg:h-14 3xl:h-16" />
            <span className="font-orbitron text-sm font-bold uppercase tracking-[0.18em] text-nyxera-text sm:text-base 3xl:text-lg">
              Nyxera Labs
            </span>
          </Link>
          <nav
            aria-label="Primary"
            className="grid w-full grid-cols-2 gap-2 text-xs text-nyxera-subtext xs:grid-cols-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-3 sm:text-sm lg:w-auto lg:justify-end 3xl:text-base"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded border border-transparent px-2 py-1.5 text-center hover:border-nyxera-subtext/30 hover:text-nyxera-electric focus:outline-none focus-visible:ring-2 focus-visible:ring-nyxera-electric"
              >
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
