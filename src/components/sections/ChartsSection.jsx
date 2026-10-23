import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import { useThemeColors } from '../../hooks/useThemeColors';

ChartJS.register(
  CategoryScale, LinearScale, BarElement,
  LineElement, PointElement, ArcElement,
  Title, Tooltip, Legend, Filler
);

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

export function ChartsSection() {
  const c = useThemeColors();

  // Shared axis/legend options that respond to theme colors
  const scaleDefaults = {
    ticks: { color: c.onSurfaceSecondary },
    grid:  { color: c.border },
    border: { color: c.border },
  };

  const legendDefaults = {
    labels: { color: c.onSurface, boxWidth: 12, padding: 16 },
  };

  return (
    <section>
      <SectionHeading>Charts</SectionHeading>
      <div className="space-y-6">

        {/* Bar chart — status colors */}
        <Card title="Bar — Issues by Category">
          <div className="h-64">
            <Bar
              data={{
                labels: MONTHS,
                datasets: [
                  {
                    label: 'Critical',
                    data: [4, 6, 3, 8, 5, 7],
                    backgroundColor: c.errorFill,
                    borderColor: c.error,
                    borderWidth: 2,
                    borderRadius: 4,
                  },
                  {
                    label: 'Warning',
                    data: [10, 8, 12, 9, 11, 14],
                    backgroundColor: c.warningFill,
                    borderColor: c.warning,
                    borderWidth: 2,
                    borderRadius: 4,
                  },
                  {
                    label: 'Resolved',
                    data: [18, 22, 19, 25, 21, 28],
                    backgroundColor: c.successFill,
                    borderColor: c.success,
                    borderWidth: 2,
                    borderRadius: 4,
                  },
                ],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: legendDefaults },
                scales: { x: scaleDefaults, y: { ...scaleDefaults, beginAtZero: true } },
              }}
            />
          </div>
        </Card>

        {/* Line chart — primary color with fill */}
        <Card title="Line — Activity Over Time">
          <div className="h-64">
            <Line
              data={{
                labels: MONTHS,
                datasets: [
                  {
                    label: 'Active Users',
                    data: [420, 580, 510, 740, 690, 820],
                    borderColor: c.primary,
                    backgroundColor: c.primaryFill,
                    pointBackgroundColor: c.primary,
                    pointBorderColor: c.surfaceRaised,
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    fill: true,
                    tension: 0.4,
                  },
                  {
                    label: 'New Signups',
                    data: [80, 120, 95, 160, 140, 190],
                    borderColor: c.info,
                    backgroundColor: c.infoFill,
                    pointBackgroundColor: c.info,
                    pointBorderColor: c.surfaceRaised,
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    fill: true,
                    tension: 0.4,
                  },
                ],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: legendDefaults },
                scales: { x: scaleDefaults, y: { ...scaleDefaults, beginAtZero: true } },
              }}
            />
          </div>
        </Card>

        {/* Doughnut — all 4 status colors */}
        <Card title="Doughnut — Status Distribution">
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <div className="w-48 h-48 flex-shrink-0">
              <Doughnut
                data={{
                  labels: ['Healthy', 'Warnings', 'Errors', 'Info'],
                  datasets: [
                    {
                      data: [62, 18, 8, 12],
                      backgroundColor: [c.successFill, c.warningFill, c.errorFill, c.infoFill],
                      borderColor:     [c.success,     c.warning,     c.error,     c.info],
                      borderWidth: 2,
                      hoverOffset: 6,
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  cutout: '65%',
                  plugins: {
                    legend: {
                      position: 'right',
                      labels: { color: c.onSurface, boxWidth: 12, padding: 12 },
                    },
                  },
                }}
              />
            </div>
            {/* Manual legend with token labels */}
            <div className="space-y-2 text-sm">
              {[
                { label: 'Healthy',  value: '62%', color: c.success, fill: c.successFill },
                { label: 'Warnings', value: '18%', color: c.warning, fill: c.warningFill },
                { label: 'Errors',   value: '8%',  color: c.error,   fill: c.errorFill   },
                { label: 'Info',     value: '12%', color: c.info,    fill: c.infoFill    },
              ].map(({ label, value, color, fill }) => (
                <div key={label} className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-sm flex-shrink-0"
                    style={{ backgroundColor: fill, border: `2px solid ${color}` }}
                  />
                  <span className="text-on-surface">{label}</span>
                  <span className="text-on-surface-secondary ml-auto pl-4">{value}</span>
                </div>
              ))}
            </div>
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
