import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext(null);

const STORAGE_MODE = 'nebula-color-mode';
const STORAGE_CONTRAST = 'nebula-high-contrast';

function getSystemBase() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function resolveTheme(colorMode, highContrast) {
  const base = colorMode === 'system' ? getSystemBase() : colorMode;
  return highContrast ? `${base}-accessible` : base;
}

export function ThemeProvider({ children }) {
  const [colorMode, setColorModeState] = useState(
    () => localStorage.getItem(STORAGE_MODE) || 'system'
  );
  const [highContrast, setHighContrastState] = useState(
    () => localStorage.getItem(STORAGE_CONTRAST) === 'true'
  );

  useEffect(() => {
    if (colorMode === 'system' && !highContrast) {
      // Let CSS prefers-color-scheme media query handle it — no data-theme needed
      document.documentElement.removeAttribute('data-theme');
      return;
    }
    document.documentElement.setAttribute('data-theme', resolveTheme(colorMode, highContrast));
  }, [colorMode, highContrast]);

  // JS listener only needed when system + high contrast (to pick the right accessible variant)
  useEffect(() => {
    if (colorMode !== 'system' || !highContrast) return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => {
      document.documentElement.setAttribute('data-theme', resolveTheme('system', highContrast));
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [colorMode, highContrast]);

  const setColorMode = (mode) => {
    setColorModeState(mode);
    localStorage.setItem(STORAGE_MODE, mode);
  };

  const toggleHighContrast = () => {
    setHighContrastState((prev) => {
      const next = !prev;
      localStorage.setItem(STORAGE_CONTRAST, String(next));
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ colorMode, highContrast, setColorMode, toggleHighContrast }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
  return ctx;
}
