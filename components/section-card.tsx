export function SectionCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-lg border border-nyxera-subtext/20 bg-[#0f173e]/60 p-6 shadow-glow">
      <h2 className="font-orbitron text-lg font-bold uppercase tracking-[0.16em] text-nyxera-text">{title}</h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-nyxera-subtext">{children}</div>
    </section>
  );
}
