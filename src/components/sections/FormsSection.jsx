import { useState } from 'react';

export function FormsSection() {
  const [checked, setChecked] = useState(false);
  const [radio, setRadio] = useState('option1');
  const [toggled, setToggled] = useState(false);

  return (
    <section>
      <SectionHeading>Form Controls</SectionHeading>
      <div className="space-y-6">

        {/* Text Inputs */}
        <Card title="Text Inputs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Default">
              <input
                type="text"
                placeholder="Placeholder text"
                className="w-full px-3 py-2 rounded-lg border border-border bg-surface-raised text-on-surface placeholder:text-on-surface-tertiary focus:outline-none focus:border-primary text-sm"
              />
            </Field>
            <Field label="With value">
              <input
                type="text"
                defaultValue="Existing value"
                className="w-full px-3 py-2 rounded-lg border border-border bg-surface-raised text-on-surface placeholder:text-on-surface-tertiary focus:outline-none focus:border-primary text-sm"
              />
            </Field>
            <Field label="Error state" hint="This field is required.">
              <input
                type="text"
                defaultValue="bad input"
                className="w-full px-3 py-2 rounded-lg border border-error bg-error-surface text-on-surface focus:outline-none focus:border-error text-sm"
              />
            </Field>
            <Field label="Disabled">
              <input
                type="text"
                disabled
                defaultValue="Cannot edit"
                className="w-full px-3 py-2 rounded-lg border border-border bg-surface-sunken text-on-surface-tertiary text-sm cursor-not-allowed"
              />
            </Field>
          </div>
        </Card>

        {/* Textarea & Select */}
        <Card title="Textarea & Select">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Textarea">
              <textarea
                rows={3}
                placeholder="Enter a description..."
                className="w-full px-3 py-2 rounded-lg border border-border bg-surface-raised text-on-surface placeholder:text-on-surface-tertiary focus:outline-none focus:border-primary text-sm resize-none"
              />
            </Field>
            <Field label="Select">
              <select className="w-full px-3 py-2 rounded-lg border border-border bg-surface-raised text-on-surface focus:outline-none focus:border-primary text-sm">
                <option value="">Choose an option…</option>
                <option value="a">Option A</option>
                <option value="b">Option B</option>
                <option value="c">Option C</option>
              </select>
            </Field>
          </div>
        </Card>

        {/* Checkboxes, Radios, Toggles */}
        <Card title="Checkbox, Radio & Toggle">
          <div className="flex flex-wrap gap-8">
            {/* Checkboxes */}
            <div className="space-y-2">
              <p className="text-xs font-semibold text-on-surface-secondary uppercase tracking-widest mb-2">Checkbox</p>
              {['Checked', 'Unchecked', 'Disabled'].map((label, i) => (
                <label key={label} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    disabled={i === 2}
                    defaultChecked={i === 0}
                    className="w-4 h-4 accent-primary"
                  />
                  <span className={`text-sm ${i === 2 ? 'text-on-surface-tertiary' : 'text-on-surface'}`}>{label}</span>
                </label>
              ))}
            </div>

            {/* Radios */}
            <div className="space-y-2">
              <p className="text-xs font-semibold text-on-surface-secondary uppercase tracking-widest mb-2">Radio</p>
              {['Option 1', 'Option 2', 'Option 3'].map((label, i) => (
                <label key={label} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="demo-radio"
                    value={`option${i + 1}`}
                    checked={radio === `option${i + 1}`}
                    onChange={() => setRadio(`option${i + 1}`)}
                    className="w-4 h-4 accent-primary"
                  />
                  <span className="text-sm text-on-surface">{label}</span>
                </label>
              ))}
            </div>

            {/* Toggle */}
            <div>
              <p className="text-xs font-semibold text-on-surface-secondary uppercase tracking-widest mb-3">Toggle</p>
              <label className="flex items-center gap-3 cursor-pointer">
                <button
                  role="switch"
                  aria-checked={toggled}
                  onClick={() => setToggled((v) => !v)}
                  className={`relative w-10 h-6 rounded-full transition-colors ${toggled ? 'bg-primary' : 'bg-border'}`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${toggled ? 'translate-x-4' : 'translate-x-0'}`}
                  />
                </button>
                <span className="text-sm text-on-surface">{toggled ? 'On' : 'Off'}</span>
              </label>
            </div>
          </div>
        </Card>

      </div>
    </section>
  );
}

function Field({ label, hint, children }) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-on-surface">{label}</label>
      {children}
      {hint && <p className="text-xs text-error">{hint}</p>}
    </div>
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
