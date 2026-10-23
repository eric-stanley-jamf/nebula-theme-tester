import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext(null);

const STORAGE_COLOR_MODE    = 'nebula-color-mode';
const STORAGE_CONTRAST_MODE = 'nebula-contrast-mode';   // 'manual' | 'system'
const STORAGE_MANUAL_HC     = 'nebula-high-contrast';   // boolean, only used in manual mode

function getSystemColorBase() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getSystemHighContrast() {
  return window.matchMedia('(prefers-contrast: more)').matches;
}

function applyTheme(colorMode, effectiveHighContrast) {
  if (colorMode === 'system' && !effectiveHighContrast) {
    // CSS prefers-color-scheme handles light/dark — no attribute needed
    document.documentElement.removeAttribute('data-theme');
    return;
  }
  const base = colorMode === 'system' ? getSystemColorBase() : colorMode;
  document.documentElement.setAttribute('data-theme', effectiveHighContrast ? `${base}-accessible` : base);
}

export function ThemeProvider({ children }) {
  const [colorMode, setColorModeState] = useState(
    () => localStorage.getItem(STORAGE_COLOR_MODE) || 'system'
  );
  const [contrastMode, setContrastModeState] = useState(
    () => localStorage.getItem(STORAGE_CONTRAST_MODE) || 'manual'
  );
  const [manualHighContrast, setManualHighContrastState] = useState(
    () => localStorage.getItem(STORAGE_MANUAL_HC) === 'true'
  );
  // Tracks the live OS contrast preference (updated by listener)
  const [systemHighContrast, setSystemHighContrast] = useState(getSystemHighContrast);

  const effectiveHighContrast = contrastMode === 'system' ? systemHighContrast : manualHighContrast;

  // Apply theme whenever any relevant state changes
  useEffect(() => {
    applyTheme(colorMode, effectiveHighContrast);
  }, [colorMode, effectiveHighContrast]);

  // prefers-contrast listener — active whenever contrastMode === 'system'
  useEffect(() => {
    if (contrastMode !== 'system') return;
    const mq = window.matchMedia('(prefers-contrast: more)');
    const handler = () => setSystemHighContrast(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [contrastMode]);

  // prefers-color-scheme listener — only needed when colorMode === 'system' AND contrast is on
  // (CSS handles the no-contrast system case; we only need JS for the accessible variant)
  useEffect(() => {
    if (colorMode !== 'system' || !effectiveHighContrast) return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => applyTheme('system', effectiveHighContrast);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [colorMode, effectiveHighContrast]);

  const setColorMode = (mode) => {
    setColorModeState(mode);
    localStorage.setItem(STORAGE_COLOR_MODE, mode);
  };

  const setContrastMode = (mode) => {
    setContrastModeState(mode);
    localStorage.setItem(STORAGE_CONTRAST_MODE, mode);
  };

  const toggleManualHighContrast = () => {
    setManualHighContrastState((prev) => {
      const next = !prev;
      localStorage.setItem(STORAGE_MANUAL_HC, String(next));
      return next;
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        colorMode,
        setColorMode,
        contrastMode,
        setContrastMode,
        manualHighContrast,
        toggleManualHighContrast,
        effectiveHighContrast,
        systemHighContrast,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
  return ctx;
}
