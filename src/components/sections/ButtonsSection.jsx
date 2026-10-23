export function ButtonsSection() {
  return (
    <section>
      <SectionHeading>Buttons</SectionHeading>
      <div className="space-y-6">

        {/* Variants */}
        <Card title="Variants">
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 rounded-lg bg-primary text-on-primary text-sm font-medium hover:bg-primary-hover transition-colors">
              Primary
            </button>
            <button className="px-4 py-2 rounded-lg bg-secondary text-on-secondary text-sm font-medium hover:bg-secondary-hover border border-border transition-colors">
              Secondary
            </button>
            <button className="px-4 py-2 rounded-lg border border-primary text-primary text-sm font-medium hover:bg-surface-sunken transition-colors">
              Outline
            </button>
            <button className="px-4 py-2 rounded-lg text-on-surface text-sm font-medium hover:bg-surface-sunken transition-colors">
              Ghost
            </button>
            <button className="px-4 py-2 rounded-lg bg-error text-on-error text-sm font-medium hover:opacity-90 transition-opacity">
              Destructive
            </button>
          </div>
        </Card>

        {/* Sizes */}
        <Card title="Sizes">
          <div className="flex flex-wrap items-center gap-3">
            <button className="px-2.5 py-1 rounded-md bg-primary text-on-primary text-xs font-medium hover:bg-primary-hover transition-colors">
              Small
            </button>
            <button className="px-4 py-2 rounded-lg bg-primary text-on-primary text-sm font-medium hover:bg-primary-hover transition-colors">
              Medium
            </button>
            <button className="px-5 py-2.5 rounded-xl bg-primary text-on-primary text-base font-medium hover:bg-primary-hover transition-colors">
              Large
            </button>
          </div>
        </Card>

        {/* States */}
        <Card title="States">
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 rounded-lg bg-primary text-on-primary text-sm font-medium">
              Default
            </button>
            <button className="px-4 py-2 rounded-lg bg-primary-hover text-on-primary text-sm font-medium">
              Hover (forced)
            </button>
            <button className="px-4 py-2 rounded-lg bg-primary text-on-primary text-sm font-medium outline outline-2 outline-offset-2 outline-focus-ring">
              Focused
            </button>
            <button
              disabled
              className="px-4 py-2 rounded-lg bg-surface-sunken text-on-surface-tertiary text-sm font-medium cursor-not-allowed"
            >
              Disabled
            </button>
          </div>
        </Card>

        {/* With icons (text-based placeholder) */}
        <Card title="With Icons">
          <div className="flex flex-wrap gap-3">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-on-primary text-sm font-medium hover:bg-primary-hover transition-colors">
              <span>＋</span> Add Item
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-on-surface text-sm font-medium hover:bg-surface-sunken transition-colors">
              <span>↓</span> Download
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-error text-on-error text-sm font-medium hover:opacity-90 transition-opacity">
              <span>✕</span> Delete
            </button>
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
