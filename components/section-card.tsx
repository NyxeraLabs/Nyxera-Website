export function SectionCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-xl border border-nyxera-subtext/20 bg-[#0f173e]/60 p-4 shadow-glow sm:p-6 lg:p-7 3xl:p-8">
      <h2 className="font-orbitron text-base font-bold uppercase tracking-[0.14em] text-nyxera-text sm:text-lg 3xl:text-xl">
        {title}
      </h2>
      <div className="mt-3 space-y-3 break-words text-sm leading-relaxed text-nyxera-subtext sm:mt-4 sm:space-y-4 sm:text-base 3xl:text-lg">
        {children}
      </div>
    </section>
  );
}
