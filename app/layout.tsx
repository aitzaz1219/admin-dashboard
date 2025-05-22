import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-gray-100 text-gray-900">
        <aside className="w-64 bg-white shadow-md p-4 space-y-4">
          <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
          <nav className="space-y-2">
            <Link href="/"><p className="hover:text-blue-600">Dashboard</p></Link>
            <Link href="/users"><p className="hover:text-blue-600">Users</p></Link>
            <Link href="/bookings"><p className="hover:text-blue-600">Bookings</p></Link>
            <Link href="/services"><p className="hover:text-blue-600">Services</p></Link>
            <Link href="/reviews"><p className="hover:text-blue-600">Reviews</p></Link>
            <Link href="/analytics"><p className="hover:text-blue-600">Analytics</p></Link>
          </nav>
        </aside>
        <main className="flex-1 p-6">{children}</main>
      </body>
    </html>
  );
}