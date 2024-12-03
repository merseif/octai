import React from 'react';
import { Link } from 'react-router-dom';
import { Eye } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Eye className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-900">OctAI</span>
        </Link>
        <div className="flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/upload" className="text-gray-700 hover:text-blue-600">Upload</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
        </div>
      </nav>
    </header>
  );
}