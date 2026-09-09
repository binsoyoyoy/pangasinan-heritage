import React from 'react';
import { Typography } from '../atoms/Typography';

export const HeaderNavigation: React.FC = () => {
  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Typography as="h2" className="text-xl font-bold text-slate-900 tracking-tight">
          Pangasinan <span className="text-blue-600">Heritage</span>
        </Typography>
        <nav className="flex items-center gap-5">
          <a 
            href="#" 
            className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-sm hover:shadow transition-all duration-200"
          >
            Home
          </a>
          <a 
            href="#" 
            className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-sm hover:shadow transition-all duration-200"
          >
            Explore
          </a>
          <a 
            href="#" 
            className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-sm hover:shadow transition-all duration-200"
          >
            About
          </a>
        </nav>
      </div>
    </header>
  );
};