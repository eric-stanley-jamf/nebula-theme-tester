import { useTheme } from '../context/ThemeContext';

const COLOR_MODES = [
  { value: 'light', label: 'Light' },
  { value: 'system', label: 'System' },
  { value: 'dark', label: 'Dark' },
];

export function ThemeSwitcher() {
  const {
    colorMode,
    setColorMode,
    contrastMode,
    setContrastMode,
    manualHighContrast,
    toggleManualHighContrast,
    effectiveHighContrast,
  } = useTheme();

  const isSystemContrast = contrastMode === 'system';

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

      {/* Contrast source dropdown */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-on-surface-secondary whitespace-nowrap">
          Contrast
        </span>
        <select
          value={contrastMode}
          onChange={(e) => setContrastMode(e.target.value)}
          className="px-2.5 py-1.5 rounded-lg border border-border bg-surface text-on-surface text-sm cursor-pointer focus:outline-none focus:border-primary"
        >
          <option value="manual">Manual</option>
          <option value="system">System</option>
        </select>
      </div>

      {/* High contrast toggle — disabled and read-only when contrast mode is System */}
      <div className="flex items-center gap-2">
        <span
          className={`text-sm font-medium whitespace-nowrap ${
            isSystemContrast ? 'text-on-surface-tertiary' : 'text-on-surface-secondary'
          }`}
        >
          Increase Contrast
        </span>
        <button
          role="switch"
          aria-checked={effectiveHighContrast}
          onClick={isSystemContrast ? undefined : toggleManualHighContrast}
          disabled={isSystemContrast}
          title={isSystemContrast ? 'Controlled by system preference' : undefined}
          className={`relative w-10 h-6 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring ${
            isSystemContrast ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
          } ${effectiveHighContrast ? 'bg-primary' : 'bg-border'}`}
        >
          <span
            className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${
              effectiveHighContrast ? 'translate-x-4' : 'translate-x-0'
            }`}
          />
        </button>
      </div>
    </div>
  );
}
