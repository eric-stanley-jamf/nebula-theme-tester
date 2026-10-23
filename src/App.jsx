import { ThemeSwitcher } from './components/ThemeSwitcher';
import { TypographySection } from './components/sections/TypographySection';
import { ButtonsSection } from './components/sections/ButtonsSection';
import { FormsSection } from './components/sections/FormsSection';
import { CardsSection } from './components/sections/CardsSection';
import { BadgesSection } from './components/sections/BadgesSection';
import { AlertsSection } from './components/sections/AlertsSection';

export default function App() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <header className="sticky top-0 z-10 bg-surface border-b border-border px-6 py-3 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-base font-bold text-on-surface">Nebula Theme Tester</h1>
          <p className="text-xs text-on-surface-secondary">Apple HIG · 4 themes</p>
        </div>
        <ThemeSwitcher />
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-20">
        <TypographySection />
        <ButtonsSection />
        <FormsSection />
        <CardsSection />
        <BadgesSection />
        <AlertsSection />
      </main>

      <footer className="border-t border-border px-6 py-4 text-center text-xs text-on-surface-tertiary">
        nebula-theme-tester — eric-stanley-jamf
      </footer>
    </div>
  );
}
