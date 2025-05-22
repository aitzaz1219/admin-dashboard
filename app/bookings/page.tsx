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
      <h1 className="text-2xl font-bold mb-6">Manage Bookings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookings.map((booking) => (
          <div key={booking.id} className="bg-white p-4 rounded-xl shadow border">
            <h2 className="font-semibold text-lg mb-1">{booking.service}</h2>
            <p className="text-sm text-gray-600">Customer: {booking.customer}</p>
            <p className="text-sm text-gray-600">Tradesperson: {booking.tradesperson}</p>
            <p className="text-xs text-blue-600 mt-1 capitalize">Status: {booking.status}</p>
            <div className="mt-4 space-x-2">
              <button
                onClick={() => updateStatus(booking.id, 'in-progress')}
                className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded"
              >
                In Progress
              </button>
              <button
                onClick={() => updateStatus(booking.id, 'completed')}
                className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-sm rounded"
              >
                Complete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}