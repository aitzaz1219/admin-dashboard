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
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <table className="w-full table-auto border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Role</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="text-center">
              <td className="p-2 border">{user.name}</td>
              <td className="p-2 border">{user.email}</td>
              <td className="p-2 border capitalize">{user.role}</td>
              <td className="p-2 border">
                {user.isVerified ? (
                  <span className="text-green-600 font-semibold">Approved</span>
                ) : (
                  <span className="text-red-600 font-semibold">Pending</span>
                )}
              </td>
              <td className="p-2 border">
                <button
                  className={`px-3 py-1 rounded text-white ${
                    user.isVerified ? 'bg-red-600' : 'bg-green-600'
                  }`}
                  onClick={() => toggleVerify(user.id)}
                >
                  {user.isVerified ? 'Reject' : 'Approve'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}