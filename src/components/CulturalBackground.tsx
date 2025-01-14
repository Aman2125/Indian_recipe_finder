import React from 'react';

export default function CulturalBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div className="absolute top-0 left-0 w-64 h-64 bg-[url('https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&q=80')] opacity-5 bg-cover rotate-45 -translate-x-32 -translate-y-32" />
      <div className="absolute top-1/4 right-0 w-48 h-48 bg-[url('https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&q=80')] opacity-5 bg-cover -rotate-12 translate-x-24" />
      <div className="absolute bottom-0 left-1/3 w-56 h-56 bg-[url('https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80')] opacity-5 bg-cover rotate-180 translate-y-28" />
    </div>
  );
}