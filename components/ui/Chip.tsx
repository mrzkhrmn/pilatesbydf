"use client";

type ChipProps = {
  label: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
};

export function Chip({ label, active = false, onClick, className = "" }: ChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-6 py-2 rounded-full font-label-sm text-label-sm uppercase tracking-widest transition-all ${
        active
          ? "bg-primary text-on-primary"
          : "bg-surface-container-high text-on-secondary-container hover:bg-secondary-container"
      } ${className}`}
    >
      {label}
    </button>
  );
}

export function ChipGroup({
  items,
  activeIndex,
  onChange,
  className = "",
}: {
  items: string[];
  activeIndex: number;
  onChange: (index: number) => void;
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {items.map((item, index) => (
        <Chip
          key={item}
          label={item}
          active={activeIndex === index}
          onClick={() => onChange(index)}
        />
      ))}
    </div>
  );
}
