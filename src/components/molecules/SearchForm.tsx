'use client';

import React from 'react';

export const SearchForm: React.FC = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex gap-2 w-full max-w-md">
      <input
        type="text"
        placeholder="Search heritage sites..."
        aria-label="Search heritage sites"
        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-800 placeholder-slate-400"
/>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
      >
        Search
      </button>
    </form>
  );
};