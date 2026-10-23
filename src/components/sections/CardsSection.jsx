export function CardsSection() {
  return (
    <section>
      <SectionHeading>Cards</SectionHeading>
      <div className="space-y-6">

        {/* Basic cards */}
        <div>
          <h3 className="text-xs font-semibold text-on-surface-secondary uppercase tracking-widest mb-4">Basic</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Simple */}
            <div className="bg-surface-raised border border-border rounded-xl p-5">
              <h4 className="text-base font-semibold text-on-surface mb-1">Card Title</h4>
              <p className="text-sm text-on-surface-secondary">A simple card with a title and body text showing the surface-raised background.</p>
            </div>

            {/* With badge */}
            <div className="bg-surface-raised border border-border rounded-xl p-5">
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-base font-semibold text-on-surface">Status Card</h4>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-success-surface text-success">Active</span>
              </div>
              <p className="text-sm text-on-surface-secondary">Cards can carry status badges in the header area.</p>
            </div>

            {/* Sunken inner area */}
            <div className="bg-surface-raised border border-border rounded-xl p-5">
              <h4 className="text-base font-semibold text-on-surface mb-3">With Inner Section</h4>
              <div className="bg-surface-sunken rounded-lg p-3 text-sm text-on-surface-secondary">
                This inner area uses <code className="font-mono text-xs">bg-surface-sunken</code> to create depth within the card.
              </div>
            </div>
          </div>
        </div>

        {/* Stats cards */}
        <div>
          <h3 className="text-xs font-semibold text-on-surface-secondary uppercase tracking-widest mb-4">Stats / Metric</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Total Users', value: '12,430', delta: '+8.2%', color: 'success' },
              { label: 'Active Sessions', value: '1,029', delta: '+2.4%', color: 'info' },
              { label: 'Error Rate', value: '0.4%', delta: '+0.1%', color: 'error' },
              { label: 'Avg. Load Time', value: '1.2s', delta: '−0.3s', color: 'success' },
            ].map(({ label, value, delta, color }) => (
              <div key={label} className="bg-surface-raised border border-border rounded-xl p-4">
                <p className="text-xs font-medium text-on-surface-secondary mb-1">{label}</p>
                <p className="text-2xl font-bold text-on-surface">{value}</p>
                <p className={`text-xs font-medium mt-1 text-${color}`}>{delta}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Actionable card */}
        <div>
          <h3 className="text-xs font-semibold text-on-surface-secondary uppercase tracking-widest mb-4">Actionable</h3>
          <div className="bg-surface-raised border border-border rounded-xl overflow-hidden">
            <div className="p-6">
              <h4 className="text-lg font-semibold text-on-surface">Deploy to Production</h4>
              <p className="text-sm text-on-surface-secondary mt-1">
                This will publish all staged changes to the live environment. Review your changes before proceeding.
              </p>
            </div>
            <div className="border-t border-border bg-surface-sunken px-6 py-4 flex items-center justify-end gap-3">
              <button className="px-4 py-2 rounded-lg border border-border text-on-surface text-sm font-medium hover:bg-surface-raised transition-colors">
                Cancel
              </button>
              <button className="px-4 py-2 rounded-lg bg-primary text-on-primary text-sm font-medium hover:bg-primary-hover transition-colors">
                Deploy
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function SectionHeading({ children }) {
  return (
    <h2 className="text-2xl font-bold text-on-surface mb-6 pb-3 border-b border-border">
      {children}
    </h2>
  );
}
