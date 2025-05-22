'use client';
import { useEffect, useState } from 'react';

type Service = {
  id: string;
  name: string;
};

const initialServices: Service[] = [
  { id: '1', name: 'Plumbing' },
  { id: '2', name: 'Electrical' }
];

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [newService, setNewService] = useState('');

  useEffect(() => {
    setServices(initialServices);
  }, []);

  const addService = () => {
    if (!newService.trim()) return;
    const newEntry = {
      id: (Math.random() * 1000).toFixed(0),
      name: newService
    };
    setServices([...services, newEntry]);
    setNewService('');
  };

  const deleteService = (id: string) => {
    setServices(services.filter(s => s.id !== id));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Service Categories</h1>
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          className="p-3 border border-gray-300 rounded w-full sm:w-2/3"
          value={newService}
          onChange={(e) => setNewService(e.target.value)}
          placeholder="Enter new service"
        />
        <button
          onClick={addService}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded w-full sm:w-auto"
        >
          Add Service
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map(service => (
          <div key={service.id} className="bg-white p-4 rounded-xl shadow border flex justify-between items-center">
            <span className="font-medium">{service.name}</span>
            <button
              onClick={() => deleteService(service.id)}
              className="text-sm text-red-600 hover:underline"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}