"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          MySite
        </Link>

        {/* Nav Links */}
        <div className="flex space-x-6">
          <Link href="/page/home" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link href="/page/about" className="text-gray-700 hover:text-blue-600">
            About
          </Link>
          <Link href="/page/calendar" className="text-gray-700 hover:text-blue-600">
            Calendar
          </Link>
          <Link href="/page/animes" className="text-gray-700 hover:text-blue-600">
            Animes
          </Link>
        </div>

        {/* Example button (accessible) */}
        <button
          type="button"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          aria-label="Login"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
