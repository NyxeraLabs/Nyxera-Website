import Link from 'next/link';

export function SecondaryLinkButton({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded border border-nyxera-purple/60 bg-nyxera-purple/10 px-5 py-3 text-sm font-medium uppercase tracking-[0.12em] text-nyxera-text transition hover:bg-nyxera-purple/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-nyxera-purple"
    >
      {label}
    </Link>
  );
}
