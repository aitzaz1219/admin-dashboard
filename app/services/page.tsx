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
      <h1 className="text-2xl font-bold mb-4">Service Categories</h1>
      <div className="flex mb-4">
        <input
          className="p-2 border w-full"
          value={newService}
          onChange={(e) => setNewService(e.target.value)}
          placeholder="Enter new service"
        />
        <button onClick={addService} className="ml-2 px-4 py-2 bg-blue-600 text-white rounded">Add</button>
      </div>
      <ul className="space-y-2">
        {services.map(service => (
          <li key={service.id} className="flex justify-between border p-2 rounded bg-white">
            <span>{service.name}</span>
            <button onClick={() => deleteService(service.id)} className="text-sm text-red-600 hover:underline">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}