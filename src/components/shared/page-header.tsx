import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <div className="container-editorial pb-16 pt-20 md:pt-28">
      <span className="text-xs uppercase tracking-wider text-muted-foreground">{eyebrow}</span>
      <h1 className="text-hero font-display mt-3 italic text-foreground">{title}</h1>
      {description && (
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">{description}</p>
      )}
      {children}
    </div>
  );
}
