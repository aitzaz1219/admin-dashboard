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

const chartData = {
  labels: ['Bookings', 'Users', 'Revenue'],
  datasets: [
    {
      label: 'Metrics',
      data: [120, 75, 4500],
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
      text: 'Platform Metrics Overview'
    }
  }
};

export default function AnalyticsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Analytics Dashboard</h1>
      <div className="bg-white rounded-xl shadow p-6 border">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}