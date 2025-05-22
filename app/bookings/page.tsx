'use client';
import { useEffect, useState } from 'react';

type Booking = {
  id: string;
  service: string;
  customer: string;
  tradesperson: string;
  status: string;
};

const dummyBookings: Booking[] = [
  { id: '1', service: 'Plumbing', customer: 'Ali', tradesperson: 'John', status: 'pending' },
  { id: '2', service: 'Electrical', customer: 'Sara', tradesperson: 'Ahmad', status: 'in-progress' }
];

export default function BookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    setBookings(dummyBookings);
  }, []);

  const updateStatus = (id: string, status: string) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status } : b))
    );
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Bookings</h1>
      <table className="w-full table-auto border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Service</th>
            <th className="p-2 border">Customer</th>
            <th className="p-2 border">Tradesperson</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id} className="text-center">
              <td className="p-2 border">{booking.service}</td>
              <td className="p-2 border">{booking.customer}</td>
              <td className="p-2 border">{booking.tradesperson}</td>
              <td className="p-2 border capitalize">{booking.status}</td>
              <td className="p-2 border space-x-2">
                <button onClick={() => updateStatus(booking.id, 'in-progress')} className="px-2 py-1 bg-blue-600 text-white rounded">In Progress</button>
                <button onClick={() => updateStatus(booking.id, 'completed')} className="px-2 py-1 bg-green-600 text-white rounded">Complete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}