import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-nyxera-subtext/20">
      <div className="mx-auto grid w-full max-w-6xl gap-4 px-6 py-8 text-sm text-nyxera-subtext sm:grid-cols-2">
        <div className="space-y-1">
          <p>
            <span className="text-nyxera-text">Founder:</span>{' '}
            <a className="hover:text-nyxera-electric" href="mailto:founder@nyxera.cloud">
              founder@nyxera.cloud
            </a>
          </p>
          <p>
            <span className="text-nyxera-text">Security:</span>{' '}
            <a className="hover:text-nyxera-electric" href="mailto:security@nyxera.cloud">
              security@nyxera.cloud
            </a>
          </p>
        </div>
        <div className="sm:text-right">
          <Link href="/security" className="text-nyxera-electric hover:text-nyxera-text">
            View Security Page
          </Link>
        </div>
      </div>
    </footer>
  );
}
