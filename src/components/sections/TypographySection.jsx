export function TypographySection() {
  return (
    <section>
      <SectionHeading>Typography</SectionHeading>

      <div className="space-y-8">
        {/* Scale */}
        <Card title="Type Scale">
          <div className="space-y-3">
            <p className="text-5xl font-bold text-on-surface leading-tight">Display — The quick brown fox</p>
            <p className="text-4xl font-bold text-on-surface leading-tight">Heading 1 — The quick brown fox</p>
            <p className="text-3xl font-semibold text-on-surface">Heading 2 — The quick brown fox</p>
            <p className="text-2xl font-semibold text-on-surface">Heading 3 — The quick brown fox</p>
            <p className="text-xl font-medium text-on-surface">Heading 4 — The quick brown fox</p>
            <p className="text-lg text-on-surface">Large body — Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className="text-base text-on-surface">Body — Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            <p className="text-sm text-on-surface">Small — Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className="text-xs text-on-surface-secondary uppercase tracking-widest font-semibold">Caption / Label</p>
          </div>
        </Card>

        {/* Colors */}
        <Card title="Text Colors">
          <div className="space-y-2">
            <p className="text-on-surface">Primary text — <code className="text-sm font-mono bg-surface-sunken px-1.5 py-0.5 rounded">text-on-surface</code></p>
            <p className="text-on-surface-secondary">Secondary text — <code className="text-sm font-mono bg-surface-sunken px-1.5 py-0.5 rounded">text-on-surface-secondary</code></p>
            <p className="text-on-surface-tertiary">Tertiary / placeholder text — <code className="text-sm font-mono bg-surface-sunken px-1.5 py-0.5 rounded">text-on-surface-tertiary</code></p>
            <p className="text-primary">Link / primary colored text — <code className="text-sm font-mono bg-surface-sunken px-1.5 py-0.5 rounded">text-primary</code></p>
            <p className="text-error">Destructive / error text — <code className="text-sm font-mono bg-surface-sunken px-1.5 py-0.5 rounded">text-error</code></p>
            <p className="text-success">Success text — <code className="text-sm font-mono bg-surface-sunken px-1.5 py-0.5 rounded">text-success</code></p>
          </div>
        </Card>

        {/* Prose */}
        <Card title="Prose">
          <div className="space-y-4 max-w-prose">
            <p className="text-on-surface">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. <a href="#" className="text-primary underline hover:text-primary-hover">This is an inline link</a> within
              body text. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <blockquote className="border-l-4 border-primary pl-4 text-on-surface-secondary italic">
              "Good design is as little design as possible." — Dieter Rams
            </blockquote>
            <p className="text-on-surface">
              Inline <code className="font-mono text-sm bg-surface-sunken border border-border px-1.5 py-0.5 rounded text-on-surface">code snippets</code> within
              paragraph text.
            </p>
            <ul className="list-disc list-inside space-y-1 text-on-surface">
              <li>First list item with some content</li>
              <li>Second list item with <span className="text-on-surface-secondary">secondary colored text</span></li>
              <li>Third list item</li>
            </ul>
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
