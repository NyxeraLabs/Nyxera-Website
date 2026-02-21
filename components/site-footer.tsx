import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="mt-14 border-t border-nyxera-subtext/20 sm:mt-16 lg:mt-20">
      <div className="mx-auto grid w-full max-w-6xl gap-4 px-4 py-6 text-xs text-nyxera-subtext sm:grid-cols-2 sm:px-6 sm:py-8 sm:text-sm lg:max-w-[1800px] lg:px-8 3xl:px-12 3xl:text-base 4xl:max-w-[2200px] 4xl:px-16">
        <div className="space-y-1">
          <p>
            <span className="text-nyxera-text">Founder:</span>{' '}
            <a className="break-all hover:text-nyxera-electric" href="mailto:founder@nyxera.cloud">
              founder@nyxera.cloud
            </a>
          </p>
          <p>
            <span className="text-nyxera-text">Security:</span>{' '}
            <a className="break-all hover:text-nyxera-electric" href="mailto:security@nyxera.cloud">
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
