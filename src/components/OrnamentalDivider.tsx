const OrnamentalDivider = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center gap-4 ${className}`}>
    <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-gold/40" />
    <div className="relative">
      <div className="w-2 h-2 rotate-45 border border-gold/50" />
      <div className="absolute inset-0 w-2 h-2 rotate-45 bg-gold/20" />
    </div>
    <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-gold/40" />
  </div>
);

export default OrnamentalDivider;
