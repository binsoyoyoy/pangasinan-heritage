import React from 'react';
import { Typography } from '../atoms/Typography';

interface HeritageSite {
  id: string;
  title: string;
  location: string;
  imageUrl: string;
}

interface HeritageGridProps {
  sites: HeritageSite[];
}

export const HeritageGrid: React.FC<HeritageGridProps> = ({ sites }) => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sites.map((site) => (
          <div 
            key={site.id} 
            className="group border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer"
          >
            <div className="overflow-hidden h-52">
              <img 
                src={site.imageUrl} 
                alt={site.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out" 
              />
            </div>
            <div className="p-6 flex flex-col gap-2">
              <Typography as="h3" className="group-hover:text-blue-600 transition-colors">
                {site.title}
              </Typography>
              <Typography as="span" className="flex items-center gap-1">
                📍 {site.location}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};