const LuxuryMarquee = ({ text }: { text: string }) => {
  const repeated = Array(6).fill(text);

  return (
    <div className="relative overflow-hidden py-6 border-y border-gold/10 bg-charcoal-light/50">
      <div className="flex animate-marquee whitespace-nowrap">
        {repeated.concat(repeated).map((t, i) => (
          <span key={i} className="mx-12 font-elegant text-2xl md:text-3xl lg:text-4xl tracking-[0.2em] uppercase text-gold/15">
            {t}
            <span className="mx-12 text-gold/30">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default LuxuryMarquee;
