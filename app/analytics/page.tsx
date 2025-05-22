'use client';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['Bookings', 'Users', 'Revenue'],
  datasets: [
    {
      label: 'Platform Metrics',
      data: [12, 32, 4560],
      backgroundColor: ['#3b82f6', '#10b981', '#f59e0b']
    }
  ]
};

const options = {
  responsive: true,
  plugins: {
    legend: { position: 'top' as const },
    title: { display: true, text: 'Platform Overview' }
  }
};

export default function AnalyticsPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Analytics Dashboard</h1>
      <div className="bg-white shadow border rounded p-4">
        <Bar data={data} options={options} />
      </div>
    </main>
  );
}
