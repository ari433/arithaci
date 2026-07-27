const stats = [
  { value: "17", label: "Years alive" },
  { value: "1", label: "Company founded" },
  { value: "20+", label: "Countries stamped" },
  { value: "∞", label: "Lessons still coming" },
];

export function StatsStrip() {
  return (
    <section className="border-y border-border">
      <div className="container-editorial grid grid-cols-2 divide-x divide-y divide-border sm:grid-cols-4 sm:divide-y-0">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1 px-6 py-10 text-center sm:px-4">
            <span className="font-display text-4xl italic text-foreground md:text-5xl">
              {stat.value}
            </span>
            <span className="text-xs uppercase tracking-wider text-muted-foreground">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
