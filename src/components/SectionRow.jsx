import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PosterCard from './PosterCard';

export default function SectionRow({ title, items }) {
  const scrollerRef = useRef(null);

  const scrollByAmount = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.min(600, el.clientWidth * 0.9);
    el.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  return (
    <section className="relative">
      <div className="mb-4 flex items-end justify-between">
        <h2 className="text-xl md:text-2xl font-semibold text-white">{title}</h2>
        <div className="hidden md:flex gap-2">
          <button
            aria-label="Scroll left"
            className="h-9 w-9 grid place-items-center rounded-md bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10"
            onClick={() => scrollByAmount(-1)}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            aria-label="Scroll right"
            className="h-9 w-9 grid place-items-center rounded-md bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10"
            onClick={() => scrollByAmount(1)}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      <div
        ref={scrollerRef}
        className="flex gap-4 overflow-x-auto pb-2 pr-2 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none]"
        style={{ scrollbarWidth: 'none' }}
      >
        {items.map((item) => (
          <div key={item.id} className="snap-start">
            <PosterCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}
