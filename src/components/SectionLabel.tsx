const SectionLabel = ({ label, className = "" }: { label: string; className?: string }) => (
  <div className={`flex items-center gap-4 ${className}`}>
    <div className="h-px w-8 shimmer-gold" />
    <span className="text-xs md:text-sm tracking-[0.4em] uppercase font-body text-primary font-medium">
      {label}
    </span>
    <div className="h-px w-8 shimmer-gold" />
  </div>
);

export default SectionLabel;
