'use client';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function AnalyticsPage() {
  const [data, setData] = useState({ totalBookings: 12, totalUsers: 32, totalRevenue: 4560 });

  const chartData = {
    labels: ['Bookings', 'Users', 'Revenue'],
    datasets: [
      {
        label: 'Platform Metrics',
        data: [data.totalBookings, data.totalUsers, data.totalRevenue],
        backgroundColor: ['#3b82f6', '#10b981', '#f59e0b']
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const
      },
      title: {
        display: true,
        text: 'Platform Overview'
      }
    }
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Analytics Dashboard</h1>
      <div className="bg-white shadow border rounded p-4">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </main>
  );
}
