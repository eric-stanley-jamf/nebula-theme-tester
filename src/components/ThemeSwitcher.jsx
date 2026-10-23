import { useTheme } from '../context/ThemeContext';

const COLOR_MODES = [
  { value: 'light', label: 'Light' },
  { value: 'system', label: 'System' },
  { value: 'dark', label: 'Dark' },
];

export function ThemeSwitcher() {
  const { colorMode, highContrast, setColorMode, toggleHighContrast } = useTheme();

  return (
    <div className="flex flex-wrap items-center gap-4">
      {/* Color mode segmented control */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-on-surface-secondary whitespace-nowrap">
          Appearance
        </span>
        <div className="flex rounded-lg border border-border overflow-hidden">
          {COLOR_MODES.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setColorMode(value)}
              className={`px-3 py-1.5 text-sm font-medium transition-colors cursor-pointer ${
                colorMode === value
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface text-on-surface hover:bg-surface-sunken'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="h-6 w-px bg-border hidden sm:block" />

      {/* High contrast toggle */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-on-surface-secondary whitespace-nowrap">
          Increase Contrast
        </span>
        <button
          role="switch"
          aria-checked={highContrast}
          onClick={toggleHighContrast}
          className={`relative w-10 h-6 rounded-full transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring ${
            highContrast ? 'bg-primary' : 'bg-border'
          }`}
        >
          <span
            className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${
              highContrast ? 'translate-x-4' : 'translate-x-0'
            }`}
          />
        </button>
      </div>
    </div>
  );
}
