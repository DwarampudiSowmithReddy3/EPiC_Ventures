const LuxuryMarquee = ({ text }: { text: string }) => {
  const repeated = Array(8).fill(text);

  return (
    <div className="relative overflow-hidden py-8 sm:py-10 border-y border-primary/8 bg-gradient-to-r from-card via-background to-card">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
      
      <div className="flex animate-marquee whitespace-nowrap">
        {repeated.concat(repeated).map((t, i) => (
          <span key={i} className="mx-8 sm:mx-14 font-elegant text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[0.15em] sm:tracking-[0.2em] uppercase text-primary/10">
            {t}
            <span className="mx-8 sm:mx-14 text-primary/20">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default LuxuryMarquee;
