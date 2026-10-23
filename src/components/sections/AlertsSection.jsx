import { useState } from 'react';

const ALERTS = [
  {
    key: 'success',
    icon: '✓',
    title: 'Changes saved',
    message: 'Your profile has been updated successfully.',
  },
  {
    key: 'warning',
    icon: '⚠',
    title: 'Review required',
    message: 'Two items in your configuration need attention before you can publish.',
  },
  {
    key: 'error',
    icon: '✕',
    title: 'Submission failed',
    message: 'Unable to connect to the server. Check your connection and try again.',
  },
  {
    key: 'info',
    icon: 'ℹ',
    title: 'Scheduled maintenance',
    message: 'The system will be unavailable from 02:00–04:00 UTC on Saturday.',
  },
];

export function AlertsSection() {
  const [dismissed, setDismissed] = useState([]);

  const dismiss = (key) => setDismissed((prev) => [...prev, key]);
  const reset = () => setDismissed([]);

  return (
    <section>
      <SectionHeading>Alerts</SectionHeading>
      <div className="space-y-6">

        {/* Banner alerts */}
        <Card title="Banner (dismissible)">
          <div className="space-y-3">
            {ALERTS.map(({ key, icon, title, message }) =>
              dismissed.includes(key) ? null : (
                <div
                  key={key}
                  className={`flex items-start gap-3 p-4 rounded-xl border bg-${key}-surface border-${key}`}
                >
                  <span className={`text-${key} text-base leading-none mt-0.5 flex-shrink-0`}>{icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-semibold text-${key}`}>{title}</p>
                    <p className="text-sm text-on-surface-secondary mt-0.5">{message}</p>
                  </div>
                  <button
                    onClick={() => dismiss(key)}
                    className="text-on-surface-tertiary hover:text-on-surface text-lg leading-none flex-shrink-0 transition-colors"
                    aria-label="Dismiss"
                  >
                    ×
                  </button>
                </div>
              )
            )}
            {dismissed.length > 0 && (
              <button
                onClick={reset}
                className="text-sm text-primary underline hover:text-primary-hover transition-colors"
              >
                Reset dismissed alerts
              </button>
            )}
          </div>
        </Card>

        {/* Inline alerts (no dismiss) */}
        <Card title="Inline (no dismiss)">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {ALERTS.map(({ key, icon, title }) => (
              <div
                key={key}
                className={`flex items-center gap-2 px-3 py-2.5 rounded-lg bg-${key}-surface`}
              >
                <span className={`text-${key} text-sm flex-shrink-0`}>{icon}</span>
                <span className={`text-sm font-medium text-${key}`}>{title}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Toast-style */}
        <Card title="Toast Style">
          <div className="space-y-2">
            {ALERTS.map(({ key, icon, title, message }) => (
              <div
                key={key}
                className="flex items-center gap-3 p-3 rounded-xl bg-surface border border-border shadow-sm"
              >
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs flex-shrink-0 bg-${key}-surface text-${key}`}
                >
                  {icon}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-on-surface leading-tight">{title}</p>
                  <p className="text-xs text-on-surface-secondary truncate">{message}</p>
                </div>
              </div>
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
