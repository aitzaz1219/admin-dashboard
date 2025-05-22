import Link from 'next/link';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <div className="flex h-screen overflow-hidden">
          <aside className="w-64 bg-white border-r shadow-lg p-6 hidden md:block">
            <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
            <nav className="space-y-4">
              <Link href="/" className="block text-gray-700 hover:text-blue-600">Dashboard</Link>
              <Link href="/users" className="block text-gray-700 hover:text-blue-600">Users</Link>
              <Link href="/bookings" className="block text-gray-700 hover:text-blue-600">Bookings</Link>
              <Link href="/services" className="block text-gray-700 hover:text-blue-600">Services</Link>
              <Link href="/reviews" className="block text-gray-700 hover:text-blue-600">Reviews</Link>
              <Link href="/analytics" className="block text-gray-700 hover:text-blue-600">Analytics</Link>
            </nav>
          </aside>
          <div className="flex-1 flex flex-col">
            <header className="w-full bg-white shadow-sm px-6 py-4 flex justify-between items-center">
              <h1 className="text-xl font-semibold">Admin Dashboard</h1>
              <div className="text-sm text-gray-500">Hello, Admin</div>
            </header>
            <main className="flex-1 overflow-y-auto p-6">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}