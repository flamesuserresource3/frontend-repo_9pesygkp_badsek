import React from 'react';
import { Star } from 'lucide-react';

export default function PosterCard({ item }) {
  return (
    <div className="group relative w-40 sm:w-44 md:w-48 lg:w-52 xl:w-56 shrink-0 cursor-pointer">
      <div className="relative aspect-[2/3] overflow-hidden rounded-lg border border-white/10 bg-white/5">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
          <span className="text-white text-sm font-medium line-clamp-1 drop-shadow">{item.title}</span>
          <span className="inline-flex items-center gap-1 text-[11px] px-1.5 py-0.5 rounded bg-black/60 border border-white/10 text-amber-300">
            <Star size={12} className="fill-amber-300" /> {item.rating}
          </span>
        </div>
      </div>
      <div className="mt-2 text-[12px] text-white/60">
        {item.year} • {item.duration} • {item.genre}
      </div>
    </div>
  );
}
