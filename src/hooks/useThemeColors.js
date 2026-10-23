import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

function cssVar(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

// Converts a #RRGGBB hex color to rgba(r, g, b, alpha)
function withAlpha(hex, alpha) {
  if (!hex || hex.length < 7) return `rgba(0,0,0,${alpha})`;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function readColors() {
  const primary = cssVar('--primary');
  const success = cssVar('--success');
  const warning = cssVar('--warning');
  const error   = cssVar('--error');
  const info    = cssVar('--info');

  return {
    primary,
    success,
    warning,
    error,
    info,
    onSurface:          cssVar('--on-surface'),
    onSurfaceSecondary: cssVar('--on-surface-secondary'),
    border:             cssVar('--border'),
    surfaceRaised:      cssVar('--surface-raised'),
    primaryFill:  withAlpha(primary, 0.15),
    successFill:  withAlpha(success, 0.15),
    warningFill:  withAlpha(warning, 0.15),
    errorFill:    withAlpha(error,   0.15),
    infoFill:     withAlpha(info,    0.15),
  };
}

// Reads resolved CSS variable values after every theme change.
// Parent effects (ThemeProvider) run before child effects, so data-theme
// is already updated on the DOM by the time this effect fires.
export function useThemeColors() {
  const { colorMode, effectiveHighContrast } = useTheme();
  const [colors, setColors] = useState(readColors);

  useEffect(() => {
    setColors(readColors());
  }, [colorMode, effectiveHighContrast]);

  return colors;
}
