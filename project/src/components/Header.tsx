import React from 'react';
import { Globe2 } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Globe2 className="w-8 h-8 text-indigo-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">SpeakEasy.io</h1>
            <p className="text-sm text-gray-600">Multi-Language Translation Made Simple</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Features</a>
          <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Help</a>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Sign In
          </button>
        </nav>
      </div>
    </header>
  );
}