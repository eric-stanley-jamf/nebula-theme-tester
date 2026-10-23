const STATUSES = [
  { key: 'success', label: 'Success' },
  { key: 'warning', label: 'Warning' },
  { key: 'error',   label: 'Error' },
  { key: 'info',    label: 'Info' },
];

export function BadgesSection() {
  return (
    <section>
      <SectionHeading>Badges</SectionHeading>
      <div className="space-y-6">

        {/* Filled */}
        <Card title="Filled">
          <div className="flex flex-wrap gap-3">
            {STATUSES.map(({ key, label }) => (
              <span
                key={key}
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-${key} text-on-${key}`}
              >
                {label}
              </span>
            ))}
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-border text-on-surface">
              Neutral
            </span>
          </div>
        </Card>

        {/* Subtle (surface tint) */}
        <Card title="Subtle">
          <div className="flex flex-wrap gap-3">
            {STATUSES.map(({ key, label }) => (
              <span
                key={key}
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-${key}-surface text-${key}`}
              >
                {label}
              </span>
            ))}
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-surface-sunken text-on-surface-secondary">
              Neutral
            </span>
          </div>
        </Card>

        {/* Outline */}
        <Card title="Outline">
          <div className="flex flex-wrap gap-3">
            {STATUSES.map(({ key, label }) => (
              <span
                key={key}
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium border border-${key} text-${key}`}
              >
                {label}
              </span>
            ))}
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium border border-border text-on-surface-secondary">
              Neutral
            </span>
          </div>
        </Card>

        {/* Sizes */}
        <Card title="Sizes">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center px-1.5 py-px rounded text-xs font-medium bg-success-surface text-success">XSmall</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-success-surface text-success">Small</span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-base font-medium bg-success-surface text-success">Medium</span>
          </div>
        </Card>

        {/* With dot indicator */}
        <Card title="With Indicator">
          <div className="flex flex-wrap gap-3">
            {STATUSES.map(({ key, label }) => (
              <span
                key={key}
                className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-sm font-medium bg-${key}-surface text-${key}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full bg-${key} inline-block`} />
                {label}
              </span>
            ))}
          </div>
        </Card>

      </div>
    </section>
  );
}

function Card({ title, children }) {
  return (
    <div className="bg-surface-raised border border-border rounded-xl p-6">
      <h3 className="text-xs font-semibold text-on-surface-secondary uppercase tracking-widest mb-4">{title}</h3>
      {children}
    </div>
  );
}

function SectionHeading({ children }) {
  return (
    <h2 className="text-2xl font-bold text-on-surface mb-6 pb-3 border-b border-border">
      {children}
    </h2>
  );
}
