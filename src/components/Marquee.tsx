const words = ["FUNKPOP", "VALMEZ", "ROMSKÉ PROKLETÍ", "LIVE 2026", "MIMINATRIPU", "DIRTY FUSION"];

const Marquee = () => {
  const items = [...words, ...words];
  return (
    <div className="relative border-y border-primary/20 bg-primary/5 py-6 overflow-hidden">
      <div className="flex marquee-track whitespace-nowrap">
        {items.map((w, i) => (
          <span
            key={i}
            className="mx-8 inline-flex items-center gap-8 font-display font-bold text-3xl sm:text-5xl uppercase tracking-tighter"
          >
            <span className="text-gradient">{w}</span>
            <span className="text-primary">★</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
