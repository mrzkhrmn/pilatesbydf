export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className = "",
}: {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={`${align === "center" ? "text-center" : "text-left"} ${className}`}
    >
      <h2 className="font-display-lg text-display-lg text-primary">{title}</h2>
      {subtitle && (
        <p
          className={`text-on-surface-variant mt-md font-body-md ${
            align === "center" ? "w-[500px] mx-auto" : "w-[500px]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function PageHeader({
  title,
  description,
  badge,
  className = "",
}: {
  title: string;
  description?: string;
  badge?: string;
  className?: string;
}) {
  return (
    <header className={`mb-xl ${className}`}>
      {badge && (
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary mb-4 block">
          {badge}
        </span>
      )}
      <h1 className="font-display-lg text-display-lg text-primary mb-4 md:text-[56px] leading-tight">
        {title}
      </h1>
      {description && (
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </header>
  );
}
