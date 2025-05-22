'use client';
import { useEffect, useState } from 'react';

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  isVerified: boolean;
};

const dummyUsers: User[] = [
  { id: '1', name: 'Ali Raza', email: 'ali@example.com', role: 'tradesperson', isVerified: false },
  { id: '2', name: 'John Doe', email: 'john@example.com', role: 'tradesperson', isVerified: true }
];

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    setUsers(dummyUsers);
  }, []);

  const toggleVerify = (id: string) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, isVerified: !u.isVerified } : u))
    );
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Manage Users</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map(user => (
          <div key={user.id} className="bg-white rounded-xl shadow p-4 border">
            <div className="mb-2">
              <h2 className="text-lg font-semibold">{user.name}</h2>
              <p className="text-sm text-gray-500">{user.email}</p>
              <p className="text-xs text-gray-400 capitalize">{user.role}</p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className={`text-sm font-medium ${user.isVerified ? 'text-green-600' : 'text-red-500'}`}>
                {user.isVerified ? 'Approved' : 'Pending'}
              </span>
              <button
                onClick={() => toggleVerify(user.id)}
                className={`px-3 py-1 text-sm rounded text-white ${
                  user.isVerified ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'
                }`}
              >
                {user.isVerified ? 'Reject' : 'Approve'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}