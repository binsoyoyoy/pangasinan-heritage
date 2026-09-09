import React from 'react';
import { Typography } from '../atoms/Typography';

interface HeritageCardProps {
  title: string;
  location: string;
  imageUrl: string;
  onClick?: () => void;
}

export const HeritageCard: React.FC<HeritageCardProps> = ({
  title,
  location,
  imageUrl,
  onClick,
}) => {
  return (
    <div 
      onClick={onClick}
      className="group border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer w-full"
    >
      <div className="overflow-hidden h-52">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out" 
        />
      </div>
      <div className="p-6 flex flex-col gap-2">
        <Typography as="h3" className="group-hover:text-blue-600 transition-colors">
          {title}
        </Typography>
        <Typography as="span" className="flex items-center gap-1">
          📍 {location}
        </Typography>
      </div>
    </div>
  );
};